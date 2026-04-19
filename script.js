/**
 * BusinessPay — script.js
 * ============================================================
 * Responsável por:
 *  1. Navbar scroll
 *  2. Menu hambúrguer + drawer lateral
 *  3. Overlay global (botões sem página real)
 *  4. Scroll reveal
 *  5. Animação das barras de performance
 *  6. Contadores animados
 *  7. Contadores ao vivo (volume + hero)
 *  8. Ticker de transações ao vivo
 *  9. Simulador de pagamento
 * 10. Confetti
 * 11. Ripple em botões
 * 12. Notificações de venda (toast)
 * 13. Ano do footer
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────────────────
     1. NAVBAR — Adiciona classe ao rolar
  ────────────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 38);
  }, { passive: true });


  /* ──────────────────────────────────────────────────────
     2. MENU HAMBÚRGUER + DRAWER LATERAL
  ────────────────────────────────────────────────────── */
  const hamburger    = document.getElementById('hamburger');
  const navDrawer    = document.getElementById('navDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose  = document.getElementById('drawerClose');

  function openDrawer() {
    hamburger.classList.add('active');
    navDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // bloqueia scroll do body
  }

  function closeDrawer() {
    hamburger.classList.remove('active');
    navDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = navDrawer.classList.contains('open');
    isOpen ? closeDrawer() : openDrawer();
  });

  // Fecha ao clicar no overlay
  drawerOverlay?.addEventListener('click', closeDrawer);

  // Fecha ao clicar no botão fechar
  drawerClose?.addEventListener('click', closeDrawer);

  // Fecha ao clicar em um link do drawer
  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Fecha com Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeOverlay();
    }
  });


  /* ──────────────────────────────────────────────────────
     3. OVERLAY GLOBAL — "Página não disponível"
  ────────────────────────────────────────────────────── */
  const overlayEl = document.getElementById('overlay');

  function openOverlay() {
    overlayEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOverlay() {
    overlayEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Expõe globalmente para o onclick inline
  window.openOverlay  = openOverlay;
  window.closeOverlay = closeOverlay;

  // Todos os elementos com classe overlay-trigger
  document.querySelectorAll('.overlay-trigger').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      openOverlay();
    });
  });

  // Botões de plano e footer também abrem overlay
  document.querySelectorAll(
    '.plan-btn-ghost, .plan-btn-white, .footer-col a'
  ).forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      openOverlay();
    });
  });

  // Fecha ao clicar no fundo do overlay
  overlayEl?.addEventListener('click', e => {
    if (e.target === overlayEl) closeOverlay();
  });


  /* ──────────────────────────────────────────────────────
     4. SCROLL REVEAL
  ────────────────────────────────────────────────────── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  /* ──────────────────────────────────────────────────────
     5. BARRAS DE PERFORMANCE — Animam ao entrar na tela
  ────────────────────────────────────────────────────── */
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const w = entry.target.dataset.w || '80';
        setTimeout(() => {
          entry.target.style.width = w + '%';
        }, 150);
        barObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.perf-fill').forEach(bar => barObs.observe(bar));


  /* ──────────────────────────────────────────────────────
     6. CONTADORES ANIMADOS — Sobem suavemente até o alvo
  ────────────────────────────────────────────────────── */
  function animateNumber(el) {
    const target   = parseInt(el.dataset.to, 10);
    const duration = 2000;
    const startTime = performance.now();

    function tick(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cubic-out
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('pt-BR');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.counter-anim').forEach(c => counterObs.observe(c));


  /* ──────────────────────────────────────────────────────
     7. CONTADORES AO VIVO — Volume e hero sobem automaticamente
  ────────────────────────────────────────────────────── */
  let volume = 148392;
  let heroAmt = 84390;

  const volEl   = document.getElementById('volCounter');
  const perfVol = document.getElementById('perfVol');
  const heroEl  = document.getElementById('liveAmt');

  const fmt = n => 'R$ ' + n.toLocaleString('pt-BR');

  setInterval(() => {
    volume  += Math.floor(Math.random() * 850 + 150);
    heroAmt += Math.floor(Math.random() * 350 + 40);

    if (volEl)   volEl.textContent   = fmt(volume);
    if (perfVol) perfVol.textContent = fmt(volume);
    if (heroEl)  heroEl.textContent  = fmt(heroAmt);
  }, 2800);


  /* ──────────────────────────────────────────────────────
     8. TICKER DE TRANSAÇÕES AO VIVO
  ────────────────────────────────────────────────────── */
  const txData = [
    ['⚡', 'PIX Aprovado',       '+R$ 197'],
    ['💳', 'Cartão Aprovado',    '+R$ 2.490'],
    ['📄', 'Boleto Pago',        '+R$ 890'],
    ['⚡', 'PIX Aprovado',       '+R$ 47'],
    ['💳', 'Cartão Parcelado',   '+R$ 3.980'],
    ['⚡', 'PIX Aprovado',       '+R$ 1.197'],
    ['💳', 'Cartão Aprovado',    '+R$ 580'],
  ];

  let txIdx = 0;

  setInterval(() => {
    txIdx = (txIdx + 1) % txData.length;

    const rows = document.querySelectorAll('.txn-row');
    if (!rows.length) return;

    const row = rows[0];
    // Sai para a esquerda
    row.style.opacity   = '0';
    row.style.transform = 'translateX(-12px)';

    setTimeout(() => {
      row.querySelector('.txn-ico').textContent  = txData[txIdx][0];
      row.querySelector('b').textContent         = txData[txIdx][1];
      row.querySelector('.txn-val').textContent  = txData[txIdx][2];
      row.querySelector('small').textContent     = 'agora mesmo';

      row.style.transition = 'all .38s ease';
      row.style.opacity    = '1';
      row.style.transform  = 'translateX(0)';
    }, 260);
  }, 3000);


  /* ──────────────────────────────────────────────────────
     9. SIMULADOR DE PAGAMENTO
  ────────────────────────────────────────────────────── */
  const mSel  = document.getElementById('pMethod');
  const cardF = document.getElementById('cardF');
  const pValI = document.getElementById('pVal');
  const pTot  = document.getElementById('pTotal');

  // Exibe campos de cartão somente quando selecionado
  mSel?.addEventListener('change', () => {
    if (cardF) cardF.style.display = mSel.value === 'card' ? 'block' : 'none';
  });

  // Atualiza total em tempo real
  pValI?.addEventListener('input', () => {
    const v = parseFloat(pValI.value) || 0;
    if (pTot) pTot.textContent = 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  });

  // Formatação automática do número do cartão
  const cardN = document.getElementById('cardN');
  cardN?.addEventListener('input', e => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 16);
    e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
  });

  // Expõe funções globalmente (chamadas por onclick no HTML)
  window.doPay = function() {
    const name   = document.getElementById('pName')?.value.trim();
    const val    = parseFloat(pValI?.value) || 0;
    const method = mSel?.value;

    // Validação
    if (!name || val <= 0) {
      const form = document.getElementById('payForm');
      if (form) {
        form.style.animation = '';
        // Força reflow para reiniciar animação
        void form.offsetWidth;
        form.style.animation = 'shake .4s ease';
        setTimeout(() => form.style.animation = '', 400);
      }
      return;
    }

    // Loading
    const btn = document.getElementById('pBtn');
    if (btn) {
      btn.innerHTML = '<span style="display:inline-block;animation:spin .8s linear infinite">⚙️</span>&nbsp;Processando...';
      btn.disabled  = true;
    }

    const times  = { pix: 1.1, card: 2.3, boleto: .8 };
    const labels = { pix: '⚡ PIX', card: '💳 Cartão', boleto: '📄 Boleto' };
    const t = times[method];

    setTimeout(() => {
      const sucMsg = document.getElementById('sucMsg');
      const sucTag = document.getElementById('sucTag');
      const payOk  = document.getElementById('payOk');

      if (sucMsg) sucMsg.textContent = `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} aprovado para ${name}`;
      if (sucTag) sucTag.textContent = `${labels[method]} em ${t}s`;
      if (payOk)  payOk.classList.add('show');

      doConfetti();
    }, t * 1000);
  };

  window.resetPay = function() {
    const payOk = document.getElementById('payOk');
    const pName = document.getElementById('pName');
    const btn   = document.getElementById('pBtn');

    if (payOk) payOk.classList.remove('show');
    if (pName) pName.value = '';
    if (pValI) pValI.value = '';
    if (pTot)  pTot.textContent = 'R$ 0,00';

    if (btn) {
      btn.innerHTML = `<svg viewBox="0 0 20 20" fill="currentColor" style="width:16px;height:16px">
        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
      </svg> Pagar agora`;
      btn.disabled = false;
    }
  };


  /* ──────────────────────────────────────────────────────
     10. CONFETTI
  ────────────────────────────────────────────────────── */
  function doConfetti() {
    const colors = ['#E8193C', '#FF4D7E', '#FF85A1', '#10B981', '#F59E0B', '#fff'];

    for (let i = 0; i < 50; i++) {
      const c = document.createElement('div');
      const size = 3 + Math.random() * 5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      c.style.cssText = [
        `position:fixed`,
        `width:${size}px`,
        `height:${size}px`,
        `background:${color}`,
        `border-radius:${Math.random() > .5 ? '50%' : '2px'}`,
        `left:${25 + Math.random() * 50}%`,
        `top:35%`,
        `animation:confettiFall ${1 + Math.random() * 1.8}s ease-out forwards`,
        `z-index:9997`,
        `pointer-events:none`,
      ].join(';');

      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }
  }

  // Expõe para uso externo se necessário
  window.doConfetti = doConfetti;


  /* ──────────────────────────────────────────────────────
     11. RIPPLE EM BOTÕES
  ────────────────────────────────────────────────────── */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${e.clientX - rect.left - size / 2}px`,
      `top:${e.clientY - rect.top - size / 2}px`,
    ].join(';');

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });


  /* ──────────────────────────────────────────────────────
     12. NOTIFICAÇÕES DE VENDA (TOAST)
  ────────────────────────────────────────────────────── */
  const toastWrap = document.getElementById('toast-wrap');

  const salesData = [
    { m: '⚡ PIX',    n: 'João M.',    v: 'R$ 297,00',   c: 'São Paulo'      },
    { m: '💳 Cartão', n: 'Ana S.',     v: 'R$ 1.490,00', c: 'Rio de Janeiro' },
    { m: '⚡ PIX',    n: 'Carlos R.',  v: 'R$ 47,00',    c: 'BH'             },
    { m: '📄 Boleto', n: 'Mariana L.', v: 'R$ 890,00',   c: 'Curitiba'       },
    { m: '💳 Cartão', n: 'Pedro K.',   v: 'R$ 3.980,00', c: 'Brasília'       },
    { m: '⚡ PIX',    n: 'Fernanda C.',v: 'R$ 197,00',   c: 'Salvador'       },
    { m: '⚡ PIX',    n: 'Rafael T.',  v: 'R$ 750,00',   c: 'Fortaleza'      },
    { m: '💳 Cartão', n: 'Juliana B.', v: 'R$ 2.490,00', c: 'Porto Alegre'   },
  ];

  function showSaleToast(data) {
    if (!toastWrap) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-ico">
        <svg width="16" height="18" viewBox="0 0 42 44" fill="none">
          <path d="M21 3C12.72 3 6 9.72 6 18v21l3.5-2.5 3.5 2.5 3.5-2.5 3.5 2.5 3.5-2.5 3.5 2.5 3.5-2.5 3.5 2.5V18C36 9.72 29.28 3 21 3z" fill="white"/>
          <ellipse cx="15.5" cy="19.8" rx="2.7" ry="2.0" fill="#E8193C"/>
          <ellipse cx="26.5" cy="19.8" rx="2.7" ry="2.0" fill="#E8193C"/>
        </svg>
      </div>
      <div class="toast-body">
        <div class="toast-title2">Venda via ${data.m}!</div>
        <div class="toast-val">Comissão: ${data.v}</div>
        <div class="toast-time2">${data.n} · ${data.c} · agora</div>
      </div>
      <button class="toast-x" onclick="this.parentElement.remove()" aria-label="Fechar">✕</button>
    `;

    toastWrap.appendChild(toast);

    // Remove após 5 segundos
    setTimeout(() => {
      toast.classList.add('out');
      setTimeout(() => toast.remove(), 380);
    }, 5000);
  }

  // Inicia após 3.5s e repete em intervalos aleatórios
  setTimeout(() => {
    let saleIdx = 0;

    function nextToast() {
      showSaleToast(salesData[saleIdx % salesData.length]);
      saleIdx++;

      // Mantém máximo de 3 toasts visíveis
      const toasts = toastWrap.querySelectorAll('.toast');
      if (toasts.length > 3) toasts[0].remove();

      // Próximo em 4–9 segundos
      setTimeout(nextToast, Math.random() * 5000 + 4000);
    }

    nextToast();
  }, 3500);


  /* ──────────────────────────────────────────────────────
     13. ANO DO FOOTER
  ────────────────────────────────────────────────────── */
  const yearEl = document.getElementById('yr');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ──────────────────────────────────────────────────────
     KEYFRAMES DINÂMICOS (injetados via JS)
  ────────────────────────────────────────────────────── */
  const dynStyles = document.createElement('style');
  dynStyles.textContent = `
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20%      { transform: translateX(-6px); }
      40%      { transform: translateX(6px); }
      60%      { transform: translateX(-4px); }
      80%      { transform: translateX(4px); }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    @keyframes confettiFall {
      0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(260px) rotate(660deg); opacity: 0; }
    }
  `;
  document.head.appendChild(dynStyles);

}); // fim DOMContentLoaded
