// language data
const translations = {
    en: {
        nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", skills: "Skills" },
        hero: { title: "Hi, I'm Nima", subtitle: "Bridging Hardware & Software | Electronics Engineering Student", typed: ["Electronics Engineer", "Embedded Systems Developer", "PCB Designer", "C Programmer"], cta: "Explore My Work" },
        projects: { title: "⚡ My Projects", pcb: "🔌 PCB Design", pcbDesc: "Custom circuit board design for embedded systems using Altium and KiCad", robot: "🤖 Robotics Controller", robotDesc: "PID controller implementation for line-following robot using STM32 microcontroller", website: "🌐 Portfolio Website", websiteDesc: "This responsive website - my first step into web development", signal: "📡 Signal Processing", signalDesc: "Digital filter design for ECG signal noise reduction using MATLAB" },
        skills: { title: "🛠️ Technical Skills", item1: "C Programming", item2: "Embedded Systems", item3: "PCB Design", item4: "Arduino", item5: "STM32", item6: "MATLAB", item7: "Circuit Analysis", item8: "Digital Logic" },
        footer: { copyright: "© 2026 Nima | Electronics Engineering Student", built: "Built with HTML/CSS/JS | Hosted on GitHub Pages" }
    },
    fa: {
        nav: { home: "خانه", about: "درباره من", projects: "پروژه‌ها", contact: "تماس", skills: "مهارت‌ها" },
        hero: { title: "سلام، من نیما هستم", subtitle: "پل بین سخت‌افزار و نرم‌افزار | دانشجوی مهندسی الکترونیک", typed: ["مهندس الکترونیک", "توسعه‌دهنده سیستم‌های نهفته", "طراح PCB", "برنامه‌نویس C"], cta: "مشاهده کارهای من" },
        projects: { title: "⚡ پروژه‌های من", pcb: "🔌 طراحی PCB", pcbDesc: "طراحی برد مدار سفارشی برای سیستم‌های نهفته با Altium و KiCad", robot: "🤖 کنترلر رباتیک", robotDesc: "پیاده‌سازی کنترلر PID برای ربات دنبال‌کننده خط با STM32", website: "🌐 سایت نمونه کار", websiteDesc: "این سایت واکنش‌گرا - اولین قدم من در توسعه وب", signal: "📡 پردازش سیگنال", signalDesc: "طراحی فیلتر دیجیتال برای کاهش نویز سیگنال ECG با MATLAB" },
        skills: { title: "🛠️ مهارت‌های فنی", item1: "برنامه‌نویسی C", item2: "سیستم‌های نهفته", item3: "طراحی PCB", item4: "آردوینو", item5: "STM32", item6: "متلب", item7: "تحلیل مدار", item8: "منطق دیجیتال" },
        footer: { copyright: "© ۲۰۲۶ نیما | دانشجوی مهندسی الکترونیک", built: "ساخته شده با HTML/CSS/JS | میزبانی شده در گیت‌هاب" }
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updatePageText();
}

function updatePageText() {
    const t = translations[currentLang];
    
    // Update nav
    document.querySelectorAll('[data-i18n="nav.home"]').forEach(el => el.textContent = t.nav.home);
    document.querySelectorAll('[data-i18n="nav.about"]').forEach(el => el.textContent = t.nav.about);
    document.querySelectorAll('[data-i18n="nav.projects"]').forEach(el => el.textContent = t.nav.projects);
    document.querySelectorAll('[data-i18n="nav.contact"]').forEach(el => el.textContent = t.nav.contact);
    document.querySelectorAll('[data-i18n="nav.skills"]').forEach(el => el.textContent = t.nav.skills);
    
    // Hero
    const heroTitle = document.querySelector('[data-i18n="hero.title"]');
    if(heroTitle) heroTitle.innerHTML = t.hero.title;
    document.querySelectorAll('[data-i18n="hero.subtitle"]').forEach(el => el.textContent = t.hero.subtitle);
    document.querySelectorAll('[data-i18n="hero.cta"]').forEach(el => el.textContent = t.hero.cta);
    
    // Projects
    document.querySelectorAll('[data-i18n="projects.title"]').forEach(el => el.innerHTML = t.projects.title);
    document.querySelectorAll('[data-i18n="projects.pcb"]').forEach(el => el.innerHTML = t.projects.pcb);
    document.querySelectorAll('[data-i18n="projects.pcbDesc"]').forEach(el => el.textContent = t.projects.pcbDesc);
    document.querySelectorAll('[data-i18n="projects.robot"]').forEach(el => el.innerHTML = t.projects.robot);
    document.querySelectorAll('[data-i18n="projects.robotDesc"]').forEach(el => el.textContent = t.projects.robotDesc);
    document.querySelectorAll('[data-i18n="projects.website"]').forEach(el => el.innerHTML = t.projects.website);
    document.querySelectorAll('[data-i18n="projects.websiteDesc"]').forEach(el => el.textContent = t.projects.websiteDesc);
    document.querySelectorAll('[data-i18n="projects.signal"]').forEach(el => el.innerHTML = t.projects.signal);
    document.querySelectorAll('[data-i18n="projects.signalDesc"]').forEach(el => el.textContent = t.projects.signalDesc);
    
    // Skills
    document.querySelectorAll('[data-i18n="skills.title"]').forEach(el => el.innerHTML = t.skills.title);
    document.querySelectorAll('[data-i18n="skills.item1"]').forEach(el => el.textContent = t.skills.item1);
    document.querySelectorAll('[data-i18n="skills.item2"]').forEach(el => el.textContent = t.skills.item2);
    document.querySelectorAll('[data-i18n="skills.item3"]').forEach(el => el.textContent = t.skills.item3);
    document.querySelectorAll('[data-i18n="skills.item4"]').forEach(el => el.textContent = t.skills.item4);
    document.querySelectorAll('[data-i18n="skills.item5"]').forEach(el => el.textContent = t.skills.item5);
    document.querySelectorAll('[data-i18n="skills.item6"]').forEach(el => el.textContent = t.skills.item6);
    document.querySelectorAll('[data-i18n="skills.item7"]').forEach(el => el.textContent = t.skills.item7);
    document.querySelectorAll('[data-i18n="skills.item8"]').forEach(el => el.textContent = t.skills.item8);
    
    // Footer
    document.querySelectorAll('[data-i18n="footer.copyright"]').forEach(el => el.textContent = t.footer.copyright);
    document.querySelectorAll('[data-i18n="footer.built"]').forEach(el => el.textContent = t.footer.built);
    
    // Update typed.js if exists
    if(window.typed) {
        const currentStrings = window.typed.strings;
        window.typed.destroy();
        window.typed = new Typed('#typed', {
            strings: t.hero.typed,
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 1500,
            loop: true
        });
    }
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    if(savedLang && (savedLang === 'en' || savedLang === 'fa')) {
        currentLang = savedLang;
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        currentLang = browserLang.startsWith('fa') ? 'fa' : 'en';
    }
    updatePageText();
});
