document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initThemeToggle();
  initVisitCounter();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initActiveNavState();
  initHeaderState();
  initContactForm();
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
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Full-Stack Software Engineer',
      'hero.title': 'Building reliable full-stack applications with modern technologies.',
      'hero.lead': "I'm Adeline Tuyizere. I build full-stack web applications with React, TypeScript, NestJS, Spring Boot, and PostgreSQL, with strong focus on backend logic, API integration, database design, and maintainable product delivery.",
      'hero.ctaPrimary': 'See Projects',
      'hero.ctaSecondary': "Let's Work Together",
      'hero.downloadCV': 'Download CV',
      'hero.metric1': 'Projects built across product, dashboard, and platform work.',
      'hero.metric2': 'Core technologies across frontend, backend, databases, and tooling.',
      'hero.metric3': 'BSc completion track in Software Engineering at AUCA.',
      'hero.note1Label': 'Available',
      'hero.note1Text': 'Internships and engineering roles',
      'hero.note2Label': 'Based In',
      'hero.note2Text': 'Kigali, Rwanda',
      'about.kicker': 'About',
      'about.title': 'Professional Background',
      'about.lead': 'My work sits at the intersection of thoughtful product implementation and solid backend engineering. I enjoy building systems that are reliable under the hood while still feeling polished and intuitive to use.',
      'about.card1Title': 'Who I Am',
      'about.card1Text': 'I am a detail-oriented software engineer with hands-on experience building full-stack applications in collaborative environments. I care about code quality, clean architecture, and shipping features that solve real workflow problems.',
      'about.card2Title': 'How I Work',
      'about.card2Text': 'I work across frontend and backend layers in Agile team environments, contributing through API design, database integration, sprint collaboration, peer code reviews, and implementation details that keep systems maintainable over time.',
      'about.card3Title': "What I'm After",
      'about.card3Text': "I'm looking for engineering roles where strong fundamentals, product thinking, and steady execution matter. Teams that value ownership, rigor, and growth are where I do my best work.",
      'skills.kicker': 'Stack',
      'skills.title': 'Technical Skills',
      'skills.lead': "I'm strongest when I can work across the full product surface, from backend logic and API contracts to responsive interfaces and deployment-ready workflows.",
      'skills.frontendTitle': 'Frontend',
      'skills.frontendText': 'Interfaces that are responsive, usable, and structured for real product flows.',
      'skills.backendTitle': 'Backend',
      'skills.backendText': 'Service architecture, business logic, authentication flows, and REST API implementation.',
      'skills.dataTitle': 'Data and Delivery',
      'skills.dataText': 'Solid data modeling, developer tooling, and disciplined team workflows.',
      'skills.langEnglish': 'English',
      'skills.langFrench': 'French',
      'skills.langKinyarwanda': 'Kinyarwanda',
      'skills.levelProfessional': 'Professional',
      'skills.levelConversational': 'Conversational',
      'skills.levelNative': 'Native',
      'experience.kicker': 'Experience',
      'experience.title': 'Professional Journey',
      'experience.lead': 'A track record of technical roles and intensive engineering programs.',
      'experience.exp1Title': 'Software Trainee – The Gym',
      'experience.exp1Text': 'Intensive engineering training: JavaScript, TypeScript, Node.js, and Express. Mastered Fit and FitHub communication, Git-based collaboration, and Agile workflows.',
      'experience.exp1Date': '11/2024 – Present',
      'experience.exp2Title': 'Fellow – A2SV',
      'experience.exp2Text': 'Focusing on advanced Data Structures & Algorithms, complex problem-solving, and algorithmic efficiency.',
      'experience.exp2Date': '12/2025 – Present',
      'experience.exp3Title': 'Software Developer Intern – KB21',
      'experience.exp3Text': 'Built features for a peer-to-peer car-sharing platform. Implemented booking flows, car listing filters, and real-time dashboard updates.',
      'experience.exp3Date': '09/2025 – 12/2025',
      'education.kicker': 'Education',
      'education.title': 'Academic Foundation',
      'education.degree': 'BSc in Software Engineering',
      'education.school': 'Adventist University of Central Africa (AUCA) | 2023 – 2026 (Expected)',
      'education.details': 'Focused on computer science fundamentals, software architecture, and systems design.',
      'projects.kicker': 'Projects',
      'projects.title': 'Featured Projects',
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
      'projects.inProgress': 'In Progress',
      'projects.liveDemo': 'Live Demo',
      'common.github': 'GitHub',
      'common.liveSite': 'Live Site',
      'contact.kicker': 'Contact',
      'contact.title': "Get In Touch",
      'contact.lead': "If you're hiring, collaborating, or looking for someone who can contribute across the stack, reach out. I'm especially interested in teams building serious products with strong engineering standards.",
      'contact.formName': 'Your name',
      'contact.formEmail': 'Your email',
      'contact.formSubject': 'Subject',
      'contact.formMessage': 'Your message',
      'contact.formSubmit': 'Send Message',
      'contact.formSending': 'Sending...',
      'contact.formProcessing': 'Processing...',
      'contact.formSuccess': 'Thank you! Your message has been sent successfully.',
      'contact.formError': 'Oops! There was a problem submitting your form.',
      'contact.formConnectionError': 'Oops! There was a problem connecting to the server.',
      'footer.copy': '© 2026 Adeline Tuyizere. Built as a focused software engineering portfolio.',
      'footer.top': 'Back to top',
      'meta.keywords': 'Adeline Tuyizere, software engineer, full-stack developer, React, TypeScript, NestJS, Spring Boot, portfolio',
      'meta.description': 'Adeline Tuyizere is a software engineer building thoughtful full-stack products with React, TypeScript, NestJS, Spring Boot, and PostgreSQL.',
      pageTitle: 'Adeline Tuyizere | Software Engineer'
    },
    rw: {
      'nav.home': 'Ahabanza',
      'nav.about': 'Ibyanjye',
      'nav.stack': 'Ikoranabuhanga',
      'nav.experience': 'Inararibonye',
      'nav.projects': 'Imishinga',
      'nav.contact': 'Twandikire',
      'hero.eyebrow': 'Inzobere mu Guteza Imbere Imbuga n\'Inyuma',
      'hero.title': 'Kubaka porogaramu zikomeye hifashishijwe ikoranabuhanga rigezweho.',
      'hero.lead': 'Nitwa Adeline Tuyizere. Nkubaka full-stack web applications nkoresheje React, TypeScript, NestJS, Spring Boot, na PostgreSQL, nshyira imbere backend logic, API integration, database design, no gutanga products zoroshye kubungabunga.',
      'hero.ctaPrimary': 'Reba Imishinga',
      'hero.ctaSecondary': 'Dukorane',
      'hero.downloadCV': 'Kuramo CV',
      'hero.metric1': 'Imishinga yubatswe muri product, dashboard, na platform work.',
      'hero.metric2': 'Ikoranabuhanga ry\'ingenzi muri frontend, backend, databases, na tooling.',
      'hero.metric3': 'Kwitegura kurangiza BSc muri Software Engineering muri AUCA.',
      'hero.note1Label': 'Mboneka',
      'hero.note1Text': 'Ama-internship n\'akazi ko mu bwubatsi bwa software',
      'hero.note2Label': 'Mbarizwa',
      'hero.note2Text': 'Kigali, Rwanda',
      'about.kicker': 'Ibyanjye',
      'about.title': 'Amateka yanjye mu mwuga',
      'about.lead': 'Akazi kanjye kari hagati yo kubaka products zatekerejwe neza n\'ubwubatsi bukomeye bwa backend. Nkunda kubaka systems zikomeye imbere ariko zikanorohera abazikoresha.',
      'about.card1Title': 'Ndi nde',
      'about.card1Text': 'Ndi software engineer ukora yitonze kandi ufite uburambe mu kubaka full-stack applications mu matsinda. Nitaho code quality, architecture isukuye, no gutanga ibisubizo bikemura ibibazo nyabyo.',
      'about.card2Title': 'Uko Nkora',
      'about.card2Text': 'Nkora muri frontend na backend mu matsinda akora mu buryo bwa Agile, ntanga umusanzu muri API design, database integration, sprint collaboration, peer code reviews, n\'ibisobanuro bituma systems zoroha kubungabunga igihe kirekire.',
      'about.card3Title': 'Icyo Nshaka',
      'about.card3Text': 'Nshaka roles za engineering aho fundamentals zikomeye, gutekereza nka product, n\'ishyirwa mu bikorwa rihamye bihabwa agaciro. Nkora neza mu matsinda akunda ownership, rigor, no gukura.',
      'skills.kicker': 'Ikoranabuhanga',
      'skills.title': 'Ubumenyi mu bya Tekiniki',
      'skills.lead': 'Nkora neza iyo nshoboye gukora ku bice byose bya product, kuva kuri backend logic na API contracts kugeza ku interfaces zihuza neza no ku workflows ziteguye deployment.',
      'skills.frontendTitle': 'Frontend',
      'skills.frontendText': 'Interfaces zisubiza neza, zoroshye gukoresha, kandi zubatse ku buryo bukwiriye real product flows.',
      'skills.backendTitle': 'Backend',
      'skills.backendText': 'Service architecture, business logic, authentication flows, na REST API implementation.',
      'skills.dataTitle': 'Data na Delivery',
      'skills.dataText': 'Data modeling ikomeye, developer tooling, na team workflows zifite discipline.',
      'skills.langEnglish': 'Icyongereza',
      'skills.langFrench': 'Igifaransa',
      'skills.langKinyarwanda': 'Ikinyarwanda',
      'skills.levelProfessional': "Urwego rw'umwuga",
      'skills.levelConversational': 'Urwego rwo kuganira',
      'skills.levelNative': 'Ururimi kavukire',
      'experience.kicker': 'Inararibonye',
      'experience.title': "Urugendo rw'umwuga",
      'experience.lead': "Urutonde rw'imirimo ya tekinike n'amahugurwa akomeye y'ubwubatsi bwa porogaramu.",
      'experience.exp1Title': 'Software Trainee – The Gym',
      'experience.exp1Text': 'Intensive engineering training: JavaScript, TypeScript, Node.js, and Express. Mastered Fit and FitHub communication, Git-based collaboration, and Agile workflows.',
      'experience.exp1Date': '11/2024 – Present',
      'experience.exp2Title': 'Fellow – A2SV',
      'experience.exp2Text': 'Focusing on advanced Data Structures & Algorithms, complex problem-solving, and algorithmic efficiency.',
      'experience.exp2Date': '12/2025 – Present',
      'experience.exp3Title': 'Uwimenyereza umwuga mu bwubatsi bwa porogaramu – KB21',
      'experience.exp3Text': "Nubatse ibice binyuranye by'urubuga rwo gusangira imodoka hagati y'abantu. Nashyizeho uburyo bwo gutumiza imodoka, kuyungurura amakuru y'imodoka, no kuvugurura amakuru ku mbonerahamwe mu buryo ako kanya.",
      'experience.exp3Date': 'Nzeri 2025 – Ukuboza 2025',
      'education.kicker': 'Amashuri',
      'education.title': "Ishingiro ry'uburezi",
      'education.degree': "Impamyabumenyi y'icyiciro cya kabiri cya kaminuza mu Bwubatsi bwa Porogaramu",
      'education.school': "Kaminuza y'Abadiventisti muri Afurika yo Hagati (AUCA) | 2023 – 2026 (Biteganijwe)",
      'education.details': "Nibanda ku rufatiro rwa siyansi ya mudasobwa, imiterere ya porogaramu, n'igishushanyo mbonera cy'urusobe rw'ikoranabuhanga.",
      'projects.kicker': 'Imishinga',
      'projects.title': 'Imishinga yatoranyijwe',
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
      'projects.inProgress': 'Biracyakomeza',
      'projects.liveDemo': 'Kwerekana uko ikora',
      'common.github': 'GitHub',
      'common.liveSite': 'Urubuga Ruriho',
      'contact.kicker': 'Twandikire',
      'contact.title': 'Tuvugane',
      'contact.lead': 'Niba uri gushaka umuntu wo guha akazi, gukorana na we, cyangwa ushaka uwatanga umusanzu mu bice byose bya stack, nyandikira. Nkunda cyane teams zubaka products zikomeye kandi zifite engineering standards nziza.',
      'contact.formName': 'Amazina yawe',
      'contact.formEmail': 'Email yawe',
      'contact.formSubject': 'Impamvu',
      'contact.formMessage': 'Ubutumwa bwawe',
      'contact.formSubmit': 'Ohereza Ubutumwa',
      'contact.formSending': 'Biri koherezwa...',
      'contact.formProcessing': 'Biri gutunganywa...',
      'contact.formSuccess': 'Murakoze! Ubutumwa bwanyu bwoherejwe neza.',
      'contact.formError': 'Habaye ikibazo mu kohereza ubutumwa bwanyu.',
      'contact.formConnectionError': 'Habaye ikibazo mu guhuza na server.',
      'footer.copy': '© 2026 Adeline Tuyizere. Urubuga rwubatswe nk\'portfolio ya software engineering ifite icyerekezo.',
      'footer.top': 'Subira hejuru',
      'meta.keywords': 'Adeline Tuyizere, software engineer, umubatsi wa porogaramu, React, TypeScript, NestJS, Spring Boot, portfolio',
      'meta.description': 'Adeline Tuyizere ni software engineer wubaka porogaramu zishitse (full-stack products) hifashishijwe React, TypeScript, NestJS, Spring Boot, na PostgreSQL.',
      pageTitle: 'Adeline Tuyizere | Software Engineer'
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.stack': 'Stack',
      'nav.experience': 'Expérience',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Ingénieure Logicielle Full-Stack',
      'hero.title': 'Construire des applications full-stack fiables avec des technologies modernes.',
      'hero.lead': "Je suis Adeline Tuyizere. Je construis des applications web full-stack avec React, TypeScript, NestJS, Spring Boot et PostgreSQL, with un fort accent sur la logique backend, l'intégration d'API, la conception de bases de données et une livraison maintenable.",
      'hero.ctaPrimary': 'Voir les Projets',
      'hero.ctaSecondary': 'Travaillons Ensemble',
      'hero.downloadCV': 'Télécharger le CV',
      'hero.metric1': 'Projets réalisés sur des produits, dashboards et plateformes.',
      'hero.metric2': 'Technologies clés en frontend, backend, bases de données et tooling.',
      'hero.metric3': 'Parcours BSc en Software Engineering à AUCA, fin prévue en 2026.',
      'hero.note1Label': 'Disponible',
      'hero.note1Text': 'Stages et postes en ingénierie',
      'hero.note2Label': 'Basée à',
      'hero.note2Text': 'Kigali, Rwanda',
      'about.kicker': 'À propos',
      'about.title': 'Parcours Professionnel',
      'about.lead': "Mon travail se situe à l'intersection d'une mise en œuvre produit réfléchie et d'une solide ingénierie backend. J'aime construire des systèmes fiables en profondeur tout en restant polis et intuitifs à utiliser.",
      'about.card1Title': 'Qui je suis',
      'about.card1Text': "Je suis une ingénieure logicielle rigoureuse avec une expérience concrète dans la création d'applications full-stack en environnement collaboratif. J'accorde de l'importance à la qualité du code, à une architecture propre et à des fonctionnalités qui résolvent de vrais problèmes.",
      'about.card2Title': 'Ma façon de travailler',
      'about.card2Text': "Je travaille sur le frontend et le backend dans des environnements Agile, en contribuant à la conception d'API, à l'intégration de bases de données, à la collaboration en sprint, aux revues de code entre pairs et aux détails d'implémentation qui rendent les systèmes maintenables.",
      'about.card3Title': 'Ce que je recherche',
      'about.card3Text': "Je recherche des rôles d'ingénierie où les bases solides, la réflexion produit et une exécution régulière comptent. Je donne le meilleur de moi-même dans des équipes qui valorisent l'ownership, la rigueur et la progression.",
      'skills.kicker': 'Stack',
      'skills.title': 'Compétences Techniques',
      'skills.lead': "Je suis la plus efficace lorsque je peux intervenir sur toute la surface d'un produit, de la logique backend et des contrats d'API jusqu'aux interfaces responsives et aux workflows prêts pour le déploiement.",
      'skills.frontendTitle': 'Frontend',
      'skills.frontendText': 'Des interfaces responsives, utilisables et structurées pour de vrais parcours produit.',
      'skills.backendTitle': 'Backend',
      'skills.backendText': "Architecture de services, logique métier, flux d'authentification et implémentation d'API REST.",
      'skills.dataTitle': 'Données et Delivery',
      'skills.dataText': 'Modélisation de données solide, outillage développeur et workflows disciplinés.',
      'skills.langEnglish': 'Anglais',
      'skills.langFrench': 'Français',
      'skills.langKinyarwanda': 'Kinyarwanda',
      'skills.levelProfessional': 'Professionnel',
      'skills.levelConversational': 'Conversationnel',
      'skills.levelNative': 'Maternel',
      'experience.kicker': 'Expérience',
      'experience.title': 'Parcours Professionnel',
      'experience.lead': 'Un historique de rôles techniques et de programmes d\'ingénierie intensifs.',
      'experience.exp1Title': 'Stagiaire Logiciel – The Gym',
      'experience.exp1Text': 'Formation intensive en ingénierie : JavaScript, TypeScript, Node.js et Express. Maîtrise de la communication Fit et FitHub, collaboration via Git et workflows Agile.',
      'experience.exp1Date': '11/2024 – Présent',
      'experience.exp2Title': 'Fellow – A2SV',
      'experience.exp2Text': 'Focus sur les structures de données et algorithmes avancés, résolution de problèmes complexes et efficacité algorithmique.',
      'experience.exp2Date': '12/2025 – Présent',
      'experience.exp3Title': 'Stagiaire Développeur Logiciel – KB21',
      'experience.exp3Text': "Développement de fonctionnalités pour une plateforme de partage de voitures entre particuliers. Implémentation des flux de réservation, des filtres d'annonces et des mises à jour du tableau de bord en temps réel.",
      'experience.exp3Date': '09/2025 – 12/2025',
      'education.kicker': 'Éducation',
      'education.title': 'Fondation Académique',
      'education.degree': 'Licence en Génie Logiciel',
      'education.school': 'Université Adventiste d\'Afrique Centrale (AUCA) | 2023 – 2026 (Prévu)',
      'education.details': 'Accent mis sur les fondamentaux de l\'informatique, l\'architecture logicielle et la conception de systèmes.',
      'projects.kicker': 'Projets',
      'projects.title': 'Projets Sélectionnés',
      'projects.lead': 'Ces projets reflètent un mélange de dashboards, de fonctionnalités de plateforme, de conception de systèmes et de full-stack implementation dans différents contextes produit.',
      'projects.project1Type': 'Dashboard Opérationnel',
      'projects.project1Title': 'Mining Production Monitoring System',
      'projects.project1Text': "J'ai construit un dashboard de suivi de production pour les opérations minières with des vues de reporting, une gestion des rôles et des workflows pilotés par la donnée pour améliorer la visibilité opérationnelle.",
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
      'projects.inProgress': 'En cours',
      'projects.liveDemo': 'Démo Live',
      'common.github': 'GitHub',
      'common.liveSite': 'Site Live',
      'contact.kicker': 'Contact',
      'contact.title': 'Me Contacter',
      'contact.lead': "Si vous recrutez, collaborez ou recherchez une personne capable de contribuer sur toute la stack, contactez-moi. Je suis particulièrement intéressée par les équipes qui construisent des produits sérieux avec de fortes exigences d'ingénierie.",
      'contact.formName': 'Votre nom',
      'contact.formEmail': 'Votre email',
      'contact.formSubject': 'Sujet',
      'contact.formMessage': 'Votre message',
      'contact.formSubmit': 'Envoyer le Message',
      'contact.formSending': 'Envoi en cours...',
      'contact.formProcessing': 'Traitement en cours...',
      'contact.formSuccess': 'Merci ! Votre message a été envoyé avec succès.',
      'contact.formError': 'Oups ! Un problème est survenu lors de l’envoi du formulaire.',
      'contact.formConnectionError': 'Oups ! Un problème est survenu lors de la connexion au serveur.',
      'footer.copy': '© 2026 Adeline Tuyizere. Portfolio construit avec une approche logicielle rigoureuse.',
      'footer.top': 'Retour en haut',
      'meta.keywords': 'Adeline Tuyizere, ingénieure logicielle, développeuse full-stack, React, TypeScript, NestJS, Spring Boot, portfolio',
      'meta.description': 'Adeline Tuyizere est une ingénieure logicielle qui conçoit des produits full-stack avec React, TypeScript, NestJS, Spring Boot et PostgreSQL.',
      pageTitle: 'Adeline Tuyizere | Ingénieure Logicielle'
    },
    de: {
      'nav.home': 'Startseite',
      'nav.about': 'Über mich',
      'nav.stack': 'Stack',
      'nav.experience': 'Erfahrung',
      'nav.projects': 'Projekte',
      'nav.contact': 'Kontakt',
      'hero.eyebrow': 'Full-Stack Softwareentwicklerin',
      'hero.title': 'Zuverlässige Full-Stack-Anwendungen mit modernen Technologien bauen.',
      'hero.lead': 'Ich bin Adeline Tuyizere. Ich entwickle Full-Stack-Webanwendungen mit React, TypeScript, NestJS, Spring Boot und PostgreSQL, mit einem starken Fokus auf Backend-Logik, API-Integration, Datenbankdesign und wartbare Produktbereitstellung.',
      'hero.ctaPrimary': 'Projekte ansehen',
      'hero.ctaSecondary': 'Lass uns zusammenarbeiten',
      'hero.downloadCV': 'Lebenslauf herunterladen',
      'hero.metric1': 'Projekte in den Bereichen Produkt, Dashboard und Plattform.',
      'hero.metric2': 'Kerntechnologien in Frontend, Backend, Datenbanken und Tooling.',
      'hero.metric3': 'BSc-Abschluss in Software Engineering an der AUCA voraussichtlich 2026.',
      'hero.note1Label': 'Verfügbar',
      'hero.note1Text': 'Praktika und Engineering-Rollen',
      'hero.note2Label': 'Standort',
      'hero.note2Text': 'Kigali, Ruanda',
      'about.kicker': 'Über mich',
      'about.title': 'Beruflicher Hintergrund',
      'about.lead': 'Meine Arbeit liegt an der Schnittstelle von durchdachter Produktimplementierung und solider Backend-Entwicklung. Ich genieße es, Systeme zu bauen, die im Kern zuverlässig sind und sich gleichzeitig poliert und intuitiv anfühlen.',
      'about.card1Title': 'Wer ich bin',
      'about.card1Text': 'Ich bin eine detailorientierte Softwareentwicklerin mit praktischer Erfahrung im Aufbau von Full-Stack-Anwendungen in kollaborativen Umgebungen. Ich lege Wert auf Codequalität, saubere Architektur und Funktionen, die reale Workflow-Probleme lösen.',
      'about.card2Title': 'Wie ich arbeite',
      'about.card2Text': 'Ich arbeite über Frontend- und Backend-Schichten hinweg in Agile-Teamumgebungen und trage durch API-Design, Datenbankintegration, Sprint-Zusammenarbeit, Peer-Code-Reviews und Implementierungsdetails dazu bei, dass Systeme langfristig wartbar bleiben.',
      'about.card3Title': 'Was ich suche',
      'about.card3Text': 'Ich suche nach Engineering-Rollen, in denen solide Grundlagen, Produktdenken und stetige Ausführung zählen. Teams, die Eigenverantwortung, Strenge und Wachstum schätzen, sind der Ort, an dem ich meine beste Arbeit leiste.',
      'skills.kicker': 'Stack',
      'skills.title': 'Technische Fähigkeiten',
      'skills.lead': 'Ich bin am stärksten, wenn ich über die gesamte Produktoberfläche hinweg arbeiten kann, von der Backend-Logik und API-Verträgen bis hin zu responsiven Schnittstellen und einsatzbereiten Workflows.',
      'skills.frontendTitle': 'Frontend',
      'skills.frontendText': 'Responsive und nutzerfreundliche Schnittstellen, strukturiert für reale Produktabläufe.',
      'skills.backendTitle': 'Backend',
      'skills.backendText': 'Service-Architektur, Geschäftslogik, Authentifizierungsabläufe und REST-API-Implementierung.',
      'skills.dataTitle': 'Daten und Bereitstellung',
      'skills.dataText': 'Solide Datenmodellierung, Entwickler-Tools und disziplinierte Team-Workflows.',
      'skills.langEnglish': 'Englisch',
      'skills.langFrench': 'Französisch',
      'skills.langKinyarwanda': 'Kinyarwanda',
      'skills.levelProfessional': 'Verhandlungssicher',
      'skills.levelConversational': 'Konversationssicher',
      'skills.levelNative': 'Muttersprache',
      'experience.kicker': 'Erfahrung',
      'experience.title': 'Beruflicher Werdegang',
      'experience.lead': 'Eine Erfolgsbilanz technischer Rollen und intensiver Ingenieurprogramme.',
      'experience.exp1Title': 'Software-Trainee – The Gym',
      'experience.exp1Text': 'Intensives Engineering-Training: JavaScript, TypeScript, Node.js und Express. Beherrschung von Fit- und FitHub-Kommunikation, Git-basierter Zusammenarbeit und Agile-Workflows.',
      'experience.exp1Date': '11/2024 – Heute',
      'experience.exp2Title': 'Fellow – A2SV',
      'experience.exp2Text': 'Fokus auf fortgeschrittene Datenstrukturen und Algorithmen, komplexe Problemlösung und algorithmische Effizienz.',
      'experience.exp2Date': '12/2025 – Heute',
      'experience.exp3Title': 'Software-Entwicklungs-Praktikant – KB21',
      'experience.exp3Text': 'Entwickelte Funktionen für eine Peer-to-Peer-Carsharing-Plattform. Implementierte Buchungsabläufe, Fahrzeugfilter und Echtzeit-Dashboard-Updates.',
      'experience.exp3Date': '09/2025 – 12/2025',
      'education.kicker': 'Ausbildung',
      'education.title': 'Akademische Grundlage',
      'education.degree': 'Bachelor in Software Engineering',
      'education.school': 'Adventist University of Central Africa (AUCA) | 2023 – 2026 (Voraussichtlich)',
      'education.details': 'Schwerpunkte auf Informatik-Grundlagen, Software-Architektur und Systemdesign.',
      'projects.kicker': 'Projekte',
      'projects.title': 'Ausgewählte Projekte',
      'projects.lead': 'Diese Projekte spiegeln eine Mischung aus Dashboard-Arbeiten, Plattformfunktionen, Systemdesign und Full-Stack-Implementierungen in verschiedenen Produktkontexten wider.',
      'projects.project1Type': 'Operations-Dashboard',
      'projects.project1Title': 'Bergbau-Produktionsüberwachungssystem',
      'projects.project1Text': 'Entwicklung eines Dashboards zur Produktionsüberwachung für den Bergbau mit Berichtsichten, rollenbasierter Zugriffskontrolle und datengesteuerten Workflows.',
      'projects.project2Type': 'Plattform-Aufbau',
      'projects.project2Title': 'Peer-to-Peer-Carsharing',
      'projects.project2Text': 'Entwicklung von Plattformfunktionen für das Verleihen und Buchen von Fahrzeugen, Kombination von React-Schnittstellen mit NestJS-APIs.',
      'projects.project3Type': 'Geschäftssystem',
      'projects.project3Title': 'Essensbestell-Managementsystem',
      'projects.project3Text': 'Aufbau eines Full-Stack-Restaurantsystems mit Menü-Browsing, Warenkorb, Benutzerauthentifizierung und Rollenverteilung.',
      'projects.project4Type': 'Hackathon-Projekt',
      'projects.project4Title': 'TVET Linkage Plattform',
      'projects.project4Text': 'Entwickelt während des Code2Unlock Hackathons zur Verbesserung des TVET-Bewusstseins und zur Stärkung der Verbindung zwischen Ausbildung und Privatwirtschaft.',
      'projects.project5Type': 'In Arbeit',
      'projects.project5Title': 'StockSync',
      'projects.project5Text': 'Ein standortübergreifendes Inventar- und Abgleichssystem mit Fokus auf zuverlässige Bestandssichtbarkeit und Bestandsverfolgung.',
      'projects.inProgress': 'In Arbeit',
      'projects.liveDemo': 'Live-Demo',
      'common.github': 'GitHub',
      'common.liveSite': 'Live-Seite',
      'contact.kicker': 'Kontakt',
      'contact.title': 'Kontaktieren Sie mich',
      'contact.lead': 'Wenn Sie jemanden suchen, der über den gesamten Stack hinweg beitragen kann, melden Sie sich. Ich interessiere mich besonders für Teams, die ernsthafte Produkte mit hohen Engineering-Standards entwickeln.',
      'contact.formName': 'Ihr Name',
      'contact.formEmail': 'Ihre E-Mail',
      'contact.formSubject': 'Betreff',
      'contact.formMessage': 'Ihre Nachricht',
      'contact.formSubmit': 'Nachricht senden',
      'contact.formSending': 'Senden...',
      'contact.formProcessing': 'Verarbeiten...',
      'contact.formSuccess': 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
      'contact.formError': 'Hoppla! Es gab ein Problem beim Absenden des Formulars.',
      'contact.formConnectionError': 'Hoppla! Es gab ein Problem mit der Serververbindung.',
      'footer.copy': '© 2026 Adeline Tuyizere. Erstellt als fokussiertes Software-Engineering-Portfolio.',
      'footer.top': 'Nach oben',
      'meta.keywords': 'Adeline Tuyizere, Software-Ingenieurin, Full-Stack-Entwicklerin, React, TypeScript, NestJS, Spring Boot, Portfolio',
      'meta.description': 'Adeline Tuyizere ist eine Software-Ingenieurin, die durchdachte Full-Stack-Produkte mit React, TypeScript, NestJS, Spring Boot und PostgreSQL entwickelt.',
      pageTitle: 'Adeline Tuyizere | Softwareentwicklerin'
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
        if (element.tagName === 'META') {
          element.setAttribute('content', dictionary[key]);
        } else {
          element.textContent = dictionary[key];
        }
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

function initThemeToggle() {
  const navContainer = document.querySelector('.custom_nav-container');
  if (!navContainer || document.querySelector('.theme-toggle')) {
    applyTheme(window.localStorage.getItem('portfolio-theme') || 'dark');
    return;
  }

  const themeToggle = document.createElement('button');
  themeToggle.type = 'button';
  themeToggle.className = 'theme-toggle';
  themeToggle.setAttribute('aria-pressed', 'false');

  const icon = document.createElement('i');
  icon.className = 'fas fa-moon';
  icon.setAttribute('aria-hidden', 'true');

  const label = document.createElement('span');
  label.className = 'theme-toggle-label';

  themeToggle.append(icon, label);

  const languageSwitcher = navContainer.querySelector('.language-switcher');
  const menuToggle = navContainer.querySelector('.menu-toggle, .navbar-toggler');

  if (languageSwitcher) {
    languageSwitcher.insertAdjacentElement('afterend', themeToggle);
  } else if (menuToggle) {
    menuToggle.insertAdjacentElement('beforebegin', themeToggle);
  } else {
    navContainer.append(themeToggle);
  }

  const savedTheme = window.localStorage.getItem('portfolio-theme') || 'dark';

  const syncToggle = (theme) => {
    const isLight = theme === 'light';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    themeToggle.setAttribute('title', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    label.textContent = isLight ? 'Light' : 'Dark';
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  };

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('theme-light') ? 'dark' : 'light';
    applyTheme(nextTheme);
    syncToggle(nextTheme);
  });

  applyTheme(savedTheme);
  syncToggle(savedTheme);
}

function applyTheme(theme) {
  const normalizedTheme = theme === 'light' ? 'light' : 'dark';
  document.body.classList.toggle('theme-light', normalizedTheme === 'light');
  window.localStorage.setItem('portfolio-theme', normalizedTheme);
}

function initVisitCounter() {
  const storageKey = 'portfolio-visit-count';
  const rawCount = Number.parseInt(window.localStorage.getItem(storageKey) || '0', 10);
  const visitCount = Number.isNaN(rawCount) ? 1 : rawCount + 1;

  window.localStorage.setItem(storageKey, String(visitCount));

  const counter = document.createElement('p');
  counter.className = 'visit-counter';
  counter.textContent = `This browser visited ${visitCount} time${visitCount === 1 ? '' : 's'}.`;

  const footerContent = document.querySelector('.footer-content');
  if (footerContent) {
    footerContent.insertAdjacentElement('afterbegin', counter);
    return;
  }

  const footerContainer = document.querySelector('.footer_section .container');
  if (footerContainer) {
    footerContainer.append(counter);
  }
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

function initContactForm() {
  const forms = document.querySelectorAll('.contact-form');
  if (!forms.length) return;

  const getTranslation = (key) => {
    const lang = window.localStorage.getItem('portfolio-language') || 'en';
    const activeBtn = document.querySelector('.language-btn.is-active');
    const currentLang = activeBtn ? activeBtn.dataset.lang : 'en';
    
    const defaults = {
      en: { sending: 'Sending...', processing: 'Processing...', success: 'Thank you! Your message has been sent successfully.', error: 'Oops! There was a problem submitting your form.', connection: 'Oops! There was a problem connecting to the server.' },
      rw: { sending: 'Biri koherezwa...', processing: 'Biri gutunganywa...', success: 'Murakoze! Ubutumwa bwanyu bwoherejwe neza.', error: 'Habaye ikibazo mu kohereza ubutumwa bwanyu.', connection: 'Habaye ikibazo mu guhuza na server.' },
      fr: { sending: 'Envoi en cours...', processing: 'Traitement en cours...', success: 'Merci ! Votre message a été envoyé avec succès.', error: 'Oups ! Un problème est survenu lors de l’envoi du formulaire.', connection: 'Oups ! Un problème est survenu lors de la connexion au serveur.' },
      de: { sending: 'Senden...', processing: 'Verarbeiten...', success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.', error: 'Hoppla! Es gab ein Problem beim Absenden des Formulars.', connection: 'Hoppla! Es gab ein Problem mit der Serververbindung.' }
    };
    
    return defaults[currentLang][key] || defaults.en[key];
  };

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      if (!form.action.includes('formspree.io')) return;

      e.preventDefault();
      const status = form.querySelector('#form-status');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : '';

      if (status) {
        status.textContent = getTranslation('sending');
        status.className = 'form-status is-visible';
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = getTranslation('processing');
      }

      try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          if (status) {
            status.textContent = getTranslation('success');
            status.className = 'form-status is-visible is-success';
          }
          form.reset();
        } else {
          const result = await response.json();
          if (status) {
            status.textContent = result.errors ? result.errors.map(error => error.message).join(', ') : getTranslation('error');
            status.className = 'form-status is-visible is-error';
          }
        }
      } catch (error) {
        if (status) {
          status.textContent = getTranslation('connection');
          status.className = 'form-status is-visible is-error';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
        
        if (status && status.classList.contains('is-success')) {
          setTimeout(() => {
            status.className = 'form-status';
          }, 5000);
        }
      }
    });
  });
}
