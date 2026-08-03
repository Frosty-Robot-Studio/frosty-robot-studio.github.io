# -*- coding: utf-8 -*-
"""Rebuild the Open Graph cards.

Both embed an app icon, so they have to be regenerated whenever the icon
changes — otherwise every share preview keeps showing the old one, which is the
sort of stale asset nobody notices until it is on someone else's timeline.

    python make-og.py
"""
import base64
from pathlib import Path
from playwright.sync_api import sync_playwright

HERE = Path(__file__).parent
GAME = Path(r"C:\Users\Jake\Desktop\stellar-dominion")

def b64(p):
    return base64.b64encode(Path(p).read_bytes()).decode()

FONT = b64(HERE / 'fonts/space-grotesk-latin.woff2')
CELESTILE = b64(GAME / 'resources/icon.png')
MARK = (HERE / 'assets/frs-mark.svg').read_text(encoding='utf-8')

def card(icon_html, title, sub, accent):
    return f'''<style>
@font-face {{ font-family: SG; src: url(data:font/woff2;base64,{FONT}) format('woff2'); }}
* {{ box-sizing: border-box; margin: 0; }}
body {{
  width: 1200px; height: 630px; display: flex; align-items: center; gap: 68px;
  padding: 0 88px; background: #07080f; overflow: hidden;
  font-family: SG, -apple-system, sans-serif;
}}
/* The board's own +/-30 degree lattice, faint, as on the site itself. */
body::before {{
  content: ''; position: absolute; inset: -20%;
  background:
    repeating-linear-gradient(30deg, #ffffff08 0 1px, transparent 1px 78px),
    repeating-linear-gradient(-30deg, #ffffff08 0 1px, transparent 1px 78px);
}}
.art {{ position: relative; flex: none; }}
.glow {{
  position: absolute; inset: -34%; border-radius: 50%;
  background: radial-gradient(circle, {accent}2e, transparent 68%);
}}
.txt {{ position: relative; }}
h1 {{ font-size: 88px; font-weight: 600; letter-spacing: -0.035em; color: #f2f4f8; }}
p {{ margin-top: 20px; font-size: 32px; line-height: 1.35; color: #b3bac7; max-width: 22ch; }}
</style>
<div class="art"><div class="glow"></div>{icon_html}</div>
<div class="txt"><h1>{title}</h1><p>{sub}</p></div>'''

CARDS = [
    ('og-celestile.png',
     card(f'<img src="data:image/png;base64,{CELESTILE}" '
          'style="position:relative;width:284px;height:284px;border-radius:64px;'
          'box-shadow:0 24px 60px #0009">',
          'Celestile',
          'Turn-based 4X strategy. The forecast is the result. No dice.',
          '#d97a6c')),
    ('og-studio.png',
     card(MARK.replace('<svg', '<svg style="position:relative;width:250px;height:250px"', 1),
          'Frosty Robot Studio',
          'Turn-based strategy and base defense games for phones.',
          '#7fd8e8')),
]

with sync_playwright() as p:
    b = p.chromium.launch()
    for name, html in CARDS:
        pg = b.new_context(viewport={'width': 1200, 'height': 630},
                           device_scale_factor=1).new_page()
        pg.set_content(html)
        pg.wait_for_timeout(700)
        out = HERE / 'assets' / name
        pg.screenshot(path=str(out))
        print(f'  {name}  1200x630  {out.stat().st_size // 1024}KB')
    b.close()
