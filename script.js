document.addEventListener('DOMContentLoaded', () => {

    // --- ПЕРЕКЛЮЧЕНИЕ ТЕМ ---
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTheme = document.body.getAttribute('data-theme');
            if (currentTheme === 'light') {
                document.body.removeAttribute('data-theme');
                themeIcon.className = 'fa-solid fa-moon';
            } else {
                document.body.setAttribute('data-theme', 'light');
                themeIcon.className = 'fa-solid fa-sun';
            }
        });
    }

    // --- КНОПКА НАВЕРХ ---
    const scrollTop = document.getElementById('scrollTop');
    if (scrollTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        });
        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- КОШАЧЬИ ЛАПКИ ПРИ КЛИКЕ ---
    document.addEventListener('click', (e) => {
        const paw = document.createElement('div');
        paw.className = 'paw-print';
        paw.textContent = '🐾';
        paw.style.left = (e.pageX - 12) + 'px';
        paw.style.top = (e.pageY - 12) + 'px';
        document.body.appendChild(paw);
        setTimeout(() => paw.remove(), 1000);
    });

    // --- СЛУЧАЙНАЯ ЦИТАТА ---
    const quotes = [
        "«Do you want me to get the moon for you from the sky?»",
        "«Я творческая самочка, ленивая недоучка.»",
        "«Творю о настроению, живу по луне.»",
        "«Кошки — мои лучшие критики.»",
        "«Синдром самозванца — мой второй пилот.»",
        "«Мечта — это тоже искусство.»",
        "«^w^ — моя визитная карточка.»"
    ];
    const quoteEl = document.getElementById('randomQuote');
    if (quoteEl) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteEl.textContent = quotes[randomIndex];
    }

    // --- АНИМАЦИЯ ПРИ СКРОЛЛЕ ---
    const animatedElements = document.querySelectorAll('.bottom-card');
    animatedElements.forEach(el => el.classList.add('fade-scroll'));

    function checkScroll() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add('visible-scroll');
            }
        });
    }
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);

    // --- ЭФФЕКТ СКРОЛЛА ДЛЯ МЕНЮ (Плавающее меню) ---
    const topNav = document.querySelector('.top-nav');
    if (topNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                topNav.classList.add('scrolled');
            } else {
                topNav.classList.remove('scrolled');
            }
        });
    }

});

// --- КОШАЧИЙ ФАКТ ДНЯ ---
const catFacts = [
    "Кошки мурчат на частоте 25-150 Гц — это помогает им заживлять раны.",
    "У кошек 32 мышцы в каждом ухе — они могут поворачивать их на 180°.",
    "Кошки не чувствуют сладкого вкуса — у них нет рецепторов для него.",
    "Нос кошки уникален, как отпечаток пальца у человека.",
    "Кошки спят 12-16 часов в сутки — это 70% их жизни.",
    "Мурлыканье кошки может снижать стресс и давление у человека.",
    "Кошки видят в темноте в 6 раз лучше, чем люди.",
    "Усы кошки — это органы чувств, они помогают ей ориентироваться.",
    "Кошки могут издавать около 100 разных звуков (собаки — только 10).",
    "Сердце кошки бьётся в 2 раза быстрее, чем у человека."
];

const catFactEl = document.getElementById('catFact');
const newFactBtn = document.getElementById('newFactBtn');
const randomFactBtn = document.getElementById('randomFactBtn');

function showRandomFact() {
    if (catFactEl) {
        const randomIndex = Math.floor(Math.random() * catFacts.length);
        catFactEl.textContent = catFacts[randomIndex];
    }
}

if (catFactEl) showRandomFact();
if (newFactBtn) newFactBtn.addEventListener('click', showRandomFact);
if (randomFactBtn) randomFactBtn.addEventListener('click', showRandomFact);

// --- НАСТРОЕНИЕ ---
const moods = [
    { emoji: "🌙", text: "Ночное" },
    { emoji: "🐾", text: "Кошачье" },
    { emoji: "🎨", text: "Творческое" },
    { emoji: "☕", text: "Уютное" },
    { emoji: "✨", text: "Мечтательное" },
    { emoji: "🌸", text: "Весеннее" },
    { emoji: "💤", text: "Сонное" }
];

const moodEmoji = document.getElementById('moodEmoji');
const moodMessage = document.getElementById('moodMessage');

if (moodEmoji && moodMessage) {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    moodEmoji.textContent = randomMood.emoji;
    moodMessage.textContent = randomMood.text;
}