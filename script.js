// Smooth scroll for navigation links
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

// Active navigation highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe cards
document.querySelectorAll('.card, .cert-item, .engagement-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add scroll effect to navigation bar
let lastScroll = 0;
const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scrolling down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scrolling up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Theme persistence
const theme = localStorage.getItem('theme');
if (theme === 'dark') {
    document.documentElement.classList.add('dark');
}

// Save theme preference
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
}

// Add hover effect to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for skills background icon
const skillsBgIcon = document.querySelector('.skills-bg-icon');
if (skillsBgIcon) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const skillsSection = document.querySelector('.skills-card');
        
        if (skillsSection) {
            const sectionTop = skillsSection.offsetTop;
            const sectionHeight = skillsSection.offsetHeight;
            
            if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
                const parallax = (scrolled - sectionTop) * 0.1;
                skillsBgIcon.style.transform = `translateY(${parallax}px) rotate(${parallax * 0.5}deg)`;
            }
        }
    });
}

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero title
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const titleText = heroTitle.textContent;
//     typeWriter(heroTitle, titleText, 80);
// }

// Console message for visitors
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #10b981;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #475569;');
console.log('%cFeel free to reach out: hendrikrikuto@gmail.com', 'font-size: 12px; color: #94a3b8;');