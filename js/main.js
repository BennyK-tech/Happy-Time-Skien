/* ============================================
   HAPPY TIME SKIEN — Shared JS
   Announcement bar · Nav · Mobile CTA · Reveal · Quick menu preview
   ============================================ */

/* ---------- OPENING HOURS ---------- */
/* Times stored in minutes since midnight. Close > 24*60 means "next day". */
const HOURS = {
  1: { open: 12 * 60, close: 23 * 60 },          // Mon 12:00 – 23:00
  2: { open: 12 * 60, close: 24 * 60 },          // Tue 12:00 – 00:00
  3: { open: 12 * 60, close: 24 * 60 },          // Wed
  4: { open: 12 * 60, close: 24 * 60 },          // Thu
  5: { open: 12 * 60, close: 24 * 60 },          // Fri
  6: { open: 12 * 60, close: 24 * 60 + 150 },    // Sat 12:00 – 02:30 next
  0: { open: 12 * 60, close: 24 * 60 + 150 }     // Sun 12:00 – 02:30 next
};

const DAY_NAMES = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];

function minsToTimeStr(mins) {
  const m = mins % (24 * 60);
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${String(h).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

function getStatus() {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();

  const today = HOURS[day];
  if (today && mins >= today.open && mins < today.close) {
    return { open: true, closesAt: today.close, minsToClose: today.close - mins };
  }

  const yesterdayKey = (day + 6) % 7;
  const yest = HOURS[yesterdayKey];
  if (yest && yest.close > 24 * 60) {
    const overflow = yest.close - 24 * 60;
    if (mins < overflow) {
      return { open: true, closesAt: overflow, minsToClose: overflow - mins };
    }
  }

  for (let i = 0; i < 7; i++) {
    const checkDay = (day + i) % 7;
    const h = HOURS[checkDay];
    if (!h) continue;
    if (i === 0 && mins < h.open) {
      return { open: false, nextDay: checkDay, nextOpen: h.open, isToday: true };
    }
    if (i > 0) {
      return { open: false, nextDay: checkDay, nextOpen: h.open, isToday: false };
    }
  }
  return { open: false };
}

/* ---------- ANNOUNCEMENT BAR w/ URGENCY ---------- */
function formatDuration(mins) {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h} t` : `${h} t ${m} min`;
}

function updateAnnouncement() {
  const bar = document.getElementById('announcement');
  if (!bar) return;

  const textEl = bar.querySelector('.ann-text');
  const dotEl  = bar.querySelector('.ann-dot');
  const s = getStatus();

  bar.classList.remove('closed', 'urgent', 'soon');

  if (s.open) {
    const m = s.minsToClose;
    if (m <= 15) {
      bar.classList.add('urgent');
      textEl.innerHTML = `Stenger snart — <strong>${m} ${m === 1 ? 'minutt' : 'min'}</strong> igjen`;
    } else if (m <= 60) {
      bar.classList.add('soon');
      textEl.innerHTML = `Åpent nå · Stenger om <strong>${formatDuration(m)}</strong>`;
    } else {
      textEl.innerHTML = `Åpent nå · Stenger kl. <strong>${minsToTimeStr(s.closesAt)}</strong>`;
    }
  } else {
    bar.classList.add('closed');
    if (s.nextDay === undefined) {
      textEl.textContent = 'Stengt';
    } else {
      const dayLabel = s.isToday ? 'i dag' : DAY_NAMES[s.nextDay];
      textEl.innerHTML = `Stengt · Åpner ${dayLabel} kl. <strong>${minsToTimeStr(s.nextOpen)}</strong>`;
    }
  }
}

/* ---------- NAV ---------- */
function initNav() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const links = document.getElementById('nav-links');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 8) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });
  }

  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }
}

/* ---------- MOBILE CTA ---------- */
function initMobileCTA() {
  if (document.querySelector('.mobile-cta')) {
    document.body.classList.add('has-mobile-cta');
  }
}

/* ---------- HIGHLIGHT CURRENT DAY IN HOURS LIST ---------- */
function highlightCurrentDay() {
  const list = document.getElementById('hours-list');
  if (!list) return;
  const today = new Date().getDay();
  list.querySelectorAll('li').forEach(li => {
    const days = (li.dataset.days || '').split(',').map(n => parseInt(n, 10));
    if (days.includes(today)) li.classList.add('today');
  });
}

/* ---------- REVEAL ON SCROLL ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ---------- QUICK MENU PREVIEW (index.html only) ---------- */
const QUICK_MENU = {
  kebab: [
    { name: 'Super Kebab i Rull', desc: 'Alle grønnsaker, pommes frites, bacon, ost, kebabkjøtt og kebabsaus', price: 229 },
    { name: 'Kylling Tallerken',  desc: 'Pommes frites, salat, løk, tomat, mais, agurk, kebabsaus og brød', price: 194 },
    { name: 'Mexicano Kebab i Rull', desc: 'Kebabkjøtt, pommes frites, jalapeños og sterk kebabsaus', price: 190, tags: ['sterk'] }
  ],
  pizza: [
    { name: 'Mamma Mia Spesial', desc: 'Tomatsaus, ost, kylling, biffkjøtt, paprika, løk, sjampinjong, jalapeños og hvitløksdressing', price: 229, tags: ['sterk'] },
    { name: 'Trippel Pizza', desc: 'Tomatsaus, ost, pepperoni, skinke, bacon, løk og sjampinjong', price: 229 },
    { name: 'Kebab Pizza', desc: 'Tomatsaus, ost, kebabkjøtt og kebabsaus', price: 206 }
  ],
  innbakt: [
    { name: 'Calzone', desc: 'Tomatsaus, ost og skinke', price: 171 },
    { name: 'Spesial Calzone', desc: 'Tomatsaus, ost, kebabkjøtt og kebabsaus på siden', price: 206 },
    { name: 'Romana', desc: 'Tomatsaus, ost, skinke og sjampinjong', price: 194 }
  ],
  barnemeny: [
    { name: 'Margarita Pizza', desc: 'Tomatsaus og ost', price: 125 },
    { name: 'Hamburger', desc: 'Pommes frites, salat og burgerdressing', price: 137 },
    { name: 'Skinke Pizza', desc: 'Tomatsaus, ost og skinke', price: 137 }
  ],
  hamburgere: [
    { name: 'Classic Burger', desc: 'Burgerkjøtt, salat, løk, tomat og burgerdressing', price: 125 },
    { name: 'Cheese Burger', desc: 'Burgerkjøtt, cheddarost, salat, løk, tomat og dressing', price: 137 },
    { name: 'Hamburger Tallerken', desc: 'Serveres med pommes frites', price: 160 }
  ],
  andre: [
    { name: 'Løvbiff Steak', desc: 'Pommes frites, salat, løk, mais, tomat, agurk, bearnaisesaus og brød', price: 194 },
    { name: 'Biff Snadder Tallerken', desc: 'Pommes frites, biffkjøtt, paprika, løk, sjampinjong, bearnaisesaus og brød', price: 217 },
    { name: 'Kylling Snadder Tallerken', desc: 'Pommes frites, kyllingkjøtt, paprika, løk, sjampinjong, bearnaisesaus og brød', price: 229 }
  ],
  drikke: [
    { name: 'Coca-Cola', desc: '500 ml', price: 45 },
    { name: 'Pepsi Max', desc: '500 ml', price: 45 },
    { name: 'Urge', desc: '500 ml', price: 45 }
  ]
};

const CAT_EMOJI = {
  kebab: '🥙',
  pizza: '🍕',
  innbakt: '🥐',
  barnemeny: '🧒',
  hamburgere: '🍔',
  hamburger: '🍔',
  andre: '🍽️',
  fries: '🍟',
  drikke: '🥤'
};

function previewSlug(s) {
  return s.toLowerCase()
    .replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function renderPreview(category) {
  const grid = document.getElementById('preview-grid');
  if (!grid) return;
  const items = QUICK_MENU[category] || [];
  const emoji = CAT_EMOJI[category] || '🍽️';
  grid.innerHTML = items.map(it => {
    const tagsHTML = it.tags
      ? `<div class="item-tags">${it.tags.map(t =>
          t === 'vegetar'
            ? '<span class="tag tag-veg">🌱 Vegetar</span>'
            : '<span class="tag tag-spicy">🌶️ Sterk</span>'
        ).join('')}</div>`
      : '';
    const imgSrc = it.image || `images/menu/${previewSlug(it.name)}.jpg`;
    return `
      <article class="item-card item-card-visual" data-cat="${category}">
        <div class="item-visual" data-emoji="${emoji}">
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
}

function initQuickMenu() {
  const pillsRow = document.getElementById('preview-pills');
  if (!pillsRow) return;
  pillsRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    pillsRow.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    renderPreview(btn.dataset.cat);
  });
  const active = pillsRow.querySelector('.pill.active') || pillsRow.querySelector('.pill');
  if (active) {
    active.classList.add('active');
    renderPreview(active.dataset.cat);
  }
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  updateAnnouncement();
  setInterval(updateAnnouncement, 30 * 1000); // every 30s for live countdown
  initNav();
  initMobileCTA();
  highlightCurrentDay();
  initReveal();
  initQuickMenu();

  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();
});
