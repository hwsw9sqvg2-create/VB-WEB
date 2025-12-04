// Translation data
const translations = {
    uk: {
        // Navigation
        'nav.about': 'Про мене',
        'nav.services': 'Послуги',
        'nav.qualifications': 'Кваліфікація',
        'nav.testimonials': 'Відгуки',
        'nav.contact': 'Контакти',
        'nav.subtitle1': 'ПРАКТИЧНИЙ ПСИХОЛОГ',
        'nav.subtitle2': 'СПЕЦІАЛІСТ З НУМЕРОЛОГІЇ та СИМВОЛІЗМУ',
        
        // Hero
        'hero.name': 'ВАЛЕНТИНА БАЛАЦЬКА',
        'hero.title': 'ПРАКТИЧНИЙ ПСИХОЛОГ',
        'hero.numerology': 'СПЕЦІАЛІСТ З НУМЕРОЛОГІЇ ТА СИМВОЛІЗМУ',
        'hero.message': 'Допоможу знайти внутрішню гармонію та розкрити ваш потенціал!',
        'hero.cta': 'Записатися на консультацію',
        
        // About
        'about.title': 'Про мене',
        'about.greeting': 'Вітаю!',
        'about.intro': 'Я, Валентина Балацька, практичний психолог, спеціаліст з нумерології та символізму.',
        'about.approaches': 'Я вивчала різноманітні підходи і на зараз виділяю в своїй роботі два: <strong>системно-феноменологічний підхід</strong> — дозволяє піти в глибину і побачити першопричини життєвих проблем; <strong>когнітивно-поведінкова терапія</strong> — дозволяє тут і зараз змінювати укорінене мислення.',
        'about.tools': 'Нумерологія і символізм — прекрасні інструменти для швидкої і якісної діагностики та пошуку векторів корекції.',
        'about.question': 'Що ще я маю, чим можу бути корисна?',
        'about.experience': 'Я на власному прикладі знаю, як:',
        'about.experienceList': '',
        'about.exp1': 'жити в дисфункціональній родині, але змогти створити для себе хороше життя;',
        'about.exp2': 'бути іпохондриком, але опанувати свою тривогу і навчитися балансувати її;',
        'about.exp3': 'поринути в депресію і витягти себе з болота, як барон Мюнхаузен;',
        'about.exp4': 'мати звичку негативно мислити і змогти викорінити її, замінивши на здатність думати за себе;',
        'about.exp5': 'жити в бідності, але створити успішний бізнес;',
        'about.exp6': 'починати плакати від чужого конфлікту поруч, але навчитися конструктивно відстоювати себе;',
        'about.exp7': 'мати РХП і дозволити собі жити без заборон;',
        'about.exp8': 'втрачати, але вміти спертися на себе.',
        'about.roles': 'Я жінка, дружина, мама, сестра, подруга, терапевт, підприємниця. І всі свої ролі я й далі розвиваю.',
        'about.responsibility': 'Я не беру на себе 50 % за Ваш результат роботи — я беру 100 % своєї відповідальності за мою роботу і залишаю Вам 100 % відповідальності за Вашу.',
        'about.promise': 'Я знаю, що зі мною можна пройти шлях до цілі: без засудження, в щирості, з підтримкою та розумінням.',
        
        // Services
        'services.title': 'Мої послуги',
        'services.consultation.title': 'Індивідуальна психологічна консультація',
        'services.consultation.price': '2000 грн / одна година',
        'services.consultation.desc': 'онлайн консультація через ZOOM',
        'services.webinar.title': 'Розстановки',
        'services.webinar.individual': 'Індивідуальна - 4200 грн',
        'services.webinar.group': 'Групова - 3000 грн',
        'services.webinar.substitute': 'Замісник - 500 грн',
        'services.training.title': 'Нумерологічна консультація + діагностика та корекція через символізм',
        'services.training.price': '6300 грн',
        'services.training.desc': 'Комплекс, який включає в себе повний нумерологічний розбір, короткий прогноз на рік та діагностику і корекцію через символізм.',
        
        // Qualifications
        'qualifications.title': 'Кваліфікація та освіта',
        'qualifications.diploma.title': 'Дипломований психолог',
        'qualifications.diploma.desc': 'Вища освіта за спеціальністю «Практичний психолог» Інституту післядипломної освіти ім. Тараса Шевченка',
        'qualifications.constellations.title': 'Сімейні системні розстановки',
        'qualifications.constellations.desc': 'Сертифікат терапевта в методі системно-феноменологічного підходу від UpPro School',
        'qualifications.cbt.title': 'Когнітивно-поведінкова терапія',
        'qualifications.cbt.desc': 'Наразі проходжу навчання 3 методу КПТ (когнітивно-поведінкова терапія) в UpPro School',
        'qualifications.membership.title': 'Когнітивно-поведінкова терапія (підвищення кваліфікації)',
        
        // Testimonials
        'testimonials.title': 'Відгуки клієнтів',
        'testimonials.testimonial1.text': '"Консультації з Валентиною допомогли мені знайти внутрішню гармонію та розібратися з життєвими викликами. Дуже рекомендую!"',
        'testimonials.testimonial1.author': '— Олена, Київ',
        'testimonials.testimonial2.text': '"Нумерологія відкрила для мене нові перспективи. Валентина професійно допомогла зрозуміти мої сильні сторони."',
        'testimonials.testimonial2.author': '— Марія, Львів',
        'testimonials.testimonial3.text': '"Вебінари та навчання були дуже корисними. Отримала багато практичних інструментів для саморозвитку."',
        'testimonials.testimonial3.author': '— Анна, Одеса',
        
        // Contact
        'contact.title': 'Контакти',
        'contact.text': 'Зв\'яжіться зі мною для запису на консультацію або дізнайтеся більше про мої послуги',
        'contact.email': 'Email',
        'contact.phone': '+380 96 815 8442',
        'contact.instagram': 'Instagram',
        'contact.business.title': 'ФОП Балацька Валентина Іванівна',
        'contact.business.tax': 'ІПН: 3306511143',
        'contact.business.kved': 'КВЕД: 86.90, 96.09, 85.59',
        
        // Form
        'form.name': 'Ваше ім\'я',
        'form.email': 'Ваш email',
        'form.message': 'Ваше повідомлення',
        'form.submit': 'Відправити повідомлення',
        
        // Footer
        'footer.text': '© 2024 Валентина Балацька. Всі права захищені.'
    },
    
    en: {
        // Navigation
        'nav.about': 'About Me',
        'nav.services': 'Services',
        'nav.qualifications': 'Qualifications',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.subtitle1': 'PRACTICAL PSYCHOLOGIST',
        'nav.subtitle2': 'SPECIALIST IN NUMEROLOGY & SYMBOLISM',
        
        // Hero
        'hero.name': 'VALENTYNA BALATSKA',
        'hero.title': 'PRACTICAL PSYCHOLOGIST',
        'hero.numerology': 'SPECIALIST IN NUMEROLOGY & SYMBOLISM',
        'hero.message': 'I will help you find inner harmony and unlock your potential!',
        'hero.cta': 'Book a Consultation',
        
        // About
        'about.title': 'About Me',
        'about.greeting': 'Hello!',
        'about.intro': 'I, Valentyna Balatska, am a practical psychologist, specialist in numerology and symbolism.',
        'about.approaches': 'I have studied various approaches and currently focus on two in my work: <strong>systemic-phenomenological approach</strong> — allows going deep and seeing the root causes of life problems; <strong>cognitive-behavioral therapy</strong> — allows changing ingrained thinking here and now.',
        'about.tools': 'Numerology and symbolism are wonderful tools for quick and quality diagnostics and finding correction vectors.',
        'about.question': 'What else do I have that can be useful?',
        'about.experience': 'I know from my own experience how to:',
        'about.experienceList': '',
        'about.exp1': 'live in a dysfunctional family, but be able to create a good life for yourself;',
        'about.exp2': 'be a hypochondriac, but master your anxiety and learn to balance it;',
        'about.exp3': 'fall into depression and pull yourself out of the swamp, like Baron Munchausen;',
        'about.exp4': 'have a habit of negative thinking and be able to uproot it, replacing it with the ability to think for yourself;',
        'about.exp5': 'live in poverty, but create a successful business;',
        'about.exp6': 'start crying from someone else\'s conflict nearby, but learn to constructively stand up for yourself;',
        'about.exp7': 'have an eating disorder and allow yourself to live without restrictions;',
        'about.exp8': 'lose, but be able to lean on yourself.',
        'about.roles': 'I am a woman, wife, mother, sister, friend, therapist, entrepreneur. And I continue to develop all my roles.',
        'about.responsibility': 'I don\'t take 50% responsibility for your work result — I take 100% responsibility for my work and leave you 100% responsibility for yours.',
        'about.promise': 'I know that with me you can walk the path to the goal: without judgment, in sincerity, with support and understanding.',
        
        // Services
        'services.title': 'My Services',
        'services.consultation.title': 'Individual Psychological Consultation',
        'services.consultation.price': '50 USD / one hour',
        'services.consultation.desc': 'online consultation via ZOOM',
        'services.webinar.title': 'Constellations',
        'services.webinar.individual': 'Individual - 100 USD',
        'services.webinar.group': 'Group - 75 USD',
        'services.webinar.substitute': 'Substitute - 15 USD',
        'services.training.title': 'Numerological Consultation + Diagnosis and Correction through Symbolism',
        'services.training.price': '150 USD',
        'services.training.desc': 'A complex that includes a complete numerological analysis, a short forecast for the year, and diagnosis and correction through symbolism.',
        
        // Qualifications
        'qualifications.title': 'Qualifications & Education',
        'qualifications.diploma.title': 'Certified Psychologist',
        'qualifications.diploma.desc': 'Higher education in "Practical Psychology" from the Taras Shevchenko Institute of Postgraduate Education',
        'qualifications.constellations.title': 'Systemic Family Constellations',
        'qualifications.constellations.desc': 'Therapist certificate in systemic-phenomenological approach from UpPro School',
        'qualifications.cbt.title': 'Cognitive Behavioral Therapy',
        'qualifications.cbt.desc': 'Currently studying 3rd method of CBT (Cognitive Behavioral Therapy) at UpPro School',
        'qualifications.membership.title': 'Cognitive-Behavioral Therapy (Professional Development)',
        
        // Testimonials
        'testimonials.title': 'Testimonials',
        'testimonials.testimonial1.text': '"Consultations with Valentyna helped me find inner harmony and deal with life challenges. Highly recommend!"',
        'testimonials.testimonial1.author': '— Elena, Kyiv',
        'testimonials.testimonial2.text': '"Numerology opened new perspectives for me. Valentyna professionally helped me understand my strengths."',
        'testimonials.testimonial2.author': '— Maria, Lviv',
        'testimonials.testimonial3.text': '"Webinars and training were very useful. I received many practical tools for self-development."',
        'testimonials.testimonial3.author': '— Anna, Odesa',
        
        // Contact
        'contact.title': 'Contact',
        'contact.text': 'Contact me to schedule a consultation or learn more about my services',
        'contact.email': 'Email',
        'contact.phone': '+380 96 815 8442',
        'contact.instagram': 'Instagram',
        'contact.business.title': 'FOP Balatska Valentyna Ivanivna',
        'contact.business.tax': 'Tax ID: 3306511143',
        'contact.business.kved': 'KVED: 86.90, 96.09, 85.59',
        
        // Form
        'form.name': 'Your name',
        'form.email': 'Your email',
        'form.message': 'Your message',
        'form.submit': 'Send message',
        
        // Footer
        'footer.text': '© 2024 Valentyna Balatska. All rights reserved.'
    },
    
    ru: {
        // Navigation
        'nav.about': 'Обо мне',
        'nav.services': 'Услуги',
        'nav.qualifications': 'Квалификация',
        'nav.testimonials': 'Отзывы',
        'nav.contact': 'Контакты',
        'nav.subtitle1': 'ПРАКТИЧЕСКИЙ ПСИХОЛОГ',
        'nav.subtitle2': 'СПЕЦИАЛИСТ ПО НУМЕРОЛОГИИ И СИМВОЛИЗМУ',
        
        // Hero
        'hero.name': 'ВАЛЕНТИНА БАЛАЦКАЯ',
        'hero.title': 'ПРАКТИЧЕСКИЙ ПСИХОЛОГ',
        'hero.numerology': 'СПЕЦИАЛИСТ ПО НУМЕРОЛОГИИ И СИМВОЛИЗМУ',
        'hero.message': 'Помогу найти внутреннюю гармонию и раскрыть ваш потенциал!',
        'hero.cta': 'Записаться на консультацию',
        
        // About
        'about.title': 'Обо мне',
        'about.greeting': 'Здравствуйте!',
        'about.intro': 'Я, Валентина Балацкая, практический психолог, специалист по нумерологии и символизму.',
        'about.approaches': 'Я изучала различные подходы и сейчас выделяю в своей работе два: <strong>системно-феноменологический подход</strong> — позволяет пойти в глубину и увидеть первопричины жизненных проблем; <strong>когнитивно-поведенческая терапия</strong> — позволяет здесь и сейчас менять укорененное мышление.',
        'about.tools': 'Нумерология и символизм — прекрасные инструменты для быстрой и качественной диагностики и поиска векторов коррекции.',
        'about.question': 'Что еще я имею, чем могу быть полезна?',
        'about.experience': 'Я на собственном примере знаю, как:',
        'about.experienceList': '',
        'about.exp1': 'жить в дисфункциональной семье, но суметь создать для себя хорошую жизнь;',
        'about.exp2': 'быть ипохондриком, но овладеть своей тревогой и научиться балансировать её;',
        'about.exp3': 'погрузиться в депрессию и вытащить себя из болота, как барон Мюнхгаузен;',
        'about.exp4': 'иметь привычку негативно мыслить и суметь искоренить её, заменив на способность думать за себя;',
        'about.exp5': 'жить в бедности, но создать успешный бизнес;',
        'about.exp6': 'начинать плакать от чужого конфликта рядом, но научиться конструктивно отстаивать себя;',
        'about.exp7': 'иметь РПП и позволить себе жить без запретов;',
        'about.exp8': 'терять, но уметь опереться на себя.',
        'about.roles': 'Я женщина, жена, мама, сестра, подруга, терапевт, предприниматель. И все свои роли я и дальше развиваю.',
        'about.responsibility': 'Я не беру на себя 50% за Ваш результат работы — я беру 100% своей ответственности за мою работу и оставляю Вам 100% ответственности за Вашу.',
        'about.promise': 'Я знаю, что со мной можно пройти путь к цели: без осуждения, в искренности, с поддержкой и пониманием.',
        
        // Services
        'services.title': 'Мои услуги',
        'services.consultation.title': 'Индивидуальная психологическая консультация',
        'services.consultation.price': '50 долл США / один час',
        'services.consultation.desc': 'онлайн консультация через ZOOM',
        'services.webinar.title': 'Расстановки',
        'services.webinar.individual': 'Индивидуальная - 100 долл США',
        'services.webinar.group': 'Групповая - 75 долл США',
        'services.webinar.substitute': 'Заместитель - 15 долл США',
        'services.training.title': 'Нумерологическая консультация + диагностика и коррекция через символизм',
        'services.training.price': '150 долл США',
        'services.training.desc': 'Комплекс, который включает в себя полный нумерологический разбор, краткий прогноз на год и диагностику и коррекцию через символизм.',
        
        // Qualifications
        'qualifications.title': 'Квалификация и образование',
        'qualifications.diploma.title': 'Дипломированный психолог',
        'qualifications.diploma.desc': 'Высшее образование по специальности «Практический психолог» Института последипломного образования им. Тараса Шевченко',
        'qualifications.constellations.title': 'Семейные системные расстановки',
        'qualifications.constellations.desc': 'Сертификат терапевта в методе системно-феноменологического подхода от UpPro School',
        'qualifications.cbt.title': 'Когнитивно-поведенческая терапия',
        'qualifications.cbt.desc': 'В настоящее время прохожу обучение 3 методу КПТ (когнитивно-поведенческая терапия) в UpPro School',
        'qualifications.membership.title': 'Когнитивно-поведенческая терапия (повышение квалификации)',
        
        // Testimonials
        'testimonials.title': 'Отзывы клиентов',
        'testimonials.testimonial1.text': '"Консультации с Валентиной помогли мне найти внутреннюю гармонию и разобраться с жизненными вызовами. Очень рекомендую!"',
        'testimonials.testimonial1.author': '— Елена, Киев',
        'testimonials.testimonial2.text': '"Нумерология открыла для меня новые перспективы. Валентина профессионально помогла понять мои сильные стороны."',
        'testimonials.testimonial2.author': '— Мария, Львов',
        'testimonials.testimonial3.text': '"Вебинары и обучение были очень полезными. Получила много практических инструментов для саморазвития."',
        'testimonials.testimonial3.author': '— Анна, Одесса',
        
        // Contact
        'contact.title': 'Контакты',
        'contact.text': 'Свяжитесь со мной для записи на консультацию или узнайте больше о моих услугах',
        'contact.email': 'Email',
        'contact.phone': '+380 96 815 8442',
        'contact.instagram': 'Instagram',
        'contact.business.title': 'ФОП Балацкая Валентина Ивановна',
        'contact.business.tax': 'ИНН: 3306511143',
        'contact.business.kved': 'КВЭД: 86.90, 96.09, 85.59',
        
        // Form
        'form.name': 'Ваше имя',
        'form.email': 'Ваш email',
        'form.message': 'Ваше сообщение',
        'form.submit': 'Отправить сообщение',
        
        // Footer
        'footer.text': '© 2024 Валентина Балацкая. Все права защищены.'
    }
};

// Get current language from localStorage or default to Ukrainian
let currentLang = localStorage.getItem('language') || 'uk';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML to support HTML tags like <strong>
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    changeLanguage(currentLang);
    
    // Language switcher buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    
    if (langButtons.length > 0) {
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                changeLanguage(lang);
            });
        });
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
});

