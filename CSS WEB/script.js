// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initFilters();
    initModals();
    initScrollEffects();
    initNotifications();
    initNewspaperAnimations();
    initCounterAnimation();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// Filter functionality
function initFilters() {
    // Newspaper filters
    const newspaperFilters = document.querySelectorAll('.newspaper-filters .filter-btn');
    const newspaperCards = document.querySelectorAll('.newspaper-card');

    newspaperFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active filter
            newspaperFilters.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            newspaperCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


}

// Enhanced newspaper animations
function initNewspaperAnimations() {
    const newspaperBlocks = document.querySelectorAll('.newspaper-block');
    const newspapersSection = document.querySelector('.newspapers');
    
    // Create intersection observer for newspaper blocks
    const blockObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add floating animation after initial animation
                setTimeout(() => {
                    entry.target.style.animation = 'float 6s ease-in-out infinite';
                }, 600);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe each newspaper block
    newspaperBlocks.forEach(block => {
        blockObserver.observe(block);
    });

    // Parallax effect for newspapers section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const newspapersSectionTop = newspapersSection.offsetTop;
        const newspapersSectionHeight = newspapersSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Check if newspapers section is in view
        if (scrolled + windowHeight > newspapersSectionTop && 
            scrolled < newspapersSectionTop + newspapersSectionHeight) {
            
            const progress = (scrolled - newspapersSectionTop + windowHeight) / (newspapersSectionHeight + windowHeight);
            const translateY = progress * 50;
            
            newspaperBlocks.forEach((block, index) => {
                const delay = index * 0.1;
                const blockTranslateY = translateY * (1 + delay);
                block.style.transform = `translateY(${blockTranslateY}px)`;
            });
        }
    });

    // Add hover effects with 3D transform
    newspaperBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        });
    });
}

// Modal functionality
function initModals() {
    const modal = document.getElementById('resourceModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Scroll effects
function initScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.resource-category, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Notification functionality
function initNotifications() {
    const signupForm = document.querySelector('.signup-form');
    const emailInput = signupForm?.querySelector('input[type="email"]');
    const subscribeBtn = signupForm?.querySelector('.btn');

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            if (!email || !isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate subscription
            subscribeBtn.innerHTML = '<div class="loading"></div>';
            subscribeBtn.disabled = true;

            setTimeout(() => {
                showNotification('Successfully subscribed to notifications!', 'success');
                emailInput.value = '';
                subscribeBtn.innerHTML = 'Subscribe';
                subscribeBtn.disabled = false;
            }, 2000);
        });
    }
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function showResourceModal(type) {
    const modal = document.getElementById('resourceModal');
    const modalContent = document.getElementById('modalContent');
    
    let content = '';
    
    switch(type) {
        case 'past-papers':
            content = `
                <h2>Past Papers Archive</h2>
                <div class="modal-resources">
                    <div class="resource-item">
                        <i class="fas fa-file-pdf"></i>
                        <div>
                            <h4>Pakistan Affairs 2023</h4>
                            <p>Complete paper with solutions</p>
                        </div>
                        <button class="btn btn-primary">Download</button>
                    </div>
                    <div class="resource-item">
                        <i class="fas fa-file-pdf"></i>
                        <div>
                            <h4>Current Affairs 2023</h4>
                            <p>Latest current affairs paper</p>
                        </div>
                        <button class="btn btn-primary">Download</button>
                    </div>
                    <div class="resource-item">
                        <i class="fas fa-file-pdf"></i>
                        <div>
                            <h4>Economics 2023</h4>
                            <p>Optional subject paper</p>
                        </div>
                        <button class="btn btn-primary">Download</button>
                    </div>
                </div>
            `;
            break;
        case 'syllabus':
            content = `
                <h2>CSS Syllabus 2024</h2>
                <div class="syllabus-content">
                    <h3>Compulsory Subjects</h3>
                    <ul>
                        <li>Pakistan Affairs (100 marks)</li>
                        <li>Current Affairs (100 marks)</li>
                        <li>English Essay (100 marks)</li>
                        <li>English Precis & Composition (100 marks)</li>
                    </ul>
                    <h3>Optional Subjects</h3>
                    <ul>
                        <li>Economics (200 marks)</li>
                        <li>Political Science (200 marks)</li>
                        <li>International Relations (200 marks)</li>
                        <li>Public Administration (200 marks)</li>
                    </ul>
                </div>
            `;
            break;
        case 'pattern':
            content = `
                <h2>Exam Pattern & Guidelines</h2>
                <div class="pattern-content">
                    <h3>Written Examination</h3>
                    <ul>
                        <li>Total Marks: 1200</li>
                        <li>Duration: 3 hours per paper</li>
                        <li>Compulsory Papers: 4 (400 marks)</li>
                        <li>Optional Papers: 4 (800 marks)</li>
                    </ul>
                    <h3>Marking Scheme</h3>
                    <ul>
                        <li>Content: 70%</li>
                        <li>Presentation: 20%</li>
                        <li>Language: 10%</li>
                    </ul>
                </div>
            `;
            break;
        case 'materials':
            content = `
                <h2>Study Materials</h2>
                <div class="modal-resources">
                    <div class="resource-item">
                        <i class="fas fa-book"></i>
                        <div>
                            <h4>Pakistan Affairs Study Guide</h4>
                            <p>Comprehensive guide with practice questions</p>
                        </div>
                        <button class="btn btn-primary">Download</button>
                    </div>
                    <div class="resource-item">
                        <i class="fas fa-book"></i>
                        <div>
                            <h4>Current Affairs Notes</h4>
                            <p>Updated notes for 2024 examination</p>
                        </div>
                        <button class="btn btn-primary">Download</button>
                    </div>
                    <div class="resource-item">
                        <i class="fas fa-book"></i>
                        <div>
                            <h4>Economics Reference Book</h4>
                            <p>Complete reference material for Economics</p>
                        </div>
                        <button class="btn btn-primary">Download</button>
                    </div>
                </div>
            `;
            break;
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

function downloadResource(title) {
    showNotification(`Downloading ${title}...`, 'info');
    
    // Simulate download
    setTimeout(() => {
        showNotification(`${title} downloaded successfully!`, 'success');
    }, 2000);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#667eea';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Counter animation functionality
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                        counter.classList.add('animate');
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .modal-resources {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .resource-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
    }
    
    .resource-item i {
        font-size: 1.5rem;
        color: #667eea;
    }
    
    .resource-item div {
        flex: 1;
    }
    
    .resource-item h4 {
        margin: 0 0 0.25rem 0;
        color: #1f2937;
    }
    
    .resource-item p {
        margin: 0;
        color: #6b7280;
        font-size: 0.9rem;
    }
    
    .syllabus-content h3,
    .pattern-content h3 {
        color: #1f2937;
        margin: 1.5rem 0 0.5rem 0;
    }
    
    .syllabus-content ul,
    .pattern-content ul {
        margin: 0 0 1rem 1.5rem;
        color: #6b7280;
    }
    
    .syllabus-content li,
    .pattern-content li {
        margin-bottom: 0.25rem;
    }
    

`;
document.head.appendChild(style); 