document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initActiveNavState();
  initHeaderState();
});

function initLanguageSwitcher() {
  const switcherButtons = Array.from(document.querySelectorAll('.language-btn'));
  if (!switcherButtons.length) {
    return;
  }

  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.stack': 'Stack',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Full-Stack Software Engineer',
      'hero.title': 'Building clean, resilient products with backend depth and a sharp frontend eye.',
      'hero.lead': "I'm Adeline Tuyizere. I build full-stack web applications with React, TypeScript, NestJS, Spring Boot, and PostgreSQL, with strong focus on backend logic, API integration, database design, and maintainable product delivery.",
      'hero.ctaPrimary': 'See Projects',
      'hero.ctaSecondary': "Let's Work Together",
      'hero.metric1': 'Projects built across product, dashboard, and platform work.',
      'hero.metric2': 'Core technologies across frontend, backend, databases, and tooling.',
      'hero.metric3': 'BSc completion track in Software Engineering at AUCA.',
      'hero.note1Label': 'Available',
      'hero.note1Text': 'Internships and engineering roles',
      'hero.note2Label': 'Based In',
      'hero.note2Text': 'Kigali, Rwanda',
      'about.kicker': 'About',
      'about.title': 'Engineering with structure, clarity, and momentum.',
      'about.lead': 'My work sits at the intersection of thoughtful product implementation and solid backend engineering. I enjoy building systems that are reliable under the hood while still feeling polished and intuitive to use.',
      'about.card1Title': 'Who I Am',
      'about.card1Text': 'I am a detail-oriented software engineer with hands-on experience building full-stack applications in collaborative environments. I care about code quality, clean architecture, and shipping features that solve real workflow problems.',
      'about.card2Title': 'How I Work',
      'about.card2Text': 'I work across frontend and backend layers in Agile team environments, contributing through API design, database integration, sprint collaboration, peer code reviews, and implementation details that keep systems maintainable over time.',
      'about.card3Title': "What I'm After",
      'about.card3Text': "I'm looking for engineering roles where strong fundamentals, product thinking, and steady execution matter. Teams that value ownership, rigor, and growth are where I do my best work.",
      'skills.kicker': 'Stack',
      'skills.title': 'The tools I rely on to ship complete products.',
      'skills.lead': "I'm strongest when I can work across the full product surface, from backend logic and API contracts to responsive interfaces and deployment-ready workflows.",
      'skills.frontendTitle': 'Frontend',
      'skills.frontendText': 'Interfaces that are responsive, usable, and structured for real product flows.',
      'skills.backendTitle': 'Backend',
      'skills.backendText': 'Service architecture, business logic, authentication flows, and REST API implementation.',
      'skills.dataTitle': 'Data and Delivery',
      'skills.dataText': 'Solid data modeling, developer tooling, and disciplined team workflows.',
      'projects.kicker': 'Projects',
      'projects.title': 'Selected builds that show how I think and execute.',
      'projects.lead': 'These projects reflect a mix of dashboard work, platform features, systems design, and full-stack implementation across different product contexts.',
      'projects.project1Type': 'Operations Dashboard',
      'projects.project1Title': 'Mining Production Monitoring System',
      'projects.project1Text': 'Built a production monitoring dashboard for mining operations with reporting views, role-based access, and data-driven workflows designed to make operational visibility faster and clearer.',
      'projects.project2Type': 'Platform Build',
      'projects.project2Title': 'Peer-to-Peer Car Sharing',
      'projects.project2Text': 'Developed platform features for lending and booking vehicles, combining React interfaces with NestJS APIs and PostgreSQL-backed booking logic.',
      'projects.project3Type': 'Business System',
      'projects.project3Title': 'Food Ordering Management System',
      'projects.project3Text': 'Built a full-stack restaurant ordering system with menu browsing, cart and order processing, user authentication, role-based interfaces, and order status tracking across frontend and backend layers.',
      'projects.project4Type': 'Hackathon Build',
      'projects.project4Title': 'TVET Linkage Platform',
      'projects.project4Text': 'Built during the Code2Unlock Hackathon to improve TVET awareness and strengthen the connection between training programs and private sector opportunities.',
      'projects.project5Type': 'In Progress',
      'projects.project5Title': 'StockSync',
      'projects.project5Text': 'A multi-location inventory and reconciliation system focused on dependable stock visibility, movement tracking, and coordinated operational data flows.',
      'common.github': 'GitHub',
      'common.liveSite': 'Live Site',
      'contact.kicker': 'Contact',
      'contact.title': "Let's build something useful and well engineered.",
      'contact.lead': "If you're hiring, collaborating, or looking for someone who can contribute across the stack, reach out. I'm especially interested in teams building serious products with strong engineering standards.",
      'contact.formName': 'Your name',
      'contact.formEmail': 'Your email',
      'contact.formSubject': 'What do you want to build?',
      'contact.formMessage': 'Tell me about the role, project, or collaboration.',
      'contact.formSubmit': 'Send Message',
      'footer.copy': '© 2026 Adeline Tuyizere. Built as a focused software engineering portfolio.',
      'footer.top': 'Back to top',
      pageTitle: 'Adeline Tuyizere | Software Engineer'
    },
    rw: {
      'nav.home': 'Ahabanza',
      'nav.about': 'Ibyanjye',
      'nav.stack': 'Ikoranabuhanga',
      'nav.projects': 'Imishinga',
      'nav.contact': 'Twandikire',
      'hero.eyebrow': 'Inzobere mu Guteza Imbere Imbuga n\'Inyuma',
      'hero.title': 'Kubaka ibisubizo bisobanutse kandi bikomeye, bifite ubujyakuzimu mu backend n\'ubuhanga bwiza bwa frontend.',
      'hero.lead': 'Nitwa Adeline Tuyizere. Nkubaka full-stack web applications nkoresheje React, TypeScript, NestJS, Spring Boot, na PostgreSQL, nshyira imbere backend logic, API integration, database design, no gutanga products zoroshye kubungabunga.',
      'hero.ctaPrimary': 'Reba Imishinga',
      'hero.ctaSecondary': 'Dukorane',
      'hero.metric1': 'Imishinga yubatswe muri product, dashboard, na platform work.',
      'hero.metric2': 'Ikoranabuhanga ry\'ingenzi muri frontend, backend, databases, na tooling.',
      'hero.metric3': 'Kwitegura kurangiza BSc muri Software Engineering muri AUCA.',
      'hero.note1Label': 'Mboneka',
      'hero.note1Text': 'Ama-internship n\'akazi ko mu bwubatsi bwa software',
      'hero.note2Label': 'Mbarizwa',
      'hero.note2Text': 'Kigali, Rwanda',
      'about.kicker': 'Ibyanjye',
      'about.title': 'Engineering ifite imiterere, ibisobanuro, n\'umuvuduko.',
      'about.lead': 'Akazi kanjye kari hagati yo kubaka products zatekerejwe neza n\'ubwubatsi bukomeye bwa backend. Nkunda kubaka systems zikomeye imbere ariko zikanorohera abazikoresha.',
      'about.card1Title': 'Ndi nde',
      'about.card1Text': 'Ndi software engineer ukora yitonze kandi ufite uburambe mu kubaka full-stack applications mu matsinda. Nitaho code quality, architecture isukuye, no gutanga ibisubizo bikemura ibibazo nyabyo.',
      'about.card2Title': 'Uko Nkora',
      'about.card2Text': 'Nkora muri frontend na backend mu matsinda akora mu buryo bwa Agile, ntanga umusanzu muri API design, database integration, sprint collaboration, peer code reviews, n\'ibisobanuro bituma systems zoroha kubungabunga igihe kirekire.',
      'about.card3Title': 'Icyo Nshaka',
      'about.card3Text': 'Nshaka roles za engineering aho fundamentals zikomeye, gutekereza nka product, n\'ishyirwa mu bikorwa rihamye bihabwa agaciro. Nkora neza mu matsinda akunda ownership, rigor, no gukura.',
      'skills.kicker': 'Ikoranabuhanga',
      'skills.title': 'Ibikoresho nkoresha mu kugeza products ku rwego rwuzuye.',
      'skills.lead': 'Nkora neza iyo nshoboye gukora ku bice byose bya product, kuva kuri backend logic na API contracts kugeza ku interfaces zihuza neza no ku workflows ziteguye deployment.',
      'skills.frontendTitle': 'Frontend',
      'skills.frontendText': 'Interfaces zisubiza neza, zoroshye gukoresha, kandi zubatse ku buryo bukwiriye real product flows.',
      'skills.backendTitle': 'Backend',
      'skills.backendText': 'Service architecture, business logic, authentication flows, na REST API implementation.',
      'skills.dataTitle': 'Data na Delivery',
      'skills.dataText': 'Data modeling ikomeye, developer tooling, na team workflows zifite discipline.',
      'projects.kicker': 'Imishinga',
      'projects.title': 'Imishinga yatoranyijwe yerekana uko ntekereza kandi nshyira mu bikorwa.',
      'projects.lead': 'Iyi mishinga igaragaza dashboard work, platform features, systems design, na full-stack implementation mu bihe bitandukanye bya products.',
      'projects.project1Type': 'Dashboard y\'Ibikorwa',
      'projects.project1Title': 'Mining Production Monitoring System',
      'projects.project1Text': 'Nubatse dashboard ifasha gukurikirana ibikorwa byo mu bucukuzi ifite reporting views, role-based access, na data-driven workflows bituma operational visibility yihuta kandi isobanutse.',
      'projects.project2Type': 'Kubaka Platform',
      'projects.project2Title': 'Peer-to-Peer Car Sharing',
      'projects.project2Text': 'Nateje imbere features zo gutanga no kubukisha imodoka, mpuza React interfaces na NestJS APIs hamwe na booking logic ishingiye kuri PostgreSQL.',
      'projects.project3Type': 'Business System',
      'projects.project3Title': 'Food Ordering Management System',
      'projects.project3Text': 'Nubatse full-stack restaurant ordering system ifite menu browsing, cart na order processing, user authentication, role-based interfaces, na order status tracking muri frontend na backend.',
      'projects.project4Type': 'Hackathon Build',
      'projects.project4Title': 'TVET Linkage Platform',
      'projects.project4Text': 'Yubatswe muri Code2Unlock Hackathon kugira ngo TVET irusheho kumenyekana no guhuza amahugurwa n\'amahirwe yo mu private sector.',
      'projects.project5Type': 'Biracyakorwa',
      'projects.project5Title': 'StockSync',
      'projects.project5Text': 'Sisitemu yo gucunga inventory mu bice byinshi no gukora reconciliation, yibanda ku kugaragaza stock neza, gukurikirana movement, no guhuza operational data flows.',
      'common.github': 'GitHub',
      'common.liveSite': 'Urubuga Ruriho',
      'contact.kicker': 'Twandikire',
      'contact.title': 'Reka twubake ikintu gifite akamaro kandi cyubatswe neza.',
      'contact.lead': 'Niba uri gushaka umuntu wo guha akazi, gukorana na we, cyangwa ushaka uwatanga umusanzu mu bice byose bya stack, nyandikira. Nkunda cyane teams zubaka products zikomeye kandi zifite engineering standards nziza.',
      'contact.formName': 'Amazina yawe',
      'contact.formEmail': 'Email yawe',
      'contact.formSubject': 'Ushaka ko twubaka iki?',
      'contact.formMessage': 'Mbwira ibijyanye n\'akazi, project, cyangwa collaboration.',
      'contact.formSubmit': 'Ohereza Ubutumwa',
      'footer.copy': '© 2026 Adeline Tuyizere. Urubuga rwubatswe nk\'portfolio ya software engineering ifite icyerekezo.',
      'footer.top': 'Subira hejuru',
      pageTitle: 'Adeline Tuyizere | Software Engineer'
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.stack': 'Stack',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Ingénieure Logicielle Full-Stack',
      'hero.title': 'Créer des produits propres et robustes, avec une vraie profondeur backend et un frontend soigné.',
      'hero.lead': "Je suis Adeline Tuyizere. Je construis des applications web full-stack avec React, TypeScript, NestJS, Spring Boot et PostgreSQL, avec un fort accent sur la logique backend, l'intégration d'API, la conception de bases de données et une livraison maintenable.",
      'hero.ctaPrimary': 'Voir les Projets',
      'hero.ctaSecondary': 'Travaillons Ensemble',
      'hero.metric1': 'Projets réalisés sur des produits, dashboards et plateformes.',
      'hero.metric2': 'Technologies clés en frontend, backend, bases de données et tooling.',
      'hero.metric3': 'Parcours BSc en Software Engineering à AUCA, fin prévue en 2026.',
      'hero.note1Label': 'Disponible',
      'hero.note1Text': 'Stages et postes en ingénierie',
      'hero.note2Label': 'Basée à',
      'hero.note2Text': 'Kigali, Rwanda',
      'about.kicker': 'À propos',
      'about.title': 'Une ingénierie avec structure, clarté et élan.',
      'about.lead': "Mon travail se situe à l'intersection d'une mise en œuvre produit réfléchie et d'une solide ingénierie backend. J'aime construire des systèmes fiables en profondeur tout en restant polis et intuitifs à utiliser.",
      'about.card1Title': 'Qui je suis',
      'about.card1Text': "Je suis une ingénieure logicielle rigoureuse avec une expérience concrète dans la création d'applications full-stack en environnement collaboratif. J'accorde de l'importance à la qualité du code, à une architecture propre et à des fonctionnalités qui résolvent de vrais problèmes.",
      'about.card2Title': 'Ma façon de travailler',
      'about.card2Text': "Je travaille sur le frontend et le backend dans des environnements Agile, en contribuant à la conception d'API, à l'intégration de bases de données, à la collaboration en sprint, aux revues de code entre pairs et aux détails d'implémentation qui rendent les systèmes maintenables.",
      'about.card3Title': 'Ce que je recherche',
      'about.card3Text': "Je recherche des rôles d'ingénierie où les bases solides, la réflexion produit et une exécution régulière comptent. Je donne le meilleur de moi-même dans des équipes qui valorisent l'ownership, la rigueur et la progression.",
      'skills.kicker': 'Stack',
      'skills.title': "Les outils sur lesquels je m'appuie pour livrer des produits complets.",
      'skills.lead': "Je suis la plus efficace lorsque je peux intervenir sur toute la surface d'un produit, de la logique backend et des contrats d'API jusqu'aux interfaces responsives et aux workflows prêts pour le déploiement.",
      'skills.frontendTitle': 'Frontend',
      'skills.frontendText': 'Des interfaces responsives, utilisables et structurées pour de vrais parcours produit.',
      'skills.backendTitle': 'Backend',
      'skills.backendText': "Architecture de services, logique métier, flux d'authentification et implémentation d'API REST.",
      'skills.dataTitle': 'Données et Delivery',
      'skills.dataText': 'Modélisation de données solide, outillage développeur et workflows disciplinés.',
      'projects.kicker': 'Projets',
      'projects.title': 'Une sélection de réalisations qui montre ma manière de penser et d’exécuter.',
      'projects.lead': 'Ces projets reflètent un mélange de dashboards, de fonctionnalités de plateforme, de conception de systèmes et de full-stack implementation dans différents contextes produit.',
      'projects.project1Type': 'Dashboard Opérationnel',
      'projects.project1Title': 'Mining Production Monitoring System',
      'projects.project1Text': "J'ai construit un dashboard de suivi de production pour les opérations minières avec des vues de reporting, une gestion des rôles et des workflows pilotés par la donnée pour améliorer la visibilité opérationnelle.",
      'projects.project2Type': 'Construction de Plateforme',
      'projects.project2Title': 'Peer-to-Peer Car Sharing',
      'projects.project2Text': "Développement de fonctionnalités de prêt et de réservation de véhicules en combinant des interfaces React avec des APIs NestJS et une logique de réservation appuyée sur PostgreSQL.",
      'projects.project3Type': 'Système Métier',
      'projects.project3Title': 'Food Ordering Management System',
      'projects.project3Text': "Création d'un système full-stack de commande pour restaurant avec navigation du menu, panier et traitement des commandes, authentification utilisateur, interfaces selon les rôles et suivi du statut des commandes côté frontend et backend.",
      'projects.project4Type': 'Projet Hackathon',
      'projects.project4Title': 'TVET Linkage Platform',
      'projects.project4Text': "Construit pendant le hackathon Code2Unlock pour améliorer la visibilité du TVET et renforcer le lien entre les programmes de formation et les opportunités du secteur privé.",
      'projects.project5Type': 'En cours',
      'projects.project5Title': 'StockSync',
      'projects.project5Text': "Un système multi-sites de gestion d'inventaire et de rapprochement, centré sur une visibilité fiable du stock, le suivi des mouvements et des flux opérationnels coordonnés.",
      'common.github': 'GitHub',
      'common.liveSite': 'Site Live',
      'contact.kicker': 'Contact',
      'contact.title': 'Construisons quelque chose d’utile et bien conçu.',
      'contact.lead': "Si vous recrutez, collaborez ou recherchez une personne capable de contribuer sur toute la stack, contactez-moi. Je suis particulièrement intéressée par les équipes qui construisent des produits sérieux avec de fortes exigences d'ingénierie.",
      'contact.formName': 'Votre nom',
      'contact.formEmail': 'Votre email',
      'contact.formSubject': 'Que souhaitez-vous construire ?',
      'contact.formMessage': 'Parlez-moi du poste, du projet ou de la collaboration.',
      'contact.formSubmit': 'Envoyer le Message',
      'footer.copy': '© 2026 Adeline Tuyizere. Portfolio construit avec une approche logicielle rigoureuse.',
      'footer.top': 'Retour en haut',
      pageTitle: 'Adeline Tuyizere | Ingénieure Logicielle'
    }
  };

  const savedLanguage = window.localStorage.getItem('portfolio-language');
  const fallbackLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : 'en';

  const applyLanguage = (language) => {
    const dictionary = translations[language];
    if (!dictionary) {
      return;
    }

    document.documentElement.lang = language === 'rw' ? 'rw' : language;
    document.title = dictionary.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (dictionary[key]) {
        element.setAttribute('placeholder', dictionary[key]);
      }
    });

    switcherButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.lang === language);
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });

    window.localStorage.setItem('portfolio-language', language);
  };

  switcherButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.lang);
    });
  });

  applyLanguage(fallbackLanguage);
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('primary-nav');

  if (!menuBtn || !navMenu) {
    return;
  }

  menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuBtn.classList.toggle('active', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('.nav-scroll').forEach((link) => {
    link.addEventListener('click', function handleScroll(event) {
      const targetId = this.getAttribute('href');

      if (!targetId || !targetId.startsWith('#')) {
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      const headerOffset = 88;
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-element');
  if (!elements.length) {
    return;
  }

  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14
  });

  elements.forEach((element) => observer.observe(element));
}

function initActiveNavState() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-list .nav-link'));

  if (!sections.length || !navLinks.length) {
    return;
  }

  const updateActiveLink = () => {
    let currentSection = sections[0];

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        currentSection = section;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${currentSection.id}`;
      link.parentElement.classList.toggle('active', isActive);
    });
  };

  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

function initHeaderState() {
  const header = document.querySelector('.header_section');
  if (!header) {
    return;
  }

  const syncHeaderState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  syncHeaderState();
  window.addEventListener('scroll', syncHeaderState, { passive: true });
}
