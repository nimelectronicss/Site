// language data
const translations = {
    en: {
        nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", skills: "Skills" },
        hero: { title: "Hi, I'm Nima", subtitle: "Bridging Hardware & Software | Electronics Engineering Student", typed: ["Electronics Engineer", "Embedded Systems Developer", "PCB Designer", "C Programmer"], cta: "Explore My Work" },
        projects: { title: "⚡ My Projects", pcb: "🔌 PCB Design", pcbDesc: "Custom circuit board design for embedded systems using Altium and KiCad", robot: "🤖 Robotics Controller", robotDesc: "PID controller implementation for line-following robot using STM32 microcontroller", website: "🌐 Portfolio Website", websiteDesc: "This responsive website - my first step into web development", signal: "📡 Signal Processing", signalDesc: "Digital filter design for ECG signal noise reduction using MATLAB" },
        skills: { title: "🛠️ Technical Skills", item1: "C Programming", item2: "Embedded Systems", item3: "PCB Design", item4: "Arduino", item5: "STM32", item6: "MATLAB", item7: "Circuit Analysis", item8: "Digital Logic" },
        footer: { copyright: "© 2026 Nima | Electronics Engineering Student", built: "Built with HTML/CSS/JS | Hosted on GitHub Pages" },
        contact: { title: "📧 Contact Me", subtitle: "Open for collaborations, projects, or just a technical chat", formTitle: "✉️ Send a Message", name: "Full Name", email: "Email Address", subject: "Subject", option1: "Project Collaboration", option2: "Electronics Consultation", option3: "Job Opportunity", option4: "Other", message: "Your Message", sendBtn: "📤 Send Message", detailsTitle: "📬 Contact Details", copy: "Copy" },
        about: { title: "About Me", subtitle: "Electronics Engineering Student", storyTitle: "📖 My Story", story1: "Hi! I'm Nima, an Electronics Engineering student with a deep passion for both hardware and software. Ever since I can remember, I've been fascinated by how the flow of electrons can bring a device to life and make it work.", story2: "For the past few years, I've been diving deep into Embedded Systems and C programming. I find it incredibly exciting how the line between hardware and software is getting blurrier every day — and I love that challenge.", story3: "My goal is to build products that are not only technically strong but also deliver a great user experience. That's why I decided to create an online portfolio — to showcase my work to the world.", driveTitle: "🎯 What Drives Me", driveText: "I believe technology should serve humanity. I want to work on projects that truly make a difference in people's lives — whether it's a medical device or an intelligent industrial controller.", techTitle: "🛠️ Technical Arsenal", hardware: "Hardware Skills", software: "Software Skills", eduTitle: "⚡ Education & Path", beyondTitle: "🌟 Beyond Engineering", beyondText: "Life is not just circuits and code! When I'm not at my desk, I enjoy:" },
        calculator: { title: "Simple Calculator in C", about: "About", aboutText: "This is a simple command-line calculator written in C. The user enters two numbers and an operator (+, -, *, /), and the program displays the result.", liveDemo: "⚡ Try it yourself (Live Simulator)", enterNum1: "First number", enterNum2: "Second number", result: "Result will appear here", runBtn: "▶ Run Calculation" },
        atomic: { title: "⚛️ Electron Configuration", subtitle: "Enter an atomic number (1 to 118) to get the electron configuration of that element.", showBtn: "🔬 Show Configuration", resultText: "Result will appear here...", note: "💡 Follows Aufbau principle, Pauli exclusion, and Hund's rule." }
    },
    fa: {
        nav: { home: "خانه", about: "درباره من", projects: "پروژه‌ها", contact: "تماس", skills: "مهارت‌ها" },
        hero: { title: "سلام، من نیما هستم", subtitle: "پل بین سخت‌افزار و نرم‌افزار | دانشجوی مهندسی الکترونیک", typed: ["مهندس الکترونیک", "توسعه‌دهنده سیستم‌های نهفته", "طراح PCB", "برنامه‌نویس C"], cta: "مشاهده کارهای من" },
        projects: { title: "⚡ پروژه‌های من", pcb: "🔌 طراحی PCB", pcbDesc: "طراحی برد مدار سفارشی برای سیستم‌های نهفته با Altium و KiCad", robot: "🤖 کنترلر رباتیک", robotDesc: "پیاده‌سازی کنترلر PID برای ربات دنبال‌کننده خط با STM32", website: "🌐 سایت نمونه کار", websiteDesc: "این سایت واکنش‌گرا - اولین قدم من در توسعه وب", signal: "📡 پردازش سیگنال", signalDesc: "طراحی فیلتر دیجیتال برای کاهش نویز سیگنال ECG با MATLAB" },
        skills: { title: "🛠️ مهارت‌های فنی", item1: "برنامه‌نویسی C", item2: "سیستم‌های نهفته", item3: "طراحی PCB", item4: "آردوینو", item5: "STM32", item6: "متلب", item7: "تحلیل مدار", item8: "منطق دیجیتال" },
        footer: { copyright: "© ۲۰۲۶ نیما | دانشجوی مهندسی الکترونیک", built: "ساخته شده با HTML/CSS/JS | میزبانی شده در گیت‌هاب" },
        contact: { title: "📧 تماس با من", subtitle: "برای همکاری، پروژه، یا هر سوال فنی", formTitle: "✉️ ارسال پیام", name: "نام کامل", email: "آدرس ایمیل", subject: "موضوع", option1: "همکاری پروژه", option2: "مشاوره الکترونیک", option3: "فرصت شغلی", option4: "سایر", message: "پیام شما", sendBtn: "📤 ارسال پیام", detailsTitle: "📬 اطلاعات تماس", copy: "کپی" },
        about: { title: "درباره من", subtitle: "دانشجوی مهندسی الکترونیک", storyTitle: "📖 داستان من", story1: "سلام! من نیما هستم، دانشجوی مهندسی الکترونیک با عشق بی‌پایان به دنیای سخت‌افزار و نرم‌افزار. از وقتی یادم میاد همیشه مجذوب این بودم که چطور جریان الکترون می‌تونه باعث بشه یک دستگاه زنده بشه و کار کنه.", story2: "الان چند سالیه که دارم عمیق‌تر توی سیستم‌های نهفته و برنامه‌نویسی C غرق میشم. برام جالبه که مرز بین سخت‌افزار و نرم‌افزار هر روز داره کمرنگ‌تر میشه و من عاشق این چالش هستم.", story3: "هدف من اینه که محصولاتی بسازم که هم از نظر فنی قوی باشن، هم تجربه کاربری خوبی داشته باشن. به همین دلیل تصمیم گرفتم یه پورتفولیوی آنلاین داشته باشم تا بتونم کارهام رو به دنیا نشون بدم.", driveTitle: "🎯 چه چیزی من را هدایت می‌کند", driveText: "باور دارم که تکنولوژی باید در خدمت انسان باشه. دوست دارم روی پروژه‌هایی کار کنم که واقعاً تفاوتی در زندگی مردم ایجاد کنن - چه یه دستگاه پزشکی باشه، چه یه کنترلر صنعتی هوشمند.", techTitle: "🛠️ زرادخانه فنی", hardware: "مهارت‌های سخت‌افزاری", software: "مهارت‌های نرم‌افزاری", eduTitle: "⚡ تحصیلات و مسیر", beyondTitle: "🌟 فراتر از مهندسی", beyondText: "زندگی فقط مدار و کد نیست! وقتی پشت میزم نیستم، این کارها رو دوست دارم:" },
        calculator: { title: "🧮 ماشین حساب ساده به زبان C", about: "درباره پروژه", aboutText: "این یک ماشین حساب خط فرمان ساده است که با زبان C نوشته شده. کاربر دو عدد و یک عملگر (+, -, *, /) وارد می‌کنه و برنامه نتیجه رو محاسبه می‌کنه.", liveDemo: "⚡ خودتان امتحان کنید (شبیه‌ساز زنده)", enterNum1: "عدد اول", enterNum2: "عدد دوم", result: "نتیجه در اینجا نمایش داده می‌شود", runBtn: "▶ اجرا" },
        atomic: { title: "⚛️ آرایش الکترونی", subtitle: "عدد اتمی (۱ تا ۱۱۸) را وارد کنید تا آرایش الکترونی آن عنصر را دریافت کنید.", showBtn: "🔬 نمایش آرایش", resultText: "نتیجه در اینجا نمایش داده می‌شود...", note: "💡 پیروی از اصل آفبا، اصل پاولی و قانون هوند" }
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
    
    // Contact page
    if(document.querySelector('[data-i18n="contact.title"]')) {
        document.querySelectorAll('[data-i18n="contact.title"]').forEach(el => el.textContent = t.contact.title);
        document.querySelectorAll('[data-i18n="contact.subtitle"]').forEach(el => el.textContent = t.contact.subtitle);
        document.querySelectorAll('[data-i18n="contact.formTitle"]').forEach(el => el.textContent = t.contact.formTitle);
        document.querySelectorAll('[data-i18n="contact.name"]').forEach(el => el.textContent = t.contact.name);
        document.querySelectorAll('[data-i18n="contact.email"]').forEach(el => el.textContent = t.contact.email);
        document.querySelectorAll('[data-i18n="contact.subject"]').forEach(el => el.textContent = t.contact.subject);
        document.querySelectorAll('[data-i18n="contact.option1"]').forEach(el => el.textContent = t.contact.option1);
        document.querySelectorAll('[data-i18n="contact.option2"]').forEach(el => el.textContent = t.contact.option2);
        document.querySelectorAll('[data-i18n="contact.option3"]').forEach(el => el.textContent = t.contact.option3);
        document.querySelectorAll('[data-i18n="contact.option4"]').forEach(el => el.textContent = t.contact.option4);
        document.querySelectorAll('[data-i18n="contact.message"]').forEach(el => el.textContent = t.contact.message);
        document.querySelectorAll('[data-i18n="contact.sendBtn"]').forEach(el => el.textContent = t.contact.sendBtn);
        document.querySelectorAll('[data-i18n="contact.detailsTitle"]').forEach(el => el.textContent = t.contact.detailsTitle);
        document.querySelectorAll('[data-i18n="contact.copy"]').forEach(el => el.textContent = t.contact.copy);
    }
    
    // About page
    if(document.querySelector('[data-i18n="about.title"]')) {
        document.querySelectorAll('[data-i18n="about.title"]').forEach(el => el.textContent = t.about.title);
        document.querySelectorAll('[data-i18n="about.subtitle"]').forEach(el => el.textContent = t.about.subtitle);
        document.querySelectorAll('[data-i18n="about.storyTitle"]').forEach(el => el.innerHTML = t.about.storyTitle);
        document.querySelectorAll('[data-i18n="about.story1"]').forEach(el => el.textContent = t.about.story1);
        document.querySelectorAll('[data-i18n="about.story2"]').forEach(el => el.textContent = t.about.story2);
        document.querySelectorAll('[data-i18n="about.story3"]').forEach(el => el.textContent = t.about.story3);
        document.querySelectorAll('[data-i18n="about.driveTitle"]').forEach(el => el.innerHTML = t.about.driveTitle);
        document.querySelectorAll('[data-i18n="about.driveText"]').forEach(el => el.textContent = t.about.driveText);
        document.querySelectorAll('[data-i18n="about.techTitle"]').forEach(el => el.innerHTML = t.about.techTitle);
        document.querySelectorAll('[data-i18n="about.hardware"]').forEach(el => el.textContent = t.about.hardware);
        document.querySelectorAll('[data-i18n="about.software"]').forEach(el => el.textContent = t.about.software);
        document.querySelectorAll('[data-i18n="about.eduTitle"]').forEach(el => el.innerHTML = t.about.eduTitle);
        document.querySelectorAll('[data-i18n="about.beyondTitle"]').forEach(el => el.innerHTML = t.about.beyondTitle);
        document.querySelectorAll('[data-i18n="about.beyondText"]').forEach(el => el.textContent = t.about.beyondText);
    }
    
    // Calculator page
    if(document.querySelector('[data-i18n="calculator.title"]')) {
        document.querySelectorAll('[data-i18n="calculator.title"]').forEach(el => el.innerHTML = t.calculator.title);
        document.querySelectorAll('[data-i18n="calculator.about"]').forEach(el => el.textContent = t.calculator.about);
        document.querySelectorAll('[data-i18n="calculator.aboutText"]').forEach(el => el.textContent = t.calculator.aboutText);
        document.querySelectorAll('[data-i18n="calculator.liveDemo"]').forEach(el => el.innerHTML = t.calculator.liveDemo);
        document.querySelectorAll('[data-i18n="calculator.enterNum1"]').forEach(el => el.placeholder = t.calculator.enterNum1);
        document.querySelectorAll('[data-i18n="calculator.enterNum2"]').forEach(el => el.placeholder = t.calculator.enterNum2);
        document.querySelectorAll('[data-i18n="calculator.runBtn"]').forEach(el => el.textContent = t.calculator.runBtn);
    }
    
    // Atomic page
    if(document.querySelector('[data-i18n="atomic.title"]')) {
        document.querySelectorAll('[data-i18n="atomic.title"]').forEach(el => el.innerHTML = t.atomic.title);
        document.querySelectorAll('[data-i18n="atomic.subtitle"]').forEach(el => el.textContent = t.atomic.subtitle);
        document.querySelectorAll('[data-i18n="atomic.showBtn"]').forEach(el => el.textContent = t.atomic.showBtn);
        document.querySelectorAll('[data-i18n="atomic.note"]').forEach(el => el.textContent = t.atomic.note);
    }
    
    // Update typed.js if exists
    if(window.typed && document.querySelector('#typed')) {
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
