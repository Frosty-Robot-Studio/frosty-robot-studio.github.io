// Renders a Celestile legal document in the reader's language and lets them
// switch. Both pages share this; each declares which document it is via
// <body data-doc="privacy"> or "terms".
//
// Language choice, in order: an explicit ?lang= in the URL, a previous choice,
// then the browser's own preference. Falling back to English last means the
// common case — someone tapping a link from inside the game — lands in the
// language the game is already speaking to them in.

(function () {
  'use strict';

  var L = window.CELESTILE_LEGAL || {};
  var ORDER = ['en', 'es', 'ru', 'de', 'fr', 'pt', 'hi', 'ko', 'ja'];
  var STORE = 'celestile.legal.lang';
  var EMAIL = 'frostyrobotstudio@anglernook.com';
  // The studio's registered business address. Both documents name it as the
  // contact for data-deletion and rights requests, so it has to be the address
  // that actually reaches the company.
  var ADDRESS = '7533 S Center View Ct, Ste R, West Jordan, UT 84084, United States';
  var doc = document.body.dataset.doc; // 'privacy' | 'terms'

  var available = ORDER.filter(function (id) {
    return L[id] && L[id][doc];
  });

  function preferred() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && available.indexOf(q) >= 0) return q;

    try {
      var saved = localStorage.getItem(STORE);
      if (saved && available.indexOf(saved) >= 0) return saved;
    } catch (e) {
      /* private mode: fall through to the browser's preference */
    }

    var tags = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < tags.length; i++) {
      var base = String(tags[i]).toLowerCase().split('-')[0];
      if (available.indexOf(base) >= 0) return base;
    }
    return 'en';
  }

  function el(tag, cls) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  }

  /** A body entry is either a paragraph of HTML or an array of list items. */
  function renderBody(parent, body) {
    (body || []).forEach(function (entry) {
      if (Array.isArray(entry)) {
        var ul = el('ul');
        entry.forEach(function (item) {
          var li = el('li');
          li.innerHTML = item;
          ul.appendChild(li);
        });
        parent.appendChild(ul);
      } else {
        var p = el('p');
        p.innerHTML = entry;
        parent.appendChild(p);
      }
    });
  }

  function renderTable(parent, spec) {
    var wrap = el('div', 'tablewrap');
    var table = el('table');
    var thead = el('tr');
    spec.head.forEach(function (h) {
      var th = el('th');
      th.textContent = h;
      thead.appendChild(th);
    });
    table.appendChild(thead);
    spec.rows.forEach(function (row) {
      var tr = el('tr');
      row.forEach(function (cell) {
        var td = el('td');
        td.innerHTML = cell;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    wrap.appendChild(table);
    parent.appendChild(wrap);
  }

  function render(lang) {
    var t = L[lang];
    var d = t[doc];

    document.documentElement.lang = lang;
    document.title = d.title + ' — Celestile';

    document.getElementById('title').textContent = d.title;
    document.getElementById('meta').textContent =
      'Celestile · ' + t.updatedLabel + ': ' + t.updated;

    var main = document.getElementById('doc');
    main.textContent = '';
    renderBody(main, d.intro);

    d.sections.forEach(function (s) {
      var h = el('h2');
      // The diamond marker is drawn by CSS ::before, so the heading holds only
      // its text and screen readers are not read a decoration.
      h.appendChild(document.createTextNode(s.h));
      main.appendChild(h);

      if (s.sub) {
        var h3 = el('h3');
        h3.textContent = s.sub;
        main.appendChild(h3);
      }

      if (s.contact) {
        var p = el('p');
        p.innerHTML =
          'Frosty Robot Studio<br>' +
          '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a><br>' +
          ADDRESS;
        main.appendChild(p);
      }

      renderBody(main, s.body);
      if (s.note) {
        var note = el('div', 'note');
        var np = el('p');
        np.innerHTML = s.note;
        note.appendChild(np);
        main.appendChild(note);
      }
      if (s.table) renderTable(main, s.table);
      renderBody(main, s.after);
    });

    var other = doc === 'privacy' ? 'terms' : 'privacy';
    var foot = document.getElementById('foot');
    foot.textContent = '';
    var fp = el('p');
    fp.innerHTML =
      t.footer +
      ' <a href="' + other + '.html?lang=' + lang + '">' + t.otherDoc[other] + '</a>';
    foot.appendChild(fp);

    // The translations are a courtesy. Saying which version governs, on the
    // translations only — on the English page it would be circular.
    if (lang !== 'en') {
      var g = el('p', 'governing');
      g.innerHTML =
        'This translation is provided for convenience. ' +
        'The <a href="?lang=en">English version</a> is the one that governs.';
      foot.appendChild(g);
    }

    Array.prototype.forEach.call(
      document.querySelectorAll('.langs button'),
      function (b) {
        b.setAttribute('aria-current', String(b.dataset.lang === lang));
      },
    );
  }

  function choose(lang) {
    try {
      localStorage.setItem(STORE, lang);
    } catch (e) {
      /* the choice just will not persist */
    }
    var url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
    render(lang);
  }

  // Build the picker. Each language is named in its own script — someone
  // looking for theirs should not have to read English to find it, the same
  // rule the game's own settings screen follows.
  var list = document.querySelector('.langs');
  available.forEach(function (id) {
    var li = el('li');
    var b = el('button');
    b.type = 'button';
    b.dataset.lang = id;
    b.lang = id;
    b.textContent = L[id].name;
    b.addEventListener('click', function () {
      choose(id);
    });
    li.appendChild(b);
    list.appendChild(li);
  });

  render(preferred());
})();
