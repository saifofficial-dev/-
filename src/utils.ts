export function generateStandaloneHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dadi ka Nuskha | 100% Pure Traditional Mustard Hair Oil</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700&family=Noto+Nastaliq+Urdu:wght@400..700&display=swap" rel="stylesheet">
  
  <style>
    /* CSS VARIABLES - Traditional Palette */
    :root {
      --color-mustard: #D4A017;
      --color-mustard-light: #F4D068;
      --color-mustard-glow: rgba(212, 160, 23, 0.15);
      --color-brown-dark: #3E2723;
      --color-brown-light: #5D4037;
      --color-brown-deep: #2D1A17;
      --color-cream-bg: #FFF8E7;
      --color-cream-card: #FFFDF6;
      --color-green: #1B5E20;
      --color-green-light: #E8F5E9;
      --color-text-dark: #2D1A17;
      --color-text-muted: #6D5A55;
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-sans: 'Poppins', sans-serif;
      --font-urdu: 'Noto Nastaliq Urdu', 'Playfair Display', serif;
      --shadow-sm: 0 2px 8px rgba(45, 26, 23, 0.05);
      --shadow-md: 0 8px 24px rgba(45, 26, 23, 0.08);
      --shadow-lg: 0 16px 36px rgba(45, 26, 23, 0.12);
      --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* GLOBAL STYLES */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: var(--font-sans);
      background-color: var(--color-cream-bg);
      color: var(--color-text-dark);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* TYPOGRAPHY */
    h1, h2, h3, h4, .serif-text {
      font-family: var(--font-serif);
      font-weight: 700;
      color: var(--color-brown-dark);
    }

    .urdu-text {
      font-family: var(--font-urdu);
      direction: rtl;
      text-align: right;
      line-height: 2.2;
    }

    /* BUTTONS */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.85rem 2rem;
      font-family: var(--font-sans);
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      transition: var(--transition-smooth);
      gap: 0.75rem;
    }

    .btn-primary {
      background-color: var(--color-mustard);
      color: white;
      box-shadow: 0 4px 15px rgba(212, 160, 23, 0.3);
    }

    .btn-primary:hover {
      background-color: var(--color-mustard-dark);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(212, 160, 23, 0.4);
    }

    .btn-secondary {
      background-color: transparent;
      color: var(--color-brown-dark);
      border: 2px solid var(--color-brown-dark);
    }

    .btn-secondary:hover {
      background-color: var(--color-brown-dark);
      color: var(--color-cream-bg);
      transform: translateY(-2px);
    }

    .btn-whatsapp {
      background-color: var(--color-green);
      color: white;
      box-shadow: 0 4px 15px rgba(27, 94, 32, 0.25);
    }

    .btn-whatsapp:hover {
      background-color: #0d47a1; /* Custom forest-dark */
      background-color: #155e18;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(27, 94, 32, 0.35);
    }

    .pulse-animation {
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(27, 94, 32, 0.4);
      }
      70% {
        box-shadow: 0 0 0 12px rgba(27, 94, 32, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(27, 94, 32, 0);
      }
    }

    /* HEADER & NAVIGATION */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background-color: rgba(255, 248, 231, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(62, 39, 35, 0.08);
      transition: var(--transition-smooth);
    }

    header.scrolled {
      background-color: #FFF8E7;
      box-shadow: var(--shadow-sm);
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }

    .logo {
      display: flex;
      flex-direction: column;
      text-decoration: none;
    }

    .logo-main {
      font-size: 1.45rem;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }

    .logo-urdu {
      font-family: var(--font-urdu);
      font-size: 1.2rem;
      color: var(--color-mustard);
      line-height: 1.4;
      margin-top: 1px;
    }

    nav ul {
      display: flex;
      list-style: none;
      gap: 1.75rem;
    }

    nav ul a {
      text-decoration: none;
      color: var(--color-brown-dark);
      font-weight: 500;
      font-size: 0.95rem;
      position: relative;
      padding: 0.25rem 0;
      transition: var(--transition-smooth);
    }

    nav ul a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-mustard);
      transition: var(--transition-smooth);
    }

    nav ul a:hover {
      color: var(--color-mustard);
    }

    nav ul a:hover::after {
      width: 100%;
    }

    .nav-cta {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .menu-toggle span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: var(--color-brown-dark);
      margin: 5px 0;
      transition: var(--transition-smooth);
      border-radius: 3px;
    }

    /* HERO SECTION */
    .hero {
      padding: 150px 0 90px;
      background: linear-gradient(180deg, #FFF3D1 0%, var(--color-cream-bg) 100%);
      position: relative;
      overflow: hidden;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 3rem;
      align-items: center;
    }

    .badge-heritage {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--color-green-light);
      color: var(--color-green);
      padding: 0.4rem 1rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.8rem;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      border: 1px solid rgba(27, 94, 32, 0.15);
      margin-bottom: 1.5rem;
    }

    .hero-content h1 {
      font-size: 3rem;
      line-height: 1.15;
      margin-bottom: 1rem;
    }

    .hero-urdu {
      font-size: 2.2rem;
      color: var(--color-mustard);
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    .hero-tagline {
      font-size: 1.25rem;
      color: var(--color-brown-light);
      margin-bottom: 1.5rem;
      font-style: italic;
      font-weight: 500;
    }

    .hero-description {
      color: var(--color-text-muted);
      font-size: 1.05rem;
      margin-bottom: 2rem;
      max-width: 520px;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-image-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .glowing-bg {
      position: absolute;
      width: 110%;
      height: 110%;
      background: radial-gradient(circle, rgba(214, 160, 23, 0.15) 0%, rgba(214, 160, 23, 0) 70%);
      pointer-events: none;
      animation: rotate-slow 20s linear infinite;
    }

    .hero-svg-wrapper {
      position: relative;
      z-index: 2;
      filter: drop-shadow(0 15px 30px rgba(62, 39, 35, 0.15));
      transition: var(--transition-smooth);
    }

    .hero-svg-wrapper:hover {
      transform: translateY(-8px) scale(1.02);
    }

    @keyframes rotate-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* ABOUT SECTION */
    .about {
      padding: 100px 0;
      position: relative;
    }

    .about-card {
      background-color: var(--color-cream-card);
      border-radius: 24px;
      padding: 4rem;
      box-shadow: var(--shadow-md);
      border: 1px solid rgba(212, 160, 23, 0.15);
      position: relative;
    }

    .about-card::before {
      content: '';
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border: 1px dashed rgba(62, 39, 35, 0.1);
      border-radius: 18px;
      pointer-events: none;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 4rem;
      align-items: center;
    }

    .section-title-wrapper {
      margin-bottom: 2rem;
    }

    .title-arabic {
      font-size: 2.2rem;
      color: var(--color-mustard);
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .section-title {
      font-size: 2.5rem;
      line-height: 1.2;
    }

    .about-text {
      color: var(--color-text-muted);
      font-size: 1.05rem;
      margin-bottom: 1.5rem;
    }

    .about-highlights {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .highlight-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--color-brown-dark);
    }

    .highlight-icon {
      width: 24px;
      height: 24px;
      color: var(--color-green);
    }

    .about-visual {
      display: flex;
      justify-content: center;
      position: relative;
    }

    /* PRODUCTS SECTION */
    .products {
      padding: 100px 0;
      background-color: rgba(212, 160, 23, 0.05);
    }

    .products-header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 4rem;
    }

    .products-header h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      max-width: 950px;
      margin: 0 auto;
    }

    .product-card {
      background-color: var(--color-cream-card);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: var(--shadow-md);
      border: 1px solid rgba(62, 39, 35, 0.06);
      transition: var(--transition-smooth);
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
      border-color: rgba(212, 160, 23, 0.25);
    }

    .product-badge {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      background-color: var(--color-mustard);
      color: white;
      padding: 0.35rem 0.9rem;
      font-size: 0.75rem;
      font-weight: 700;
      border-radius: 50px;
      letter-spacing: 0.5px;
      z-index: 10;
      box-shadow: 0 4px 10px rgba(212, 160, 23, 0.2);
    }

    .product-image-area {
      background: linear-gradient(180deg, #FFFDF6 0%, #FFF3D1 100%);
      padding: 3rem 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgba(62, 39, 35, 0.04);
      position: relative;
    }

    .product-svg-wrapper {
      filter: drop-shadow(0 10px 20px rgba(62, 39, 35, 0.12));
      transition: var(--transition-smooth);
    }

    .product-card:hover .product-svg-wrapper {
      transform: scale(1.05);
    }

    .product-info {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .product-title-group {
      margin-bottom: 1rem;
    }

    .product-title {
      font-size: 1.45rem;
      margin-bottom: 0.25rem;
    }

    .product-title-urdu {
      font-family: var(--font-urdu);
      font-size: 1.15rem;
      color: var(--color-mustard-dark);
      margin-top: 2px;
    }

    .product-description {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
    }

    .product-benefits {
      list-style: none;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .product-benefits li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      font-size: 0.9rem;
      color: var(--color-text-dark);
    }

    .product-benefits svg {
      width: 18px;
      height: 18px;
      color: var(--color-green);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .product-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(62, 39, 35, 0.05);
      gap: 1rem;
    }

    .price-tag {
      display: flex;
      flex-direction: column;
    }

    .price-label {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .price-value {
      font-size: 1.65rem;
      font-weight: 800;
      color: var(--color-brown-dark);
      font-family: var(--font-serif);
    }

    /* WHY CHOOSE US */
    .why-us {
      padding: 100px 0;
    }

    .why-us-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-top: 4rem;
    }

    .feature-card {
      background-color: var(--color-cream-card);
      border-radius: 18px;
      padding: 2rem 1.75rem;
      text-align: center;
      box-shadow: var(--shadow-sm);
      border: 1px solid rgba(62, 39, 35, 0.04);
      transition: var(--transition-smooth);
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
      border-color: rgba(212, 160, 23, 0.2);
    }

    .feature-icon-circle {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: var(--color-mustard-glow);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: var(--color-mustard-dark);
      transition: var(--transition-smooth);
    }

    .feature-card:hover .feature-icon-circle {
      background-color: var(--color-mustard);
      color: white;
    }

    .feature-icon-circle svg {
      width: 28px;
      height: 28px;
    }

    .feature-title {
      font-size: 1.15rem;
      margin-bottom: 0.25rem;
    }

    .feature-title-urdu {
      font-family: var(--font-urdu);
      font-size: 1rem;
      color: var(--color-mustard-dark);
      margin-bottom: 0.75rem;
    }

    .feature-description {
      color: var(--color-text-muted);
      font-size: 0.88rem;
    }

    /* TESTIMONIALS */
    .testimonials {
      padding: 100px 0;
      background: linear-gradient(180deg, var(--color-cream-bg) 0%, #FFF3D1 100%);
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 4rem;
    }

    .review-card {
      background-color: var(--color-cream-card);
      border-radius: 20px;
      padding: 2.5rem 2rem;
      box-shadow: var(--shadow-sm);
      border: 1px solid rgba(62, 39, 35, 0.03);
      position: relative;
    }

    .quote-icon {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      width: 40px;
      height: 40px;
      color: rgba(214, 160, 23, 0.1);
    }

    .stars {
      display: flex;
      gap: 0.25rem;
      color: var(--color-mustard);
      margin-bottom: 1.25rem;
    }

    .stars svg {
      width: 18px;
      height: 18px;
    }

    .review-text {
      font-size: 0.95rem;
      color: var(--color-text-dark);
      font-style: italic;
      margin-bottom: 1.25rem;
    }

    .review-text-urdu {
      font-family: var(--font-urdu);
      font-size: 0.95rem;
      color: var(--color-brown-light);
      line-height: 2;
      margin-bottom: 1.5rem;
      border-top: 1px dashed rgba(62, 39, 35, 0.08);
      padding-top: 1rem;
    }

    .review-author {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border-top: 1px solid rgba(62, 39, 35, 0.05);
      padding-top: 1.25rem;
    }

    .author-avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: var(--color-mustard-glow);
      color: var(--color-mustard-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.95rem;
    }

    .author-info h4 {
      font-size: 0.95rem;
      font-family: var(--font-sans);
      color: var(--color-brown-dark);
    }

    .author-info p {
      font-size: 0.8rem;
      color: var(--color-text-muted);
    }

    /* CONTACT SECTION & ORDER FORM */
    .contact {
      padding: 100px 0;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: flex-start;
    }

    .contact-info-panel h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .contact-urdu-tagline {
      font-family: var(--font-urdu);
      font-size: 1.6rem;
      color: var(--color-mustard);
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }

    .contact-p {
      color: var(--color-text-muted);
      font-size: 1.05rem;
      margin-bottom: 2.5rem;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      margin-bottom: 2.5rem;
    }

    .detail-row {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .detail-icon-box {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background-color: var(--color-mustard-glow);
      color: var(--color-mustard-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .detail-icon-box svg {
      width: 20px;
      height: 20px;
    }

    .detail-content h4 {
      font-family: var(--font-sans);
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-brown-dark);
      margin-bottom: 0.2rem;
    }

    .detail-content p, .detail-content a {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      text-decoration: none;
      transition: var(--transition-smooth);
    }

    .detail-content a:hover {
      color: var(--color-mustard-dark);
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-icon-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid rgba(62, 39, 35, 0.15);
      color: var(--color-brown-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: var(--transition-smooth);
    }

    .social-icon-btn:hover {
      background-color: var(--color-brown-dark);
      color: var(--color-cream-bg);
      transform: translateY(-2px);
    }

    /* FORM CARD */
    .form-card {
      background-color: var(--color-cream-card);
      border-radius: 24px;
      padding: 3rem;
      box-shadow: var(--shadow-lg);
      border: 1px solid rgba(212, 160, 23, 0.15);
      position: relative;
    }

    .form-card h3 {
      font-size: 1.65rem;
      margin-bottom: 0.25rem;
    }

    .form-subtitle-urdu {
      font-family: var(--font-urdu);
      font-size: 1.1rem;
      color: var(--color-mustard-dark);
      margin-bottom: 1.75rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .form-group label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-brown-dark);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .form-control {
      width: 100%;
      padding: 0.85rem 1.25rem;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      background-color: var(--color-cream-bg);
      border: 1px solid rgba(62, 39, 35, 0.15);
      border-radius: 12px;
      color: var(--color-text-dark);
      transition: var(--transition-smooth);
    }

    .form-control:focus {
      outline: none;
      border-color: var(--color-mustard);
      background-color: white;
      box-shadow: 0 0 0 4px var(--color-mustard-glow);
    }

    .radio-group {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
    }

    .radio-label {
      border: 1px solid rgba(62, 39, 35, 0.15);
      border-radius: 12px;
      padding: 0.85rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      background-color: var(--color-cream-bg);
      transition: var(--transition-smooth);
    }

    .radio-label input {
      display: none;
    }

    .radio-label span {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-brown-dark);
    }

    .radio-label p {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }

    .radio-label:hover {
      border-color: var(--color-mustard);
    }

    .radio-label.checked {
      background-color: var(--color-mustard-glow);
      border-color: var(--color-mustard);
    }

    /* TOAST NOTIFICATION */
    .toast {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background-color: var(--color-green);
      color: white;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      box-shadow: var(--shadow-lg);
      z-index: 10000;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .toast.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }

    /* FOOTER */
    footer {
      background-color: var(--color-brown-deep);
      color: rgba(255, 248, 231, 0.7);
      padding: 80px 0 40px;
      border-top: 4px solid var(--color-mustard);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;
    }

    .footer-brand h3 {
      color: white;
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }

    .footer-urdu-tag {
      font-family: var(--font-urdu);
      color: var(--color-mustard);
      font-size: 1.15rem;
      line-height: 1.8;
      margin-bottom: 1.25rem;
    }

    .footer-desc {
      font-size: 0.9rem;
      line-height: 1.7;
    }

    .footer-title {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      position: relative;
      padding-bottom: 0.5rem;
    }

    .footer-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: var(--color-mustard);
    }

    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .footer-links a {
      color: rgba(255, 248, 231, 0.7);
      text-decoration: none;
      font-size: 0.95rem;
      transition: var(--transition-smooth);
    }

    .footer-links a:hover {
      color: var(--color-mustard);
      padding-left: 5px;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 248, 231, 0.08);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    /* WHATSAPP FLOATING BUTTON */
    .whatsapp-floater {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #25D366;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      z-index: 999;
      text-decoration: none;
      transition: var(--transition-smooth);
    }

    .whatsapp-floater:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }

    .whatsapp-floater svg {
      width: 30px;
      height: 30px;
    }

    /* RESPONSIVE MEDIA QUERIES */
    @media (max-width: 1024px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }
      .why-us-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .nav-container {
        height: 70px;
      }
      nav {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background-color: #FFF8E7;
        z-index: 998;
        padding: 3rem 2rem;
        transition: var(--transition-smooth);
        box-shadow: var(--shadow-lg);
      }

      nav.active {
        left: 0;
      }

      nav ul {
        flex-direction: column;
        gap: 2rem;
        align-items: center;
      }

      nav ul a {
        font-size: 1.2rem;
      }

      .menu-toggle {
        display: block;
      }

      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
      }
      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
      }

      .nav-cta {
        display: none;
      }

      .hero {
        padding: 120px 0 60px;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
      }

      .hero-description {
        margin: 0 auto 2rem;
      }

      .hero-actions {
        justify-content: center;
      }

      .about-card {
        padding: 2rem 1.5rem;
      }

      .about-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .about-highlights {
        grid-template-columns: 1fr;
      }

      .products-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        max-width: 450px;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .form-card {
        padding: 2rem 1.5rem;
      }

      .footer-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .hero-content h1 {
        font-size: 2.1rem;
      }
      .hero-urdu {
        font-size: 1.75rem;
      }
      .section-title {
        font-size: 2rem;
      }
      .title-arabic {
        font-size: 1.75rem;
      }
      .radio-group {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header id="header">
    <div class="container nav-container">
      <a href="#hero" class="logo">
        <span class="logo-urdu">دادی کا نسخہ</span>
        <span class="logo-main" style="font-family: var(--font-serif); font-weight: 800; color: var(--color-brown-dark);">Dadi ka Nuskha</span>
      </a>

      <nav id="nav-menu">
        <ul>
          <li><a href="#hero" onclick="toggleMenu()">Ghar</a></li>
          <li><a href="#about" onclick="toggleMenu()">Kahani</a></li>
          <li><a href="#products" onclick="toggleMenu()">Hamare Tel</a></li>
          <li><a href="#why-us" onclick="toggleMenu()">Khasiyat</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Rabta</a></li>
        </ul>
      </nav>

      <div class="nav-cta">
        <a href="https://wa.me/923000000000?text=Assalam-o-Alaikum%20Dadi%20ka%20Nuskha!%20I%20am%20interested%20in%20your%20100%25%20pure%20traditional%20Mustard%20Hair%20Oil.%20Please%20guide%20me%20on%20how%20to%20order." class="btn btn-primary" target="_blank" rel="noopener noreferrer">Order via WhatsApp</a>
      </div>

      <button class="menu-toggle" id="menu-toggle" onclick="toggleMenu()" aria-label="Toggle Navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="hero" id="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="badge-heritage">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          100% Pure & Organic • Made in Lahore
        </div>
        <div class="hero-urdu urdu-text">دادی کا نسخہ</div>
        <h1 class="serif-text">Pure, Traditional Mustard Hair Oil</h1>
        <p class="hero-tagline">"Dadi ka asal nuskha, khalis sarson ka tel"</p>
        <p class="hero-description">
          Gift your hair the authentic care of Lahori heritage. Cold-pressed using traditional wooden presses (Kohlu), our mustard oil nourishes from roots to ends with zero chemicals.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary pulse-animation">Order Now</a>
          <a href="#about" class="btn btn-secondary">Explore Our Story</a>
        </div>
      </div>

      <div class="hero-image-container">
        <div class="glowing-bg"></div>
        <div class="hero-svg-wrapper">
          <!-- Standalone Vector SVG of a premium amber bottle & mustard flowers -->
          <svg width="340" height="420" viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Background glow -->
            <circle cx="170" cy="220" r="140" fill="url(#hero_glow_gradient)" opacity="0.4" />
            
            <!-- Mustard flower left -->
            <g transform="translate(40, 260) scale(0.95)">
              <path d="M40 80 C 40 40, 20 20, 0 40 C -20 20, -40 40, -40 80 C -40 120, 0 130, 40 80 Z" fill="#D4A017" opacity="0.8"/>
              <circle cx="0" cy="70" r="12" fill="#F4D068" />
              <path d="M20 70 Q 50 120 70 140" stroke="#1B5E20" stroke-width="4" stroke-linecap="round"/>
              <!-- Leaves -->
              <path d="M45 105 Q 80 100 65 85" fill="#1B5E20"/>
            </g>

            <!-- Bottle Shadow -->
            <ellipse cx="170" cy="385" rx="70" ry="15" fill="rgba(62, 39, 35, 0.25)" />

            <!-- Mustard flower right -->
            <g transform="translate(260, 280) scale(0.85)">
              <circle cx="20" cy="50" r="18" fill="#F4D068" />
              <path d="M0 50 C -20 20, -40 30, -30 60 C -10 90, 20 80, 0 50 Z" fill="#D4A017" />
              <path d="M10 55 Q -30 110 -40 130" stroke="#1B5E20" stroke-width="4" stroke-linecap="round"/>
            </g>

            <!-- Bottle Body Group -->
            <g id="bottle_vector">
              <!-- Bottle Neck/Cork -->
              <rect x="150" y="70" width="40" height="30" rx="3" fill="url(#cork_grad)" stroke="#3E2723" stroke-width="1.5" />
              <rect x="144" y="60" width="52" height="10" rx="2" fill="#5D4037" />
              <path d="M150 95 Q 170 105 190 95" stroke="#3E2723" stroke-width="2"/>

              <!-- Glass Collar -->
              <path d="M140 120 C 140 100, 200 100, 200 120 L 140 120 Z" fill="url(#glass_grad)" opacity="0.85"/>

              <!-- Main Bottle Glass -->
              <path d="M110 160 C 110 130, 130 120, 170 120 C 210 120, 230 130, 230 160 L 235 340 C 235 365, 215 375, 170 375 C 125 375, 105 365, 105 340 L 110 160 Z" fill="url(#bottle_oil_grad)" stroke="#2D1A17" stroke-width="3" />

              <!-- Highlights and Reflection on Glass -->
              <path d="M115 165 C 115 145, 130 135, 170 135" stroke="rgba(255, 255, 255, 0.45)" stroke-width="4" stroke-linecap="round" />
              <path d="M120 180 L 117 330" stroke="rgba(255, 255, 255, 0.25)" stroke-width="3" stroke-linecap="round" />
              <path d="M225 180 L 222 330" stroke="rgba(0, 0, 0, 0.2)" stroke-width="3" stroke-linecap="round" />

              <!-- Label Backing -->
              <rect x="122" y="195" width="96" height="120" rx="8" fill="#FFFDF6" stroke="#D4A017" stroke-width="2" />
              <rect x="126" y="199" width="88" height="112" rx="6" fill="none" stroke="#3E2723" stroke-width="1" stroke-dasharray="4 2" />

              <!-- Label Content -->
              <text x="170" y="222" font-family="'Noto Nastaliq Urdu', serif" font-size="13" font-weight="bold" fill="#3E2723" text-anchor="middle" dominant-baseline="middle">دادی کا نسخہ</text>
              <line x1="135" y1="238" x2="205" y2="238" stroke="#D4A017" stroke-width="1.5"/>
              <text x="170" y="258" font-family="'Playfair Display', serif" font-size="11" font-weight="900" fill="#3E2723" text-anchor="middle" letter-spacing="0.5">DADI KA</text>
              <text x="170" y="271" font-family="'Playfair Display', serif" font-size="11" font-weight="900" fill="#3E2723" text-anchor="middle" letter-spacing="0.5">NUSKHA</text>
              <text x="170" y="292" font-family="'Poppins', sans-serif" font-size="7" font-weight="700" fill="#1B5E20" text-anchor="middle" letter-spacing="1">100% PURE SARSON</text>
              <text x="170" y="303" font-family="'Poppins', sans-serif" font-size="6.5" font-weight="600" fill="#8B5A00" text-anchor="middle">LAHORE, PAKISTAN</text>

              <!-- Golden Drops of Oil Icon at Bottom of Label -->
              <path d="M170 307 C 167 312, 173 312, 170 307 Z" fill="#D4A017" />
            </g>

            <!-- Definitions of Gradients -->
            <defs>
              <radialGradient id="hero_glow_gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#F4D068" />
                <stop offset="100%" stop-color="#FFF8E7" stop-opacity="0" />
              </radialGradient>
              <linearGradient id="cork_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#8B5A00" />
                <stop offset="50%" stop-color="#CD853F" />
                <stop offset="100%" stop-color="#8B5A00" />
              </linearGradient>
              <linearGradient id="glass_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#D4A017" />
                <stop offset="50%" stop-color="rgba(255,255,255,0.6)" />
                <stop offset="100%" stop-color="#D4A017" />
              </linearGradient>
              <linearGradient id="bottle_oil_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#8B5A00" />
                <stop offset="25%" stop-color="#A5780F" />
                <stop offset="60%" stop-color="#D4A017" />
                <stop offset="85%" stop-color="#F4D068" />
                <stop offset="100%" stop-color="#5D4037" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="about" id="about">
    <div class="container">
      <div class="about-card">
        <div class="about-grid">
          <div class="about-content">
            <div class="section-title-wrapper">
              <div class="title-arabic urdu-text">صدیوں کا بھروسہ</div>
              <h2 class="section-title">The Story of Absolute Purity</h2>
            </div>
            <p class="about-text">
              For generations, our family in Lahore has preserved the sacred recipe of pure cold-pressed Mustard Hair Oil. <strong>"Dadi ka Nuskha"</strong> is not just a brand; it is an inheritance of love, maternal warmth, and traditional hair care secrets.
            </p>
            <p class="about-text">
              Unlike commercial hair oils that are secretly diluted with cheap mineral oils and loaded with artificial fragrances, we source only the finest premium mustard seeds from fertile Punjab fields. We cold-press them at low speeds inside traditional wooden presses (Kohlu), keeping every vitamin, protein, and natural conditioning benefit entirely alive.
            </p>
            
            <div class="about-highlights">
              <div class="highlight-item">
                <svg class="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Zero Mineral Oil & Paraffin</span>
              </div>
              <div class="highlight-item">
                <svg class="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Traditionally Cold-Pressed</span>
              </div>
              <div class="highlight-item">
                <svg class="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Fights Dandruff & Dryness</span>
              </div>
              <div class="highlight-item">
                <svg class="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Deep Conditioning Root Therapy</span>
              </div>
            </div>
          </div>

          <div class="about-visual">
            <!-- Secondary Decorative Graphic -->
            <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="95" fill="#FFFDF6" stroke="#D4A017" stroke-width="2" stroke-dasharray="6 3" />
              <!-- Floral Ring inside -->
              <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(62,39,35,0.06)" stroke-width="1" />
              
              <g transform="translate(100, 100)">
                <!-- Center golden seal -->
                <circle cx="0" cy="0" r="45" fill="url(#gold_seal_grad)" stroke="#3E2723" stroke-width="1.5" />
                <path d="M-20 -5 L0 -25 L20 -5 L10 25 L-10 25 Z" fill="none" stroke="#FFFDF6" stroke-width="1" stroke-dasharray="2 2" />
                <text x="0" y="-8" font-family="var(--font-urdu)" font-size="14" fill="#FFFDF6" font-weight="bold" text-anchor="middle">خالص</text>
                <text x="0" y="16" font-family="var(--font-sans)" font-size="10" font-weight="700" fill="#FFFDF6" text-anchor="middle" letter-spacing="1">100% PURE</text>
              </g>

              <!-- Outer decorative flower petals -->
              <circle cx="100" cy="30" r="6" fill="#D4A017" />
              <circle cx="100" cy="170" r="6" fill="#D4A017" />
              <circle cx="30" cy="100" r="6" fill="#D4A017" />
              <circle cx="170" cy="100" r="6" fill="#D4A017" />
              
              <!-- Gradients -->
              <defs>
                <linearGradient id="gold_seal_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#D4A017" />
                  <stop offset="100%" stop-color="#3E2723" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCTS SECTION -->
  <section class="products" id="products">
    <div class="container">
      <div class="products-header">
        <div class="title-arabic urdu-text" style="text-align: center; margin-bottom: 0.5rem;">ہمارے خاص تیل</div>
        <h2 class="serif-text">Available Bottle Sizes</h2>
        <p style="color: var(--color-text-muted);">Choose the perfect size for yourself or order a family pack. We deliver with love and pure assurance across Pakistan.</p>
      </div>

      <div class="products-grid">
        <!-- 100ml CARD -->
        <div class="product-card">
          <div class="product-image-area">
            <div class="product-svg-wrapper">
              <svg width="150" height="220" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Bottle Shadow -->
                <ellipse cx="100" cy="285" rx="45" ry="8" fill="rgba(62, 39, 35, 0.2)" />
                <!-- Bottle -->
                <rect x="85" y="40" width="30" height="20" rx="2" fill="url(#cork_grad_p)" stroke="#3E2723" stroke-width="1.5" />
                <path d="M75 80 C 75 60, 125 60, 125 80 L 75 80 Z" fill="#D4A017" opacity="0.8"/>
                <path d="M55 110 C 55 90, 70 80, 100 80 C 130 80, 145 90, 145 110 L 148 250 C 148 270, 133 280, 100 280 C 67 280, 52 270, 52 250 L 55 110 Z" fill="url(#bottle_oil_grad_p)" stroke="#2D1A17" stroke-width="2.5" />
                <!-- Glass Highlight -->
                <path d="M60 115 C 60 100, 70 90, 100 90" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-linecap="round" />
                <!-- Label -->
                <rect x="65" y="130" width="70" height="95" rx="5" fill="#FFFDF6" stroke="#D4A017" stroke-width="1.5" />
                <text x="100" y="152" font-family="'Noto Nastaliq Urdu', serif" font-size="10" font-weight="bold" fill="#3E2723" text-anchor="middle">دادی کا نسخہ</text>
                <line x1="75" y1="165" x2="125" y2="165" stroke="#D4A017" stroke-width="1"/>
                <text x="100" y="180" font-family="'Playfair Display', serif" font-size="8" font-weight="800" fill="#3E2723" text-anchor="middle">100ml Bottle</text>
                <text x="100" y="195" font-family="'Poppins', sans-serif" font-size="6" font-weight="600" fill="#1B5E20" text-anchor="middle">100% PURE</text>
                <defs>
                  <linearGradient id="cork_grad_p" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#8B5A00" /><stop offset="100%" stop-color="#CD853F" />
                  </linearGradient>
                  <linearGradient id="bottle_oil_grad_p" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#A5780F" /><stop offset="50%" stop-color="#D4A017" /><stop offset="100%" stop-color="#3E2723" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <div class="product-title-group">
              <h3 class="product-title">100ml Traditional Bottle</h3>
              <div class="product-title-urdu">۱۰۰ ملی لیٹر روایتی بوتل</div>
            </div>
            <p class="product-description">Perfect size to start your hair restoration journey or keep in your travel bag.</p>
            <ul class="product-benefits">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Ideal for personal trial & gifting</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>100% Cold-Pressed Mustard Oil</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Stops hair fall & repairs split ends</span>
              </li>
            </ul>
            <div class="product-footer">
              <div class="price-tag">
                <span class="price-label">Price</span>
                <span class="price-value">Rs. 350</span>
              </div>
              <a href="https://wa.me/923000000000?text=Assalam-o-Alaikum%20Dadi%20ka%20Nuskha!%20I%20want%20to%20order%20your%20100ml%20Traditional%20Mustard%20Hair%20Oil%20bottle%20for%20Rs.%20350.%20Please%20guide%20me%20on%20payment%20and%20shipping." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.162-3.41c1.656.983 3.284 1.482 4.887 1.484 5.442 0 9.871-4.426 9.875-9.874.002-2.639-1.02-5.12-2.883-6.984C16.326 3.35 13.854 2.327 11.2 2.325c-5.451 0-9.882 4.426-9.886 9.875-.001 1.745.485 3.447 1.408 4.965l-.973 3.55 3.65-.956zm11.758-7.94c-.302-.15-1.785-.882-2.057-.981-.273-.099-.471-.149-.669.15-.198.298-.767.981-.94 1.18-.173.198-.347.223-.649.073-.302-.15-1.275-.47-2.43-1.5-.897-.8-1.502-1.79-1.678-2.088-.177-.299-.019-.461.13-.61.135-.133.302-.35.453-.524.151-.174.2-.298.302-.497.102-.199.051-.373-.025-.523-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.785-.73 2.037-1.435.253-.706.253-1.314.177-1.435-.077-.12-.273-.198-.575-.348z"/></svg>
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <!-- 150ml CARD -->
        <div class="product-card">
          <div class="product-badge">FAMILY FAVORITE</div>
          <div class="product-image-area">
            <div class="product-svg-wrapper">
              <svg width="170" height="230" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Bottle Shadow -->
                <ellipse cx="100" cy="285" rx="55" ry="10" fill="rgba(62, 39, 35, 0.2)" />
                <!-- Bottle -->
                <rect x="80" y="30" width="40" height="25" rx="3" fill="url(#cork_grad_p)" stroke="#3E2723" stroke-width="1.5" />
                <path d="M70 70 C 70 50, 130 50, 130 70 L 70 70 Z" fill="#D4A017" opacity="0.8"/>
                <path d="M45 100 C 45 75, 60 65, 100 65 C 140 65, 155 75, 155 100 L 160 250 C 160 273, 140 285, 100 285 C 60 285, 40 273, 40 250 L 45 100 Z" fill="url(#bottle_oil_grad_p)" stroke="#2D1A17" stroke-width="2.5" />
                <!-- Highlights -->
                <path d="M50 105 C 50 85, 65 75, 100 75" stroke="rgba(255,255,255,0.45)" stroke-width="4" stroke-linecap="round" />
                <!-- Label -->
                <rect x="58" y="120" width="84" height="115" rx="6" fill="#FFFDF6" stroke="#D4A017" stroke-width="1.5" />
                <text x="100" y="145" font-family="'Noto Nastaliq Urdu', serif" font-size="11" font-weight="bold" fill="#3E2723" text-anchor="middle">دادی کا نسخہ</text>
                <line x1="68" y1="160" x2="132" y2="160" stroke="#D4A017" stroke-width="1"/>
                <text x="100" y="176" font-family="'Playfair Display', serif" font-size="9" font-weight="800" fill="#3E2723" text-anchor="middle">150ml Pack</text>
                <text x="100" y="192" font-family="'Poppins', sans-serif" font-size="6" font-weight="600" fill="#1B5E20" text-anchor="middle">BEST VALUE</text>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <div class="product-title-group">
              <h3 class="product-title">150ml Heritage Pack</h3>
              <div class="product-title-urdu">۱۵۰ ملی لیٹر فیملی پیک</div>
            </div>
            <p class="product-description">Our best-selling bottle size. Offering enough pure oil to care for the entire family's scalp weekly.</p>
            <ul class="product-benefits">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Best value pricing per ml</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Rich in natural proteins & moisture barrier locks</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Generational wellness & thick hair density</span>
              </li>
            </ul>
            <div class="product-footer">
              <div class="price-tag">
                <span class="price-label">Price</span>
                <span class="price-value">Rs. 500</span>
              </div>
              <a href="https://wa.me/923000000000?text=Assalam-o-Alaikum%20Dadi%20ka%20Nuskha!%20I%20want%20to%20order%20your%20150ml%20Heritage%20Mustard%20Hair%20Oil%20bottle%20for%20Rs.%20500.%20Please%20guide%20me%20on%20payment%20and%20shipping." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.162-3.41c1.656.983 3.284 1.482 4.887 1.484 5.442 0 9.871-4.426 9.875-9.874.002-2.639-1.02-5.12-2.883-6.984C16.326 3.35 13.854 2.327 11.2 2.325c-5.451 0-9.882 4.426-9.886 9.875-.001 1.745.485 3.447 1.408 4.965l-.973 3.55 3.65-.956zm11.758-7.94c-.302-.15-1.785-.882-2.057-.981-.273-.099-.471-.149-.669.15-.198.298-.767.981-.94 1.18-.173.198-.347.223-.649.073-.302-.15-1.275-.47-2.43-1.5-.897-.8-1.502-1.79-1.678-2.088-.177-.299-.019-.461.13-.61.135-.133.302-.35.453-.524.151-.174.2-.298.302-.497.102-.199.051-.373-.025-.523-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.785-.73 2.037-1.435.253-.706.253-1.314.177-1.435-.077-.12-.273-.198-.575-.348z"/></svg>
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE US -->
  <section class="why-us" id="why-us">
    <div class="container">
      <div class="products-header" style="margin-bottom: 2rem;">
        <div class="title-arabic urdu-text" style="text-align: center; margin-bottom: 0.5rem;">خالص اور قدرتی</div>
        <h2 class="serif-text">Why Dadi ka Nuskha?</h2>
        <p style="color: var(--color-text-muted);">We stay loyal to authentic methods, bringing you hair care that is 100% real.</p>
      </div>

      <div class="why-us-grid">
        <!-- Feature 1 -->
        <div class="feature-card">
          <div class="feature-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
          <h3 class="feature-title">Cold-Pressed</h3>
          <div class="feature-title-urdu">کچی گھانی سے تیار کردہ</div>
          <p class="feature-description">Pressed on wooden kohlus under low temperatures to preserve natural vitamin E and minerals.</p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card">
          <div class="feature-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 class="feature-title">100% Chemical Free</h3>
          <div class="feature-title-urdu">کیمیکل سے بالکل پاک</div>
          <p class="feature-description">Absolutely zero mineral oil, silicone, paraffin, parabens, or synthetic fragrance added.</p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card">
          <div class="feature-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l-4 4h8z"/></svg>
          </div>
          <h3 class="feature-title">Authentic Heritage</h3>
          <div class="feature-title-urdu">روایتی دیسی خلوص</div>
          <p class="feature-description">Made based on traditional Punjabi home recipes passed down across decades of motherhood.</p>
        </div>

        <!-- Feature 4 -->
        <div class="feature-card">
          <div class="feature-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <h3 class="feature-title">Complete Hair Health</h3>
          <div class="feature-title-urdu">مضبوط اور گھنے بال</div>
          <p class="feature-description">Deeply moisturizes scalp, reduces split ends, and controls dandruff with natural fatty acids.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS SECTION -->
  <section class="testimonials">
    <div class="container">
      <div class="products-header">
        <div class="title-arabic urdu-text" style="text-align: center; margin-bottom: 0.5rem;">سنہری رائیں</div>
        <h2 class="serif-text">Loved By Families</h2>
        <p style="color: var(--color-text-muted);">Hear from customers who brought pure heritage back into their lifestyles.</p>
      </div>

      <div class="testimonials-grid">
        <!-- Review 1 -->
        <div class="review-card">
          <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11.192 15.757c0-.907-.399-2.185-1.528-3.327-.928-.94-1.848-1.543-1.848-2.616 0-.898.665-1.42 1.355-1.42.793 0 1.25.568 1.332 1.018.118.647.453 1.054 1.054 1.054.601 0 1.012-.486 1.012-1.157 0-1.854-1.748-3.32-3.79-3.32-2.316 0-4.04 1.834-4.04 4.198 0 2.507 1.897 4.225 3.993 5.398.243.136.561-.031.561-.318l-.133-1.01zm8.214 0c0-.907-.399-2.185-1.528-3.327-.928-.94-1.848-1.543-1.848-2.616 0-.898.665-1.42 1.355-1.42.793 0 1.25.568 1.332 1.018.118.647.453 1.054 1.054 1.054.601 0 1.012-.486 1.012-1.157 0-1.854-1.748-3.32-3.79-3.32-2.316 0-4.04 1.834-4.04 4.198 0 2.507 1.897 4.225 3.993 5.398.243.136.561-.031.561-.318l-.133-1.01z"/></svg>
          <div class="stars">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
          </div>
          <p class="review-text">"My grandmother used to make her own sarson oil, but after moving to Karachi, I couldn't find that pure texture. Dadi ka Nuskha feels exactly like home!"</p>
          <p class="review-text-urdu urdu-text">میری دادی خود سرسوں کا تیل تیار کرتی تھیں، لیکن کراچی آنے کے بعد مجھے وہ معیار نہیں ملا۔ دادی کا نسخہ بالکل گھر کے تیل جیسا خالص ہے!</p>
          <div class="review-author">
            <div class="author-avatar">AS</div>
            <div class="author-info">
              <h4>Amina Sohail</h4>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="review-card">
          <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11.192 15.757c0-.907-.399-2.185-1.528-3.327-.928-.94-1.848-1.543-1.848-2.616 0-.898.665-1.42 1.355-1.42.793 0 1.25.568 1.332 1.018.118.647.453 1.054 1.054 1.054.601 0 1.012-.486 1.012-1.157 0-1.854-1.748-3.32-3.79-3.32-2.316 0-4.04 1.834-4.04 4.198 0 2.507 1.897 4.225 3.993 5.398.243.136.561-.031.561-.318l-.133-1.01zm8.214 0c0-.907-.399-2.185-1.528-3.327-.928-.94-1.848-1.543-1.848-2.616 0-.898.665-1.42 1.355-1.42.793 0 1.25.568 1.332 1.018.118.647.453 1.054 1.054 1.054.601 0 1.012-.486 1.012-1.157 0-1.854-1.748-3.32-3.79-3.32-2.316 0-4.04 1.834-4.04 4.198 0 2.507 1.897 4.225 3.993 5.398.243.136.561-.031.561-.318l-.133-1.01z"/></svg>
          <div class="stars">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
          </div>
          <p class="review-text">"Pure, thick, and authentic. The golden color and natural pungent aroma itself prove there is zero mineral oil. Truly Lahore's finest!"</p>
          <p class="review-text-urdu urdu-text">خالص، گاڑھا اور لاجواب۔ اس کا سنہرا رنگ اور تیز خوشبو خود ثابت کرتی ہے کہ اس میں کوئی منرل آئل نہیں ہے۔ واقعی لاہور کا بہترین تیل!</p>
          <div class="review-author">
            <div class="author-avatar">ZB</div>
            <div class="author-info">
              <h4>Zainab Bibi</h4>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="review-card">
          <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11.192 15.757c0-.907-.399-2.185-1.528-3.327-.928-.94-1.848-1.543-1.848-2.616 0-.898.665-1.42 1.355-1.42.793 0 1.25.568 1.332 1.018.118.647.453 1.054 1.054 1.054.601 0 1.012-.486 1.012-1.157 0-1.854-1.748-3.32-3.79-3.32-2.316 0-4.04 1.834-4.04 4.198 0 2.507 1.897 4.225 3.993 5.398.243.136.561-.031.561-.318l-.133-1.01zm8.214 0c0-.907-.399-2.185-1.528-3.327-.928-.94-1.848-1.543-1.848-2.616 0-.898.665-1.42 1.355-1.42.793 0 1.25.568 1.332 1.018.118.647.453 1.054 1.054 1.054.601 0 1.012-.486 1.012-1.157 0-1.854-1.748-3.32-3.79-3.32-2.316 0-4.04 1.834-4.04 4.198 0 2.507 1.897 4.225 3.993 5.398.243.136.561-.031.561-.318l-.133-1.01z"/></svg>
          <div class="stars">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/></svg>
          </div>
          <p class="review-text">"Extremely high quality. My scalp itchiness is gone, and hair fall has reduced significantly. Ordered the 150ml bottle for my whole family now."</p>
          <p class="review-text-urdu urdu-text">نہایت اعلیٰ کوالٹی۔ سر کی خشکی ختم ہو گئی اور بالوں کا گرنا بہت حد تک کم ہو گیا۔ اب پوری فیملی کے لیے ۱۵۰ ملی لیٹر کی بوتل منگوائی ہے۔</p>
          <div class="review-author">
            <div class="author-avatar">KM</div>
            <div class="author-info">
              <h4>Kamran Mughal</h4>
              <p>Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT & ORDER FORM SECTION -->
  <section class="contact" id="contact">
    <div class="container contact-grid">
      <div class="contact-info-panel">
        <div class="title-arabic urdu-text">ہم سے رابطہ کریں</div>
        <h2 class="serif-text">Have Questions or Want to Order?</h2>
        <p class="contact-urdu-tagline urdu-text">دادی کا اصل نسخہ، خالص سرسوں کا تیل</p>
        <p class="contact-p">
          We want to make ordering as simple as chatting with family. You can use our easy order builder on the right, or contact us directly on WhatsApp or social media. We deliver all over Pakistan with cash on delivery options.
        </p>

        <div class="contact-details">
          <!-- Detail Row 1 -->
          <div class="detail-row">
            <div class="detail-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <div class="detail-content">
              <h4>Call / WhatsApp</h4>
              <p><a href="https://wa.me/923000000000">+92 300 0000000</a></p>
            </div>
          </div>

          <!-- Detail Row 2 -->
          <div class="detail-row">
            <div class="detail-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div class="detail-content">
              <h4>Our Extraction Workshop</h4>
              <p>Near Walled City, Lahore, Punjab, Pakistan</p>
            </div>
          </div>
        </div>

        <h4 style="margin-bottom:1rem; font-family:var(--font-sans); font-size:1rem; text-transform:uppercase; letter-spacing:0.5px;">Follow our journey</h4>
        <div class="social-links">
          <a href="https://facebook.com" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg style="width:20px;height:20px;" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-5 2-5 5v2z"/></svg>
          </a>
          <a href="https://instagram.com" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg style="width:20px;height:20px;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>

      <!-- INTERACTIVE ORDER BUILDER FORM -->
      <div class="form-card">
        <h3>Create Your Order</h3>
        <div class="form-subtitle-urdu urdu-text">آرڈر فارم اور براہ راست واٹس ایپ رابطہ</div>
        
        <form id="whatsappForm" onsubmit="sendWhatsAppMessage(event)">
          <div class="form-group">
            <label for="client_name">Your Name / آپ کا نام *</label>
            <input type="text" id="client_name" class="form-control" placeholder="Enter your full name" required>
          </div>

          <div class="form-group">
            <label for="client_city">City / آپ کا شہر *</label>
            <input type="text" id="client_city" class="form-control" placeholder="e.g. Lahore, Karachi, Islamabad" required>
          </div>

          <div class="form-group">
            <label>Select Size / بوتل کا سائز منتخب کریں *</label>
            <div class="radio-group">
              <label class="radio-label checked" id="label-100" onclick="selectSize('100ml')">
                <input type="radio" name="bottle_size" id="radio-100" value="100ml" checked>
                <span>100ml</span>
                <p>Rs. 350</p>
              </label>

              <label class="radio-label" id="label-150" onclick="selectSize('150ml')">
                <input type="radio" name="bottle_size" id="radio-150" value="150ml">
                <span>150ml</span>
                <p>Rs. 500</p>
              </label>

              <label class="radio-label" id="label-both" onclick="selectSize('Both')">
                <input type="radio" name="bottle_size" id="radio-both" value="Both">
                <span>Both Sizes</span>
                <p>Rs. 850</p>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label for="client_qty">Quantity / تعداد *</label>
            <input type="number" id="client_qty" class="form-control" value="1" min="1" max="10" required>
          </div>

          <div class="form-group">
            <label for="client_address">Delivery Address / پتہ *</label>
            <textarea id="client_address" class="form-control" rows="3" placeholder="Enter your complete home address for shipping" required></textarea>
          </div>

          <button type="submit" class="btn btn-whatsapp pulse-animation" style="width:100%; margin-top:1rem; font-size:1.1rem; height:54px;">
            <svg style="width:20px;height:20px;" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.162-3.41c1.656.983 3.284 1.482 4.887 1.484 5.442 0 9.871-4.426 9.875-9.874.002-2.639-1.02-5.12-2.883-6.984C16.326 3.35 13.854 2.327 11.2 2.325c-5.451 0-9.882 4.426-9.886 9.875-.001 1.745.485 3.447 1.408 4.965l-.973 3.55 3.65-.956zm11.758-7.94c-.302-.15-1.785-.882-2.057-.981-.273-.099-.471-.149-.669.15-.198.298-.767.981-.94 1.18-.173.198-.347.223-.649.073-.302-.15-1.275-.47-2.43-1.5-.897-.8-1.502-1.79-1.678-2.088-.177-.299-.019-.461.13-.61.135-.133.302-.35.453-.524.151-.174.2-.298.302-.497.102-.199.051-.373-.025-.523-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.785-.73 2.037-1.435.253-.706.253-1.314.177-1.435-.077-.12-.273-.198-.575-.348z"/></svg>
            Send Order on WhatsApp
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="container footer-grid">
      <div class="footer-brand">
        <h3>Dadi ka Nuskha</h3>
        <div class="footer-urdu-tag urdu-text">دادی کا اصل نسخہ، خالص سرسوں کا تیل</div>
        <p class="footer-desc">
          Bringing back centuries of verified care, warmth, and Punjab's golden health values. Sourced and cold-pressed with absolute honesty in Lahore, Pakistan.
        </p>
      </div>

      <div>
        <h4 class="footer-title">Navigation</h4>
        <ul class="footer-links">
          <li><a href="#hero">Ghar / Home</a></li>
          <li><a href="#about">Kahani / Story</a></li>
          <li><a href="#products">Hamare Tel / Products</a></li>
          <li><a href="#why-us">Khasiyat / Features</a></li>
          <li><a href="#contact">Rabta / Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 class="footer-title">Our Promise</h4>
        <p class="footer-desc" style="font-style: italic; margin-bottom: 1rem;">
          "We promise that every drop of Dadi ka Nuskha is 100% pure mustard oil. We will never add paraffin, mineral oils, colorants, or chemical fragrances to our bottles."
        </p>
        <p class="footer-desc" style="font-weight:700; color:var(--color-mustard);">
          — Lahore Extraction Team
        </p>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; 2026 Dadi ka Nuskha Hair Oil. All Rights Reserved.</p>
      <p>Authentically Crafted with love in Lahore, Pakistan 🇵🇰</p>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP -->
  <a href="https://wa.me/923000000000?text=Assalam-o-Alaikum%20Dadi%20ka%20Nuskha!%20I%20am%20interested%20in%20your%20pure%20traditional%20Mustard%20Hair%20Oil.%20Please%20guide%20me." class="whatsapp-floater" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.162-3.41c1.656.983 3.284 1.482 4.887 1.484 5.442 0 9.871-4.426 9.875-9.874.002-2.639-1.02-5.12-2.883-6.984C16.326 3.35 13.854 2.327 11.2 2.325c-5.451 0-9.882 4.426-9.886 9.875-.001 1.745.485 3.447 1.408 4.965l-.973 3.55 3.65-.956zm11.758-7.94c-.302-.15-1.785-.882-2.057-.981-.273-.099-.471-.149-.669.15-.198.298-.767.981-.94 1.18-.173.198-.347.223-.649.073-.302-.15-1.275-.47-2.43-1.5-.897-.8-1.502-1.79-1.678-2.088-.177-.299-.019-.461.13-.61.135-.133.302-.35.453-.524.151-.174.2-.298.302-.497.102-.199.051-.373-.025-.523-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.785-.73 2.037-1.435.253-.706.253-1.314.177-1.435-.077-.12-.273-.198-.575-.348z"/></svg>
  </a>

  <!-- SUCCESS TOAST -->
  <div class="toast" id="successToast">
    <svg style="width:20px;height:20px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
    Order Built! Opening WhatsApp...
  </div>

  <!-- JAVASCRIPT - Vanilla Functionality -->
  <script>
    // Scroll header background change
    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile navigation toggle
    function toggleMenu() {
      const nav = document.getElementById('nav-menu');
      const toggle = document.getElementById('menu-toggle');
      if (window.innerWidth <= 768) {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
      }
    }

    // Interactive Size Selector styling on order form
    let selectedSizeValue = '100ml';
    function selectSize(size) {
      selectedSizeValue = size;
      
      // Remove checked class from all labels
      document.getElementById('label-100').classList.remove('checked');
      document.getElementById('label-150').classList.remove('checked');
      document.getElementById('label-both').classList.remove('checked');
      
      // Uncheck all radio buttons
      document.getElementById('radio-100').checked = false;
      document.getElementById('radio-150').checked = false;
      document.getElementById('radio-both').checked = false;

      // Add checked class and check appropriate input
      if (size === '100ml') {
        document.getElementById('label-100').classList.add('checked');
        document.getElementById('radio-100').checked = true;
      } else if (size === '150ml') {
        document.getElementById('label-150').classList.add('checked');
        document.getElementById('radio-150').checked = true;
      } else {
        document.getElementById('label-both').classList.add('checked');
        document.getElementById('radio-both').checked = true;
      }
    }

    // Form WhatsApp submission compiler
    function sendWhatsAppMessage(event) {
      event.preventDefault();
      
      const name = document.getElementById('client_name').value.trim();
      const city = document.getElementById('client_city').value.trim();
      const qty = document.getElementById('client_qty').value;
      const address = document.getElementById('client_address').value.trim();
      
      // Compile price and text based on selection
      let sizeText = '';
      let totalPrice = 0;
      if (selectedSizeValue === '100ml') {
        sizeText = '100ml Bottle (Rs. 350)';
        totalPrice = 350 * qty;
      } else if (selectedSizeValue === '150ml') {
        sizeText = '150ml Family Bottle (Rs. 500)';
        totalPrice = 500 * qty;
      } else {
        sizeText = 'Both sizes Pack (100ml + 150ml) (Rs. 850)';
        totalPrice = 850 * qty;
      }

      // Create prefilled formatted text for WhatsApp
      const messageText = 
        "Assalam-o-Alaikum Dadi ka Nuskha! 🌿\\n\\n" +
        "I would like to place an order for your pure Mustard Hair Oil:\\n\\n" +
        "⭐ *ORDER DETAILS* ⭐\\n" +
        "• *Name:* " + name + "\\n" +
        "• *City:* " + city + "\\n" +
        "• *Size Selected:* " + sizeText + "\\n" +
        "• *Quantity:* " + qty + "\\n" +
        "• *Total Estimated Price:* Rs. " + totalPrice + " (excluding shipping)\\n" +
        "• *Delivery Address:* " + address + "\\n\\n" +
        "Please confirm my order and share details on shipment time and payment. Shukriya! 🙏";
      
      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = "https://wa.me/923000000000?text=" + encodedMessage;

      // Show toast notification
      const toast = document.getElementById('successToast');
      toast.classList.add('show');

      // Redirect after brief delay so user sees toast
      setTimeout(function() {
        toast.classList.remove('show');
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }
  </script>
</body>
</html>`;
}
