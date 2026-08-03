/* Frosty Robot Studio — the only script on the site.
   Three jobs: a rule under the sticky nav, a guard on the store links that are
   not links yet, and the Celestile page's forecast demo. No dependencies, no
   network, no analytics. Loaded with `defer`, so the DOM is ready.

   Written to the same baseline the stylesheet already requires (color-mix,
   text-wrap, mask-image, :is) rather than to ES5 — every engine that can render
   this CSS has had these APIs for years, so the old idioms were ceremony. */
(function () {
  'use strict';

  /* --- a rule under the nav, but only once there is something behind it ---
     Observing a 1px sentinel is cheaper and smoother than a scroll listener: no
     work happens on any frame where the page has not crossed the threshold. The
     sentinel is authored in the HTML, not injected, so the mechanism is visible
     to whoever reads the markup next. */
  const nav = document.getElementById('nav');
  const sentinel = document.querySelector('.nav-sentinel');
  if (nav && sentinel) {
    new IntersectionObserver(
      ([entry]) => nav.classList.toggle('is-stuck', !entry.isIntersecting),
      { threshold: 0 }
    ).observe(sentinel);
  }

  /* --- links that are not links yet --------------------------------------
     The store buttons ship before the listings do. They keep href="#" so the
     real URL is a one-word edit later, but a bare "#" would jump the page to
     the top, which reads as a broken button rather than a pending one.
     `auxclick` covers middle-click, which does not fire `click`. */
  const blockDeadLink = (e) => {
    if (e.target.closest('a[aria-disabled="true"]')) e.preventDefault();
  };
  document.addEventListener('click', blockDeadLink);
  document.addEventListener('auxclick', blockDeadLink);

  /* --- the forecast demo (Celestile page only) ---------------------------
     The whole point is that nothing changes. The ring already holds the number
     the fight will produce; pressing Attack settles it and the number stays
     exactly where it was. So there is nothing to swap, nothing to cross-fade,
     and no window in which the panel claims an outcome it has not shown.

     Repeat presses re-run rather than reset, because a reset would read as the
     fight un-happening — the count beside two unchanged numbers is the
     demonstration. */
  const demo = document.getElementById('forecast');
  if (demo) {
    const button = demo.querySelector('[data-resolve]');
    const status = demo.querySelector('[data-status]');
    const pods = [...demo.querySelectorAll('[data-pod]')];
    /* A scripted animation is not a CSS animation, so the stylesheet's
       reduced-motion block cannot reach it. Ask directly. */
    const stillMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let runs = 0;

    /* Shipped disabled so that with scripting off the control says it is
       unavailable instead of looking live and doing nothing. */
    button.disabled = false;

    button.addEventListener('click', () => {
      runs += 1;
      demo.classList.add('is-resolved');

      pods.forEach((pod, i) => {
        pod.querySelector('[data-state]').textContent = 'Result';
        if (stillMotion.matches) return;
        /* Restart the settle pulse from zero on every press, so the fifth press
           looks as responsive as the first. Cancelling the running animation
           avoids the forced layout read a class-toggle restart would need. */
        const ring = pod.querySelector('[data-ring]');
        ring.getAnimations().forEach((a) => a.cancel());
        ring.animate(
          [
            { transform: 'scale(1)' },
            { transform: 'scale(1.045)', offset: 0.38 },
            { transform: 'scale(1)' },
          ],
          { duration: 260, delay: i * 60, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }
        );
      });

      status.textContent =
        runs === 1
          ? 'Resolved. Both numbers are the ones that were already on screen.'
          : `Resolved ${runs} times. Same two numbers, every time.`;
    });
  }
})();
