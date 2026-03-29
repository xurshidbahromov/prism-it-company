const fs = require('fs');
const path = require('path');

const locales = ['en', 'uz', 'ru'];
const basePath = path.join(__dirname, '../messages');

const additions = {
  en: {
    AboutPage: {
      metadata: { title: "About | PRISM", description: "The team and vision behind PRISM software engineering." }
    },
    AboutComponent: {
      hero: { badge: "About Us", heading1: "We don't just build", headingHighlight: "software.", description: "We architect digital infrastructure that powers the next generation of ambitious companies." },
      stats: {
        clients: { value: "50+", label: "Enterprise Clients" },
        revenue: { value: "$120M+", label: "Client Revenue Generated" },
        years: { value: "8 yrs", label: "In the Industry" },
        countries: { value: "12", label: "Countries Served" }
      },
      mission: { badge: "Who We Are", heading1: "A team of builders,", headingHighlight: "not just coders.", p1: "PRISM was founded on a simple idea: the best software teams in the world shouldn't be gatekept behind Silicon Valley zip codes. We built a distributed team of elite engineers and designers who operate with the rigour of a product company — not a traditional agency.", p2: "Today, we partner with startups scaling their first platform and enterprises re-architecting legacy systems alike. What unites all our work is an unwillingness to compromise on quality." },
      teamSection: { badge: "The Team", heading1: "The people behind", headingHighlight: "the product.", team: {
        alex: { name: "Alex Chen", role: "Founder & CEO", bio: "Ex-Google engineer with 12 years building scalable systems. Believes great software is 80% thinking, 20% code." },
        sara: { name: "Sara Kim", role: "Head of Design", bio: "Former lead designer at a Series B fintech. Obsessed with the space between pixels and the human experience." },
        james: { name: "James Liu", role: "CTO", bio: "Infrastructure architect turned product engineer. Built systems that process 10M+ transactions daily." },
        mia: { name: "Mia Patel", role: "Head of Delivery", bio: "Keeps every project on time, on spec, and on budget — all while making it look effortless." }
      }},
      principles: { badge: "Our Principles", heading1: "How we work,", headingHighlight: "and why it matters.", values: {
        v1: { title: "Engineering First", desc: "We don't ship fast — we ship right. Every decision is driven by technical excellence, not shortcuts." },
        v2: { title: "Radical Transparency", desc: "No black boxes. We work alongside your team with full visibility into process, timelines, and trade-offs." },
        v3: { title: "Outcomes Over Output", desc: "Lines of code don't matter. What matters is measurable business impact — velocity, retention, revenue." }
      }}
    },
    DetailedCapabilities: {
      badge: "Deep Dive", heading1: "Our Core Technological", heading2: "Pillars & Capabilities",
      inquire: "Inquire regarding",
      items: {
        creative: { title: "Creative UI/UX Design", tagline: "Human-Centered Digital Experiences", desc: "We don't just 'design' interfaces — we engineer user journeys based on behavioral psychology and interaction data. Our goal is to create emotional resonance that drives logic-driven conversions.", features: { f1: "User Research & Journey Mapping", f2: "High-Fidelity Interaction Prototyping", f3: "Design Systems & Component Libraries", f4: "Accessibility (WCAG) Auditing", f5: "A/B Testing & Optimization" } },
        fullstack: { title: "Full-Stack Engineering", tagline: "Scalable. Resilient. High-Performance.", desc: "Deploying production-ready applications built to handle millions of requests. We prioritize type-safety, efficient state management, and optimized delivery pipelines for 99.9% reliability.", features: { f1: "Modern React/Next.js Architecture", f2: "Type-Safe Backend (Node/Go/Python)", f3: "Distributed Systems Design", f4: "Real-time Data Streaming", f5: "Performance Tuning & Core Web Vitals" } },
        ai: { title: "AI & Intelligent Automation", tagline: "Beyond Generative AI — True Intelligence", desc: "We bridge the gap between AI hype and business value. From custom fine-tuned LLMs to autonomous workflow agents, we build intelligence into the fabric of your infrastructure.", features: { f1: "Custom LLM Fine-Tuning & RAG", f2: "Predictive Analytics & Forecasting", f3: "Autonomous Agents & Workflow Automation", f4: "Natural Language Search (Vector DBs)", f5: "Computer Vision & Pattern Recognition" } },
        cloud: { title: "Cloud & Infrastructure", tagline: "Automated. Secure. Globally Scalable.", desc: "DevOps is the heartbeat of modern software. We engineer automated ecosystems that allow your team to ship faster with confidence, using zero-trust security and infrastructure-as-code.", features: { f1: "IaC (Terraform / Pulumi)", f2: "Kubernetes & Container Orchestration", f3: "CI/CD Pipeline Automation", f4: "Multi-Cloud & Edge Computing", f5: "Zero-Trust Security & Compliance" } }
      }
    },
    ExpertisePage: {
      metadata: { title: "Expertise | PRISM", description: "Deep dive into our engineering capabilities." },
      hero: { badge: "Our Expertise", heading1: "Engineering for", headingHighlight: "the next frontier.", desc: "We bridge the gap between complex technical challenges and elegant, high-performance digital products." }
    },
    ProcessPage: {
      metadata: { title: "Process | PRISM", description: "How we build digital products with predictable excellence." },
      hero: { badge: "Our Methodology", heading1: "Built with", headingHighlight: "precision.", desc: "Protocol-driven engineering that replaces agency chaos with predictable excellence." }
    },
    WorkPage: {
      metadata: { title: "Work | PRISM", description: "Our recent case studies and engineering projects." },
      hero: { badge: "Case Studies", heading1: "Proof of", headingHighlight: "execution.", desc: "A showcase of engineering challenges solved and digital products scaled." }
    },
    ContactPage: {
      metadata: { title: "Contact | PRISM", description: "Start your project with PRISM IT Company." },
      hero: { badge: "Start a Project", heading1: "Let's build something", headingHighlight: "remarkable.", desc: "Tell us about your project. We'll review your brief and respond within 24 hours with a tailored proposal." },
      step1: { badge: "About You", name: "Full Name *", email: "Email *", company: "Company", phone: "Phone (optional)" },
      step2: { badge: "Project Type", types: { web: { label: "Web Application", desc: "SaaS, internal tools, platforms" }, mobile: { label: "Mobile App", desc: "iOS, Android, React Native" }, design: { label: "UI/UX Design", desc: "Brand identity, design system" }, ai: { label: "AI Integration", desc: "LLMs, automation, agents" }, cloud: { label: "Cloud & DevOps", desc: "Infrastructure, CI/CD, migration" }, other: { label: "Something Else", desc: "Let's talk about it" } } },
      step3: { badge: "Budget & Timeline", budgetRange: "Budget Range", timeline: "Timeline" },
      step4: { badge: "Project Brief", summary: "Project Summary *", placeholderText: "Describe your project, goals, and any specific requirements...", refUrl: "Reference or Inspiration URL (optional)" },
      submitBtn: "Submit Your Brief",
      submittingBtn: "Sending...",
      success: { title: "Brief received.", desc: "Thank you! Our team will review your project brief and reach out within 24 hours with a tailored proposal.", anotherBtn: "Submit another brief" },
      aside: { resBadge: "24hr Response", resDesc: "We review every project brief personally and respond with a detailed proposal — no auto-replies, no generic quotes.", nextBadge: "What happens next", steps: { s1: { title: "Brief Review", desc: "Our team reviews your submission and clarifies any questions." }, s2: { title: "Discovery Call", desc: "A 30-min kickoff to align on goals, scope, and timeline." }, s3: { title: "Tailored Proposal", desc: "You receive a precise quote and phased project roadmap." } }, contactBadge: "Prefer to reach out directly?", email: "Email", phone: "Phone", office: "Office" }
    }
  },
  uz: {
    AboutPage: {
      metadata: { title: "Biz Haqimizda | PRISM", description: "PRISM dasturiy ta'minotining ortidagi jamoa." }
    },
    AboutComponent: {
      hero: { badge: "Biz Haqimizda", heading1: "Biz shunchaki dastur", headingHighlight: "yaratmaymiz.", description: "Biz eng ilg'or kompaniyalarning kelajak avlodini ishga tushiradigan raqamli infratuzilmani yaratamiz." },
      stats: {
        clients: { value: "50+", label: "Korporativ Mijozlar" },
        revenue: { value: "$120M+", label: "Mijozlarga Keltirilgan Daromad" },
        years: { value: "8 yil", label: "Sohada Tajriba" },
        countries: { value: "12", label: "Qamrab Olingan Davlatlar" }
      },
      mission: { badge: "Biz Kimmiz", heading1: "Biz shunchaki koderlar emas,", headingHighlight: "yaratuvchilar jamoasimiz.", p1: "PRISM bitta oddiy g'oya ustiga qurilgan: dunyodagi eng zo'r dasturiy jamoalar faqat Silikon Vodiysi kabi joylarda joriy etilmasligi kerak. Biz an'anaviy agentlik emas, balki mahsulot kompaniyasi kabi ishlaydigan eng zamonaviy muhandislar va dizaynerlar jamoasini to'pladik.", p2: "Bugungi kunda biz dastlabki platformalarini qulayotgan startaplar va eski tizimini yangilayotgan korxonalar bilan ishlaymiz. Bizni faqat bitta narsa birlashtiradi – sifatdan voz kechmaslik." },
      teamSection: { badge: "Jamoa", heading1: "Mahsulot", headingHighlight: "ortidagi insonlar.", team: {
        alex: { name: "Alex Chen", role: "Asoschi va CEO", bio: "Qamrovli tizimlarni barpo etishda 12 yillik tajribaga ega sobiq Google muhandisi. Eng yaxshi dastur 80% o'ylash, 20% kod yozish bilan bo'lishiga ishonadi." },
        sara: { name: "Sara Kim", role: "Dizayn Bo'limi Boshlig'i", bio: "Series B fintech kompaniyasining sobiq bosh dizayneri. Tajriba va go'zallik o'rtasidagi uzviy bog'liqlikni yaratishga oshiq." },
        james: { name: "James Liu", role: "CTO", bio: "Infratuzilma arxitektori. Kuniga 10 milliondan ortiq tranzaksiyani bexato amalga oshiradigan tizimlarni qura oladi." },
        mia: { name: "Mia Patel", role: "Loyiha Menejeri", bio: "Har bir loyihani o'z vaqtida, aniq va ortiqcha xarajatlarsiz bajarilishini ta'minlaydi." }
      }},
      principles: { badge: "Bizning Tamoyillarimiz", heading1: "Qanday ishlaymiz", headingHighlight: "va nega bu muhim.", values: {
        v1: { title: "Muhandislik Birinchi O'rinda", desc: "Biz tez ro'yobga chiqarmaymiz — biz to'g'ri ro'yobga chiqaramiz. Har bir qaror oson yo'l emas, texnik mukammallikdan kelib chiqadi." },
        v2: { title: "To'liq Shaffoflik", desc: "Bizning jarayonimiz ochiq kitob kabidir. Mijozlarimiz doimo hamma jarayonlardan va muddatlardan xabardor bo'lib boradi." },
        v3: { title: "Natija Jarayondan Muhimroq", desc: "Kodning hajmi muhim emas. Haqiqiy muhim narsa bu – foyda, samaradorlik va biznesga ko'rsatilgan ta'sirdir." }
      }}
    },
    DetailedCapabilities: {
      badge: "Chuqurroq O'rganish", heading1: "Bizning Asosiy", heading2: "Texnologik Imkoniyatlarimiz",
      inquire: "So'rov yuborish: ",
      items: {
        creative: { title: "Kreativ UI/UX Dizayn", tagline: "Insonlarga mo'ljallangan raqamli tajribalar", desc: "Biz shunchaki interfeys dizayni qilmaymiz — xulq-atvor psixologiyasi va muloqot ma'lumotlari asosida foydalanuvchi safarini qurib chiqamiz.", features: { f1: "Foydalanuvchi Tajribasini O'rganish", f2: "Yuqori Aniqlikdagi Prototiplar", f3: "Dizayn Tizimlari", f4: "Muvofiqlik (WCAG) Auditi", f5: "A/B Testi" } },
        fullstack: { title: "Full-Stack Dasturlash", tagline: "Kengayuvchan va Barqaror Dasturlash", desc: "Millionlab so'rovlarni xavfsiz qabul qiladigan ishonchli tizimlar quramiz.", features: { f1: "Zamonaviy React/Next.js Arxitekturasi", f2: "Xavfsiz Backend (Node/Go/Python)", f3: "Taqsimlangan Tizimlar", f4: "Onlayn Ma'lumot Uzatish", f5: "Maksimal Samaradorlik" } },
        ai: { title: "Sun'iy Intellekt va Avtomatika", tagline: "Shunchaki generativ AI emas — Haqiqiy Aql", desc: "Maxsus tuzilgan avtomatika hamjamiyatlari yordamida biznesingizga chuqur ta'sir ko'rsatuvchi dasturiy robotlarni yaratamiz.", features: { f1: "Custom LLM RAG Mode", f2: "Bashoratli Analitika", f3: "Avtonom Agentlar va Avtomatika", f4: "Ilg'or Qidiruv Tizimlari", f5: "Naqshni Aniqlash va Ko'rish" } },
        cloud: { title: "Bulutli Tizimlar", tagline: "Xavfsiz va Global Kengayuvchan", desc: "Yuqori darajadagi xavfsizlik va barqarorlik orqali kompaniyamiz xohlagan davlatdagi eng zamonaviy DevOps protokollarini o'rnatishi mumkin.", features: { f1: "IaC (Terraform / Pulumi)", f2: "Kubernetes Va Konteynerlar", f3: "CI/CD Avtomatlashtirish", f4: "Multi-Cloud", f5: "Xavfsizlik va Muvofiqlik (Zero-Trust)" } }
      }
    },
    ExpertisePage: {
      metadata: { title: "Imkoniyatlar | PRISM", description: "Bizning texnik muhandislik imkoniyatlarimiz bilan tanishing." },
      hero: { badge: "Bizning Tajribamiz", heading1: "Keyingi ufq uchun", headingHighlight: "muhandislik.", desc: "Biz qiyin texnik muammolar va eng sifatli raqamli mahsulotlarni bir biriga ulaymiz." }
    },
    ProcessPage: {
      metadata: { title: "Jarayon | PRISM", description: "Raqamli mahsulotlarni kutilgan a'lo darajada  yaratish bosqichlari." },
      hero: { badge: "Metodologiya", heading1: "Aniq metodlar", headingHighlight: "orqali qurilgan.", desc: "Agentlikdagi betartiblikning o'rniga oldindan aytish mumkin bo'lgan aniq sifat." }
    },
    WorkPage: {
      metadata: { title: "Portfolio | PRISM", description: "Qurib muvaffaqiyatli yakuniga yetkazilgan loyihalarimiz." },
      hero: { badge: "Keyslar", heading1: "Amaliyotdagi", headingHighlight: "natijalar.", desc: "Biz bajarib ko'rsatgan yuqori muhandislik namunalari va platformalar ko'rgazmasi." }
    },
    ContactPage: {
      metadata: { title: "Aloqa | PRISM", description: "PRISM IT Company bilan loyihangizni boshlang." },
      hero: { badge: "Loyihani Boshlash", heading1: "Keling birgalikda nimanidir", headingHighlight: "buyuk qilamiz.", desc: "O'z loyihangiz haqida so'zlab bering. Biz sizning talabingizni ko'rib chiqamiz va biznesingiz uchun eng optimal maslahatni beramiz." },
      step1: { badge: "Siz Haqigizda", name: "To'liq Ism *", email: "Pochta Oynasi *", company: "Kompaniya Nomi", phone: "Telefon raqami (Ixtiyoriy)" },
      step2: { badge: "Loyiha Turi", types: { web: { label: "Veb Ilova", desc: "SaaS, ichki boshqaruv tizimlari" }, mobile: { label: "Mobil Ilova", desc: "iOS, Android" }, design: { label: "UI/UX Dizayn", desc: "Brend va arxitektura" }, ai: { label: "Sun'iy Intellekt", desc: "LLMs, Avtomatika var botlar" }, cloud: { label: "Bulut va DevOps", desc: "Infratuzilma va bulutli joy" }, other: { label: "Boshqa turdagi", desc: "Biz bemalol hal qilib bera olamiz" } } },
      step3: { badge: "Budjet va Vaqt", budgetRange: "Budjet Oralig'i", timeline: "Muddat" },
      step4: { badge: "Loyiha Sharhi", summary: "Loyiha haqida qisqacha *", placeholderText: "Sizga qanday loyiha kerakligini shu yerga yozishingiz mumin...", refUrl: "Nimanidir nusxasi yoki ilhombaxsh link (ixtiyoriy)" },
      submitBtn: "Yuborish",
      submittingBtn: "Yuborilmoqda...",
      success: { title: "Murojaat qabul qilindi.", desc: "Rahmat! Murojaatingiz bizning mutaxassislarga yuborildi. Ular tez orada siz bilan aloqaga chiqishadi.", anotherBtn: "Yana bitta jo'natish" },
      aside: { resBadge: "24 soatlik Javob", resDesc: "Biz har bir loyihani shaxsan o'zimiz baholab eng kerakli va ma'qul taklifni tayyorlaymiz.", nextBadge: "Keyin nima bo'ladi", steps: { s1: { title: "Ko'rib Chiqish", desc: "Biz sizning arizangizni batafsil tekshiramiz." }, s2: { title: "Discovery Qo'ng'irog'i", desc: "Maqsad va natijalarni 30 daqiqa uchrashuv orasida kelishamiz." }, s3: { title: "Aniq Taklif", desc: "Sizga biz tomondan aniq qilinadigan vazifalar tushirilgan hujjat tashlab beriladi." } }, contactBadge: "To'g'ridan to'g'ri aloqa", email: "Email", phone: "Telefon", office: "Ofis" }
    }
  },
  ru: {
    AboutPage: {
      metadata: { title: "О нас | PRISM", description: "Команда и видение программной инженерии PRISM." }
    },
    AboutComponent: {
      hero: { badge: "О Нас", heading1: "Мы не просто создаем", headingHighlight: "программное обеспечение.", description: "Мы проектируем цифровую инфраструктуру, которая поддерживает следующее поколение амбициозных компаний." },
      stats: {
        clients: { value: "50+", label: "Корпоративных Клиентов" },
        revenue: { value: "$120M+", label: "Выручка, Сгенерированная Клиентам" },
        years: { value: "8 лет", label: "На Рынке" },
        countries: { value: "12", label: "Стран Охвата" }
      },
      mission: { badge: "Кто Мы", heading1: "Команда создателей,", headingHighlight: "а не просто кодеров.", p1: "PRISM была основана на простой идее: лучшие в мире команды разработчиков не должны быть только в Кремниевой долине. Мы собрали команду элитных инженеров и дизайнеров.", p2: "Сегодня мы работаем со стартапами, масштабирующими свою первую платформу, и предприятиями, модернизирующими старые системы. Нас объединяет одно – бескомпромиссность в отношении качества." },
      teamSection: { badge: "Команда", heading1: "Люди стоящие за ", headingHighlight: "продуктом.", team: {
        alex: { name: "Алекс Чен", role: "Основатель и CEO", bio: "Бывший инженер Google с 12-летним опытом. Считает, что хорошее ПО — это на 80% мышления и на 20% кода." },
        sara: { name: "Сара Ким", role: "Глава отдела Дизайна", bio: "Бывший ведущий дизайнер в fintech-компании Series B. Одержима идеальными пропорциями и качеством." },
        james: { name: "Джеймс Лю", role: "CTO", bio: "Инфраструктурный архитектор. Создал системы, которые ежедневно обрабатывают более 10 миллионов транзакций." },
        mia: { name: "Миа Патель", role: "Руководитель Проектов", bio: "Следит за тем, чтобы каждый проект выполнялся в срок, по спецификации и в рамках бюджета." }
      }},
      principles: { badge: "Наши Принципы", heading1: "Как мы работаем,", headingHighlight: "и почему это важно.", values: {
        v1: { title: "Инженерия В Первую Очередь", desc: "Мы не спешим выпустить проект – мы выпускаем его правильно. Каждое решение продиктовано технической необходимостью." },
        v2: { title: "Полная Прозрачность", desc: "Никаких 'черных ящиков'. Вы всегда в курсе каждого этапа и таймлайна разработки." },
        v3: { title: "Результат Важнее Процесса", desc: "Количество строк кода не имеет значения. Важно то, как продукт влияет на выручку и конверсию." }
      }}
    },
    DetailedCapabilities: {
      badge: "Углубленное Погружение", heading1: "Наши Основные", heading2: "Технологические Возможности",
      inquire: "Подать заявку: ",
      items: {
        creative: { title: "Креативный UI/UX Дизайн", tagline: "Ориентированный на человека", desc: "Мы проектируем пользовательские пути на основе поведенческой психологии. Наша цель — создать эмоциональный резонанс и конверсию.", features: { f1: "Исследование путей пользователей", f2: "Прототипирование высокого уровня", f3: "Дизайн системы", f4: "Аудит доступности (WCAG)", f5: "A/B Тестирование" } },
        fullstack: { title: "Full-Stack Разработка", tagline: "Масштабируемость и Производительность", desc: "Развертывание приложений, готовых к обработке миллионов запросов. Гарантия надежности 99.9%.", features: { f1: "Архитектура React/Next.js", f2: "Безопасный Backend (Node/Go/Python)", f3: "Распределенные системы", f4: "Потоковая передача данных", f5: "Максимальная Производительность" } },
        ai: { title: "ИИ и Автоматизация", tagline: "Настоящий Искусственный Интеллект", desc: "Мы преодолеваем разрыв между хайпом вокруг ИИ и реальной пользой для бизнеса через собственные LLM и автономные агенты.", features: { f1: "Пользовательские LLM и RAG", f2: "Предиктивная Аналитика", f3: "Автономные агенты", f4: "Семантический поиск", f5: "Анализ Паттернов И Видение" } },
        cloud: { title: "Облака и Инфраструктура", tagline: "Безопасно. Автоматизировано.", desc: "DevOps — это сердце современного ПО. Мы разрабатываем автоматизированные экосистемы для быстрого выхода на рынок.", features: { f1: "IaC (Terraform / Pulumi)", f2: "Kubernetes и Контейнеры", f3: "CI/CD Автоматизация", f4: "Multi-Cloud", f5: "Безопасность (Zero-Trust)" } }
      }
    },
    ExpertisePage: {
      metadata: { title: "Экспертиза | PRISM", description: "Глубокое погружение в наши инженерные возможности." },
      hero: { badge: "Наша Экспертиза", heading1: "Инженерия для", headingHighlight: "будущего.", desc: "Мы стираем грань между сложными техническими проблемами и элегантными цифровыми продуктами." }
    },
    ProcessPage: {
      metadata: { title: "Процесс | PRISM", description: "Как мы создаем цифровые продукты." },
      hero: { badge: "Наша Методология", heading1: "Построено с", headingHighlight: "точностью.", desc: "Протокол-ориентированная инженерия, заменяющая хаос предсказуемым совершенством." }
    },
    WorkPage: {
      metadata: { title: "Портфолио | PRISM", description: "Наши недавние успешные проекты." },
      hero: { badge: "Кейсы", heading1: "Реальные", headingHighlight: "результаты.", desc: "Демонстрация решенных архитектурных задач и масштабируемых цифровых продуктов." }
    },
    ContactPage: {
      metadata: { title: "Контакты | PRISM", description: "Начните проект с PRISM IT Company." },
      hero: { badge: "Начать Проект", heading1: "Давайте создадим что-то", headingHighlight: "великолепное.", desc: "Расскажите нам о вашем проекте. Мы ответим детальным коммерческим предложением в течение 24 часов." },
      step1: { badge: "О Вас", name: "Полное Имя *", email: "Почта *", company: "Название Компании", phone: "Телефон (необязательно)" },
      step2: { badge: "Тип Проекта", types: { web: { label: "Веб-Приложение", desc: "SaaS, внутренние системы" }, mobile: { label: "Мобильное Приложение", desc: "iOS, Android" }, design: { label: "UI/UX Дизайн", desc: "Фирменный стиль, дизайн-система" }, ai: { label: "Сфера ИИ", desc: "LLMs, автоматизация, агенты" }, cloud: { label: "Облако и DevOps", desc: "Инфраструктура, CI/CD" }, other: { label: "Что-то другое", desc: "Давайте это обсудим" } } },
      step3: { badge: "Бюджет и Сроки", budgetRange: "Диапазон Бюджета", timeline: "Сроки" },
      step4: { badge: "Бриф Проекта", summary: "Краткое описание *", placeholderText: "Какие у вас требования и спецификации...", refUrl: "Опциональные ссылки на примеры" },
      submitBtn: "Отправить Бриф",
      submittingBtn: "Отправка...",
      success: { title: "Бриф получен.", desc: "Спасибо! Наша команда рассмотрит бриф вашего проекта и ответит в течение 24 часов.", anotherBtn: "Отправить еще один" },
      aside: { resBadge: "Ответ За 24ч", resDesc: "Мы обрабатываем каждую заявку детально, чтобы составить точный бюджет и КП.", nextBadge: "Что будет дальше", steps: { s1: { title: "Обзор заявки", desc: "Мы рассматриваем вашу заявку и уточняем детали." }, s2: { title: "Дисскавери звонок", desc: "30-минутный звонок для согласования целей и сроков." }, s3: { title: "Специальное КП", desc: "Вы получаете точное предложение и дорожную карту." } }, contactBadge: "Хотите связаться напрямую?", email: "Почта", phone: "Телефон", office: "Офис" }
    }
  }
};

for (const lang of locales) {
  const filePath = path.join(basePath, `${lang}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const updatedContent = { ...content, ...additions[lang] };
  fs.writeFileSync(filePath, JSON.stringify(updatedContent, null, 2) + '\n');
}

console.log('Language files updated successfully.');
