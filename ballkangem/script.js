// ============================================
// TRANSLATIONS DATA
// ============================================
const translations = {
    sq: {
        nav: {
            home: "Kryefaqja",
            destinations: "Destinacione",
            hotels: "Hotele",
            restaurants: "Restorante",
            itinerary: "Itineraret",
            contact: "Kontakt"
        },
        hero: {
            title: "Zbuloni Bukurinë e Kosovës",
            subtitle: "Udhërrëfyesi juaj për aventurë të paharrueshme",
            button: "Eksploro Tani"
        },
        destinations: {
            title: "Destinacionet Kryesore",
            subtitle: "Zbuloni vendet më të bukura të Kosovës"
        },
        hotels: {
            title: "Akomodimi",
            subtitle: "Gjeni vendbanimin perfekt për qëndrimin tuaj"
        },
        restaurants: {
            title: "Kuzhina Tradicionale",
            subtitle: "Shijoni shijen autentike të Kosovës"
        },
        itinerary: {
            title: "Plani i Itinerarit Tuaj",
            days: "Zgjidhni ditët:",
            interest: "Interesi:",
            generate: "Gjenero Itinerarin",
            history: "Histori & Kulturë",
            nature: "Natyrë & Aventurë",
            food: "Ushqim & Kuzhinë",
            relax: "Relaks & Pushim"
        },
        contact: {
            title: "Na Kontaktoni",
            address: "Adresa",
            phone: "Telefoni",
            email: "Email",
            name: "Emri juaj",
            emailPlaceholder: "Email juaj",
            message: "Mesazhi juaj",
            send: "Dërgo Mesazhin"
        }
    },
    en: {
        nav: {
            home: "Home",
            destinations: "Destinations",
            hotels: "Hotels",
            restaurants: "Restaurants",
            itinerary: "Itinerary",
            contact: "Contact"
        },
        hero: {
            title: "Discover Kosovo's Beauty",
            subtitle: "Your guide for unforgettable adventures",
            button: "Explore Now"
        },
        destinations: {
            title: "Main Destinations",
            subtitle: "Discover the most beautiful places in Kosovo"
        },
        hotels: {
            title: "Accommodation",
            subtitle: "Find the perfect place for your stay"
        },
        restaurants: {
            title: "Traditional Cuisine",
            subtitle: "Enjoy the authentic taste of Kosovo"
        },
        itinerary: {
            title: "Your Itinerary Plan",
            days: "Select Days:",
            interest: "Interest:",
            generate: "Generate Itinerary",
            history: "History & Culture",
            nature: "Nature & Adventure",
            food: "Food & Cuisine",
            relax: "Relax & Leisure"
        },
        contact: {
            title: "Contact Us",
            address: "Address",
            phone: "Phone",
            email: "Email",
            name: "Your Name",
            emailPlaceholder: "Your Email",
            message: "Your Message",
            send: "Send Message"
        }
    }
};

// ============================================
// GLOBAL VARIABLES
// ============================================
let currentLang = localStorage.getItem('language') || 'sq';

// ============================================
// MAIN DOM CONTENT LOADED
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing application...");
    
    // Initialize all components
    initNavigation();
    initLanguageSwitcher();
    initHeroSlider();
    initSmoothScrolling();
    initContactForm();
    
    // Load data
    loadDestinations();
    loadHotels();
    loadRestaurants();
    
    // Initialize itinerary generator
    const generateBtn = document.getElementById('generate-itinerary');
    if (generateBtn) {
        console.log("Itinerary button found, adding event listener...");
        generateBtn.addEventListener('click', generateItinerary);
    } else {
        console.error("Itinerary button not found!");
    }
    
    // Apply current language
    changeLanguage(currentLang);
    
    // Initialize chatbot - DUHET TË JETË KËTU
    setTimeout(() => {
        initChatbot();
    }, 1000);
    
    // Generate default itinerary on page load
    setTimeout(() => {
        if (document.getElementById('itinerary-output')) {
            generateItinerary();
        }
    }, 500);
    
    console.log("Application initialized successfully!");
});

// ============================================
// NAVIGATION FUNCTIONS
// ============================================
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                navLinks.style.zIndex = '1000';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.style.display === 'flex' && !navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.style.display = 'none';
            }
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });
    }
}

// ============================================
// LANGUAGE FUNCTIONS
// ============================================
function initLanguageSwitcher() {
    const languageSelect = document.getElementById('language');
    
    if (languageSelect) {
        // Set current language
        languageSelect.value = currentLang;
        
        // Change language on select
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    // Update Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const navTexts = ['home', 'destinations', 'hotels', 'restaurants', 'itinerary', 'contact'];
    
    navLinks.forEach((link, index) => {
        if (navTexts[index]) {
            const icon = link.querySelector('i').cloneNode(true);
            link.innerHTML = '';
            link.appendChild(icon);
            link.appendChild(document.createTextNode(' ' + t.nav[navTexts[index]]));
        }
    });
    
    // Update Hero Section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero .cta-button');
    
    if (heroTitle) heroTitle.textContent = t.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    if (heroButton) {
        heroButton.innerHTML = t.hero.button + ' <i class="fas fa-arrow-right"></i>';
    }
    
    // Update Section Titles
    updateSectionTitle('#destinations', t.destinations.title, t.destinations.subtitle);
    updateSectionTitle('#hotels', t.hotels.title, t.hotels.subtitle);
    updateSectionTitle('#restaurants', t.restaurants.title, t.restaurants.subtitle);
    updateSectionTitle('#itinerary', t.itinerary.title, '');
    updateSectionTitle('#contact', t.contact.title, '');
    
    // Update Itinerary Planner
    const daysLabel = document.querySelector('#itinerary label[for="days"]');
    const interestLabel = document.querySelector('#itinerary label[for="interest"]');
    const generateButton = document.querySelector('#generate-itinerary');
    
    if (daysLabel) {
        const icon = daysLabel.querySelector('i').cloneNode(true);
        daysLabel.innerHTML = '';
        daysLabel.appendChild(icon);
        daysLabel.appendChild(document.createTextNode(' ' + t.itinerary.days));
    }
    
    if (interestLabel) {
        const icon = interestLabel.querySelector('i').cloneNode(true);
        interestLabel.innerHTML = '';
        interestLabel.appendChild(icon);
        interestLabel.appendChild(document.createTextNode(' ' + t.itinerary.interest));
    }
    
    if (generateButton) {
        const icon = generateButton.querySelector('i').cloneNode(true);
        generateButton.innerHTML = '';
        generateButton.appendChild(icon);
        generateButton.appendChild(document.createTextNode(' ' + t.itinerary.generate));
    }
    
    // Update select options
    const interestOptions = [
        t.itinerary.history,
        t.itinerary.nature,
        t.itinerary.food,
        t.itinerary.relax
    ];
    
    const interestSelect = document.getElementById('interest');
    if (interestSelect) {
        interestSelect.innerHTML = '';
        interestOptions.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.toLowerCase().split(' ')[0];
            opt.textContent = option;
            interestSelect.appendChild(opt);
        });
    }
    
    // Update contact form
    updateContactForm(t.contact);
    
    // Regenerate itinerary with new language
    generateItinerary();
}

function updateSectionTitle(selector, title, subtitle) {
    const section = document.querySelector(selector);
    if (section) {
        const titleElement = section.querySelector('.section-title');
        const subtitleElement = section.querySelector('.section-subtitle');
        
        if (titleElement) titleElement.textContent = title;
        if (subtitleElement && subtitle) subtitleElement.textContent = subtitle;
    }
}

function updateContactForm(contactTexts) {
    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTitle) contactTitle.textContent = contactTexts.title;
    
    // Update contact info
    const infoItems = document.querySelectorAll('.contact-info h3');
    if (infoItems.length >= 3) {
        infoItems[0].textContent = contactTexts.address;
        infoItems[1].textContent = contactTexts.phone;
        infoItems[2].textContent = contactTexts.email;
    }
    
    // Update form placeholders
    const nameInput = document.querySelector('.contact-form input[type="text"]');
    const emailInput = document.querySelector('.contact-form input[type="email"]');
    const messageTextarea = document.querySelector('.contact-form textarea');
    const sendButton = document.querySelector('.contact-form button');
    
    if (nameInput) nameInput.placeholder = contactTexts.name;
    if (emailInput) emailInput.placeholder = contactTexts.emailPlaceholder;
    if (messageTextarea) messageTextarea.placeholder = contactTexts.message;
    if (sendButton) {
        sendButton.innerHTML = contactTexts.send + ' <i class="fas fa-paper-plane"></i>';
    }
}

// ============================================
// HERO SLIDER FUNCTIONS
// ============================================
function initHeroSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    // Auto slide every 5 seconds
    if (slides.length > 0) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks) navLinks.style.display = 'none';
                }
            }
        });
    });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert(currentLang === 'sq' 
                    ? 'Ju lutem plotësoni të gjitha fushat!'
                    : 'Please fill all fields!');
                return;
            }
            
            // Show success message
            const successMessage = currentLang === 'sq' 
                ? `Faleminderit ${name}! Mesazhi juaj është dërguar. Do t'ju kontaktojmë së shpejti në ${email}.`
                : `Thank you ${name}! Your message has been sent. We will contact you soon at ${email}.`;
            
            alert(successMessage);
            
            // Reset form
            this.reset();
        });
    }
}

// ============================================
// DESTINATIONS, HOTELS, RESTAURANTS LOADING
// ============================================
function loadDestinations() {
    const container = document.getElementById('destinations-container');
    if (!container || !window.destinations) return;
    
    container.innerHTML = '';
    
    window.destinations.forEach(destination => {
        const card = createDestinationCard(destination);
        container.appendChild(card);
    });
}

function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${destination.image}')"></div>
        <div class="card-content">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <div class="card-rating">
                ${'★'.repeat(Math.floor(destination.rating))}${'☆'.repeat(5 - Math.floor(destination.rating))}
                <span style="color: var(--text-light); margin-left: 8px;">(${destination.reviews} ${currentLang === 'sq' ? 'vlerësime' : 'reviews'})</span>
            </div>
            <div class="card-tags">
                ${destination.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

function loadHotels() {
    const container = document.getElementById('hotels-container');
    if (!container || !window.hotels) return;
    
    container.innerHTML = '';
    
    window.hotels.forEach(hotel => {
        const card = createHotelCard(hotel);
        container.appendChild(card);
    });
}

function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${hotel.image}')"></div>
        <div class="card-content">
            <h3>${hotel.name}</h3>
            <p>${hotel.location}</p>
            <div class="card-rating">
                ${'★'.repeat(Math.floor(hotel.rating))}${'☆'.repeat(5 - Math.floor(hotel.rating))}
            </div>
            <div class="card-price">$${hotel.price}/night</div>
            <div class="card-tags">
                ${hotel.amenities.map(amenity => `<span class="tag">${amenity}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

function loadRestaurants() {
    const container = document.getElementById('restaurants-container');
    if (!container || !window.restaurants) return;
    
    container.innerHTML = '';
    
    window.restaurants.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        container.appendChild(card);
    });
}

function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${restaurant.image}')"></div>
        <div class="card-content">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.cuisine}</p>
            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">${restaurant.description}</p>
            <div class="card-rating">
                ${'★'.repeat(Math.floor(restaurant.rating))}${'☆'.repeat(5 - Math.floor(restaurant.rating))}
            </div>
            <div class="card-price">${restaurant.priceRange}</div>
            <div class="card-tags">
                <span class="tag">${restaurant.type}</span>
            </div>
        </div>
    `;
    
    return card;
}

// ============================================
// ITINERARY GENERATOR 
// ============================================
function generateItinerary() {
    const days = parseInt(document.getElementById('days').value) || 3;
    const interest = document.getElementById('interest').value || 'nature';
    const output = document.getElementById('itinerary-output');
    
    if (!output) {
        console.error("Itinerary output element not found!");
        return;
    }
    
    console.log("Generating itinerary for", days, "days, interest:", interest);
    
    // Fillimi i itinerarit
    const itineraryTitle = currentLang === 'sq' 
        ? `Itinerari Juaj për ${days} Ditë` 
        : `Your ${days}-Day Itinerary`;
    
    const interestText = currentLang === 'sq' 
        ? `Interesi: ${document.querySelector('#interest option:checked').textContent}`
        : `Interest: ${document.querySelector('#interest option:checked').textContent}`;
    
    let html = `
        <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
            <h3 style="margin: 0; color: white;">${itineraryTitle}</h3>
            <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">${interestText}</p>
        </div>
    `;
    
    // Aktivitetet bazuar në interes
    const activities = getActivitiesByInterest(interest, currentLang);
    
    // Gjenerimi i itinerarit për çdo ditë
    for (let i = 1; i <= days; i++) {
        const dayActivities = getDayActivities(i, days, activities, currentLang);
        
        html += `
            <div class="day-itinerary">
                <h4>${currentLang === 'sq' ? 'Dita' : 'Day'} ${i}</h4>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    ${dayActivities.map(activity => `
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
                            <div style="color: var(--primary-color); font-size: 1.2rem;">
                                ${getActivityIcon(activity.type)}
                            </div>
                            <div>
                                <strong style="color: var(--text-dark);">${activity.time}</strong>
                                <p style="margin: 0.3rem 0 0 0; color: var(--text-light);">${activity.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Këshillat e udhëtimit
    html += getTravelTips(currentLang, days);
    
    // Butonat e printimit dhe ruajtjes
    html += `
        <div style="margin-top: 2rem; text-align: center;">
            <button onclick="window.printItinerary()" style="background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); color: white; border: none; padding: 0.8rem 2rem; border-radius: 25px; cursor: pointer; font-weight: bold; font-size: 1rem; display: inline-flex; align-items: center; gap: 8px;">
                <i class="fas fa-print"></i>
                ${currentLang === 'sq' ? 'Printo Itinerarin' : 'Print Itinerary'}
            </button>
            <button onclick="window.saveItinerary()" style="background: var(--accent-color); color: var(--text-dark); border: none; padding: 0.8rem 2rem; border-radius: 25px; cursor: pointer; font-weight: bold; font-size: 1rem; margin-left: 1rem; display: inline-flex; align-items: center; gap: 8px;">
                <i class="fas fa-save"></i>
                ${currentLang === 'sq' ? 'Ruaj Itinerarin' : 'Save Itinerary'}
            </button>
        </div>
    `;
    
    output.innerHTML = html;
    console.log("Itinerary generated successfully!");
}

// Funksione ndihmëse për itinerarin
function getActivitiesByInterest(interest, lang) {
    const activities = {
        history: {
            sq: [
                { time: "09:00", description: "Vizitë në Muzeun e Kosovës në Prishtinë", type: "museum" },
                { time: "11:00", description: "Kalaja e Prizrenit dhe qyteti i vjetër", type: "castle" },
                { time: "13:00", description: "Drekë tradicionale në restorantin Liburnia", type: "food" },
                { time: "15:00", description: "Xhamia e Mbretit dhe Kisha e Shën Nikollës", type: "mosque" },
                { time: "17:00", description: "Qendra për Trashëgimi Kulturore", type: "culture" },
                { time: "19:30", description: "Shëtitje në Bulevardin Nënë Tereza", type: "walk" },
                { time: "21:00", description: "Darkë me muzikë tradicionale", type: "dinner" }
            ],
            en: [
                { time: "09:00", description: "Visit the Kosovo Museum in Pristina", type: "museum" },
                { time: "11:00", description: "Prizren Fortress and old town", type: "castle" },
                { time: "13:00", description: "Traditional lunch at Liburnia Restaurant", type: "food" },
                { time: "15:00", description: "Imperial Mosque and St. Nicholas Church", type: "mosque" },
                { time: "17:00", description: "Cultural Heritage Center", type: "culture" },
                { time: "19:30", description: "Walk on Mother Teresa Boulevard", type: "walk" },
                { time: "21:00", description: "Dinner with traditional music", type: "dinner" }
            ]
        },
        nature: {
            sq: [
                { time: "08:00", description: "Ecje në Parkun e Rugovës në Pejë", type: "hike" },
                { time: "10:30", description: "Shikimi i Ujëvarës së Drinit të Bardhë", type: "waterfall" },
                { time: "12:30", description: "Picknik në natyrë me pamje të Bukura", type: "picnic" },
                { time: "15:00", description: "Eksplorim i Bjeshkëve të Nemuna", type: "mountain" },
                { time: "17:00", description: "Vizitë në Liqenin e Batllavës", type: "lake" },
                { time: "18:30", description: "Vëzhgim i të kuqveve nga malet", type: "sunset" },
                { time: "20:00", description: "Kampi me zjarr kampingu", type: "camping" }
            ],
            en: [
                { time: "08:00", description: "Hike in Rugova Park in Peja", type: "hike" },
                { time: "10:30", description: "White Drin Waterfall viewing", type: "waterfall" },
                { time: "12:30", description: "Picnic in nature with beautiful views", type: "picnic" },
                { time: "15:00", description: "Exploration of Accursed Mountains", type: "mountain" },
                { time: "17:00", description: "Visit to Batlava Lake", type: "lake" },
                { time: "18:30", description: "Sunset watching from the mountains", type: "sunset" },
                { time: "20:00", description: "Camping with campfire", type: "camping" }
            ]
        },
        food: {
            sq: [
                { time: "10:00", description: "Tregu tradicional i Gjakovës për blerje produkte", type: "market" },
                { time: "12:00", description: "Degustim i Burekut dhe Byrekut tradicionale", type: "food" },
                { time: "14:00", description: "Kurs gatimi tradicionale me kuzhinierë lokal", type: "cooking" },
                { time: "16:00", description: "Vizitë në fabrikën e djathit dhe degustim", type: "cheese" },
                { time: "18:00", description: "Përgatitja e Qebapave tradicionale", type: "grill" },
                { time: "19:30", description: "Darkë me specialitete lokale në restorant tradicionale", type: "dinner" },
                { time: "21:30", description: "Shijimi i Trileçes dhe kafesë turke", type: "dessert" }
            ],
            en: [
                { time: "10:00", description: "Traditional Gjakova Market for product shopping", type: "market" },
                { time: "12:00", description: "Burek and Byrek traditional tasting", type: "food" },
                { time: "14:00", description: "Traditional cooking class with local chefs", type: "cooking" },
                { time: "16:00", description: "Cheese factory visit and tasting", type: "cheese" },
                { time: "18:00", description: "Preparation of traditional Qebapa", type: "grill" },
                { time: "19:30", description: "Dinner with local specialties at traditional restaurant", type: "dinner" },
                { time: "21:30", description: "Enjoying Trileçe and Turkish coffee", type: "dessert" }
            ]
        },
        relax: {
            sq: [
                { time: "09:30", description: "Mëngjes i shëndetshëm në hotel me pamje", type: "breakfast" },
                { time: "11:00", description: "Massazh dhe terapie spa në Alpin Hotel", type: "spa" },
                { time: "13:00", description: "Drekë e lehtë dhe e shëndetshme", type: "food" },
                { time: "15:00", description: "Not në pishinë të brendshme", type: "pool" },
                { time: "17:00", description: "Seancë joga dhe meditim", type: "yoga" },
                { time: "19:00", description: "Darkë romantike me verë lokale", type: "dinner" },
                { time: "21:00", description: "Filma dhe relaksim në dhomën e hotelit", type: "relax" }
            ],
            en: [
                { time: "09:30", description: "Healthy breakfast at hotel with view", type: "breakfast" },
                { time: "11:00", description: "Massage and spa therapy at Alpin Hotel", type: "spa" },
                { time: "13:00", description: "Light and healthy lunch", type: "food" },
                { time: "15:00", description: "Swimming in indoor pool", type: "pool" },
                { time: "17:00", description: "Yoga and meditation session", type: "yoga" },
                { time: "19:00", description: "Romantic dinner with local wine", type: "dinner" },
                { time: "21:00", description: "Movies and relaxation in hotel room", type: "relax" }
            ]
        }
    };
    
    return activities[interest] ? activities[interest][lang] : activities.nature[lang];
}

function getDayActivities(dayNumber, totalDays, allActivities, lang) {
    // Zgjidh 4-5 aktivitete të ndryshme për çdo ditë
    const activitiesPerDay = 4;
    const startIndex = ((dayNumber - 1) * activitiesPerDay) % allActivities.length;
    
    let selectedActivities = [];
    for (let i = 0; i < activitiesPerDay; i++) {
        const index = (startIndex + i) % allActivities.length;
        selectedActivities.push(allActivities[index]);
    }
    
    return selectedActivities;
}

function getActivityIcon(type) {
    const icons = {
        museum: "🏛️",
        castle: "🏰",
        food: "🍽️",
        mosque: "🕌",
        culture: "🎭",
        hike: "🥾",
        waterfall: "💦",
        picnic: "🧺",
        mountain: "⛰️",
        sunset: "🌅",
        market: "🛒",
        cooking: "👨‍🍳",
        cheese: "🧀",
        dinner: "🍲",
        breakfast: "🍳",
        spa: "💆‍♀️",
        pool: "🏊",
        yoga: "🧘",
        walk: "🚶‍♂️",
        lake: "🌊",
        camping: "🏕️",
        grill: "🔥",
        dessert: "🍰",
        relax: "😌"
    };
    
    return icons[type] || "📍";
}

function getTravelTips(lang, days) {
    const tips = {
        sq: [
            "🚗 Transporti: Rekomandohet të merrni makinë me qira për lëvizje të lira",
            "🏨 Akomodimi: Rezervoni hotelet para se të vini",
            "💰 Buxheti: Buxheti mesatar për " + days + " ditë: €" + (days * 50) + "-€" + (days * 100),
            "🌡️ Moti: Kontrolloni parashikimin e motit për ditët tuaja",
            "📱 Aplikacione: Shkarkoni aplikacionin 'Kosova Guide' për udhërrëfye offline",
            "💳 Pagesat: Kartat krediti pranohen në shumicën e vendeve",
            "💬 Gjuha: Shumica e njerëzve flasin anglisht, veçanërisht të rinjtë",
            "🕐 Orari: Dyqanet mbyllen herët (18:00-19:00), restorantet hapen deri vonë"
        ],
        en: [
            "🚗 Transport: Renting a car is recommended for free movement",
            "🏨 Accommodation: Book hotels before you come",
            "💰 Budget: Average budget for " + days + " days: €" + (days * 50) + "-€" + (days * 100),
            "🌡️ Weather: Check the weather forecast for your days",
            "📱 Apps: Download the 'Kosova Guide' app for offline guide",
            "💳 Payments: Credit cards accepted in most places",
            "💬 Language: Most people speak English, especially youth",
            "🕐 Hours: Shops close early (18:00-19:00), restaurants open late"
        ]
    };
    
    const tipList = tips[lang] || tips.sq;
    
    let tipsHtml = `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, var(--accent-color), #f59e0b); border-radius: 10px;">
            <h4 style="color: var(--text-dark); margin-top: 0;">${lang === 'sq' ? '💡 Këshilla për udhëtimin' : '💡 Travel Tips'}</h4>
            <ul style="padding-left: 1.5rem; color: var(--text-dark);">
    `;
    
    tipList.forEach(tip => {
        tipsHtml += `<li style="margin-bottom: 0.5rem;">${tip}</li>`;
    });
    
    tipsHtml += `
            </ul>
        </div>
    `;
    
    return tipsHtml;
}

// Funksione globale për itinerarin
window.printItinerary = function() {
    window.print();
};

window.saveItinerary = function() {
    const itineraryText = document.getElementById('itinerary-output').innerText;
    const blob = new Blob([itineraryText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = `kosova-itinerary-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert(currentLang === 'sq' 
        ? 'Itinerari u ruajt me sukses!' 
        : 'Itinerary saved successfully!');
};

// ============================================
// CHATBOT FUNCTIONS - 
// ============================================
function initChatbot() {
    console.log("Initializing chatbot...");
    
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWidget = document.getElementById('chatbotWidget');
    
    if (!chatbotToggle) {
        console.error("Chatbot toggle button not found!");
        return;
    }
    
    if (!chatbotWidget) {
        console.error("Chatbot widget not found!");
        return;
    }
    
    console.log("Chatbot elements found successfully!");
    
    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', function() {
        console.log("Toggle button clicked");
        chatbotWidget.classList.toggle('active');
        
        // Fokus te inputi kur hapet
        if (chatbotWidget.classList.contains('active')) {
            setTimeout(() => {
                const chatInput = document.getElementById('chatInput');
                if (chatInput) {
                    chatInput.focus();
                }
            }, 300);
        }
    });
    
    // Close button
    const closeChatbot = document.getElementById('closeChatbot');
    if (closeChatbot) {
        closeChatbot.addEventListener('click', function() {
            chatbotWidget.classList.remove('active');
        });
    }
    
    // Send message button
    const sendMessageBtn = document.getElementById('sendMessage');
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', handleUserMessage);
    }
    
    // Enter key to send message
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleUserMessage();
            }
        });
    }
    
    // Remove notification badge on first open
    const notificationBadge = document.getElementById('chatNotification');
    if (notificationBadge) {
        chatbotToggle.addEventListener('click', function() {
            notificationBadge.style.display = 'none';
        }, { once: true });
    }
    
    console.log("Chatbot initialized successfully!");
}

function handleUserMessage() {
    console.log("Handling user message...");
    const input = document.getElementById('chatInput');
    const message = input?.value.trim();
    
    if (!message || message === '') {
        console.log("Empty message, ignoring...");
        return;
    }
    
    console.log("User message:", message);
    
    // Add user message
    addChatMessage(message, true);
    
    // Clear input
    if (input) {
        input.value = '';
        input.focus();
    }
    
    // Show typing indicator
    showTypingIndicator();
    
    // Get response after delay
    setTimeout(() => {
        removeTypingIndicator();
        const response = getChatbotResponse(message);
        addChatMessage(response, false);
    }, 1500);
}

function addChatMessage(message, isUser) {
    console.log("Adding chat message:", message, "isUser:", isUser);
    
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) {
        console.error("Chat messages container not found!");
        return;
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = `<i class="fas fa-${isUser ? 'user' : 'robot'}"></i>`;
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${message.replace(/\n/g, '<br>')}</p>`;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    console.log("Message added successfully");
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const indicator = document.createElement('div');
    indicator.id = 'typingIndicator';
    indicator.className = 'message bot-message';
    indicator.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

function getChatbotResponse(userMessage) {
    console.log("Getting chatbot response for:", userMessage);
    
    const responses = {
        sq: {
            greetings: ["Përshëndetje! 🤗", "Tungjatjeta! 👋", "Ç'kemi? Si mund të ndihmoj? 😊", "Mirë se vini në Kosova Guide! 🎉"],
            destinations: "Kosova ka shumë destinacione të bukura! Prishtina (kryeqyteti), Prizreni (qyteti muze), Peja (kanioni i Rugovës) dhe Gjakova (tregu i vjetër) janë më të vizituarat. 🏞️ Çfarë destinacioni ju intereson më shumë?",
            hotels: "🏨 Në Kosovë mund të gjeni hotele të çdo kategorie:\n• Luksoze: Swiss Diamond Hotel (Prishtinë)\n• Mesatare: Hotel Prizreni (Prizren)\n• Ekonomike: Hostel Han (Prishtinë)\nÇfarë buxheti keni?",
            restaurants: "🍽️ Kuzhina kosovare është e shijshme! Rekomandoj:\n• Liburnia - për ushqim tradicionale\n• Tiffany - për steak dhe kuzhinë europiane\n• Kulla e Vjetër - për ambient historik\nDëshironi të provoni diçka tradicionale?",
            itinerary: "🗺️ Mund të krijoj një itinerar për ju! Shkoni te seksioni 'Itineraret' dhe:\n1. Zgjidhni numrin e ditëve\n2. Zgjidhni interesin (histori, natyrë, ushqim, relaks)\n3. Klikoni 'Gjenero Itinerarin'\nSa ditë keni në dispozicion?",
            default: "🤔 Më falni, nuk e kuptova plotësisht. Mund të pyesni për:\n• Destinacione në Kosovë\n• Hotele dhe akomodime\n• Restorante dhe kuzhinë tradicionale\n• Itinerare udhëtimi\nSi mund të ndihmoj më konkretisht?"
        },
        en: {
            greetings: ["Hello! 🤗", "Hi there! 👋", "How can I help you today? 😊", "Welcome to Kosova Guide! 🎉"],
            destinations: "Kosovo has many beautiful destinations! Pristina (capital), Prizren (museum city), Peja (Rugova Canyon) and Gjakova (old bazaar) are the most visited. 🏞️ Which destination interests you most?",
            hotels: "🏨 In Kosovo you can find hotels of every category:\n• Luxury: Swiss Diamond Hotel (Pristina)\n• Mid-range: Hotel Prizreni (Prizren)\n• Budget: Hostel Han (Pristina)\nWhat's your budget?",
            restaurants: "🍽️ Kosovar cuisine is delicious! I recommend:\n• Liburnia - for traditional food\n• Tiffany - for steak and European cuisine\n• Kulla e Vjetër - for historical ambiance\nWould you like to try something traditional?",
            itinerary: "🗺️ I can create an itinerary for you! Go to the 'Itinerary' section and:\n1. Select number of days\n2. Choose your interest (history, nature, food, relax)\n3. Click 'Generate Itinerary'\nHow many days do you have?",
            default: "🤔 I'm sorry, I didn't fully understand. You can ask about:\n• Destinations in Kosovo\n• Hotels and accommodations\n• Restaurants and traditional cuisine\n• Travel itineraries\nHow can I help you more specifically?"
        }
    };
    
    const lang = currentLang;
    const msg = userMessage.toLowerCase();
    
    console.log("Current language:", lang, "Message:", msg);
    
    // Check for greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || 
        msg.includes('përshëndetje') || msg.includes('çkemi') || msg.includes('tung')) {
        const greeting = responses[lang].greetings[Math.floor(Math.random() * responses[lang].greetings.length)];
        console.log("Returning greeting:", greeting);
        return greeting;
    }
    
    // Check for destinations
    if (msg.includes('destinacion') || msg.includes('vend') || msg.includes('place') || 
        msg.includes('vizituar') || msg.includes('visit') || msg.includes('prishtin') || 
        msg.includes('prizren') || msg.includes('pej') || msg.includes('gjakov')) {
        console.log("Returning destinations response");
        return responses[lang].destinations;
    }
    
    // Check for hotels
    if (msg.includes('hotel') || msg.includes('akomodim') || msg.includes('stay') || 
        msg.includes('qendrim') || msg.includes('qëndrim') || msg.includes('dhom') || 
        msg.includes('room') || msg.includes('sleep')) {
        console.log("Returning hotels response");
        return responses[lang].hotels;
    }
    
    // Check for restaurants
    if (msg.includes('restorant') || msg.includes('ushqim') || msg.includes('food') || 
        msg.includes('ngren') || msg.includes('nërën') || msg.includes('eat') || 
        msg.includes('drek') || msg.includes('dark') || msg.includes('lunch') || 
        msg.includes('dinner') || msg.includes('kuzhin')) {
        console.log("Returning restaurants response");
        return responses[lang].restaurants;
    }
    
    // Check for itinerary
    if (msg.includes('itinerar') || msg.includes('plan') || msg.includes('travel') || 
        msg.includes('udhëtim') || msg.includes('udhetim') || msg.includes('program') || 
        msg.includes('schedule') || msg.includes('dita') || msg.includes('day')) {
        console.log("Returning itinerary response");
        return responses[lang].itinerary;
    }
    
    console.log("Returning default response");
    return responses[lang].default;
}

// ============================================
// HELPER FUNCTION TO TEST CHATBOT
// ============================================
function testChatbot() {
    console.log("Testing chatbot...");
    const chatbotWidget = document.getElementById('chatbotWidget');
    if (chatbotWidget) {
        chatbotWidget.classList.add('active');
        console.log("Chatbot should be visible now!");
        
        // Add a test message
        setTimeout(() => {
            addChatMessage(currentLang === 'sq' 
                ? "Përshëndetje! Si mund të ndihmoj?" 
                : "Hello! How can I help you?", false);
        }, 500);
    } else {
        console.error("Cannot find chatbot widget for testing!");
    }
}

// Ekspozoni testChatbot në objektin global window
window.testChatbot = testChatbot;