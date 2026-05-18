// --- PRODUCT DATA DATABASE ---
const DEFAULT_PRODUCTS = [
  // T-Shirts (10 styles)
  {
    id: 'vs-ts-os-01',
    name: 'Oversize T-Shirt',
    code: 'VS-TS-OS-01',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Oversize.png',
    fabric: 'Single Jersey, 100% Super-Combed Cotton',
    gsm: '240 / 300 GSM (Heavyweight)',
    desc: 'Expertly designed oversized t-shirt crafted for premium streetwear labels. Features a boxy silhouette, drop shoulders, and a thick ribbed collar that holds its shape. Perfect for high-density puff printing or custom embroidery.'
  },
  {
    id: 'vs-ts-rf-02',
    name: 'Regular Fit T-Shirt',
    code: 'VS-TS-RF-02',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Regular Fit T Shirt.png',
    fabric: 'Single Jersey, 100% Cotton, Biowashed',
    gsm: '180 / 210 GSM',
    desc: 'Classic export-quality retail fit. Durable, breathable, and exceptionally soft due to premium silicon washing. Ideal for corporate branding, retail merchandising, and casual fashion brands.'
  },
  {
    id: 'vs-ts-bx-03',
    name: 'Boxy Fit T-Shirt',
    code: 'VS-TS-BX-03',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Boxy Fit.png',
    fabric: 'Single Jersey, 100% Cotton, Pre-shrunk',
    gsm: '240 GSM',
    desc: 'Features a contemporary cropped length and wide shoulders for a premium boxy streetwear look. Made from combed cotton that provides ultimate comfort and print stability.'
  },
  {
    id: 'vs-ts-pl-04',
    name: 'Polo T-Shirt',
    code: 'VS-TS-PL-04',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Polo T SHirt.png',
    fabric: 'Pique Knit, Premium Cotton Blend',
    gsm: '220 / 240 GSM',
    desc: 'Refined Polo T-Shirt featuring a custom-engineered knit collar and cuffs. Double needle stitched hems make it ideal for high-end corporate uniforms and country-club sportswear collections.'
  },
  {
    id: 'vs-ts-aw-05',
    name: 'Acid Wash T-Shirt',
    code: 'VS-TS-AW-05',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Acideash.png',
    fabric: '100% Cotton, Specially Treated Acid Wash',
    gsm: '240 GSM',
    desc: 'Streetwear staple featuring a beautiful vintage weathered look. Individually acid-washed for unique marbling effects. The fabric feels exceptionally soft and broke-in.'
  },
  {
    id: 'vs-ts-ld-06',
    name: 'Lava Dyeing T-Shirt',
    code: 'VS-TS-LD-06',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Lava Dyeing.png',
    fabric: '100% Cotton, Lava-Dyed Finished',
    gsm: '240 GSM',
    desc: 'Dyed using advanced lava-dyeing techniques to achieve soft transitions and high-fashion seam fading. Pre-washed for a premium feel and zero-shrinkage.'
  },
  {
    id: 'vs-ts-ow-07',
    name: 'Optic Wash T-Shirt',
    code: 'VS-TS-OW-07',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Optic Wash.png',
    fabric: '100% Combed Cotton, Optic Bio-Washed',
    gsm: '210 GSM',
    desc: 'Brilliant optic white color retention. Advanced washing prevents yellowing and maintains a stark, luxury retail feel over dozens of wash cycles.'
  },
  {
    id: 'vs-ts-td-08',
    name: 'Tie and Dye T-Shirt',
    code: 'VS-TS-TD-08',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Tie and Dye.png',
    fabric: '100% Cotton, Hand-Tied Premium Pigments',
    gsm: '180 GSM',
    desc: 'Each shirt is hand-dyed by skilled artisans using non-toxic premium pigments. Vibrant swirl patterns that do not bleed. A must-have for summer collections.'
  },
  {
    id: 'vs-ts-cw-09',
    name: 'CPT Wash T-Shirt',
    code: 'VS-TS-CW-09',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/CPT Wash.png',
    fabric: 'Cold-Pigment Dyed Combed Cotton',
    gsm: '240 GSM',
    desc: 'Cold Pigment Treatment (CPT) gives a premium distressed look at structural seams and hems. Specially designed for modern urban fashion catalog collections.'
  },
  {
    id: 'vs-ts-rg-10',
    name: 'Reygon Sleeve T-Shirt',
    code: 'VS-TS-RG-10',
    category: 't-shirts',
    categoryLabel: 'T-Shirt Collection',
    image: 'Shoot/Reygon.png',
    fabric: 'Premium Jersey, Contrast Sleeves',
    gsm: '200 GSM',
    desc: 'Raglan-style construction with cross-cut sleeves for maximum upper body comfort. Multi-thread flatlock stitching highlights the athletic structural lines.'
  },

  // Vests (3 styles)
  {
    id: 'vs-v-rg-01',
    name: 'Regular Vest',
    code: 'VS-V-RG-01',
    category: 'vest',
    categoryLabel: 'Vest Collection',
    image: 'Shoot/Regular Vest.png',
    fabric: 'Rib Knit, 100% Combed Cotton',
    gsm: '180 GSM',
    desc: 'Classic ribbed athletic vest. Designed with deep-cut armholes and a smooth scoop neck. Perfect for gym wear or inner layering.'
  },
  {
    id: 'vs-v-wr-02',
    name: 'Washed Regular Vest',
    code: 'VS-V-WR-02',
    category: 'vest',
    categoryLabel: 'Vest Collection',
    image: 'Shoot/Washed Regular Vest.png',
    fabric: 'Cotton Rib, Specially Enzyme Washed',
    gsm: '180 GSM',
    desc: 'Enzyme washed rib vest to achieve supreme comfort and an ultra-soft texture. Pre-shrunk to secure structural stability through washes.'
  },
  {
    id: 'vs-v-wo-03',
    name: 'Washed Oversized Vest',
    code: 'VS-V-WO-03',
    category: 'vest',
    categoryLabel: 'Vest Collection',
    image: 'Shoot/Vest Collection.png',
    fabric: 'Heavyweight Rib Cotton',
    gsm: '220 GSM',
    desc: 'Modern streetwear drop-shoulder tank styled with a wider shoulder cut and flat bottom. Very popular in current casual streetwear collections.'
  },

  // Women's Collection (6 styles)
  {
    id: 'vs-w-cs-01',
    name: 'Oversized Cropped Sweatshirt',
    code: 'VS-W-CS-01',
    category: 'women',
    categoryLabel: "Women's Collection",
    image: 'Shoot/Oversize Sweatshirt.png',
    fabric: 'French Terry, Super-Soft Cotton Blend',
    gsm: '280 GSM',
    desc: 'Features a stylish cropped length, ribbed wristbands, and an oversized sleeve drape. Modern design engineered for maximum athleisure comfort.'
  },
  {
    id: 'vs-w-ct-02',
    name: 'Oversized Crop Top',
    code: 'VS-W-CT-02',
    category: 'women',
    categoryLabel: "Women's Collection",
    image: 'Shoot/Oversize Croptop.png',
    fabric: '100% Premium Combed Cotton',
    gsm: '180 / 200 GSM',
    desc: 'Chic crop top with dropped shoulders and raw hem options. Perfect for minimalist fashion designs and custom screen printing.'
  },
  {
    id: 'vs-w-tgt-03',
    name: 'Cropped Sweatshirt (TGT Bottom)',
    code: 'VS-W-TGT-03',
    category: 'women',
    categoryLabel: "Women's Collection",
    image: 'Shoot/Croptop.png',
    fabric: 'French Terry, Ribbed Underband',
    gsm: '280 GSM',
    desc: 'Features a tight ribbed elastic bottom band (TGT Bottom) to create a structured blouson effect. Modern streetwear aesthetic for female urban fashion.'
  },
  {
    id: 'vs-w-cps-04',
    name: 'Cropped Polo Sweatshirt',
    code: 'VS-W-CPS-04',
    category: 'women',
    categoryLabel: "Women's Collection",
    image: 'Shoot/Croptop Polo T Shirt.png',
    fabric: 'French Terry Cotton with Knit Polo Collar',
    gsm: '260 GSM',
    desc: 'A fusion of vintage sportiness and modern streetwear. Features a heavy-knit polo collar and a premium silver-zip detail at the neckline.'
  },
  {
    id: 'vs-w-vs-05',
    name: "Women's Vest",
    code: 'VS-W-VS-05',
    category: 'women',
    categoryLabel: "Women's Collection",
    image: 'Shoot/Womens Vest.png',
    fabric: 'Rib Knit, Soft Cotton Elastane Blend',
    gsm: '210 GSM',
    desc: 'Fitted vest with excellent stretch recovery. Hugs the body comfortably without losing its shape over time. Very soft and skin-friendly fabric.'
  },
  {
    id: 'vs-w-hs-06',
    name: "Women's Half Sleeve",
    code: 'VS-W-HS-06',
    category: 'women',
    categoryLabel: "Women's Collection",
    image: 'Shoot/Half Sleeve.png',
    fabric: '100% Cotton, Silicon Finished',
    gsm: '180 GSM',
    desc: 'Slightly contoured loose-fit half sleeve t-shirt. Double stitched seams with back-neck reinforcement tapes for maximum longevity.'
  },

  // Hoodies (3 styles)
  {
    id: 'vs-h-os-01',
    name: 'Oversized Hoodie',
    code: 'VS-H-OS-01',
    category: 'hoodies',
    categoryLabel: 'Hoodies Collection',
    image: 'Shoot/Oversize Hoodies.png',
    fabric: 'Heavy French Terry / Brushed Fleece',
    gsm: '320 / 360 / 400 GSM',
    desc: 'Premium high-street heavy hoodie. Double-lined hood, no drawstrings for a clean futuristic look, kangaroo pocket, and drop-shoulder boxy cuts.'
  },
  {
    id: 'vs-h-rf-02',
    name: 'Regular Fit Hoodie',
    code: 'VS-H-RF-02',
    category: 'hoodies',
    categoryLabel: 'Hoodies Collection',
    image: 'Shoot/Regular Hoodies.png',
    fabric: 'French Terry Cotton, Metal Eyelets',
    gsm: '300 GSM',
    desc: 'Standard luxury retail fit. Features thick round woven drawstrings with premium metal tips, double-needle seams, and robust ribbed cuffs.'
  },
  {
    id: 'vs-h-zh-03',
    name: 'Oversized Zipper Hoodie',
    code: 'VS-H-ZH-03',
    category: 'hoodies',
    categoryLabel: 'Hoodies Collection',
    image: 'Shoot/Zipper Hoodies.png',
    fabric: 'French Terry Cotton, YKK Heavy-Duty Zip',
    gsm: '340 GSM',
    desc: 'Streetwear full-zip hoodie featuring custom gunmetal YKK zipper, double-layered hood, dropped shoulders, and massive kangaroo pockets.'
  },

  // Sweatshirts (2 styles)
  {
    id: 'vs-sw-os-01',
    name: 'Oversized Sweatshirt',
    code: 'VS-SW-OS-01',
    category: 'sweatshirts',
    categoryLabel: 'Sweatshirts Collection',
    image: 'Shoot/Oversize Sweatshirt.png',
    fabric: 'Heavy French Terry Cotton',
    gsm: '320 / 360 GSM',
    desc: 'Relaxed oversized crewneck sweatshirt with wide drop shoulders. Side-seam ribbing panels allow maximum mobility. Crafted for high-end fashion lines.'
  },
  {
    id: 'vs-sw-rf-02',
    name: 'Regular Sweatshirt',
    code: 'VS-SW-RF-02',
    category: 'sweatshirts',
    categoryLabel: 'Sweatshirts Collection',
    image: 'Shoot/Regular Sweatshirt.png',
    fabric: 'French Terry / Fleece lining, Silicon Softened',
    gsm: '300 GSM',
    desc: 'Classic crewneck pullover with robust double-stitched collar, cuffs, and hem. Exceptionally warm and lint-free interior lining.'
  },

  // Shorts & Bottoms (4 styles)
  {
    id: 'vs-b-sh-01',
    name: 'Shorts',
    code: 'VS-B-SH-01',
    category: 'bottoms',
    categoryLabel: 'Shorts & Bottoms',
    image: 'Shoot/Shorts.png',
    fabric: 'Heavy French Terry, Elastic Waistband',
    gsm: '280 / 320 GSM',
    desc: 'Relaxed fit fleece shorts. Features deep side pockets, a back pocket, thick waist elastic, and custom flat drawstrings. Very popular for streetwear sets.'
  },
  {
    id: 'vs-b-tp-02',
    name: 'Track Pant',
    code: 'VS-B-TP-02',
    category: 'bottoms',
    categoryLabel: 'Shorts & Bottoms',
    image: 'Shoot/Track Pant.png',
    fabric: 'Polyester-Cotton Premium Interlock Knit',
    gsm: '280 GSM',
    desc: 'Athletic fit joggers featuring zipped side pockets, tailored cuffs, and excellent ventilation properties. Comfortable for active sports or daily wear.'
  },
  {
    id: 'vs-b-cp-29',
    name: 'Comfort Pant',
    code: 'VS-B-CP-29',
    category: 'bottoms',
    categoryLabel: 'Shorts & Bottoms',
    image: 'Shoot/Comfort pant.png',
    fabric: 'Heavy French Terry, Relaxed Leg Fit',
    gsm: '300 GSM',
    desc: 'Straight-leg pants with a comfortable elastic waistband. Cozy and stylish streetwear essential, matching perfectly with oversize sweatshirts.'
  },
  {
    id: 'vs-b-bg-04',
    name: 'Baggy Pant',
    code: 'VS-B-BG-04',
    category: 'bottoms',
    categoryLabel: 'Shorts & Bottoms',
    image: 'Shoot/Baggy Pant.png',
    fabric: 'Heavyweight Loopback French Terry',
    gsm: '340 GSM',
    desc: 'Ultra-baggy cut track pants with wide ankles. Engineered for premium streetwear labels seeking robust draping structures and comfort.'
  },

  // Babies Collection (5 styles)
  {
    id: 'vs-bb-os-01',
    name: 'Babies Oversized T-Shirt',
    code: 'VS-BB-OS-01',
    category: 'babies',
    categoryLabel: 'Babies Collection',
    image: 'Shoot/Babies.png',
    fabric: '100% Organic Cotton, Hyper-Soft',
    gsm: '160 / 180 GSM',
    desc: 'Super-soft oversized kids t-shirt. Absolutely skin-friendly, bio-washed, and processed without harsh chemical dyes. Nickel-free shoulder button snaps.'
  },
  {
    id: 'vs-bb-pl-02',
    name: 'Babies Polo T-Shirt',
    code: 'VS-BB-PL-02',
    category: 'babies',
    categoryLabel: 'Babies Collection',
    image: 'Shoot/Babies Collection.png',
    fabric: '100% Organic Pique Knit Cotton',
    gsm: '180 GSM',
    desc: 'Adorable miniature polo with dynamic contrasts on collar trims. Non-scratch soft fabric collars prevent irritation on babies neck.'
  },
  {
    id: 'vs-bb-rf-03',
    name: 'Babies Regular Fit T-Shirt',
    code: 'VS-BB-RF-03',
    category: 'babies',
    categoryLabel: 'Babies Collection',
    image: 'Shoot/Babies.png',
    fabric: '100% Organic Combed Cotton',
    gsm: '160 GSM',
    desc: 'Lightweight, ultra-breathable daily wear t-shirt. Elastic stitching enables easy pulling over babies head.'
  },
  {
    id: 'vs-bb-sh-04',
    name: 'Babies Shorts',
    code: 'VS-BB-SH-04',
    category: 'babies',
    categoryLabel: 'Babies Collection',
    image: 'Shoot/Babies Collection.png',
    fabric: '100% Soft Organic Loopback Cotton',
    gsm: '220 GSM',
    desc: 'Stretchy cotton shorts featuring extremely gentle encased elastic waistbands. Roomy diaper-friendly crotch cuts.'
  },
  {
    id: 'vs-bb-sw-05',
    name: 'Babies Sweatshirt',
    code: 'VS-BB-SW-05',
    category: 'babies',
    categoryLabel: 'Babies Collection',
    image: 'Shoot/Babies Collection.png',
    fabric: 'Organic Cotton French Terry',
    gsm: '240 GSM',
    desc: 'Charming warm crewneck sweatshirt. Soft-ribbed cuffs and neckband that stretch comfortably. Made from 100% hypoallergenic organic fabrics.'
  }
];

let PRODUCTS = [];

// Load products from localStorage or initialize with DEFAULT_PRODUCTS
function loadProductsDatabase() {
  const stored = localStorage.getItem('velsar_products_db');
  let useDefaults = true;
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Auto-detect and reset if the database contains old placeholder image paths
      const hasOldImages = parsed.some(p => p.image && (p.image.startsWith('Products/file_') || p.image.startsWith('Products/WhatsApp')));
      if (!hasOldImages) {
        PRODUCTS = parsed;
        useDefaults = false;
      }
    } catch (e) {
      console.error("Error parsing product database:", e);
    }
  }
  
  if (useDefaults) {
    PRODUCTS = DEFAULT_PRODUCTS.map(p => ({ ...p, inStock: true }));
    localStorage.setItem('velsar_products_db', JSON.stringify(PRODUCTS));
  }
}

// Call initially to seed
loadProductsDatabase();

// --- CORE FUNCTIONALITY ON PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. FADE OUT PRELOADER (FABRIC SEAM SPLIT SCREEN TRANSITION)
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('active');
      }, 600); // 600ms delay to show the scissor cutting visual
    });
    // Fallback if load event takes too long
    setTimeout(() => {
      preloader.classList.add('active');
    }, 2800);
  }

  // 2. MOBILE NAVIGATION HAMBURGER MENU
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when navigation links are clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside of the drawer
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // 3. STICKY GLASSMORPHISM NAVBAR
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    
    // Set initial sticky state based on loading position
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    }
  }

  // 4. ACTIVE NAVIGATION LINK HIGH-LIGHTING
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 5. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('active'));
  }

  // 6. ANIMATED COUNTERS SECTION (IntersectionObserver)
  const statNumbers = document.querySelectorAll('.stat-number');
  if ('IntersectionObserver' in window && statNumbers.length > 0) {
    let countersStarted = false;
    
    const countUp = (element) => {
      const target = parseInt(element.getAttribute('data-target'), 10);
      const suffix = element.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepIncrement = target / steps;
      const stepTime = duration / steps;
      
      const timer = setInterval(() => {
        current += stepIncrement;
        if (current >= target) {
          element.textContent = target + suffix;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current) + suffix;
        }
      }, stepTime);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          statNumbers.forEach(num => countUp(num));
          countersStarted = true;
          counterObserver.disconnect(); // Fire only once
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      counterObserver.observe(statsSection);
    }
  } else {
    // Fallback: render target numbers directly
    statNumbers.forEach(num => {
      const target = num.getAttribute('data-target');
      const suffix = num.getAttribute('data-suffix') || '';
      num.textContent = target + suffix;
    });
  }

  // 7. BACK-TO-TOP BUTTON
  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    });

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 8. DYNAMIC CATALOG ENGINE (Products Page Only)
  const productsGrid = document.getElementById('products-grid');
  if (productsGrid) {
    renderProducts(PRODUCTS);
    setupFilters();
  }

  // 9. DYNAMIC MODAL QUICK-VIEW POPUP
  setupQuickViewModal();

  // 10. PREMIUM CONTACT FORM HANDLING (Contact Page Only) & DUAL ACTION B2B ROUTING
  const contactForm = document.getElementById('velsar-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Select input values
      const name = document.getElementById('form-name').value;
      const company = document.getElementById('form-company').value || 'Not Specified';
      const phone = document.getElementById('form-phone').value;
      const email = document.getElementById('form-email').value;
      const msg = document.getElementById('form-msg').value;

      openContactDeliveryModal({ name, company, phone, email, msg });
    });
  }
});

// --- RENDER DYNAMIC PRODUCTS IN GRID ---
function renderProducts(productsList) {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  if (productsList.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results reveal active">
        <div class="no-results-icon"><i class="fas fa-search-minus"></i></div>
        <div class="no-results-text">No designs found matching your current parameters.</div>
        <p style="color: var(--text-muted); margin-top: 1rem;">Try relaxing your search terms or selecting 'All' category.</p>
      </div>
    `;
    return;
  }
  
  productsList.forEach((prod, index) => {
    const card = document.createElement('div');
    const inStock = prod.inStock !== false;
    card.className = `product-card reveal active reveal-delay-${(index % 4) + 1} ${inStock ? '' : 'out-of-stock-card'}`;
    card.setAttribute('data-id', prod.id);
    card.setAttribute('data-category', prod.category);
    
    const stockBadge = inStock ? '' : '<span class="stock-badge out-of-stock">Out of Stock</span>';
    
    card.innerHTML = `
      <div class="product-image-container">
        <img class="product-img" src="${prod.image}" alt="${prod.name}" loading="lazy">
        <span class="product-badge">Export Quality</span>
        ${stockBadge}
        <div class="product-actions-overlay">
          <div class="product-btn quick-view-btn" title="Quick View Specs" data-id="${prod.id}">
            <i class="fas fa-expand-alt"></i>
          </div>
          <a class="product-btn wa-inquiry-btn" title="Inquire on WhatsApp" href="${generateWhatsAppLink(prod)}" target="_blank">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat">${prod.categoryLabel}</span>
        <h4 class="product-title">${prod.name}</h4>
        <span class="product-code">${prod.code}</span>
      </div>
    `;
    
    productsGrid.appendChild(card);
  });

  // Re-attach quick view click listeners
  setupQuickViewListeners();
}

// --- SETUP SEARCH & CATEGORY FILTERS ---
function setupFilters() {
  const searchInput = document.getElementById('catalog-search');
  const filterTabs = document.querySelectorAll('.filter-tab');
  
  let activeCategory = 'all';
  let searchQuery = '';
  
  // Tab category switching
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      activeCategory = tab.getAttribute('data-category');
      applyFiltering();
    });
  });
  
  // Realtime search text input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFiltering();
    });
  }
  
  function applyFiltering() {
    const filtered = PRODUCTS.filter(prod => {
      const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
      const matchesSearch = prod.name.toLowerCase().includes(searchQuery) || 
                            prod.code.toLowerCase().includes(searchQuery) ||
                            prod.categoryLabel.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
    
    renderProducts(filtered);
  }
}

// --- GENERATE WHATSAPP INQUIRY URL ---
function generateWhatsAppLink(product) {
  const phone = '918248197416';
  const text = `Hello Velsar Apparels,%20I%20am%20interested%20in%20the%20following%20product%20from%20your%20manufactured%20catalog:%0A%0A👕%20*Product%20Name:*%20${encodeURIComponent(product.name)}%0A📦%20*Product%20Code:*%20${encodeURIComponent(product.code)}%0A📂%20*Collection:*%20${encodeURIComponent(product.categoryLabel)}%0A🧵%20*Fabric%20Type:*%20${encodeURIComponent(product.fabric)}%20(${encodeURIComponent(product.gsm)})%0A%0APlease%20provide%20bulk%20pricing%20estimates,%20MOQs,%20and%20color%20charts%20for%20this%20design.`;
  return `https://wa.me/${phone}?text=${text}`;
}

// --- QUICK VIEW MODAL SYSTEM ---
function setupQuickViewModal() {
  const modal = document.getElementById('quickview-modal');
  if (!modal) return;
  
  const closeBtn = modal.querySelector('.modal-close');
  
  // Close triggers
  closeBtn.addEventListener('click', () => closeModal());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  // ESC key closing
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  window.openQuickView = function(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    
    // Populate modal components
    modal.querySelector('.modal-img').src = prod.image;
    modal.querySelector('.modal-img').alt = prod.name;
    modal.querySelector('.modal-cat').textContent = prod.categoryLabel;
    modal.querySelector('.modal-title').textContent = prod.name;
    modal.querySelector('.modal-code-badge').textContent = `CODE: ${prod.code}`;
    modal.querySelector('.modal-desc').textContent = prod.desc;
    
    modal.querySelector('#modal-spec-fabric').textContent = prod.fabric;
    modal.querySelector('#modal-spec-gsm').textContent = prod.gsm;
    
    // WhatsApp button setup
    const waButton = modal.querySelector('.modal-wa-btn');
    waButton.href = generateWhatsAppLink(prod);
    
    // Open modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scroll
  };
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Attach click listeners to all quick view buttons
function setupQuickViewListeners() {
  const quickViewButtons = document.querySelectorAll('.quick-view-btn');
  quickViewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-id');
      if (window.openQuickView) {
        window.openQuickView(prodId);
      }
    });
  });
}

// --- Sleek Success Toast Notification ---
function showToastMessage(message) {
  // Create dynamic toast elements if not existing
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<i class="fas fa-check-circle" style="font-size: 1.2rem;"></i> ${message}`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// --- DUAL CHANNEL INQUIRY ROUTING MODAL ---
function openContactDeliveryModal(formData) {
  // Save inquiry immediately to local B2B database
  try {
    const storedInqs = localStorage.getItem('velsar_inquiries_db');
    const inquiries = storedInqs ? JSON.parse(storedInqs) : [];
    const newInquiry = {
      id: 'inq-' + Date.now(),
      name: formData.name || 'Anonymous Partner',
      company: formData.company || 'Not Specified',
      phone: formData.phone || 'N/A',
      email: formData.email || 'N/A',
      msg: formData.msg || '',
      timestamp: new Date().toLocaleString(),
      status: 'Pending'
    };
    inquiries.unshift(newInquiry);
    localStorage.setItem('velsar_inquiries_db', JSON.stringify(inquiries));
  } catch (err) {
    console.error("Error logging B2B inquiry locally:", err);
  }

  let modal = document.getElementById('contact-delivery-modal');
  if (!modal) {
    // Dynamically insert modal markup if not present in markup (failsafe fallback)
    modal = document.createElement('div');
    modal.id = 'contact-delivery-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-container" style="max-width: 480px; text-align: center; padding: 3rem 2rem;">
        <button class="modal-close" id="delivery-modal-close" aria-label="Close delivery popup"><i class="fas fa-times"></i></button>
        <div style="font-size: 3rem; color: var(--accent); margin-bottom: 1.5rem;"><i class="far fa-paper-plane"></i></div>
        <h3 style="color: var(--text-white); font-family: var(--font-headings); font-weight: 700; margin-bottom: 0.5rem;">Transmit Inquiry</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 2rem;">Choose your preferred B2B communication channel to transmit your specifications directly to our desk.</p>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <button class="btn btn-primary" id="send-wa-delivery-btn" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 10px; padding: 1.1rem;">
            <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i> Send via WhatsApp Chat
          </button>
          <button class="btn" id="send-email-delivery-btn" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 10px; padding: 1.1rem; background: var(--secondary-dark); border: 1px solid var(--border-glass); color: var(--text-white);">
            <i class="far fa-envelope" style="font-size: 1.2rem;"></i> Send via Email Client
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  const closeBtn = document.getElementById('delivery-modal-close');
  const waBtn = document.getElementById('send-wa-delivery-btn');
  const emailBtn = document.getElementById('send-email-delivery-btn');
  
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  if (closeBtn) closeBtn.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
  
  // WhatsApp Action
  if (waBtn) {
    waBtn.onclick = () => {
      const phone = '918248197416';
      const text = `Hello Velsar Apparels,%0A%0A*B2B Bulk Factory Inquiry* from our website:%0A%0A👤 *Contact Name:* ${encodeURIComponent(formData.name)}%0A🏢 *Company/Brand:* ${encodeURIComponent(formData.company)}%0A📞 *Phone/WhatsApp:* ${encodeURIComponent(formData.phone)}%0A✉️ *Email:* ${encodeURIComponent(formData.email)}%0A%0A📝 *Specifications & Inquiry Details:*%0A${encodeURIComponent(formData.msg)}`;
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
      
      showToastMessage("Inquiry prepared! Launching WhatsApp...");
      closeModal();
      const form = document.getElementById('velsar-contact-form');
      if (form) form.reset();
    };
  }
  
  // Email Action
  if (emailBtn) {
    emailBtn.onclick = () => {
      const to = 'velsarapparels@gmail.com';
      const subject = `B2B Bulk Factory Inquiry - ${formData.company}`;
      const body = `Hello Velsar Apparels,

Below is our bulk garment manufacturing specification sheet and corporate contact profile details:

- Contact Name: ${formData.name}
- Company/Brand: ${formData.company}
- Phone/WhatsApp Number: ${formData.phone}
- Email Address: ${formData.email}

Garment Specifications & Message:
------------------------------------------
${formData.msg}

------------------------------------------
Submitted via Velsar Apparels Catalog portal.`;
      
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      showToastMessage("Inquiry pre-filled! Launching default Mail client...");
      closeModal();
      const form = document.getElementById('velsar-contact-form');
      if (form) form.reset();
    };
  }
  
  // Open
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// --- DYNAMIC INTERACTIVE CUSTOM CURSOR & SCROLL PROGRESS BAR ---
document.addEventListener('DOMContentLoaded', () => {
  // Dynamically Inject Scroll Progress Bar
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (windowScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + '%';
  });

  // Dynamically Inject Custom Cursor elements for desktop devices
  if (window.innerWidth > 991) {
    const cursorDiv = document.createElement('div');
    cursorDiv.className = 'custom-cursor';
    const cursorDotDiv = document.createElement('div');
    cursorDotDiv.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDiv);
    document.body.appendChild(cursorDotDiv);

    document.addEventListener('mousemove', (e) => {
      cursorDiv.style.left = e.clientX + 'px';
      cursorDiv.style.top = e.clientY + 'px';
      cursorDotDiv.style.left = e.clientX + 'px';
      cursorDotDiv.style.top = e.clientY + 'px';
    });

    // Track all interactive hover elements dynamically
    const addHoverEffects = () => {
      const hoverElements = document.querySelectorAll('a, button, .btn, .collection-card, .product-card, .service-card, .print-card, .why-card, .nav-link, .logo-container, .modal-close');
      hoverElements.forEach(el => {
        if (!el.dataset.cursorBound) {
          el.dataset.cursorBound = 'true';
          el.addEventListener('mouseenter', () => cursorDiv.classList.add('hover'));
          el.addEventListener('mouseleave', () => cursorDiv.classList.remove('hover'));
        }
      });
    };

    addHoverEffects();
    // Run periodically to catch newly rendered products in the catalog
    setInterval(addHoverEffects, 1500);
  }

  // --- DYNAMIC INTRO SLIDESHOW ROTATION (3S CYCLE) ---
  const initIntroSlideshow = () => {
    const slides = document.querySelectorAll('.slide-img');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 3000); // 3-second visual rotation loop
  };
  
  initIntroSlideshow();
});
