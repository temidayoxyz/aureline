import './style.css'

// Photography: Pexels (https://www.pexels.com) — free to use under the Pexels license.
// See public/images/CREDITS.txt for photo IDs and photographers.

function initApp() {
  const app = document.getElementById('app')
  app.innerHTML = `
    <nav class="nav" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="#" class="nav-logo" aria-label="Aureline home">Aureline</a>
        <ul class="nav-links" id="navLinks" role="menubar">
          <li role="none"><a href="#philosophy" role="menuitem">Philosophy</a></li>
          <li role="none"><a href="#ingredients" role="menuitem">Ingredients</a></li>
          <li role="none"><a href="#collection" role="menuitem">Collection</a></li>
          <li role="none"><a href="#process" role="menuitem">Process</a></li>
          <li role="none"><a href="#newsletter" role="menuitem" class="nav-cta">Shop</a></li>
        </ul>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <main>
      <section class="hero" id="hero">
        <img class="hero-bg" src="/aureline/images/hero.jpg" alt="" fetchpriority="high" decoding="async" />
        <div class="hero-scrim" aria-hidden="true"></div>
        <svg class="botanical-line left" viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M60 0 C60 80, 20 120, 60 200 C100 120, 60 80, 60 0Z" stroke="#9C6B4A" stroke-width="0.8"/>
          <path d="M60 60 C40 50, 15 70, 40 85" stroke="#9C6B4A" stroke-width="0.6"/>
          <path d="M60 100 C80 90, 105 110, 80 125" stroke="#9C6B4A" stroke-width="0.6"/>
          <path d="M60 140 C40 130, 15 150, 40 165" stroke="#9C6B4A" stroke-width="0.6"/>
          <path d="M60 180 C80 170, 105 190, 80 205" stroke="#9C6B4A" stroke-width="0.6"/>
          <line x1="60" y1="0" x2="60" y2="200" stroke="#9C6B4A" stroke-width="0.4"/>
        </svg>
        <svg class="botanical-line right" viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="50" cy="60" r="25" stroke="#9C6B4A" stroke-width="0.6"/>
          <circle cx="50" cy="60" r="15" stroke="#9C6B4A" stroke-width="0.4"/>
          <circle cx="50" cy="60" r="5" stroke="#9C6B4A" stroke-width="0.3"/>
          <line x1="50" y1="85" x2="50" y2="180" stroke="#9C6B4A" stroke-width="0.5"/>
          <path d="M50 120 C35 110, 15 130, 35 145" stroke="#9C6B4A" stroke-width="0.5"/>
          <path d="M50 150 C65 140, 85 160, 65 175" stroke="#9C6B4A" stroke-width="0.5"/>
        </svg>
        <p class="hero-overline reveal">Botanical Skincare from Provence</p>
        <h1 class="hero-title reveal">Nothing to<br><em>hide</em></h1>
        <div class="hero-line reveal"></div>
        <p class="hero-subtitle reveal">Every ingredient named. Every bottle numbered. Skincare made the way it should be — transparent, intentional, and entirely botanical.</p>
        <div class="hero-cta-group reveal">
          <a href="#collection" class="btn btn-primary">Explore the Collection</a>
          <a href="#philosophy" class="btn btn-outline">Our Philosophy</a>
        </div>
      </section>

      <section class="philosophy" id="philosophy">
        <div class="container">
          <div class="philosophy-inner">
            <div class="reveal">
              <p class="section-label">Our Philosophy</p>
              <p class="philosophy-text">We believe skincare should be honest. Not simplified — honest. Every formula begins with a single question: would we put this on our own skin?</p>
              <p class="philosophy-text">The answer determines everything that follows. No fillers. No compromises. No ingredients chosen for cost or shelf life over efficacy.</p>
              <figure class="photo-frame philosophy-photo">
                <img src="/aureline/images/philosophy.jpg" alt="Dried yellow flowers in a laboratory beaker" loading="lazy" decoding="async" />
                <figcaption class="sr-only">Botanical specimens awaiting extraction</figcaption>
              </figure>
            </div>
            <div class="philosophy-detail">
              <div class="philosophy-stat reveal">
                <p class="stat-number">100%</p>
                <p class="stat-label">Botanical origin. No synthetics, no petrochemicals, no compromises on purity.</p>
              </div>
              <div class="philosophy-stat reveal">
                <p class="stat-number">72hr</p>
                <p class="stat-label">From harvest to formulation. Ingredients are processed within three days to preserve potency.</p>
              </div>
              <div class="philosophy-stat reveal">
                <p class="stat-number">200</p>
                <p class="stat-label">Batches per product annually. Small enough to inspect every bottle. Large enough to share.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ingredients" id="ingredients">
        <div class="container">
          <div class="ingredients-header reveal">
            <p class="section-label">Ingredients</p>
            <h2>Named, sourced, and explained</h2>
            <p>We list every ingredient on the bottle and explain why it is there. Transparency is not a marketing position — it is our manufacturing standard.</p>
          </div>
          <div class="ingredients-grid">
            <div class="ingredient reveal">
              <figure class="photo-frame ingredient-photo">
                <img src="/aureline/images/ingredient-rosehip.jpg" alt="Rosehips on a thorny twig" loading="lazy" decoding="async" />
              </figure>
              <p class="ingredient-name">Rosehip Seed Oil</p>
              <p class="ingredient-latin">Rosa canina</p>
              <p class="ingredient-desc">Cold-pressed from wild-harvested rosehips in the Drôme valley. Rich in trans-retinoic acid and linoleic acid for cellular renewal.</p>
            </div>
            <div class="ingredient reveal">
              <figure class="photo-frame ingredient-photo">
                <img src="/aureline/images/ingredient-helichrysum.jpg" alt="Helichrysum flowers in bloom" loading="lazy" decoding="async" />
              </figure>
              <p class="ingredient-name">Helichrysum</p>
              <p class="ingredient-latin">Helichrysum italicum</p>
              <p class="ingredient-desc">Steam-distilled from Corsican flowers. Prized for its anti-inflammatory properties and natural regenerative compounds.</p>
            </div>
            <div class="ingredient reveal">
              <figure class="photo-frame ingredient-photo">
                <img src="/aureline/images/ingredient-seabuckthorn.jpg" alt="Sea buckthorn berries on a branch" loading="lazy" decoding="async" />
              </figure>
              <p class="ingredient-name">Sea Buckthorn</p>
              <p class="ingredient-latin">Hippophae rhamnoides</p>
              <p class="ingredient-desc">Berry oil from Alpine harvests. One of the richest natural sources of vitamins A, C, and E for barrier repair.</p>
            </div>
            <div class="ingredient reveal">
              <figure class="photo-frame ingredient-photo">
                <img src="/aureline/images/ingredient-pricklypear.jpg" alt="Prickly pear cactus with ripe fruit" loading="lazy" decoding="async" />
              </figure>
              <p class="ingredient-name">Prickly Pear Seed</p>
              <p class="ingredient-latin">Opuntia ficus-indica</p>
              <p class="ingredient-desc">Hand-pressed from seeds collected in the Haute-Provence. Exceptionally high in tocopherols and essential fatty acids.</p>
            </div>
            <div class="ingredient reveal">
              <figure class="photo-frame ingredient-photo">
                <img src="/aureline/images/ingredient-lavender.jpg" alt="Lavender blooms in a garden" loading="lazy" decoding="async" />
              </figure>
              <p class="ingredient-name">Lavender Absolute</p>
              <p class="ingredient-latin">Lavandula angustifolia</p>
              <p class="ingredient-desc">Sourced from a single estate in Valensole. Used for its calming properties and natural antiseptic qualities.</p>
            </div>
            <div class="ingredient reveal">
              <figure class="photo-frame ingredient-photo">
                <img src="/aureline/images/ingredient-jojoba.jpg" alt="Green jojoba seed pods" loading="lazy" decoding="async" />
              </figure>
              <p class="ingredient-name">Jojoba Esters</p>
              <p class="ingredient-latin">Simmondsia chinensis</p>
              <p class="ingredient-desc">Cold-pressed and molecularly distilled. Mimics the skin's natural sebum composition for balanced hydration.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="collection" id="collection">
        <div class="container">
          <div class="collection-header reveal">
            <p class="section-label">The Collection</p>
            <h2>Four essentials, nothing more</h2>
            <p>A concise routine built around what the skin actually needs. Each product designed to work independently or as part of the full regimen.</p>
          </div>
          <div class="collection-grid">
            <article class="product-card reveal">
              <figure class="product-visual photo-frame">
                <img src="/aureline/images/product-morning-oil.jpg" alt="Amber glass dropper bottle dispensing oil" loading="lazy" decoding="async" />
                <figcaption class="product-visual-size">30 ml · Nº 001</figcaption>
              </figure>
              <h3 class="product-name">Morning Oil</h3>
              <p class="product-type">Lightweight nourishing serum</p>
              <p class="product-price">€68</p>
            </article>
            <article class="product-card reveal">
              <figure class="product-visual photo-frame">
                <img src="/aureline/images/product-repair-balm.jpg" alt="Skincare jars with natural textures" loading="lazy" decoding="async" />
                <figcaption class="product-visual-size">50 ml · Nº 002</figcaption>
              </figure>
              <h3 class="product-name">Repair Balm</h3>
              <p class="product-type">Concentrated overnight treatment</p>
              <p class="product-price">€94</p>
            </article>
            <article class="product-card reveal">
              <figure class="product-visual photo-frame">
                <img src="/aureline/images/product-cleansing-elixir.jpg" alt="Minimal skincare bottles on soft fabric" loading="lazy" decoding="async" />
                <figcaption class="product-visual-size">100 ml · Nº 003</figcaption>
              </figure>
              <h3 class="product-name">Cleansing Elixir</h3>
              <p class="product-type">Oil-to-milk daily cleanser</p>
              <p class="product-price">€52</p>
            </article>
          </div>
        </div>
      </section>

      <section class="process" id="process">
        <div class="container">
          <div class="process-header reveal">
            <p class="section-label">Process</p>
            <h2>From field to bottle</h2>
          </div>
          <div class="process-steps">
            <div class="process-step reveal">
              <img class="process-photo" src="/aureline/images/process-sourcing.jpg" alt="Harvesting lavender into a woven basket" loading="lazy" decoding="async" />
              <p class="process-number">01</p>
              <h3>Sourcing</h3>
              <p>Ingredients are selected from known growers across Provence, Corsica, and the Alps. Each harvest is tested before purchase.</p>
            </div>
            <div class="process-step reveal">
              <img class="process-photo" src="/aureline/images/process-extraction.jpg" alt="Gloved hands handling aromatic compounds in a laboratory" loading="lazy" decoding="async" />
              <p class="process-number">02</p>
              <h3>Extraction</h3>
              <p>Cold-pressing and steam distillation happen on-site within 72 hours of harvest to preserve maximum bioavailability.</p>
            </div>
            <div class="process-step reveal">
              <img class="process-photo" src="/aureline/images/process-formulation.jpg" alt="Mixing skincare cream with precision in a laboratory" loading="lazy" decoding="async" />
              <p class="process-number">03</p>
              <h3>Formulation</h3>
              <p>Each batch is compounded in our Aix-en-Provence laboratory. Formulations are adjusted by season and harvest quality.</p>
            </div>
            <div class="process-step reveal">
              <img class="process-photo" src="/aureline/images/process-bottling.jpg" alt="Hands filling glass bottles" loading="lazy" decoding="async" />
              <p class="process-number">04</p>
              <h3>Bottling</h3>
              <p>Hand-filled, inspected, and numbered. Every bottle carries its batch and harvest reference.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="commitment">
        <img class="commitment-bg" src="/aureline/images/commitment.jpg" alt="" loading="lazy" decoding="async" />
        <div class="commitment-scrim" aria-hidden="true"></div>
        <div class="container">
          <div class="commitment-inner reveal">
            <blockquote class="commitment-blockquote">
              "We do not make skincare for everyone. We make skincare for people who read ingredient lists."
            </blockquote>
            <p class="commitment-attr">— Camille Dufresne, Founder</p>
            <div class="commitment-line"></div>
          </div>
        </div>
      </section>

      <section class="newsletter" id="newsletter">
        <div class="container">
          <div class="reveal">
            <h2>Stay Informed</h2>
            <p>Seasonal harvests, new formulations, and availability — delivered quarterly.</p>
            <form class="newsletter-form" id="newsletterForm" aria-label="Newsletter signup">
              <input type="email" placeholder="Your email address" required aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-left">
            <span>© 2026 Aureline</span>
            <ul class="footer-links">
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#ingredients">Ingredients</a></li>
              <li><a href="#collection">Collection</a></li>
            </ul>
          </div>
          <a href="https://github.com/temidayoxyz/aureline" class="github-link" target="_blank" rel="noopener noreferrer" aria-label="Aureline on GitHub">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  `

  // Navigation scroll behavior
  const nav = document.querySelector('.nav')
  let lastScroll = 0

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (currentScroll > 40) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
    lastScroll = currentScroll
  }, { passive: true })

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle')
  const navLinks = document.getElementById('navLinks')

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open')
    navToggle.classList.toggle('active')
    nav.classList.toggle('menu-open', isOpen)
    navToggle.setAttribute('aria-expanded', isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })

  // Close mobile menu on link click or escape
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open')
      navToggle.classList.remove('active')
      nav.classList.remove('menu-open')
      navToggle.setAttribute('aria-expanded', 'false')
      document.body.style.overflow = ''
    })
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open')
      navToggle.classList.remove('active')
      nav.classList.remove('menu-open')
      navToggle.setAttribute('aria-expanded', 'false')
      document.body.style.overflow = ''
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1)
      if (id) {
        e.preventDefault()
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    })
  })

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

  reveals.forEach(el => observer.observe(el))

  // Newsletter form
  const form = document.getElementById('newsletterForm')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = form.querySelector('input')
    const email = input.value
    if (email) {
      input.value = ''
      input.placeholder = 'Thank you — we will be in touch.'
      setTimeout(() => {
        input.placeholder = 'Your email address'
      }, 4000)
    }
  })
}

document.addEventListener('DOMContentLoaded', initApp)
