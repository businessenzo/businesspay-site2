/* ============================================================
   BusinessPay — style.css
   Estrutura: Reset → Variáveis → Utilitários → Componentes
              → Seções → Responsividade → Animações
============================================================ */

/* ─────────────────────────────────────────────────────────
   1. RESET GLOBAL — Zero overflow, zero bugs mobile
───────────────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
}

body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
  background: #0D0A0F;
  color: #F5EEF8;
  font-family: 'DM Sans', sans-serif;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Impede qualquer filho de causar scroll lateral */
section,
div,
header,
footer,
nav,
main {
  max-width: 100%;
}

img, svg {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ─────────────────────────────────────────────────────────
   2. VARIÁVEIS CSS
───────────────────────────────────────────────────────── */
:root {
  /* Cores */
  --red:      #E8193C;
  --rose:     #FF4D7E;
  --pink:     #FF85A1;
  --deep:     #0D0A0F;
  --surface:  #130E17;
  --card:     rgba(255, 255, 255, 0.045);
  --border:   rgba(255, 255, 255, 0.09);
  --text:     #F5EEF8;
  --muted:    rgba(245, 238, 248, 0.55);

  /* Gradientes */
  --grad:     linear-gradient(135deg, #E8193C 0%, #FF4D7E 55%, #FF85A1 100%);
  --grad-s:   linear-gradient(135deg, rgba(232,25,60,.15) 0%, rgba(255,77,126,.08) 100%);
  --grad-gold: linear-gradient(90deg, #B8860B, #FFD700, #B8860B);

  /* Sombras / Glow */
  --glow:     0 0 40px rgba(232,25,60,.45), 0 0 80px rgba(255,77,126,.2);
  --glow-sm:  0 0 20px rgba(232,25,60,.35);

  /* Bordas arredondadas */
  --r:        16px;
  --r-lg:     24px;

  /* Transição padrão */
  --transition: .3s cubic-bezier(.34,1.56,.64,1);
}

/* ─────────────────────────────────────────────────────────
   3. SCROLLBAR
───────────────────────────────────────────────────────── */
::-webkit-scrollbar       { width: 4px; }
::-webkit-scrollbar-track { background: var(--deep); }
::-webkit-scrollbar-thumb { background: var(--red); border-radius: 99px; }

/* ─────────────────────────────────────────────────────────
   4. CONTAINER
───────────────────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 640px)  { .container { padding: 0 24px; } }
@media (min-width: 1200px) { .container { padding: 0 32px; } }

/* ─────────────────────────────────────────────────────────
   5. NOISE OVERLAY
───────────────────────────────────────────────────────── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9998;
  opacity: .4;
}

/* ─────────────────────────────────────────────────────────
   6. BLOBS DECORATIVOS
───────────────────────────────────────────────────────── */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
  max-width: 100vw; /* nunca causa overflow */
}

/* Cada section tem overflow:hidden para conter os blobs */
section { overflow: hidden; }

/* ─────────────────────────────────────────────────────────
   7. UTILITÁRIOS
───────────────────────────────────────────────────────── */
.grad-text {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Tag / badge de seção */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(232,25,60,.12);
  border: 1px solid rgba(232,25,60,.28);
  color: var(--pink);
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 5px 13px;
  border-radius: 99px;
  white-space: nowrap;
}

.tag .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--rose);
  animation: blink 2s infinite;
  flex-shrink: 0;
}

@keyframes blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: .4; transform: scale(1.5); }
}

/* ─────────────────────────────────────────────────────────
   8. BOTÕES
───────────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: .93rem;
  padding: 14px 24px;
  border-radius: 99px;
  cursor: pointer;
  text-decoration: none;
  border: none;
  transition: transform var(--transition), box-shadow .28s ease, background .2s ease;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  min-height: 48px; /* touch target acessível */
}

.btn-primary {
  background: var(--grad);
  color: #fff;
  box-shadow: var(--glow-sm), 0 4px 16px rgba(232,25,60,.28);
}

.btn-primary:hover,
.btn-primary:focus-visible {
  transform: translateY(-2px) scale(1.03);
  box-shadow: var(--glow), 0 8px 28px rgba(232,25,60,.4);
}

.btn-ghost {
  background: rgba(255,255,255,.06);
  color: var(--text);
  border: 1px solid rgba(255,255,255,.13);
}

.btn-ghost:hover { background: rgba(255,255,255,.11); transform: translateY(-1px); }

.btn-white { background: #fff; color: var(--red); font-weight: 700; }
.btn-white:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 32px rgba(0,0,0,.25);
}

.btn-outline-w {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,.4);
}
.btn-outline-w:hover { background: rgba(255,255,255,.1); }

.btn svg { width: 16px; height: 16px; flex-shrink: 0; }

/* Ripple effect */
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,.22);
  transform: scale(0);
  animation: rippleA .55s linear;
  pointer-events: none;
}
@keyframes rippleA { to { transform: scale(4); opacity: 0; } }

/* ─────────────────────────────────────────────────────────
   9. SEÇÃO — ESPAÇAMENTO E HEADER
───────────────────────────────────────────────────────── */
section {
  padding: 80px 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-header .tag { margin-bottom: 16px; }

.section-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.7rem, 5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -.022em;
  line-height: 1.15;
  margin-bottom: 12px;
  word-break: break-word;
}

.section-sub {
  font-size: .96rem;
  color: var(--muted);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ─────────────────────────────────────────────────────────
   10. SCROLL REVEAL
───────────────────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .65s ease, transform .65s ease;
}
.reveal.on  { opacity: 1; transform: translateY(0); }

/* Delays em cascata */
.d1 { transition-delay: .08s; }
.d2 { transition-delay: .16s; }
.d3 { transition-delay: .24s; }
.d4 { transition-delay: .32s; }

/* ─────────────────────────────────────────────────────────
   11. MENU HAMBÚRGUER — SIDE DRAWER
───────────────────────────────────────────────────────── */

/* Overlay escuro por trás do drawer */
.drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 1003;
  background: rgba(0,0,0,.7);
  backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .35s ease;
}
.drawer-overlay.open {
  opacity: 1;
  pointer-events: all;
}

/* Drawer desliza da direita */
.nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1006;
  width: min(300px, 85vw);
  background: #110C16;
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 80px 28px 40px;
  gap: 8px;
  transform: translateX(100%);
  transition: transform .38s cubic-bezier(.4,0,.2,1);
  overflow-y: auto;
}
.nav-drawer.open { transform: translateX(0); }

/* Links do drawer */
.nav-drawer .drawer-link {
  font-family: 'Syne', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: -.01em;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  transition: color .18s;
  display: block;
}
.nav-drawer .drawer-link:hover { color: var(--text); }
.nav-drawer .drawer-link:last-of-type { border-bottom: none; }

/* CTA dentro do drawer */
.drawer-cta {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.drawer-cta .btn { width: 100%; }

/* Botão fechar do drawer */
.drawer-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255,255,255,.06);
  border: 1px solid var(--border);
  color: var(--text);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: background .18s;
}
.drawer-close:hover { background: rgba(255,255,255,.12); }

/* ─────────────────────────────────────────────────────────
   12. NAVBAR
───────────────────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: background .35s ease, padding .35s ease, box-shadow .35s ease;
}

.navbar.scrolled {
  background: rgba(13,10,15,.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 32px rgba(0,0,0,.4);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}

.logo-icon { width: 36px; height: 36px; flex-shrink: 0; }

.logo-text {
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -.01em;
}

/* Links desktop */
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: .88rem;
  font-weight: 500;
  transition: color .18s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0; right: 0;
  height: 2px;
  background: var(--grad);
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform .25s ease;
}

.nav-links a:hover { color: var(--text); }
.nav-links a:hover::after { transform: scaleX(1); }

.nav-cta { display: flex; align-items: center; gap: 8px; }

/* Hambúrguer */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  z-index: 1010;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all .3s ease;
  transform-origin: center;
}

/* Animação X */
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ─────────────────────────────────────────────────────────
   13. HERO
───────────────────────────────────────────────────────── */
#hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: 96px 0 64px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px;
  position: relative;
  z-index: 2;
}

.hero-tag { margin-bottom: 20px; }

.hero-headline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2rem, 5.5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -.025em;
  margin-bottom: 18px;
  word-break: break-word;
}

.hero-sub {
  font-size: clamp(.9rem, 2.5vw, 1.08rem);
  color: var(--muted);
  margin-bottom: 28px;
  line-height: 1.72;
  max-width: 100%;
}

.hero-btns {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.hero-proof {
  margin-top: 36px;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

/* Avatares empilhados */
.avatars { display: flex; }

.avatars span {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--deep);
  background: var(--grad);
  margin-left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .6rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}
.avatars span:first-child { margin-left: 0; }

.proof-text { font-size: .82rem; color: var(--muted); line-height: 1.35; }
.proof-text strong { display: block; color: var(--text); font-size: .92rem; }

/* Card dashboard flutuante */
.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-card-wrap {
  position: relative;
  width: 100%;
  max-width: 320px;
}

.hero-card {
  background: rgba(255,255,255,.045);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: var(--r-lg);
  padding: 22px;
  box-shadow: 0 28px 70px rgba(0,0,0,.55), var(--glow-sm);
  position: relative;
  overflow: hidden;
}

.hero-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--grad);
}

/* Card header */
.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.card-head h4 {
  font-family: 'Syne', sans-serif;
  font-size: .88rem;
  font-weight: 700;
}
.live-badge {
  background: rgba(16,185,129,.14);
  color: #10B981;
  font-size: .62rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 99px;
  border: 1px solid rgba(16,185,129,.28);
}

.card-amount {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.5rem, 5vw, 1.9rem);
  font-weight: 800;
  margin-bottom: 3px;
  letter-spacing: -.02em;
}
.card-lbl { font-size: .7rem; color: var(--muted); margin-bottom: 14px; }

/* Barra de progresso */
.mini-bar { height: 5px; background: rgba(255,255,255,.07); border-radius: 99px; overflow: hidden; margin-bottom: 4px; }
.mini-bar-fill { height: 100%; width: 0; background: var(--grad); border-radius: 99px; animation: fillBar 2s .6s ease forwards; }
@keyframes fillBar { to { width: 78%; } }
.mini-bar-meta {
  display: flex;
  justify-content: space-between;
  font-size: .68rem;
  color: var(--muted);
  margin-bottom: 14px;
}

/* Transações ao vivo */
.txn-list  { display: flex; flex-direction: column; gap: 8px; }
.txn-row   { display: flex; align-items: center; gap: 8px; transition: all .4s ease; }

.txn-ico {
  width: 28px; height: 28px;
  border-radius: 7px;
  background: var(--grad-s);
  border: 1px solid rgba(232,25,60,.18);
  display: flex; align-items: center; justify-content: center;
  font-size: .8rem;
  flex-shrink: 0;
}
.txn-info        { flex: 1; min-width: 0; }
.txn-info b      { display: block; font-size: .74rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.txn-info small  { font-size: .64rem; color: var(--muted); }
.txn-val         { font-size: .78rem; font-weight: 700; white-space: nowrap; color: #10B981; }

/* Badges flutuantes */
.float-pill {
  position: absolute;
  background: rgba(18,12,22,.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 12px;
  padding: 8px 12px;
  box-shadow: 0 6px 24px rgba(0,0,0,.4);
  animation: floatPill 3.2s ease-in-out infinite;
  white-space: nowrap;
  pointer-events: none;
}
@keyframes floatPill {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-7px); }
}
.fp-top { top: -16px; right: -10px; animation-delay: 0s; }
.fp-bot { bottom: -16px; left: -10px; animation-delay: 1.6s; }
.fp-val { font-family: 'Syne', sans-serif; font-size: .9rem; font-weight: 800; line-height: 1; }
.fp-lbl { font-size: .62rem; color: var(--muted); margin-top: 2px; }
.fp-green { color: #10B981; }

/* Fantasma de fundo no hero — leve decorativo */
.hero-ghost-bg {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .025;
  pointer-events: none;
  z-index: 0;
  font-size: 28rem;
  line-height: 1;
  user-select: none;
}

/* ─────────────────────────────────────────────────────────
   14. PROVA SOCIAL
───────────────────────────────────────────────────────── */
#proof-bar {
  padding: 26px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.proof-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 36px;
}

.proof-item { text-align: center; }

.proof-item .n {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.4rem, 4vw, 1.85rem);
  font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.proof-item .l {
  font-size: .68rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: .07em;
  margin-top: 3px;
}

.proof-sep {
  width: 1px;
  height: 32px;
  background: var(--border);
  flex-shrink: 0;
}

/* ─────────────────────────────────────────────────────────
   15. FUNCIONALIDADES
───────────────────────────────────────────────────────── */
.feat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.feat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 24px 20px;
  position: relative;
  overflow: hidden;
  transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
  cursor: default;
}

/* Brilho no hover */
.feat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--grad-s);
  opacity: 0;
  transition: opacity .35s;
}
.feat-card:hover::before { opacity: 1; }
.feat-card:hover {
  transform: translateY(-4px);
  border-color: rgba(232,25,60,.3);
  box-shadow: 0 14px 44px rgba(0,0,0,.28), var(--glow-sm);
}

/* Card grande (span 2 colunas) */
.feat-card.big { grid-column: span 2; }

/* Card com gradiente */
.feat-card.accent {
  background: var(--grad);
  border-color: transparent;
}
.feat-card.accent::before        { display: none; }
.feat-card.accent .feat-desc     { color: rgba(255,255,255,.76); }
.feat-card.accent:hover          { box-shadow: var(--glow), 0 14px 44px rgba(232,25,60,.28); }

.feat-ico {
  width: 44px; height: 44px;
  border-radius: 11px;
  background: var(--grad-s);
  border: 1px solid rgba(232,25,60,.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 14px;
  position: relative; z-index: 1;
}
.feat-card.accent .feat-ico { background: rgba(255,255,255,.16); border-color: rgba(255,255,255,.2); }

.feat-title {
  font-family: 'Syne', sans-serif;
  font-size: .97rem;
  font-weight: 700;
  margin-bottom: 7px;
  position: relative; z-index: 1;
}
.feat-desc { font-size: .82rem; color: var(--muted); line-height: 1.65; position: relative; z-index: 1; }

/* ─────────────────────────────────────────────────────────
   16. COMO FUNCIONA
───────────────────────────────────────────────────────── */
#how { background: var(--surface); }

.how-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.steps { display: flex; flex-direction: column; }

.step {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 16px;
  align-items: start;
  padding: 22px 0;
  border-bottom: 1px solid var(--border);
}
.step:last-child { border-bottom: none; }

.step-n {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: var(--grad);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  box-shadow: var(--glow-sm);
  flex-shrink: 0;
}
.step h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 5px; }
.step p  { color: var(--muted); font-size: .85rem; }

/* Card de performance */
.perf-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 26px 22px;
  position: relative;
  overflow: hidden;
}
.perf-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: var(--grad);
}
.perf-lbl {
  font-family: 'Syne', sans-serif;
  font-size: .72rem; font-weight: 700;
  letter-spacing: .08em; text-transform: uppercase;
  opacity: .45; margin-bottom: 18px;
}
.perf-rows { display: flex; flex-direction: column; gap: 14px; }
.perf-meta { display: flex; justify-content: space-between; font-size: .78rem; margin-bottom: 6px; }
.perf-meta span:last-child { font-weight: 700; color: #10B981; }
.perf-track { height: 6px; background: rgba(255,255,255,.07); border-radius: 99px; overflow: hidden; }
.perf-fill  { height: 100%; border-radius: 99px; background: var(--grad); width: 0; transition: width 1.3s cubic-bezier(.22,1,.36,1); }
.perf-fill.g { background: linear-gradient(90deg, #10B981, #059669); }
.perf-fill.r { background: linear-gradient(90deg, var(--red), var(--rose)); }

.perf-trophy {
  margin-top: 14px;
  padding: 12px;
  background: rgba(16,185,129,.08);
  border: 1px solid rgba(16,185,129,.18);
  border-radius: 10px;
  display: flex; align-items: center; gap: 10px;
}
.perf-trophy .tv { font-weight: 700; font-size: .84rem; }
.perf-trophy .ts { font-size: .7rem; color: var(--muted); }

/* ─────────────────────────────────────────────────────────
   17. MÉTODOS DE PAGAMENTO
───────────────────────────────────────────────────────── */
.methods-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.method-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 28px 20px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}
.method-card:hover {
  transform: translateY(-4px);
  border-color: rgba(232,25,60,.3);
  box-shadow: 0 14px 40px rgba(0,0,0,.26);
}
.method-ico  { font-size: 2.2rem; margin-bottom: 12px; }
.method-name { font-family: 'Syne', sans-serif; font-size: 1.12rem; font-weight: 800; margin-bottom: 7px; }
.method-desc { color: var(--muted); font-size: .82rem; line-height: 1.6; }
.method-tag  {
  margin-top: 12px;
  background: rgba(16,185,129,.1);
  color: #10B981;
  border: 1px solid rgba(16,185,129,.22);
  font-size: .66rem; font-weight: 700; letter-spacing: .05em;
  padding: 3px 11px; border-radius: 99px;
}

/* ─────────────────────────────────────────────────────────
   18. DEPOIMENTOS
───────────────────────────────────────────────────────── */
#testimonials { background: var(--surface); }

.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.testi-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 22px 20px;
  transition: transform .28s ease;
}
.testi-card:hover { transform: translateY(-3px); }

.stars     { color: #F59E0B; font-size: .82rem; letter-spacing: 2px; margin-bottom: 11px; }
.testi-txt { font-size: .85rem; color: var(--muted); line-height: 1.7; margin-bottom: 15px; font-style: italic; }

.testi-author { display: flex; align-items: center; gap: 9px; }
.t-avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: var(--grad);
  display: flex; align-items: center; justify-content: center;
  font-size: .78rem; font-weight: 700; color: #fff;
  flex-shrink: 0;
}
.t-name { font-weight: 600; font-size: .82rem; }
.t-role { font-size: .7rem; color: var(--muted); }

/* ─────────────────────────────────────────────────────────
   19. SIMULADOR DE GATEWAY
───────────────────────────────────────────────────────── */
.sim-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.sim-info h2 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.55rem, 4vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -.022em;
  margin-bottom: 13px;
  line-height: 1.18;
  word-break: break-word;
}
.sim-info p { color: var(--muted); font-size: .9rem; margin-bottom: 20px; }

.sim-checks { display: flex; flex-direction: column; gap: 9px; }
.sim-check  { display: flex; align-items: center; gap: 9px; font-size: .84rem; color: var(--muted); }
.sim-check svg { width: 17px; height: 17px; color: #10B981; flex-shrink: 0; }

/* Formulário de pagamento */
.pay-form {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 26px 22px;
  position: relative;
  overflow: hidden;
}
.pay-form::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: var(--grad);
}
.pay-form h3 { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 3px; }
.pay-sub2    { font-size: .75rem; color: var(--muted); margin-bottom: 20px; }

.fg { margin-bottom: 13px; }
.fg label {
  display: block;
  font-size: .71rem; font-weight: 600; color: var(--muted);
  margin-bottom: 6px; letter-spacing: .04em; text-transform: uppercase;
}
.fg input,
.fg select {
  width: 100%;
  background: rgba(255,255,255,.05);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: .88rem;
  padding: 12px 13px;
  outline: none;
  transition: border-color .22s, box-shadow .22s;
  -webkit-appearance: none;
  min-height: 44px;
}
.fg input:focus,
.fg select:focus {
  border-color: rgba(232,25,60,.5);
  box-shadow: 0 0 0 3px rgba(232,25,60,.1);
}
.fg select option { background: #1a1020; }

.fg-row { display: grid; grid-template-columns: 1fr 1fr; gap: 11px; }

.pay-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 11px 12px;
  background: rgba(255,255,255,.04);
  border-radius: 9px;
  border: 1px solid var(--border);
}
.pay-total span    { font-size: .78rem; color: var(--muted); }
.pay-total strong  {
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem; font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pay-sec {
  display: flex; align-items: center; justify-content: center;
  gap: 5px; margin-top: 10px;
  font-size: .7rem; color: var(--muted);
}
.pay-sec svg { width: 12px; height: 12px; color: #10B981; }

/* Overlay de sucesso */
.pay-success {
  position: absolute;
  inset: 0;
  background: rgba(13,10,15,.96);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: var(--r-lg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity .45s ease;
  gap: 10px; padding: 20px; text-align: center;
}
.pay-success.show { opacity: 1; pointer-events: all; }

.suc-ico {
  width: 64px; height: 64px;
  border-radius: 50%;
  background: rgba(16,185,129,.14);
  border: 2px solid rgba(16,185,129,.36);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem;
  animation: popIn .5s cubic-bezier(.34,1.56,.64,1) forwards;
}
@keyframes popIn { from { transform: scale(0); } to { transform: scale(1); } }

.suc-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: #10B981; }
.suc-sub   { font-size: .8rem; color: var(--muted); max-width: 200px; }
.suc-tag   {
  background: rgba(16,185,129,.12);
  border: 1px solid rgba(16,185,129,.28);
  color: #10B981;
  font-size: .68rem; font-weight: 700;
  padding: 3px 11px; border-radius: 99px;
}

/* ─────────────────────────────────────────────────────────
   20. RECOMPENSAS
───────────────────────────────────────────────────────── */
#rewards { background: var(--surface); }

.rewards-intro {
  text-align: center;
  margin-bottom: 12px;
}
.rewards-how {
  text-align: center;
  font-size: .88rem;
  color: var(--muted);
  margin-bottom: 44px;
}
.rewards-how span {
  color: var(--rose);
  font-weight: 600;
}

.rewards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.rwd-card {
  background: #0E0B12;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 20px;
  padding: 24px 18px;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: transform .38s ease, border-color .38s ease, box-shadow .38s ease;
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Linha de cor no topo */
.rwd-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: var(--grad);
}

.rwd-card:hover {
  transform: translateY(-5px) scale(1.01);
  border-color: rgba(232,25,60,.28);
  box-shadow: 0 16px 44px rgba(0,0,0,.36), var(--glow-sm);
}

/* Card Gold — 5 milhões */
.rwd-card.gold { border-color: rgba(255,215,0,.12); }
.rwd-card.gold::before { background: var(--grad-gold); }
.rwd-card.gold:hover {
  border-color: rgba(255,215,0,.32);
  box-shadow: 0 16px 44px rgba(0,0,0,.36), 0 0 28px rgba(255,215,0,.15);
}

/* Valor da meta */
.rwd-amount {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.15rem, 3vw, 1.5rem);
  font-weight: 800;
  margin-bottom: 6px;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.rwd-card.gold .rwd-amount {
  background: var(--grad-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Divisor */
.rwd-divider {
  width: 28px; height: 2px;
  background: var(--grad);
  border-radius: 2px;
  margin: 10px 0 14px;
}
.rwd-card.gold .rwd-divider { background: var(--grad-gold); }

/* Lista de prêmios */
.rwd-prizes { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; flex: 1; }

.rwd-prize {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: .81rem;
  color: var(--muted);
  line-height: 1.45;
}
.rwd-prize .ico { font-size: .9rem; flex-shrink: 0; margin-top: .1em; }

/* Badge da meta */
.rwd-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 99px;
  font-size: .65rem; font-weight: 700; letter-spacing: .04em;
  background: rgba(232,25,60,.1);
  border: 1px solid rgba(232,25,60,.22);
  color: var(--pink);
  align-self: flex-start;
}
.rwd-card.gold .rwd-badge {
  background: rgba(255,215,0,.08);
  border-color: rgba(255,215,0,.28);
  color: #FFD700;
}

/* ─────────────────────────────────────────────────────────
   21. PLANOS
───────────────────────────────────────────────────────── */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.price-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 28px 22px;
  position: relative;
  overflow: hidden;
  transition: transform .32s ease, box-shadow .32s ease, border-color .32s ease;
  display: flex;
  flex-direction: column;
}

.price-card:not(.featured):hover {
  transform: translateY(-4px);
  border-color: rgba(232,25,60,.28);
}

.price-card.featured {
  background: var(--grad);
  border-color: transparent;
  box-shadow: var(--glow), 0 18px 55px rgba(232,25,60,.25);
}
.price-card.featured:hover {
  transform: translateY(-6px) scale(1.015);
  box-shadow: var(--glow), 0 28px 70px rgba(232,25,60,.35);
}

.pop-tag {
  position: absolute;
  top: 14px; right: 14px;
  background: rgba(255,255,255,.22);
  color: #fff;
  font-size: .62rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase;
  padding: 3px 9px; border-radius: 99px;
}

.plan-name   { font-size: .68rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 10px; opacity: .62; }
.plan-price  {
  font-family: 'Syne', sans-serif;
  font-size: 2.1rem; font-weight: 800; letter-spacing: -.03em; margin-bottom: 3px;
}
.plan-price sup { font-size: .9rem; vertical-align: top; margin-top: 8px; font-weight: 600; }
.plan-period { font-size: .76rem; opacity: .55; margin-bottom: 18px; }

.plan-list {
  list-style: none;
  margin-bottom: 22px;
  display: flex; flex-direction: column; gap: 8px;
  flex: 1;
}
.plan-list li { display: flex; align-items: center; gap: 8px; font-size: .82rem; opacity: .84; }
.plan-list li::before {
  content: '✓';
  width: 15px; height: 15px; border-radius: 50%;
  background: rgba(16,185,129,.14);
  border: 1px solid rgba(16,185,129,.28);
  color: #10B981; font-size: .58rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.price-card.featured .plan-list li::before {
  background: rgba(255,255,255,.18);
  border-color: rgba(255,255,255,.28);
  color: #fff;
}

/* Botões de plano */
.plan-btn-ghost {
  width: 100%; text-align: center; padding: 12px;
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 10px; color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-weight: 600; font-size: .84rem;
  cursor: pointer; transition: background .25s, transform .25s;
  text-decoration: none;
  display: flex; align-items: center; justify-content: center;
  min-height: 44px;
}
.plan-btn-ghost:hover { background: rgba(255,255,255,.12); transform: translateY(-1px); }

.plan-btn-white {
  width: 100%; text-align: center; padding: 12px;
  background: #fff; border: none; border-radius: 10px;
  color: var(--red); font-family: 'DM Sans', sans-serif;
  font-weight: 700; font-size: .84rem;
  cursor: pointer;
  transition: transform .25s, box-shadow .25s;
  text-decoration: none;
  display: flex; align-items: center; justify-content: center;
  min-height: 44px;
}
.plan-btn-white:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.22); }

/* ─────────────────────────────────────────────────────────
   22. CTA BANNER
───────────────────────────────────────────────────────── */
#cta { padding: 64px 0; text-align: center; }

.cta-box {
  background: var(--grad);
  border-radius: 22px;
  padding: 60px 28px;
  position: relative;
  overflow: hidden;
}
.cta-box::before {
  content: '';
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='18' cy='18' r='1.5' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/svg%3E");
}
.cta-box h2 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.6rem, 4.5vw, 2.6rem);
  font-weight: 800; color: #fff;
  margin-bottom: 11px;
  letter-spacing: -.022em;
  position: relative; z-index: 1;
  word-break: break-word;
}
.cta-box p {
  color: rgba(255,255,255,.75);
  font-size: clamp(.88rem, 2.5vw, 1.02rem);
  max-width: 430px; margin: 0 auto 28px;
  position: relative; z-index: 1;
}
.cta-btns {
  display: flex; align-items: center; justify-content: center;
  gap: 10px; flex-wrap: wrap;
  position: relative; z-index: 1;
}

/* ─────────────────────────────────────────────────────────
   23. FOOTER
───────────────────────────────────────────────────────── */
footer {
  padding: 52px 0 28px;
  border-top: 1px solid var(--border);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 36px;
  margin-bottom: 40px;
}

.footer-brand p {
  color: var(--muted);
  font-size: .82rem; margin-top: 12px;
  max-width: 220px; line-height: 1.62;
}

.footer-col h5 {
  font-family: 'Syne', sans-serif;
  font-size: .74rem; font-weight: 700;
  letter-spacing: .06em; text-transform: uppercase;
  margin-bottom: 14px; opacity: .5;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.footer-col a  { color: var(--muted); text-decoration: none; font-size: .82rem; transition: color .18s; }
.footer-col a:hover { color: var(--text); }

.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 11px;
  padding-top: 22px;
  border-top: 1px solid var(--border);
}
.footer-bottom p { font-size: .74rem; color: var(--muted); }

.foot-badges { display: flex; gap: 6px; flex-wrap: wrap; }
.foot-badge {
  background: rgba(255,255,255,.04);
  border: 1px solid var(--border);
  border-radius: 7px; padding: 3px 9px;
  font-size: .66rem; color: var(--muted);
}

/* ─────────────────────────────────────────────────────────
   24. TOAST — Notificações de Venda
───────────────────────────────────────────────────────── */
#toast-wrap {
  position: fixed;
  bottom: 16px; left: 16px;
  z-index: 9990;
  display: flex; flex-direction: column; gap: 8px;
  pointer-events: none;
  max-width: calc(100vw - 32px);
}

.toast {
  background: rgba(255,255,255,.97);
  border: 1px solid rgba(232,25,60,.18);
  border-radius: 14px;
  padding: 11px 13px;
  box-shadow: 0 6px 28px rgba(0,0,0,.2);
  display: flex; align-items: center; gap: 10px;
  pointer-events: all;
  min-width: 240px;
  max-width: 285px;
  transform: translateY(70px);
  opacity: 0;
  animation: toastIn .45s cubic-bezier(.34,1.56,.64,1) forwards;
}
.toast.out { animation: toastOut .35s ease forwards; }

@keyframes toastIn  { to { transform: translateY(0); opacity: 1; } }
@keyframes toastOut { to { transform: translateY(12px); opacity: 0; } }

.toast-ico {
  width: 34px; height: 34px;
  border-radius: 8px; flex-shrink: 0;
  background: linear-gradient(135deg, #E8193C, #FF85A1);
  display: flex; align-items: center; justify-content: center;
}
.toast-body     { flex: 1; min-width: 0; }
.toast-title2   { font-size: .76rem; font-weight: 700; color: #1a0a10; line-height: 1.3; }
.toast-val      { font-family: 'Syne', sans-serif; font-size: .9rem; font-weight: 800; color: #E8193C; margin-top: 1px; }
.toast-time2    { font-size: .62rem; color: #999; margin-top: 1px; }
.toast-x {
  background: none; border: none; cursor: pointer;
  color: #bbb; font-size: .9rem; padding: 2px; flex-shrink: 0;
  transition: color .18s;
  -webkit-tap-highlight-color: transparent;
}
.toast-x:hover { color: var(--red); }

/* ─────────────────────────────────────────────────────────
   25. OVERLAY MODAL — "Página não disponível"
───────────────────────────────────────────────────────── */
#overlay {
  position: fixed; inset: 0; z-index: 9995;
  background: rgba(8,5,11,.92);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity .3s ease;
  padding: 20px;
}
#overlay.open { opacity: 1; pointer-events: all; }

.ov-box {
  background: var(--surface);
  border: 1px solid rgba(232,25,60,.28);
  border-radius: var(--r-lg);
  padding: 44px 32px;
  text-align: center;
  max-width: 390px; width: 100%;
  position: relative; overflow: hidden;
  box-shadow: var(--glow), 0 40px 80px rgba(0,0,0,.55);
  transform: scale(.9);
  transition: transform .38s cubic-bezier(.34,1.56,.64,1);
}
#overlay.open .ov-box { transform: scale(1); }
.ov-box::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--grad); }

/* Fantasma de fundo no overlay */
.ov-ghost-bg {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11rem; line-height: 1;
  opacity: .04; pointer-events: none;
  user-select: none;
}

.ov-ico  { font-size: 2.6rem; margin-bottom: 14px; position: relative; z-index: 1; }
.ov-head {
  font-family: 'Syne', sans-serif;
  font-size: 1.3rem; font-weight: 800;
  margin-bottom: 8px;
  position: relative; z-index: 1;
}
.ov-sub  { font-size: .86rem; color: var(--muted); margin-bottom: 5px; position: relative; z-index: 1; }
.ov-news { font-size: .84rem; color: var(--muted); margin-bottom: 5px; position: relative; z-index: 1; }
.ov-by   { font-size: .74rem; color: var(--muted); opacity: .65; margin-bottom: 26px; position: relative; z-index: 1; }
.ov-by span { color: var(--rose); font-weight: 600; }
.ov-close { position: relative; z-index: 1; }

/* ─────────────────────────────────────────────────────────
   26. ANIMAÇÕES HERO
───────────────────────────────────────────────────────── */
.ha   { animation: hIn .8s cubic-bezier(.22,1,.36,1) both; }
.ha-2 { animation: hIn .8s cubic-bezier(.22,1,.36,1) .1s  both; }
.ha-3 { animation: hIn .8s cubic-bezier(.22,1,.36,1) .2s  both; }
.ha-4 { animation: hIn .8s cubic-bezier(.22,1,.36,1) .3s  both; }
.ha-5 { animation: hIn .8s cubic-bezier(.22,1,.36,1) .4s  both; }
.ha-r { animation: hInR .9s cubic-bezier(.22,1,.36,1) .22s both; }

@keyframes hIn  {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes hInR {
  from { opacity: 0; transform: translateX(40px) scale(.97); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
}

/* ─────────────────────────────────────────────────────────
   27. RESPONSIVIDADE — Mobile First
   Breakpoints: 320 / 375 / 480 / 640 / 768 / 860 / 1024
───────────────────────────────────────────────────────── */

/* 860px — tablets grandes / paisagem */
@media (max-width: 860px) {
  .feat-grid { grid-template-columns: 1fr 1fr; }
  .feat-card.big { grid-column: span 1; }
  .rewards-grid { grid-template-columns: 1fr 1fr; }
  .pricing-grid { grid-template-columns: 1fr; max-width: 380px; margin: 0 auto; }
  .footer-grid  { grid-template-columns: 1fr 1fr; }
}

/* 768px — tablets */
@media (max-width: 768px) {
  /* Navbar */
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }

  /* Hero */
  #hero { padding: 80px 0 52px; }
  .hero-grid { grid-template-columns: 1fr; gap: 36px; }
  .hero-right { width: 100%; }
  .hero-card-wrap { max-width: 100%; }
  .fp-top { right: -4px; top: -12px; }
  .fp-bot { left: -4px; bottom: -12px; }
  .hero-ghost-bg { display: none; }

  /* Seções em coluna */
  .how-grid { grid-template-columns: 1fr; gap: 32px; }
  .sim-grid { grid-template-columns: 1fr; gap: 32px; }
  .testi-grid { grid-template-columns: 1fr; }
  .methods-grid { grid-template-columns: 1fr; }

  /* Footer */
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
}

/* 640px — mobile grande */
@media (max-width: 640px) {
  .cta-btns { flex-direction: column; align-items: stretch; max-width: 280px; margin: 0 auto; }
  .cta-btns .btn { width: 100%; }
  .rewards-grid { grid-template-columns: 1fr; }
  .proof-sep { display: none; }
  .proof-row { gap: 16px 20px; }
}

/* 520px — mobile médio */
@media (max-width: 520px) {
  .feat-grid { grid-template-columns: 1fr; }
  section { padding: 56px 0; }
  .section-header { margin-bottom: 36px; }
}

/* 480px — mobile padrão */
@media (max-width: 480px) {
  .hero-btns { flex-direction: column; align-items: stretch; }
  .hero-btns .btn { width: 100%; }

  .fg-row { grid-template-columns: 1fr; gap: 0; }

  .footer-grid { grid-template-columns: 1fr; gap: 22px; }
  .footer-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
}

/* 375px — iPhone padrão */
@media (max-width: 375px) {
  .hero-headline { font-size: 1.9rem; }
  .section-title { font-size: 1.6rem; }
  .card-amount   { font-size: 1.4rem; }
  .logo-text     { font-size: 1.08rem; }
  .rwd-amount    { font-size: 1.1rem; }
  .ov-box { padding: 36px 20px; }
}

/* 320px — dispositivos muito pequenos */
@media (max-width: 320px) {
  .hero-headline { font-size: 1.7rem; }
  .section-title { font-size: 1.45rem; }
  .logo-text     { font-size: .98rem; }
  .logo-icon     { width: 30px; height: 30px; }
  .btn           { font-size: .85rem; padding: 12px 18px; }
}
