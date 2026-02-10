// Modern Portfolio Effects - 2025

// Typing Effect for Hero Section
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.project-card, .skill-category, .experience-item, .education-item, .training-item');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('fade-in-up');
    }
  });
}

// Skill Bar Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const windowHeight = window.innerHeight;
    const barTop = bar.getBoundingClientRect().top;
    
    if (barTop < windowHeight - 100) {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    }
  });
}

// Smooth Scroll for Navigation Links
function smoothScroll() {
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
}

// Parallax Effect for Hero Section
function parallaxEffect() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero_area');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
}

// Add Active Class to Navigation on Scroll
function activeNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.parentElement.classList.add('active');
    }
  });
}

// Cursor Trail Effect (Optional - Modern Touch)
function createCursorTrail() {
  const trail = [];
  const trailLength = 10;
  
  document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY });
    
    if (trail.length > trailLength) {
      trail.shift();
    }
  });
}

// Form Validation Enhancement
function enhanceFormValidation() {
  const form = document.querySelector('#contactForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ff6b6b';
          
          setTimeout(() => {
            input.style.borderColor = '';
          }, 2000);
        }
      });
      
      if (!isValid) {
        e.preventDefault();
      }
    });
  }
}

// Counter Animation for Stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number, .about-stats h3');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(counter);
  });
}

// Add Floating Animation to Profile Image
function floatingAnimation() {
  const profileImg = document.querySelector('.img_container');
  
  if (profileImg) {
    let position = 0;
    let direction = 1;
    
    setInterval(() => {
      position += direction * 0.5;
      
      if (position > 10 || position < -10) {
        direction *= -1;
      }
      
      profileImg.style.transform = `translateY(${position}px)`;
    }, 50);
  }
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll
  smoothScroll();
  
  // Scroll animations
  window.addEventListener('scroll', () => {
    revealOnScroll();
    animateSkillBars();
    activeNavOnScroll();
  });
  
  // Initial check for elements in viewport
  revealOnScroll();
  animateSkillBars();
  
  // Counter animations
  animateCounters();
  
  // Form validation
  enhanceFormValidation();
  
  // Floating animation for profile image
  // floatingAnimation(); // Uncomment if you want the floating effect
});

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  setTimeout(() => {
    revealOnScroll();
    animateSkillBars();
  }, 100);
});

// Add smooth page transitions
document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hostname === window.location.hostname && !this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const href = this.getAttribute('href');
      
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease';
      
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});

// Prevent FOUC (Flash of Unstyled Content)
document.body.style.opacity = '0';
window.addEventListener('load', function() {
  document.body.style.transition = 'opacity 0.5s ease';
  document.body.style.opacity = '1';
});


// Scroll to Top Button
function createScrollToTopButton() {
  // Create button if it doesn't exist
  let scrollBtn = document.querySelector('.scroll-to-top');
  
  if (!scrollBtn) {
    scrollBtn = document.createElement('div');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);
    
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Show/hide based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', function() {
  createScrollToTopButton();
});

// Add hover effect to project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });
});

// Add ripple effect to buttons
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
  ripple.classList.add('ripple');
  
  const rippleElement = button.getElementsByClassName('ripple')[0];
  
  if (rippleElement) {
    rippleElement.remove();
  }
  
  button.appendChild(ripple);
}

// Apply ripple effect to all buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .submit-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
  });
});

// Add CSS for ripple effect dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .btn-primary, .btn-secondary, .submit-btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// Lazy load images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});

// Add tilt effect to cards (3D effect)
function addTiltEffect() {
  const cards = document.querySelectorAll('.project-card, .skill-category');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// Initialize tilt effect (optional - can be heavy on performance)
// Uncomment if you want the 3D tilt effect
// document.addEventListener('DOMContentLoaded', addTiltEffect);

console.log('🚀 Modern Portfolio Effects Loaded Successfully!');
console.log('✨ Enjoy your modernized portfolio!');
