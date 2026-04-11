// Professional Portfolio App JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initActiveNavState();
});

// Mobile Hamburger Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('primary-nav');
  
  if(menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }
}

// Smooth Scrolling for anchor links
function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll('.nav-scroll');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if(targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
          // Offset for fixed header (approx 80px)
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Scroll Reveal components on scroll down
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.fade-element');
  elements.forEach(el => observer.observe(el));
}

// Update Active Nav Element Based on Scroll Position
function initActiveNavState() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-list .nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    // Header offset to trigger slightly early
    const offset = 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - offset)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.parentElement.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.parentElement.classList.add('active');
      }
    });
  });
}
