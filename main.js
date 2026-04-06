/* =========================================
   Digital ZN — Main JavaScript
   ========================================= */

/* ── Translations ── */
const i18n = {
  en: {
    nav: { home: 'Home', services: 'Services', work: 'Work', about: 'About', contact: 'Contact' },
    hero: {
      badge: 'Digital Marketing Agency',
      the: 'The', feed: 'Feed',
      tagline: 'Digital excellence meets creative power.',
      sub: 'Creative digital agency based in Morocco. We design, build, and film for brands that want to stand out.',
      cta: 'Start Your Journey', see: 'See Our Work', scroll: 'Scroll to explore',
    },
    services: {
      title: 'What We Do',
      subtitle: 'End-to-end digital solutions for brands that dare to lead.',
      items: [
        { icon: '📱', title: 'Social Media Design', desc: 'Eye-catching posts, stories, covers, and templates tailored for your brand voice across all platforms.', num: '01' },
        { icon: '🖨️', title: 'Graphic Design',      desc: 'Print-on-demand, books, roll-ups, brochures, animated PowerPoint presentations, and more.', num: '02' },
        { icon: '💎', title: 'Brand Identity',           desc: 'Full brand systems — concept, logo, color palette, typography, mockups, and brand guidelines.', num: '03' },
        { icon: '🌐', title: 'Landing Pages',         desc: 'High-converting landing pages built with HTML, CSS & JavaScript — clean, fast, and responsive.', num: '04' },
        { icon: '🎬', title: 'Video Editing',         desc: 'Professional video editing for reels, ads, and promotional content that captivates your audience.', num: '05' },
        { icon: '🎥', title: 'Videography',     desc: 'Photography and videography sessions to produce stunning visual content for your brand.', num: '06' },
      ],
    },
    stats: {
      label: 'By The Numbers',
      title: 'The Numbers Speak',
      items: [
        { value: 500, suffix: '+', label: 'Projects Delivered' },
        { value: 120, suffix: '+', label: 'Happy Clients' },
        { value: 8,   suffix: '+', label: 'Years of Excellence' },
        { value: 3,   suffix: '',  label: 'Countries Active' },
      ],
    },
    work: {
      title: 'Selected Work',
      subtitle: 'A glimpse of campaigns that made markets move.',
      viewAll: 'View All Work →',
    },
    about: {
      title: 'We Are Digital ZN',
      body: 'Born in the digital age, Digital ZN is a full-service creative and digital marketing agency. We partner with ambitious brands to craft strategies that cut through the noise and lead the conversation. Our team of strategists, creators, and technologists work in sync — turning visions into viral moments.',
      vision: 'Our vision is simple: to lead the feed wherever our clients are present.',
      pillars: ['Creative Excellence','Data-Driven Results','Cultural Intelligence','Speed to Market','Transparent Partnership','Measurable ROI'],
    },
    contact: {
      title: "Let's Build Something Great",
      subtitle: 'Ready to lead the feed? Tell us about your project.',
      name: 'Your Name', email: 'Your Email', msg: 'Tell us about your project...',
      send: 'Send Message',
      successTitle: 'Message Sent!', successMsg: "We'll get back to you within 24 hours.",
    },
    footer: { tagline: '"We Lead The Feed"', rights: 'All rights reserved.' },
  },

  fr: {
    nav: { home: 'Accueil', services: 'Services', work: 'Projets', about: 'À Propos', contact: 'Contact' },
    hero: {
      badge: 'Agence de Marketing Digital',
      the: 'The', feed: 'Feed',
      tagline: "L'excellence numérique rencontre la puissance créative.",
      sub: "Agence digitale créative basée au Maroc. Nous concevons, développons et réalisons des films pour les marques qui souhaitent se démarquer.",
      cta: 'Commencer', see: 'Voir Nos Projets', scroll: 'Défiler pour explorer',
    },
    services: {
      title: 'Ce Que Nous Faisons',
      subtitle: 'Solutions digitales complètes pour les marques qui osent mener.',
      items: [
  { icon: '📱', title: 'Design pour Réseaux Sociaux', desc: 'Publications, stories, couvertures et modèles attrayants adaptés à la voix de votre marque sur toutes les plateformes.', num: '01' },
  { icon: '🖨️', title: 'Design Graphique', desc: 'Impression à la demande, livres, roll-ups, brochures, présentations PowerPoint animées, et plus encore.', num: '02' },
  { icon: '💎', title: 'Identité de Marque', desc: 'Systèmes de marque complets — concept, logo, palette de couleurs, typographie, maquettes et charte graphique.', num: '03' },
  { icon: '🌐', title: 'Pages d’Atterrissage', desc: 'Pages d’atterrissage à forte conversion créées avec HTML, CSS et JavaScript — propres, rapides et responsives.', num: '04' },
  { icon: '🎬', title: 'Montage Vidéo', desc: 'Montage vidéo professionnel pour reels, publicités et contenus promotionnels qui captivent votre audience.', num: '05' },
  { icon: '🎥', title: 'Vidéographie', desc: 'Séances de photographie et vidéographie pour produire un contenu visuel impressionnant pour votre marque.', num: '06' },
],
    },
    stats: {
      label: 'Par Les Chiffres',
      title: 'Les Chiffres Parlent',
      items: [
        { value: 500, suffix: '+', label: 'Projets Livrés' },
        { value: 120, suffix: '+', label: 'Clients Satisfaits' },
        { value: 8,   suffix: '+', label: "Années d'Excellence" },
        { value: 3,   suffix: '',  label: 'Pays Actifs' },
      ],
    },
    work: { title: 'Projets Sélectionnés', subtitle: "Un aperçu des campagnes qui ont fait bouger les marchés.", viewAll: 'Voir Tous →' },
    about: {
      title: 'Nous Sommes Digital ZN',
      body: "Né à l'ère numérique, Digital ZN est une agence de marketing créatif et digital à service complet. Nous nous associons avec des marques ambitieuses pour créer des stratégies qui traversent le bruit et mènent la conversation.",
      vision: "Notre vision est simple : mener le fil partout où nos clients sont présents.",
      pillars: ['Excellence Créative','Résultats Data-Driven','Intelligence Culturelle','Rapidité de Mise en Marché','Partenariat Transparent','ROI Mesurable'],
    },
    contact: {
      title: 'Construisons Quelque Chose de Grand',
      subtitle: 'Prêt à mener le fil? Parlez-nous de votre projet.',
      name: 'Votre Nom', email: 'Votre Email', msg: 'Parlez-nous de votre projet...',
      send: 'Envoyer le Message',
      successTitle: 'Message Envoyé!', successMsg: 'Nous vous répondrons dans les 24 heures.',
    },
    footer: { tagline: '"We Lead The Feed"', rights: 'Tous droits réservés.' },
  },

  ar: {
    nav: { home: 'الرئيسية', services: 'الخدمات', work: 'أعمالنا', about: 'من نحن', contact: 'اتصل بنا' },
    hero: {
      badge: 'وكالة تسويق رقمي',
      the: 'نحن نقود المحتوى',
      tagline: 'حيث يلتقي التميز الرقمي بالقوة الإبداعية.',
      sub: 'وكالة إبداعية رقمية مقرها المغرب. نقوم بالتصميم والبناء والتصوير للعلامات التجارية التي ترغب في التميز.',
      cta: 'ابدأ رحلتك', see: 'أعمالنا', scroll: 'انتقل للاستكشاف',
    },
    services: {
      title: 'ما نقدمه',
      subtitle: 'حلول رقمية متكاملة للعلامات التجارية الجريئة.',
      items: [
  { icon: '📱', title: 'تصميم وسائل التواصل الاجتماعي', desc: 'منشورات وقصص وأغلفة وقوالب جذابة مصممة بما يتناسب مع هوية علامتك التجارية على جميع المنصات.', num: '01' },
  { icon: '🖨️', title: 'التصميم الجرافيكي', desc: 'الطباعة حسب الطلب، الكتب، الرول أب، الكتيبات، عروض PowerPoint المتحركة، والمزيد.', num: '02' },
  { icon: '💎', title: 'هوية العلامة التجارية', desc: 'أنظمة متكاملة للعلامة التجارية — الفكرة، الشعار، لوحة الألوان، الخطوط، النماذج الإعلانية، ودليل الهوية.', num: '03' },
  { icon: '🌐', title: 'صفحات الهبوط', desc: 'صفحات هبوط عالية التحويل مبنية باستخدام HTML وCSS وJavaScript — نظيفة، سريعة ومتجاوبة.', num: '04' },
  { icon: '🎬', title: 'تحرير الفيديو', desc: 'تحرير فيديو احترافي للريلز والإعلانات والمحتوى الترويجي الذي يجذب جمهورك.', num: '05' },
  { icon: '🎥', title: 'التصوير', desc: 'جلسات تصوير فوتوغرافي وفيديو لإنتاج محتوى بصري مميز لعلامتك التجارية.', num: '06' },
],
    },
    stats: {
      label: 'بالأرقام',
      title: 'الأرقام تتكلم',
      items: [
        { value: 500, suffix: '+', label: 'مشروع منجز' },
        { value: 120, suffix: '+', label: 'عميل راضٍ' },
        { value: 8,   suffix: '+', label: 'سنوات من التميز' },
        { value: 3,   suffix: '',  label: 'دول نشطة' },
      ],
    },
    work: { title: 'أعمال مختارة', subtitle: 'لمحة عن الحملات التي حرّكت الأسواق.', viewAll: 'عرض الكل →' },
    about: {
      title: 'نحن ديجيتال ZN',
      body: 'وُلد ديجيتال ZN في العصر الرقمي ليكون وكالة إبداعية وتسويقية رقمية متكاملة الخدمات. نتشارك مع العلامات التجارية الطموحة لصياغة استراتيجيات تخترق الضجيج وتقود الحوار.',
      vision: 'رؤيتنا بسيطة: قيادة الخلاصة أينما تواجد عملاؤنا.',
      pillars: ['التميز الإبداعي','نتائج مبنية على البيانات','الذكاء الثقافي','السرعة في السوق','شراكة شفافة','عائد استثمار قابل للقياس'],
    },
    contact: {
      title: 'لنبنِ شيئاً عظيماً',
      subtitle: 'هل أنت مستعد لقيادة الخلاصة؟ أخبرنا عن مشروعك.',
      name: 'اسمك', email: 'بريدك الإلكتروني', msg: 'أخبرنا عن مشروعك...',
      send: 'إرسال الرسالة',
      successTitle: 'تم الإرسال!', successMsg: 'سنتواصل معك خلال 24 ساعة.',
    },
    footer: { tagline: '"نحن نقود الخلاصة"', rights: 'جميع الحقوق محفوظة.' },
  },
};

/* ── State ── */
let currentLang = 'en';
let videoPlaying = true;
let statsAnimated = false;

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  buildMarquee();
  buildServices();
  buildStats();
  buildWork();
  buildPillars();
  buildOrbitDots();
  initScrollReveal();
  initNavbarScroll();
  initHeroTitle();
  initCursor();
  initHamburger();
  applyLang('en');
});

/* ── Language ── */
function setLang(lang) {
  currentLang = lang;
  // Update buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // RTL
  const isRTL = lang === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  applyLang(lang);
  rebuildDynamic(lang);
}

function applyLang(lang) {
  const t = i18n[lang];
  // data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = getNestedKey(t, key);
    if (val !== undefined) el.textContent = val;
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = getNestedKey(t, key);
    if (val !== undefined) el.placeholder = val;
  });
}

function getNestedKey(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function rebuildDynamic(lang) {
  buildServices(lang);
  buildStats(lang);
  buildWork(lang);
  buildPillars(lang);
  updateFooterTagline(lang);
}

/* ── Build Marquee ── */
function buildMarquee() {
  const items = ['Social Media','Content Creation','Logo Design','Digital Marketing','Video Production','Landing Pages','Video Editing','Web Design','Photography','Motion Graphics','Graphic Design','Presentations'];
  const doubled = [...items, ...items];
  const track = document.getElementById('marquee-track');
  track.innerHTML = doubled.map(item =>
    `<div class="marquee-item"><span>${item}</span><div class="marquee-dot"></div></div>`
  ).join('');
}

/* ── Build Services ── */
function buildServices(lang = 'en') {
  const t = i18n[lang];
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = t.services.items.map((s, i) =>
    `<div class="service-card reveal reveal-delay-${Math.min(i+1,5)}">
      <div class="card-top">
        <div class="card-icon">${s.icon}</div>
        <div class="card-num">${s.num}</div>
      </div>
      <div class="card-title">${s.title}</div>
      <div class="card-desc">${s.desc}</div>
      <div class="card-link">Learn more <span>→</span></div>
    </div>`
  ).join('');
  initScrollReveal();
}

/* ── Build Stats ── */
function buildStats(lang = 'en') {
  const t = i18n[lang];
  const grid = document.getElementById('stats-grid');
  if (!grid) return;
  statsAnimated = false;
  grid.innerHTML = t.stats.items.map((s, i) =>
    `<div class="stat-item reveal reveal-delay-${i+1}">
      <div class="stat-value" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>`
  ).join('');
  initScrollReveal();
  observeStats();
}

function observeStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const grid = document.getElementById('stats-grid');
  if (grid) observer.observe(grid);
}

function animateCounters() {
  document.querySelectorAll('.stat-value[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const step = 16;
    let current = 0;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + suffix;
    }, step);
  });
}

/* ── Build Work ── */
const projects = [
  { title: 'Luxury Real Estate Campaign', cat: 'Social Media + Video', tags: ['Instagram','Reels','Branding'],     color: 'linear-gradient(135deg,#b34700,#8b0000)' },
  { title: 'Restaurant Chain Launch',     cat: 'Brand Identity',       tags: ['Brand','Design','Launch'],          color: 'linear-gradient(135deg,#4c00b0,#1a0066)' },
  { title: 'E-Commerce Growth Strategy',  cat: 'Paid Advertising',     tags: ['Meta Ads','Google','ROI 400%'],     color: 'linear-gradient(135deg,#006644,#004d33)' },
  { title: 'Fashion Influencer Campaign', cat: 'Influencer Marketing', tags: ['Influencers','UGC','TikTok'],       color: 'linear-gradient(135deg,#b35a00,#7a3d00)' },
];

function buildWork(lang = 'en') {
  const t = i18n[lang];
  const grid = document.getElementById('work-grid');
  if (!grid) return;
  grid.innerHTML = projects.map((p, i) =>
    `<div class="work-card reveal reveal-delay-${Math.min(i+1,4)}">
      <div class="work-bg" style="background:${p.color}"></div>
      <div class="work-grid-overlay"></div>
      <div class="work-hover-icon"><div class="work-icon-circle">🔗</div></div>
      <div class="work-content">
        <div class="work-tags">${p.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}</div>
        <div class="work-cat">${p.cat}</div>
        <div class="work-title">${p.title}</div>
      </div>
    </div>`
  ).join('');
  // Update view-all text
  document.querySelectorAll('[data-i18n="work.viewAll"]').forEach(el => {
    el.textContent = t.work.viewAll;
  });
  initScrollReveal();
}

/* ── Build Pillars ── */
function buildPillars(lang = 'en') {
  const t = i18n[lang];
  const list = document.getElementById('pillars-list');
  if (!list) return;
  list.innerHTML = t.about.pillars.map(p =>
    `<div class="pillar"><div class="pillar-check">✓</div><span>${p}</span></div>`
  ).join('');
}

/* ── Build Orbit Dots ── */
function buildOrbitDots() {
  const container = document.getElementById('orbit-dots');
  if (!container) return;
  const wrapper = container.closest('.orbital-wrapper');
  const size = wrapper ? wrapper.offsetWidth : 360;
  const radius = size * 0.44;
  for (let i = 0; i < 4; i++) {
    const dot = document.createElement('div');
    dot.className = 'orbital-dot';
    const angle = (i / 4) * 2 * Math.PI;
    const x = 50 + (radius / size * 100) * Math.sin(angle);
    const y = 50 - (radius / size * 100) * Math.cos(angle);
    dot.style.cssText = `left:${x}%;top:${y}%;transform:translate(-50%,-50%);`;
    container.appendChild(dot);
    // Animate
    let progress = i / 4;
    const speed = 0.0005;
    function animate() {
      progress += speed;
      const a = progress * 2 * Math.PI;
      const dx = 50 + (radius / size * 100) * Math.sin(a);
      const dy = 50 - (radius / size * 100) * Math.cos(a);
      dot.style.left = dx + '%';
      dot.style.top  = dy + '%';
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }
}

function updateFooterTagline(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n="footer.tagline"]').forEach(el => {
    el.textContent = t.footer.tagline;
  });
  document.querySelectorAll('[data-i18n="footer.rights"]').forEach(el => {
    el.textContent = t.footer.rights;
  });
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

/* ── Hero Title Animation ── */
function initHeroTitle() {
  const words = document.querySelectorAll('#hero-title .word span');
  words.forEach((span, i) => {
    span.style.transition = `transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.4 + i * 0.12}s, opacity 0.7s ${0.4 + i * 0.12}s`;
    span.style.display = 'inline-block';
    setTimeout(() => {
      span.style.transform = 'translateY(0)';
      span.style.opacity = '1';
    }, 50);
  });
}

/* ── Navbar Scroll ── */
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = link.getAttribute('href').substring(1);
      const el = document.getElementById(target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ── Hamburger ── */
function initHamburger() {
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
}

function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Video Control ── */
function toggleVideo() {
  const video = document.getElementById('hero-video');
  const btn = document.getElementById('video-ctrl');
  if (videoPlaying) {
    video.pause();
    btn.textContent = '▶';
  } else {
    video.play();
    btn.textContent = '⏸';
  }
  videoPlaying = !videoPlaying;
}

/* ── Custom Cursor ── */
function initCursor() {
  if (window.innerWidth < 768) return;
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

  (function animateCursor() {
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) *.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateCursor);
  })();

  // Scale ring on hoverable elements
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .service-card, .work-card')) {
      ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
      ring.style.borderColor = 'rgba(247,112,21,0.8)';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .service-card, .work-card')) {
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.borderColor = 'rgba(247,112,21,0.5)';
    }
  });
}

/* ── Contact Form ── */
function handleFormSubmit(e) {
  e.preventDefault();
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').classList.add('show');
}
