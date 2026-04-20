/* ============================================
   MENU PAGE — Full menu, search, filter, sidebar
   ============================================ */

const MENU_DATA = [
  // Kebab
  { id: 1,  cat: 'kebab',     name: 'Kebab i Pita',              desc: 'Salat, løk, tomat, mais, agurk og kebabsaus', price: 171 },
  { id: 2,  cat: 'kebab',     name: 'Kebab i Rull',              desc: 'Salat, løk, tomat, mais, agurk og kebabsaus', price: 171 },
  { id: 3,  cat: 'kebab',     name: 'Super Kebab i Rull',        desc: 'Alle grønnsaker, pommes frites, bacon, ost, kebabkjøtt og kebabsaus', price: 229 },
  { id: 4,  cat: 'kebab',     name: 'Kebab Tallerken',           desc: 'Pommes frites, salat, løk, tomat, agurk, kebabsaus og brød', price: 194 },
  { id: 5,  cat: 'kebab',     name: 'Kebab Salat',               desc: 'Salat, mais, løk, tomat, agurk og kebabsaus', price: 171 },
  { id: 6,  cat: 'kebab',     name: 'Kylling i Pita Brød',       desc: 'Salat, løk, tomat, mais, agurk og kebabsaus', price: 183 },
  { id: 7,  cat: 'kebab',     name: 'Kylling i Rull',            desc: 'Salat, løk, tomat, mais, agurk og kebabsaus', price: 183 },
  { id: 8,  cat: 'kebab',     name: 'Kylling Tallerken',         desc: 'Pommes frites, salat, løk, tomat, mais, agurk, kebabsaus og brød', price: 194 },
  { id: 9,  cat: 'kebab',     name: 'Super Kebab Tallerken',     desc: 'Kebabkjøtt, bacon og ost i lefsebrød, pommes frites, salat og hvitløksdressing', price: 240 },
  { id: 10, cat: 'kebab',     name: 'Mexicano Kebab i Rull',     desc: 'Kebabkjøtt, pommes frites, jalapeños og sterk kebabsaus', price: 190, tags: ['sterk'] },
  { id: 11, cat: 'kebab',     name: 'Kebab i Rull m/ Fetaost',   desc: 'Alle salater, kebabkjøtt, fetaost og kebabsaus', price: 190 },
  { id: 12, cat: 'kebab',     name: 'Cheesy Bacon Kebab',        desc: 'Pommes frites, kebabkjøtt, cheese saus, bacon og kebabsaus', price: 229 },
  { id: 13, cat: 'kebab',     name: 'Cheesy Skinke Kebab',       desc: 'Pommes frites, kebabkjøtt, cheese saus, skinke og kebabsaus', price: 217 },

  // Pizza
  { id: 14, cat: 'pizza',     name: 'Margherita',                desc: 'Tomatsaus og ost', price: 171, tags: ['vegetar'] },
  { id: 15, cat: 'pizza',     name: 'Skinke Pizza',              desc: 'Tomatsaus, ost og skinke', price: 183 },
  { id: 16, cat: 'pizza',     name: 'Capricciosa',               desc: 'Tomatsaus, ost, skinke og sjampinjong', price: 183 },
  { id: 17, cat: 'pizza',     name: 'Pepperoni Pizza',           desc: 'Tomatsaus, ost, pepperoni og løk', price: 194 },
  { id: 18, cat: 'pizza',     name: 'Hawaii Pizza',              desc: 'Tomatsaus, ost, skinke og ananas', price: 183 },
  { id: 19, cat: 'pizza',     name: 'Norge Spesial',             desc: 'Tomatsaus, ost, pommes frites, kebabkjøtt og kebabsaus', price: 217 },
  { id: 20, cat: 'pizza',     name: 'Kebab Pizza',               desc: 'Tomatsaus, ost, kebabkjøtt og kebabsaus', price: 206 },
  { id: 21, cat: 'pizza',     name: 'Trippel Pizza',             desc: 'Tomatsaus, ost, pepperoni, skinke, bacon, løk og sjampinjong', price: 229 },
  { id: 22, cat: 'pizza',     name: 'Biff Pizza',                desc: 'Tomatsaus, ost, biffkjøtt, paprika, løk, sjampinjong og bearnaisesaus', price: 217 },
  { id: 23, cat: 'pizza',     name: 'Mamma Mia Spesial',         desc: 'Tomatsaus, ost, kylling, biffkjøtt, paprika, løk, sjampinjong, jalapeños og hvitløksdressing', price: 229, tags: ['sterk'] },
  { id: 24, cat: 'pizza',     name: 'Kylling Pizza',             desc: 'Tomatsaus, ost, kylling, paprika, løk, sjampinjong og hvitløksdressing', price: 217 },
  { id: 29, cat: 'pizza',     name: 'Fifty Fifty Pizza',         desc: 'Pizza med halv kylling, halv kebab, tomatsaus og ost. Serveres med kebabdressing', price: 217 },
  { id: 30, cat: 'pizza',     name: 'Vegetar Pizza',             desc: 'Tomatsaus, ost, paprika, løk, sjampinjong, tomat, mais og ananas', price: 183, tags: ['vegetar'] },

  // Innbakt
  { id: 32, cat: 'innbakt',   name: 'Calzone',                   desc: 'Tomatsaus, ost og skinke', price: 171 },
  { id: 33, cat: 'innbakt',   name: 'Romana',                    desc: 'Tomatsaus, ost, skinke og sjampinjong', price: 194 },
  { id: 34, cat: 'innbakt',   name: 'Spesial Calzone',           desc: 'Tomatsaus, ost, kebabkjøtt og kebabsaus på siden', price: 206 },

  // Barnemeny
  { id: 35, cat: 'barnemeny', name: 'Margarita Pizza',           desc: 'Tomatsaus og ost', price: 125 },
  { id: 36, cat: 'barnemeny', name: 'Skinke Pizza',              desc: 'Tomatsaus, ost og skinke', price: 137 },
  { id: 37, cat: 'barnemeny', name: 'Pepperoni Pizza',           desc: 'Tomatsaus og pepperoni', price: 137 },
  { id: 38, cat: 'barnemeny', name: 'Hamburger',                 desc: 'Pommes frites, salat og burgerdressing', price: 137 },

  // Andre retter
  { id: 40, cat: 'andre',     name: 'Løvbiff Steak',             desc: 'Pommes frites, salat, løk, mais, tomat, agurk, bearnaisesaus og brød', price: 194 },
  { id: 41, cat: 'andre',     name: 'Biff Snadder Tallerken',    desc: 'Pommes frites, biffkjøtt, paprika, løk, sjampinjong, bearnaisesaus og brød', price: 217 },
  { id: 42, cat: 'andre',     name: 'Kylling Snadder Tallerken', desc: 'Pommes frites, kyllingkjøtt, paprika, løk, sjampinjong, bearnaisesaus og brød', price: 229 },

  // Hamburger
  { id: 43, cat: 'hamburger', name: 'Classic Burger',            desc: 'Burgerkjøtt, salat, løk, tomat og burgerdressing', price: 125 },
  { id: 44, cat: 'hamburger', name: 'Cheese Burger',             desc: 'Burgerkjøtt, cheddarost, salat, løk, tomat og dressing', price: 137 },
  { id: 45, cat: 'hamburger', name: 'Hamburger Tallerken',       desc: 'Serveres med pommes frites', price: 160 },

  // Fries
  { id: 50, cat: 'fries',     name: 'Pommes Frites',             desc: 'Sprø og gylne — velg størrelse', price: 68 },

  // Drikke
  { id: 60, cat: 'drikke',    name: 'Coca-Cola',                 desc: '500 ml', price: 45 },
  { id: 61, cat: 'drikke',    name: 'Coca-Cola Zero Sugar',      desc: '500 ml', price: 45 },
  { id: 62, cat: 'drikke',    name: 'Pepsi Max',                 desc: '500 ml', price: 45 },
  { id: 63, cat: 'drikke',    name: 'Sprite',                    desc: '500 ml', price: 45 },
  { id: 64, cat: 'drikke',    name: 'Urge',                      desc: '500 ml', price: 45 },
  { id: 65, cat: 'drikke',    name: 'Fanta Appelsin',            desc: '500 ml', price: 45 },
  { id: 66, cat: 'drikke',    name: 'Telemark Naturell',         desc: '500 ml', price: 45 },
  { id: 67, cat: 'drikke',    name: 'Kuli Jordbær & Eple',       desc: '200 ml', price: 29 }
];

const CATEGORIES = [
  { key: 'kebab',     label: 'Kebab Meny' },
  { key: 'pizza',     label: 'Pizza Meny' },
  { key: 'innbakt',   label: 'Innbakt Pizza' },
  { key: 'barnemeny', label: 'Barnemeny' },
  { key: 'andre',     label: 'Andre Retter' },
  { key: 'hamburger', label: 'Hamburger' },
  { key: 'fries',     label: 'Fries' },
  { key: 'drikke',    label: 'Drikke' }
];

/* Renamed to avoid colliding with the identically-named top-level const
   in main.js — both scripts load on menu.html, and duplicate top-level
   `const` declarations throw SyntaxError and abort the whole script. */
const MENU_CAT_EMOJI = {
  kebab: '🥙', pizza: '🍕', innbakt: '🥐', barnemeny: '🧒',
  hamburger: '🍔', andre: '🍽️', fries: '🍟', drikke: '🥤'
};

/* Slugify name → filename in images/menu/<slug>.jpg.
   Drop AI-generated images there and they appear automatically. */
function slug(s) {
  return s.toLowerCase()
    .replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* ---------- RENDER ---------- */
function renderMenuPage() {
  const sidebar = document.getElementById('menu-sidebar-list');
  const mobileTabs = document.getElementById('mobile-tabs-list');
  const main = document.getElementById('menu-main');

  if (!main) return;

  // Sidebar + mobile tabs
  const navHTML = CATEGORIES.map(c =>
    `<li><a href="#cat-${c.key}" data-cat="${c.key}">${c.label}</a></li>`
  ).join('');
  if (sidebar) sidebar.innerHTML = navHTML;
  if (mobileTabs) mobileTabs.innerHTML = navHTML;

  // Main content — grouped by category
  main.innerHTML = CATEGORIES.map(c => {
    const items = MENU_DATA.filter(i => i.cat === c.key);
    const emoji = MENU_CAT_EMOJI[c.key] || '🍽️';
    const catLabel = c.label.toLowerCase();
    const cardsHTML = items.map(it => {
      const tagsHTML = it.tags
        ? `<div class="item-tags">${it.tags.map(t =>
            t === 'vegetar'
              ? '<span class="tag tag-veg">🌱 Vegetar</span>'
              : '<span class="tag tag-spicy">🌶️ Sterk</span>'
          ).join('')}</div>`
        : '';
      const tagAttr = it.tags ? ` data-tags="${it.tags.join(',')}"` : '';
      const imgSrc = it.image || `images/menu/${slug(it.name)}.jpg`;
      const searchBlob = [it.name, it.desc, catLabel, c.key, (it.tags || []).join(' ')].join(' ').toLowerCase();
      return `
        <article class="item-card item-card-visual" data-name="${it.name.toLowerCase()}" data-desc="${it.desc.toLowerCase()}" data-cat="${c.key}" data-search="${searchBlob.replace(/"/g, '&quot;')}"${tagAttr}>
          <div class="item-visual" data-cat="${c.key}" data-emoji="${emoji}">
            <img src="${imgSrc}" alt="${it.name}" loading="lazy" onerror="this.remove()" />
          </div>
          <div class="item-body">
            <div class="item-card-top">
              <h4>${it.name}</h4>
              <span class="item-price">${it.price} kr</span>
            </div>
            <p class="item-desc">${it.desc}</p>
            ${tagsHTML}
          </div>
        </article>
      `;
    }).join('');

    return `
      <section class="menu-category-block" id="cat-${c.key}" data-cat="${c.key}">
        <div class="cat-header">
          <h2>${c.label}</h2>
          <span class="count">${items.length} ${items.length === 1 ? 'rett' : 'retter'}</span>
        </div>
        <div class="menu-grid">${cardsHTML}</div>
      </section>
    `;
  }).join('') + `
    <div class="no-results" id="no-results">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <p>Ingen retter funnet for <strong id="no-results-q"></strong></p>
    </div>
  `;
}

/* ---------- SEARCH + FILTER ---------- */
const state = { query: '', tags: new Set() };

/* Normalize for search: lowercase, strip diacritics, map æøå → ae/o/a. */
function norm(s) {
  return (s || '')
    .toLowerCase()
    .replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/* Typo + compressed-spelling tolerance.
   Matches if haystack contains token, contains a near-match per word
   (Levenshtein ≤ 1 for tokens ≥ 4 chars), OR if the token appears as a
   substring in the haystack with small connector words removed and joined
   together — so "kebabrull" finds "Kebab i Rull". */
function tokenMatches(haystack, token) {
  if (!token) return true;
  if (haystack.includes(token)) return true;

  const words = haystack.split(/[^a-z0-9]+/).filter(Boolean);

  // Compressed form — drop 1- and 2-letter connector words, join the rest.
  const compact = words.filter(w => w.length >= 3).join('');
  if (compact.includes(token)) return true;

  if (token.length < 4) return false;

  for (const w of words) {
    if (w.length < token.length - 1 || w.length > token.length + 1) continue;
    if (levenshtein(w, token) <= 1) return true;
  }
  return false;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (Math.abs(m - n) > 1) return 2; // early-out, we only care ≤1
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const curr = [i];
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    prev = curr;
  }
  return prev[n];
}

function applyFilters() {
  const q = norm(state.query.trim());
  const tokens = q.split(/\s+/).filter(Boolean);
  const activeTags = Array.from(state.tags);
  const cards = document.querySelectorAll('.item-card');
  const categoryBlocks = document.querySelectorAll('.menu-category-block');

  let anyVisible = false;

  cards.forEach(card => {
    const haystack = norm(card.dataset.search || `${card.dataset.name || ''} ${card.dataset.desc || ''}`);
    const cardTags = (card.dataset.tags || '').split(',').filter(Boolean);

    const matchesQuery = tokens.length === 0 || tokens.every(t => tokenMatches(haystack, t));
    const matchesTags  = activeTags.length === 0 || activeTags.every(t => cardTags.includes(t));

    const visible = matchesQuery && matchesTags;
    card.classList.toggle('hidden', !visible);
    if (visible) anyVisible = true;
  });

  // Hide category blocks whose items are all filtered out
  categoryBlocks.forEach(block => {
    const hasVisible = block.querySelector('.item-card:not(.hidden)');
    block.classList.toggle('hidden', !hasVisible);
  });

  // No-results message
  const noRes = document.getElementById('no-results');
  const noResQ = document.getElementById('no-results-q');
  if (noRes) {
    noRes.classList.toggle('visible', !anyVisible);
    if (noResQ) noResQ.textContent = q ? `"${state.query}"` : 'valgte filtre';
  }
}

function initSearch() {
  const input = document.getElementById('menu-search');
  const clear = document.getElementById('search-clear');
  if (!input) return;

  input.addEventListener('input', () => {
    state.query = input.value;
    clear.classList.toggle('visible', !!input.value);
    applyFilters();
  });

  clear.addEventListener('click', () => {
    input.value = '';
    state.query = '';
    clear.classList.remove('visible');
    applyFilters();
    input.focus();
  });
}

function initTagFilters() {
  const tagBtns = document.querySelectorAll('.tag-btn');
  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      if (state.tags.has(tag)) {
        state.tags.delete(tag);
        btn.classList.remove('active');
      } else {
        state.tags.add(tag);
        btn.classList.add('active');
      }
      applyFilters();
    });
  });
}

/* ---------- SIDEBAR / TABS ACTIVE STATE ON SCROLL ---------- */
function initActiveCategory() {
  const blocks = document.querySelectorAll('.menu-category-block');
  if (!blocks.length) return;

  const setActive = (catKey) => {
    document.querySelectorAll('.menu-sidebar a, .cat-tabs-mobile a').forEach(a => {
      a.classList.toggle('active', a.dataset.cat === catKey);
    });
    // Scroll the active mobile tab into view
    const mobileActive = document.querySelector(`.cat-tabs-mobile a.active`);
    if (mobileActive && mobileActive.scrollIntoView) {
      mobileActive.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const io = new IntersectionObserver((entries) => {
    // Find top-most visible block
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.target.offsetTop - b.target.offsetTop);
    if (visible[0]) setActive(visible[0].target.dataset.cat);
  }, {
    rootMargin: '-220px 0px -60% 0px',
    threshold: 0
  });

  blocks.forEach(b => io.observe(b));
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderMenuPage();
  initSearch();
  initTagFilters();
  initActiveCategory();
});
