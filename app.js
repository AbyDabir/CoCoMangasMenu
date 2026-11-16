const MENU = {
  categories: [
    { id: 'all', name: 'Всё' },
    { id: 'hookah', name: 'Кальяны' },
    { id: 'limonady', name: 'Лимонады' },
    { id: 'cocktails', name: 'Коктейли' },
    { id: 'teas', name: 'Чаи' },
    { id: 'morsy', name: 'Морсы' }
  ],
  sections: [
    {
      id: 'hookah',
      title: 'Кальяны',
      items: [
        {
          id: 'h1',
          name: 'Классический',
          price: 900,
          desc: 'Любой вкус на выбор из нашей коллекции табаков.',
          tags: [{ text: 'стандарт', gold: false }]
        },
        {
          id: 'h2',
          name: 'Авторский микс',
          price: 1100,
          desc: 'Уникальная смесь от нашего кальянщика под ваши предпочтения.',
          tags: [{ text: 'авторский', gold: true }]
        },
        {
          id: 'h3',
          name: 'Премиум',
          price: 1400,
          desc: 'Премиальные табаки: Darkside, MustHave, BlackBurn и др.',
          tags: [{ text: 'премиум', gold: true }]
        },
        {
          id: 'h4',
          name: 'На фрукте / молоке',
          price: 1500,
          desc: 'Кальян на гранате, апельсине, грейпфруте или молоке.',
          tags: [{ text: 'на фрукте', gold: false }]
        },
        {
          id: 'h5',
          name: 'Двойная чаша',
          price: 1600,
          desc: 'Две чаши одновременно — для компании или смены вкусов.',
          tags: [{ text: 'на компанию', gold: false }]
        }
      ]
    },
    {
      id: 'limonady',
      title: 'Лимонады',
      items: [
        { id: 'l1', name: 'Мохито классический', price: 420, volume: '450 мл' },
        { id: 'l2', name: 'Грейпфрут–ананас', price: 420, volume: '450 мл' },
        { id: 'l3', name: 'Манго–маракуйя', price: 420, volume: '450 мл' },
        { id: 'l4', name: 'Манго–ананас', price: 420, volume: '450 мл' },
        { id: 'l5', name: 'Земляника–ананас', price: 420, volume: '450 мл' },
        { id: 'l6', name: 'Клубника–лайм', price: 420, volume: '450 мл' },
        { id: 'l7', name: 'Малина–мята', price: 420, volume: '450 мл' },
        { id: 'l8', name: 'Гранат–смородина', price: 420, volume: '450 мл' },
        { id: 'l9', name: 'Клюква–апельсин', price: 420, volume: '450 мл' },
        { id: 'l10', name: 'Огурец–апельсин', price: 420, volume: '450 мл' },
        { id: 'l11', name: 'Ежевика–фиалка', price: 420, volume: '450 мл' },
        { id: 'l12', name: 'Яблоко–киви', price: 420, volume: '450 мл' },
        { id: 'l13', name: 'Черника–мята', price: 420, volume: '450 мл' },
        { id: 'l14', name: 'Вишня–мята', price: 420, volume: '450 мл' },
        { id: 'l15', name: 'Мохито классический', price: 700, volume: '1000 мл' },
        { id: 'l16', name: 'Грейпфрут–ананас', price: 700, volume: '1000 мл' },
        { id: 'l17', name: 'Манго–маракуйя', price: 700, volume: '1000 мл' },
        { id: 'l18', name: 'Манго–ананас', price: 700, volume: '1000 мл' },
        { id: 'l19', name: 'Земляника–ананас', price: 700, volume: '1000 мл' },
        { id: 'l20', name: 'Клубника–лайм', price: 700, volume: '1000 мл' },
        { id: 'l21', name: 'Малина–мята', price: 700, volume: '1000 мл' },
        { id: 'l22', name: 'Гранат–смородина', price: 700, volume: '1000 мл' },
        { id: 'l23', name: 'Клюква–апельсин', price: 700, volume: '1000 мл' },
        { id: 'l24', name: 'Огурец–апельсин', price: 700, volume: '1000 мл' },
        { id: 'l25', name: 'Ежевика–фиалка', price: 700, volume: '1000 мл' },
        { id: 'l26', name: 'Яблоко–киви', price: 700, volume: '1000 мл' },
        { id: 'l27', name: 'Черника–мята', price: 700, volume: '1000 мл' },
        { id: 'l28', name: 'Вишня–мята', price: 700, volume: '1000 мл' }
      ]
    },
    {
      id: 'cocktails',
      title: 'Алкогольные коктейли',
      items: [
        { id: 'c1', name: 'Текила Санрайз', price: 480 },
        { id: 'c2', name: 'Негрони', price: 570 },
        { id: 'c3', name: 'Кейп Кодер', price: 430 },
        { id: 'c4', name: 'Мохито классический', price: 570 },
        { id: 'c5', name: 'Мохито', price: 590 },
        { id: 'c6', name: 'Том Коллинз', price: 450 },
        { id: 'c7', name: 'Апероль Спритц', price: 530 },
        { id: 'c8', name: 'Секс на пляже', price: 420 },
        { id: 'c9', name: 'Пина Колада', price: 480 },
        { id: 'c10', name: 'CoCoMangas Tai', price: 1400, tags: [{ text: 'фирменный', gold: true }] },
        { id: 'c11', name: 'Изи Спритс', price: 580 },
        { id: 'c12', name: 'Ред Эпл', price: 470 },
        { id: 'c13', name: 'Тропик Бург', price: 480 },
        { id: 'c14', name: 'Прайм', price: 460 },
        { id: 'c15', name: 'Голубая Лагуна', price: 390 },
        { id: 'c16', name: 'Манговый Дайкири', price: 430 },
        { id: 'c17', name: 'Люмьер Руж', price: 480 },
        { id: 'c18', name: 'Помпей', price: 470 },
        { id: 'c19', name: 'Тропик Рэй', price: 490 },
        { id: 'c20', name: 'Май Тай', price: 550 },
        { id: 'c21', name: 'Гламур', price: 530 },
        { id: 'c22', name: 'Куба Либре', price: 510 },
        { id: 'c23', name: 'Космо', price: 410 },
        { id: 'c24', name: 'Фьюжн', price: 420 },
        { id: 'c25', name: 'Виски Кола', price: 450 },
        { id: 'c26', name: 'Campari Тоник', price: 570 }
      ]
    },
    {
      id: 'teas',
      title: 'Авторские чаи',
      items: [
        { id: 't1', name: 'Облепиховый', price: 520 },
        { id: 't2', name: 'Клюквенный', price: 530 },
        { id: 't3', name: 'Вишнёвый', price: 520 },
        { id: 't4', name: 'Согревающий', price: 560 },
        { id: 't5', name: 'Малина-имбирь', price: 540 },
        { id: 't6', name: 'Клубника базилик', price: 530 },
        { id: 't7', name: 'Банан-груша', price: 530 },
        { id: 't8', name: 'Грейпфрут-апельсин', price: 530 },
        { id: 't9', name: 'Гранат-смородина', price: 540 },
        { id: 't10', name: 'Ежевика-черника', price: 530 },
        { id: 't11', name: 'Яблоко-киви', price: 520 },
        { id: 't12', name: 'Тайга саунд', price: 580 },
        { id: 't13', name: 'Мандарин пихта', price: 580 },
        { id: 't14', name: 'Ананас-лемонграсс', price: 580 },
        { id: 't15', name: 'Персик молочный улун', price: 580 },
        { id: 't16', name: 'Домашний', price: 610 },
        { id: 't17', name: 'Мохито', price: 580 },
        { id: 't18', name: 'Массала', price: 580 }
      ]
    },
    {
      id: 'morsy',
      title: 'Морсы',
      items: [
        { id: 'm1', name: 'Клубнично–базиликовый', price: 370, volume: '450 мл' },
        { id: 'm2', name: 'Бананово–грушевый', price: 370, volume: '450 мл' },
        { id: 'm3', name: 'Смородиновый', price: 370, volume: '450 мл' },
        { id: 'm4', name: 'Облепиховый', price: 370, volume: '450 мл' },
        { id: 'm5', name: 'Клюквенный', price: 370, volume: '450 мл' },
        { id: 'm6', name: 'Малиновый', price: 370, volume: '450 мл' },
        { id: 'm7', name: 'Ежевичный', price: 370, volume: '450 мл' },
        { id: 'm8', name: 'Черничный', price: 370, volume: '450 мл' },
        { id: 'm9', name: 'Клубнично–базиликовый', price: 580, volume: '1000 мл' },
        { id: 'm10', name: 'Бананово–грушевый', price: 580, volume: '1000 мл' },
        { id: 'm11', name: 'Смородиновый', price: 580, volume: '1000 мл' },
        { id: 'm12', name: 'Облепиховый', price: 580, volume: '1000 мл' },
        { id: 'm13', name: 'Клюквенный', price: 580, volume: '1000 мл' },
        { id: 'm14', name: 'Малиновый', price: 580, volume: '1000 мл' },
        { id: 'm15', name: 'Ежевичный', price: 580, volume: '1000 мл' },
        { id: 'm16', name: 'Черничный', price: 580, volume: '1000 мл' }
      ]
    }
  ]
};

let cart = {};
let activeCat = 'all';

const catsEl = document.getElementById('cats');
const contentEl = document.getElementById('content');
const orderBadge = document.getElementById('orderBadge');
const btnOrder = document.getElementById('btnOrder');
const sheet = document.getElementById('sheet');
const backdrop = document.getElementById('backdrop');
const sheetClose = document.getElementById('sheetClose');
const sheetBody = document.getElementById('sheetBody');
const empty = document.getElementById('empty');
const sheetFoot = document.getElementById('sheetFoot');
const totalPrice = document.getElementById('totalPrice');
const btnClear = document.getElementById('btnClear');

function init() {
  renderCats();
  renderContent();
  bind();
  updateCartUI();
}

function renderCats() {
  catsEl.innerHTML = MENU.categories.map(c =>
    `<button class="cat ${c.id === activeCat ? 'active' : ''}" data-id="${c.id}">${c.name}</button>`
  ).join('');
}

function getVisibleSections() {
  if (activeCat === 'all') return MENU.sections;
  return MENU.sections.filter(s => s.id === activeCat);
}

function renderContent() {
  const sections = getVisibleSections();
  contentEl.innerHTML = sections.map(sec => `
    <section class="section">
      <h2 class="section-title">${sec.title}</h2>
      <div class="grid">
        ${sec.items.map(item => renderCard(item)).join('')}
      </div>
    </section>
  `).join('');
}

function renderCard(item) {
  const qty = cart[item.id]?.qty || 0;
  const tags = [];
  if (item.volume) tags.push(`<span class="tag tag-gold">${item.volume}</span>`);
  if (item.tags) {
    item.tags.forEach(t => {
      tags.push(`<span class="tag ${t.gold ? 'tag-gold' : ''}">${t.text}</span>`);
    });
  }

  const action = qty > 0
    ? `<div class="qty-wrap">
         <button data-act="dec" data-id="${item.id}">−</button>
         <span>${qty}</span>
         <button data-act="inc" data-id="${item.id}">+</button>
       </div>`
    : `<button class="btn-add" data-act="add" data-id="${item.id}">В заказ</button>`;

  return `
    <div class="card" data-id="${item.id}">
      <div class="card-top">
        <div class="card-name">${item.name}</div>
        <div class="card-price">${item.price} ₽</div>
      </div>
      ${item.desc ? `<div class="card-desc">${item.desc}</div>` : ''}
      ${tags.length ? `<div class="card-tags">${tags.join('')}</div>` : ''}
      ${action}
    </div>
  `;
}

function findItem(id) {
  for (const sec of MENU.sections) {
    const f = sec.items.find(i => i.id === id);
    if (f) return f;
  }
  return null;
}

function add(id) {
  const item = findItem(id);
  if (!item) return;
  if (!cart[id]) cart[id] = { ...item, qty: 0 };
  cart[id].qty++;
  updateCartUI();
  renderContent();
}

function change(id, d) {
  if (!cart[id]) return;
  cart[id].qty += d;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
  renderContent();
}

function clearAll() {
  cart = {};
  updateCartUI();
  renderContent();
  closeSheet();
}

function updateCartUI() {
  const list = Object.values(cart);
  const qty = list.reduce((s, i) => s + i.qty, 0);
  const sum = list.reduce((s, i) => s + i.price * i.qty, 0);

  orderBadge.textContent = qty;
  orderBadge.classList.toggle('show', qty > 0);
  totalPrice.textContent = sum.toLocaleString('ru-RU') + ' ₽';

  if (!list.length) {
    empty.hidden = false;
    sheetFoot.hidden = true;
    sheetBody.innerHTML = '';
    sheetBody.appendChild(empty);
  } else {
    empty.hidden = true;
    sheetFoot.hidden = false;
    sheetBody.innerHTML = list.map(i => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-meta">${i.volume ? i.volume + ' · ' : ''}${i.price} ₽</div>
        </div>
        <div class="qty-wrap">
          <button data-act="dec" data-id="${i.id}">−</button>
          <span>${i.qty}</span>
          <button data-act="inc" data-id="${i.id}">+</button>
        </div>
        <div class="cart-item-sum">${(i.price * i.qty).toLocaleString('ru-RU')} ₽</div>
      </div>
    `).join('');
  }
}

function openSheet() {
  sheet.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSheet() {
  sheet.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function bind() {
  catsEl.addEventListener('click', e => {
    const b = e.target.closest('.cat');
    if (!b) return;
    activeCat = b.dataset.id;
    renderCats();
    renderContent();
  });

  contentEl.addEventListener('click', e => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const { act, id } = b.dataset;
    if (act === 'add' || act === 'inc') add(id);
    if (act === 'dec') change(id, -1);
  });

  sheetBody.addEventListener('click', e => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const { act, id } = b.dataset;
    if (act === 'inc') add(id);
    if (act === 'dec') change(id, -1);
  });

  btnOrder.addEventListener('click', openSheet);
  sheetClose.addEventListener('click', closeSheet);
  backdrop.addEventListener('click', closeSheet);
  btnClear.addEventListener('click', clearAll);
}

init();
