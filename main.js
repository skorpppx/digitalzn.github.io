/* ============================================================
   Digital ZN — Main JavaScript
   Sections:
   1. i18n Translations
   2. Language Switcher
   3. Scroll Reveal
   4. Contact Form
   5. Mobile Menu Toggle
   ============================================================ */

/* ── 1. i18n TRANSLATIONS ── */
const translations = {
  en: {
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get Started",
    "hero.badge": "Creative Digital Agency · Morocco",
    "hero.h1a": "We Build",
    "hero.h1b": "Digital",
    "hero.h1c": "Experiences",
    "hero.sub": "Design, development & video production — three experts, one vision. We craft brands that stand out in the digital landscape.",
    "hero.cta1": "Explore Services",
    "hero.cta2": "See Pricing",
    "stats.experts": "Experts",
    "stats.services": "Services",
    "stats.plans": "Plans",
    "stats.commitment": "Commitment",
    "services.tag": "What we do",
    "services.title": "Our Services",
    "services.sub": "From branding to development — everything your business needs to shine online.",
    "srv.smm": "Social Media Design",
    "srv.smm.desc": "Eye-catching posts, stories, covers, and templates tailored for your brand voice across all platforms.",
    "srv.logo": "Logo Design",
    "srv.logo.desc": "Crafting distinctive, timeless logos that communicate your brand's essence at a glance.",
    "srv.brand": "Brand Identity",
    "srv.brand.desc": "Full brand systems — concept, logo, color palette, typography, mockups, and brand guidelines.",
    "srv.graphic": "Graphic Design",
    "srv.graphic.desc": "Print-on-demand, books, roll-ups, brochures, animated PowerPoint presentations, and more.",
    "srv.web": "Landing Pages",
    "srv.web.desc": "High-converting landing pages built with HTML, CSS & JavaScript — clean, fast, and responsive.",
    "srv.video": "Video Editing",
    "srv.video.desc": "Professional video editing for reels, ads, and promotional content that captivates your audience.",
    "srv.videog": "Videography",
    "srv.videog.desc": "Photography and videography sessions to produce stunning visual content for your brand.",
    "pricing.tag": "Transparent Pricing",
    "pricing.title": "Choose Your Plan",
    "pricing.sub": "Two clear plans. No hidden fees. Prices in Moroccan Dirhams (MAD).",
    "plan.std.badge": "Standard",
    "plan.std.title": "Essential",
    "plan.std.sub": "Perfect for startups and small businesses getting started.",
    "plan.prem.badge": "⚡ Premium",
    "plan.prem.title": "Elite",
    "plan.prem.sub": "For brands that demand top-tier quality, depth, and full deliverables.",
    "plan.cta.std": "Get Standard",
    "plan.cta.prem": "Get Premium",
    "about.tag": "The Team",
    "about.title": "Three Experts, One Vision",
    "about.sub": "A tight-knit creative team from Morocco, combining design, code, and cinematography.",
    "team.r1": "Art Director",
    "team.n1": "Designer",
    "team.d1": "Visual identity, brand strategy, UI/UX and creative direction. Turns concepts into compelling visual stories.",
    "team.r2": "Video & Photo",
    "team.n2": "Video Editor & Photographer",
    "team.d2": "Cinematic video production, professional photography, and motion design for brands that move.",
    "team.r3": "Tech Lead",
    "team.n3": "Developer & Designer",
    "team.d3": "Full-stack development, graphic design, and data. Bridges design and technology to deliver pixel-perfect builds.",
    "contact.tag": "Get In Touch",
    "contact.title": "Start Your Project",
    "contact.sub": "Tell us about your project and we'll get back to you within 24 hours.",
    "form.name": "Full Name",
    "form.name.ph": "Your name",
    "form.email": "Email",
    "form.email.ph": "your@email.com",
    "form.service": "Service",
    "form.service.ph": "Choose a service",
    "form.plan": "Plan",
    "form.plan.ph": "Choose a plan",
    "form.msg": "Message",
    "form.msg.ph": "Describe your project...",
    "form.submit": "Send Message →",
    "footer.desc": "Creative digital agency based in Morocco. We design, build, and film for brands that want to stand out.",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.copy": "© 2025 Digital ZN. All rights reserved."
  },
  fr: {
    "nav.services": "Services",
    "nav.pricing": "Tarifs",
    "nav.about": "Équipe",
    "nav.contact": "Contact",
    "nav.cta": "Commencer",
    "hero.badge": "Agence Digitale Créative · Maroc",
    "hero.h1a": "Nous Créons",
    "hero.h1b": "des Expériences",
    "hero.h1c": "Digitales",
    "hero.sub": "Design, développement & production vidéo — trois experts, une vision. Nous façonnons des marques qui se démarquent.",
    "hero.cta1": "Nos Services",
    "hero.cta2": "Voir les Tarifs",
    "stats.experts": "Experts",
    "stats.services": "Services",
    "stats.plans": "Offres",
    "stats.commitment": "Engagement",
    "services.tag": "Ce que nous faisons",
    "services.title": "Nos Services",
    "services.sub": "Du branding au développement — tout ce dont votre entreprise a besoin pour briller en ligne.",
    "srv.smm": "Design Réseaux Sociaux",
    "srv.smm.desc": "Posts, stories, couvertures et templates percutants adaptés à l'identité de votre marque.",
    "srv.logo": "Création de Logo",
    "srv.logo.desc": "Des logos distinctifs et intemporels qui communiquent l'essence de votre marque en un coup d'œil.",
    "srv.brand": "Identité de Marque",
    "srv.brand.desc": "Systèmes de marque complets — concept, logo, palette, typographie, maquettes et charte graphique.",
    "srv.graphic": "Design Graphique",
    "srv.graphic.desc": "Print-on-demand, livres, roll-ups, brochures, présentations PowerPoint animées, et plus encore.",
    "srv.web": "Pages de Destination",
    "srv.web.desc": "Landing pages haute conversion en HTML, CSS & JavaScript — propres, rapides et responsives.",
    "srv.video": "Montage Vidéo",
    "srv.video.desc": "Montage professionnel pour reels, publicités et contenus promotionnels captivants.",
    "srv.videog": "Vidéographie",
    "srv.videog.desc": "Séances photo et vidéo pour produire un contenu visuel exceptionnel pour votre marque.",
    "pricing.tag": "Tarifs Transparents",
    "pricing.title": "Choisissez Votre Offre",
    "pricing.sub": "Deux offres claires. Sans frais cachés. Prix en Dirhams marocains (MAD).",
    "plan.std.badge": "Standard",
    "plan.std.title": "Essentiel",
    "plan.std.sub": "Idéal pour les startups et petites entreprises qui se lancent.",
    "plan.prem.badge": "⚡ Premium",
    "plan.prem.title": "Élite",
    "plan.prem.sub": "Pour les marques qui exigent une qualité supérieure et des livrables complets.",
    "plan.cta.std": "Choisir Standard",
    "plan.cta.prem": "Choisir Premium",
    "about.tag": "Notre Équipe",
    "about.title": "Trois Experts, Une Vision",
    "about.sub": "Une équipe créative soudée du Maroc, alliant design, code et cinématographie.",
    "team.r1": "Directeur Artistique",
    "team.n1": "Designer",
    "team.d1": "Identité visuelle, stratégie de marque, UI/UX et direction créative. Transforme les concepts en histoires visuelles.",
    "team.r2": "Vidéo & Photo",
    "team.n2": "Monteur & Photographe",
    "team.d2": "Production vidéo cinématique, photographie professionnelle et motion design pour les marques en mouvement.",
    "team.r3": "Responsable Tech",
    "team.n3": "Développeur & Designer",
    "team.d3": "Développement full-stack, design graphique et data. Fait le pont entre design et technologie.",
    "contact.tag": "Nous Contacter",
    "contact.title": "Démarrez Votre Projet",
    "contact.sub": "Parlez-nous de votre projet, nous vous répondons sous 24 heures.",
    "form.name": "Nom Complet",
    "form.name.ph": "Votre nom",
    "form.email": "Email",
    "form.email.ph": "vous@email.com",
    "form.service": "Service",
    "form.service.ph": "Choisir un service",
    "form.plan": "Offre",
    "form.plan.ph": "Choisir une offre",
    "form.msg": "Message",
    "form.msg.ph": "Décrivez votre projet...",
    "form.submit": "Envoyer le Message →",
    "footer.desc": "Agence digitale créative basée au Maroc. Nous designons, développons et filmons pour les marques qui veulent se démarquer.",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.copy": "© 2025 Digital ZN. Tous droits réservés."
  },
  ar: {
    "nav.services": "الخدمات",
    "nav.pricing": "الأسعار",
    "nav.about": "الفريق",
    "nav.contact": "تواصل",
    "nav.cta": "ابدأ الآن",
    "hero.badge": "وكالة رقمية إبداعية · المغرب",
    "hero.h1a": "نصنع",
    "hero.h1b": "تجارب",
    "hero.h1c": "رقمية مميزة",
    "hero.sub": "تصميم، تطوير وإنتاج فيديو — ثلاثة خبراء، رؤية واحدة. نبني علامات تجارية تتميز في المشهد الرقمي.",
    "hero.cta1": "اكتشف الخدمات",
    "hero.cta2": "عرض الأسعار",
    "stats.experts": "خبراء",
    "stats.services": "خدمات",
    "stats.plans": "خطط",
    "stats.commitment": "التزام",
    "services.tag": "ما نقدمه",
    "services.title": "خدماتنا",
    "services.sub": "من الهوية البصرية إلى التطوير — كل ما تحتاجه شركتك للتألق عبر الإنترنت.",
    "srv.smm": "تصميم وسائل التواصل الاجتماعي",
    "srv.smm.desc": "منشورات، قصص، وغلافات جذابة مخصصة لهوية علامتك التجارية على كل المنصات.",
    "srv.logo": "تصميم شعار",
    "srv.logo.desc": "شعارات مميزة وخالدة تعكس جوهر علامتك التجارية في لمحة.",
    "srv.brand": "هوية بصرية متكاملة",
    "srv.brand.desc": "أنظمة علامة تجارية شاملة — فكرة، شعار، ألوان، خطوط، نماذج واقعية وأدلة علامة تجارية.",
    "srv.graphic": "تصميم جرافيك",
    "srv.graphic.desc": "طباعة عند الطلب، كتب، لافتات، مطويات، عروض PowerPoint متحركة والمزيد.",
    "srv.web": "صفحات الهبوط",
    "srv.web.desc": "صفحات هبوط بتحويل عالٍ مبنية بـ HTML, CSS & JavaScript — نظيفة وسريعة ومتجاوبة.",
    "srv.video": "مونتاج فيديو",
    "srv.video.desc": "مونتاج فيديو احترافي للريلز والإعلانات والمحتوى الترويجي الجذاب.",
    "srv.videog": "تصوير ومونتاج",
    "srv.videog.desc": "جلسات تصوير فوتوغرافي وفيديو لإنتاج محتوى بصري استثنائي لعلامتك التجارية.",
    "pricing.tag": "أسعار شفافة",
    "pricing.title": "اختر خطتك",
    "pricing.sub": "خطتان واضحتان. بدون رسوم خفية. الأسعار بالدرهم المغربي (MAD).",
    "plan.std.badge": "قياسي",
    "plan.std.title": "الأساسي",
    "plan.std.sub": "مثالي للمشاريع الناشئة والشركات الصغيرة.",
    "plan.prem.badge": "⚡ بريميوم",
    "plan.prem.title": "النخبة",
    "plan.prem.sub": "للعلامات التجارية التي تطلب جودة عالية ومخرجات متكاملة.",
    "plan.cta.std": "اختر القياسي",
    "plan.cta.prem": "اختر البريميوم",
    "about.tag": "الفريق",
    "about.title": "ثلاثة خبراء، رؤية واحدة",
    "about.sub": "فريق إبداعي متماسك من المغرب، يجمع التصميم، البرمجة والتصوير.",
    "team.r1": "مدير فني",
    "team.n1": "مصمم",
    "team.d1": "هوية بصرية، استراتيجية علامة تجارية، UI/UX وإدارة إبداعية. يحوّل الأفكار إلى قصص بصرية.",
    "team.r2": "فيديو وصور",
    "team.n2": "مونتير ومصور",
    "team.d2": "إنتاج فيديو سينمائي، تصوير احترافي وموشن ديزاين للعلامات التجارية.",
    "team.r3": "قائد تقني",
    "team.n3": "مطور ومصمم",
    "team.d3": "تطوير كامل، تصميم جرافيك وبيانات. يربط التصميم بالتكنولوجيا لتحقيق نتائج متقنة.",
    "contact.tag": "تواصل معنا",
    "contact.title": "ابدأ مشروعك",
    "contact.sub": "أخبرنا عن مشروعك وسنرد عليك خلال 24 ساعة.",
    "form.name": "الاسم الكامل",
    "form.name.ph": "اسمك",
    "form.email": "البريد الإلكتروني",
    "form.email.ph": "بريدك@email.com",
    "form.service": "الخدمة",
    "form.service.ph": "اختر خدمة",
    "form.plan": "الخطة",
    "form.plan.ph": "اختر خطة",
    "form.msg": "الرسالة",
    "form.msg.ph": "صف مشروعك...",
    "form.submit": "إرسال الرسالة ←",
    "footer.desc": "وكالة رقمية إبداعية مقرها المغرب. نصمم ونبني ونصور للعلامات التجارية التي تريد التميز.",
    "footer.services": "الخدمات",
    "footer.contact": "التواصل",
    "footer.copy": "© 2025 Digital ZN. جميع الحقوق محفوظة."
  }
};

/* ── 2. LANGUAGE SWITCHER ── */
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  const html = document.documentElement;

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl');
  } else {
    html.setAttribute('lang', lang);
    html.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl');
  }

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const map = { 'en': 'EN', 'fr': 'FR', 'ar': 'ع' };
    if (btn.textContent === map[lang]) btn.classList.add('active');
  });
}

/* ── 3. SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ── 4. CONTACT FORM ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit] span');
  const orig = btn.textContent;
  btn.textContent = '✓ Message Sent!';
  setTimeout(() => { btn.textContent = orig; }, 3000);
}

/* ── 5. MOBILE MENU TOGGLE ── */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:var(--bg2);padding:24px;border-bottom:1px solid var(--border);gap:20px;z-index:999';
  }
}
