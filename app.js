/* SocialMind interactions */
const CHECKOUT = {
  eugencia: 'https://sun.eduzz.com/D0R85ZNJ9Y',
  pro: 'https://sun.eduzz.com/8WPN5V2P0P',
  premium: 'https://sun.eduzz.com/G96RX5EAW1'
};

/* ---- Meta Pixel: Lead nos CTAs ---- */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-lead]');
  if (el && window.fbq) fbq('track', 'Lead', { content_name: el.dataset.lead });
});

/* ---- Features ---- */
const ICONS = {
  dash: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  kanban: '<rect x="3" y="4" width="5" height="16" rx="1.5"/><rect x="10" y="4" width="5" height="11" rx="1.5"/><rect x="17" y="4" width="4" height="8" rx="1.5"/>',
  approve: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  cal: '<rect x="3" y="4" width="18" height="17" rx="2.5"/><path d="M3 9h18M8 2v4M16 2v4"/><circle cx="8.5" cy="14" r="1"/><circle cx="15.5" cy="14" r="1"/>',
  fin: '<path d="M3 17l5-5 4 3 7-8"/><path d="M16 4h5v5"/>',
  team: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3 2.7-5.5 6-5.5S15 17 15 20"/><circle cx="17.5" cy="9" r="2.6"/><path d="M16 14.5c2.8.3 5 2.6 5 5.5"/>',
  crm: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/><path d="M11 8v6M8 11h6"/>',
  onboard: '<path d="M16 11l2 2 4-4"/><circle cx="9" cy="8" r="4"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.3"/>',
  boost: '<path d="M4 20l6-6"/><path d="M14 4l6 6-8 8-6-6z"/><path d="M15 9l.01 0"/>',
  brand: '<path d="M12 2l2.4 6.5L21 9l-5 4.3L17.5 21 12 17.2 6.5 21 8 13.3 3 9l6.6-.5z"/>',
  pauta: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4.5 5.5l1 1 1.5-1.8M4.5 11.5l1 1 1.5-1.8M4.5 17.5l1 1 1.5-1.8"/>'
};
const FEATURES = [
  ['dash', 'Dashboard completo', 'Clientes, tarefas pendentes e aprovações em aberto em uma tela só.'],
  ['kanban', 'Planejamento em kanban', 'Fluxo de produção completo, do briefing à publicação.'],
  ['approve', 'Aprovação por link', 'O cliente aprova ou pede ajuste por um link público, sem precisar de login.'],
  ['cal', 'Calendário editorial', 'Visão mensal, semanal e diária de todo o conteúdo.'],
  ['fin', 'Financeiro completo', 'Receitas, despesas, fluxo de caixa e visão anual com % de lucro.'],
  ['team', 'Gestão de equipe', 'Permissões por função: admin, editor e viewer.'],
  ['crm', 'CRM de prospecção', 'Seus prospects organizados em kanban, do primeiro contato ao fechamento.'],
  ['onboard', 'Onboarding e offboarding', 'Checklist para entrada e saída de clientes, sem esquecer nenhuma etapa.'],
  ['lock', 'Logins e senhas', 'Acessos de cada cliente guardados com segurança. Chega de procurar senha no WhatsApp.'],
  ['boost', 'Impulsionamentos', 'Controle de anúncios com cálculo de custo por resultado.'],
  ['brand', 'Raio-X da marca', 'Estratégia e posicionamento de cada cliente sempre à mão.'],
  ['pauta', 'Pauta interna', 'A pauta do time organizada, com clareza e sem retrabalho.']
];
const featGrid = document.getElementById('featGrid');
FEATURES.forEach(([ic, t, d], i) => {
  const c = document.createElement('div');
  c.className = 'feat-card reveal d' + (i % 3 + 1);
  c.innerHTML = '<div class="feat-ic"><svg viewBox="0 0 24 24">' + ICONS[ic] + '</svg></div><h3>' + t + '</h3><p>' + d + '</p>';
  featGrid.appendChild(c);
});

/* ---- FAQ ---- */
const FAQ = [
  ['Preciso cancelar minhas outras ferramentas?', 'Não necessariamente. Mas a maioria das nossas clientes consegue substituir tudo pela SocialMind.'],
  ['Quantos clientes posso cadastrar?', 'No Eugência até 3, no Agência Pro até 10 e no Agência Premium é ilimitado.'],
  ['Minha equipe toda pode usar?', 'Sim! No Agência Pro você adiciona até 5 usuários, com permissões por função (admin, editor e viewer). No Premium, os usuários são ilimitados.'],
  ['O cliente precisa baixar algum app ou criar login?', 'Não. Ele aprova os posts por um link público, direto do navegador, sem instalar nada e sem login.'],
  ['Quando recebo o acesso?', 'Imediatamente após a assinatura. Você entra na plataforma e já começa a usar.']
];
const faqList = document.getElementById('faqList');
FAQ.forEach(([q, a]) => {
  const it = document.createElement('div');
  it.className = 'faq-item reveal';
  it.innerHTML = '<button class="faq-q"><span>' + q + '</span><span class="faq-ic"></span></button><div class="faq-a"><p>' + a + '</p></div>';
  const ans = it.querySelector('.faq-a');
  it.querySelector('.faq-q').addEventListener('click', () => {
    const open = it.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => { o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
    if (!open) { it.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
  });
  faqList.appendChild(it);
});

/* ---- Quiz ---- */
const QUIZ = [
  { q: 'Como você trabalha hoje?', o: [['Sozinha, como freelancer', { team: 1 }], ['Com uma equipe de até 5 pessoas', { team: 2 }], ['Com uma equipe de mais de 5 pessoas', { team: 3 }]] },
  { q: 'Quantos clientes você atende hoje?', o: [['De 1 a 3', { cl: 1 }], ['De 4 a 10', { cl: 2 }], ['Mais de 10', { cl: 3 }]] },
  { q: 'Quantas ferramentas você usa para gerir tudo?', o: [['1 ou 2', { p: 0 }], ['3 ou 4', { p: 1, tools: 1 }], ['5 ou mais, já perdi a conta', { p: 2, tools: 1 }]] },
  { q: 'Como seus clientes aprovam os posts?', o: [['Já tenho um processo organizado', { p: 0 }], ['Por WhatsApp ou direct', { p: 1.5, appr: 1 }], ['Misturado: e-mail, Drive, mensagem… vira bagunça', { p: 2, appr: 1 }]] },
  { q: 'Você sabe exatamente quanto sua agência lucrou no último mês?', o: [['Sim, no detalhe', { p: 0 }], ['Mais ou menos', { p: 1, fin: 1 }], ['Não faço ideia', { p: 2, fin: 1 }]] },
  { q: 'Quanto tempo por semana você perde procurando arquivos, senhas e aprovações?', o: [['Menos de 1 hora', { p: 0 }], ['De 1 a 3 horas', { p: 1, time: 1 }], ['Mais de 3 horas', { p: 2, time: 1 }]] }
];
const PLANS = {
  eugencia: { nm: 'Eugência', pr: 'R$ 67/mês', lim: 'até 3 clientes · 1 usuário', url: CHECKOUT.eugencia, lead: 'Quiz - Assinar Eugência', id: 'plan-eugencia' },
  pro: { nm: 'Agência Pro', pr: 'R$ 127/mês', lim: 'até 10 clientes · 5 usuários', url: CHECKOUT.pro, lead: 'Quiz - Assinar Pro', id: 'plan-pro' },
  premium: { nm: 'Agência Premium', pr: 'R$ 197/mês', lim: 'clientes e usuários ilimitados', url: CHECKOUT.premium, lead: 'Quiz - Assinar Premium', id: 'plan-premium' }
};
const quizBox = document.getElementById('quizBox');
let qi = -1, answers = [];

function renderIntro() {
  quizBox.innerHTML = '<div class="quiz-step quiz-intro"><h3>Descubra seu plano ideal</h3><p>São só 6 perguntas. No final você recebe seu diagnóstico e a recomendação de plano.</p><button class="btn btn-primary btn-lg" id="qStart">Começar o quiz <span class="arr">→</span></button></div>';
  document.getElementById('qStart').onclick = () => { qi = 0; answers = []; renderQ(); };
}
function renderQ() {
  const item = QUIZ[qi];
  quizBox.innerHTML =
    '<div class="quiz-top"><span>Pergunta ' + (qi + 1) + ' de ' + QUIZ.length + '</span>' + (qi > 0 ? '<button id="qBack">← Voltar</button>' : '<span></span>') + '</div>' +
    '<div class="quiz-bar"><span style="width:' + (qi / QUIZ.length * 100) + '%"></span></div>' +
    '<div class="quiz-step"><div class="quiz-q">' + item.q + '</div><div class="quiz-opts">' +
    item.o.map((o, i) => '<button class="quiz-opt' + (answers[qi] === i ? ' sel' : '') + '" data-i="' + i + '"><span class="k">' + 'ABC'[i] + '</span>' + o[0] + '</button>').join('') +
    '</div></div>';
  requestAnimationFrame(() => { const b = quizBox.querySelector('.quiz-bar span'); if (b) b.style.width = ((qi + 1) / QUIZ.length * 100) + '%'; });
  quizBox.querySelectorAll('.quiz-opt').forEach(b => b.onclick = () => {
    answers[qi] = +b.dataset.i; b.classList.add('sel');
    setTimeout(() => { qi++; qi < QUIZ.length ? renderQ() : renderResult(); }, 260);
  });
  const back = document.getElementById('qBack');
  if (back) back.onclick = () => { qi--; renderQ(); };
}
function renderResult() {
  const a = {};
  answers.forEach((ai, i) => { const v = QUIZ[i].o[ai][1]; for (const k in v) a[k] = (a[k] || 0) + v[k]; });
  const pct = Math.max(18, Math.round((a.p || 0) / 9.5 * 100));
  const tier = Math.max(a.team || 1, a.cl || 1);
  const key = tier === 3 ? 'premium' : tier === 2 ? 'pro' : 'eugencia';
  const P = PLANS[key];
  let lvl, title, text;
  if (pct >= 65) { lvl = 'Diagnóstico: urgente'; title = 'Sua agência está pedindo socorro.'; text = 'Ferramentas demais, informação espalhada e tempo perdido todo dia. A SocialMind resolve exatamente isso.'; }
  else if (pct >= 35) { lvl = 'Diagnóstico: vai te ajudar muito'; title = 'Você já se vira bem, mas está deixando tempo na mesa.'; text = 'Centralizar tudo em um lugar vai tirar retrabalho da sua semana e deixar sua agência mais profissional.'; }
  else { lvl = 'Diagnóstico: pronta para escalar'; title = 'Você é organizada. Agora é hora de crescer.'; text = 'Com a base arrumada, a SocialMind te dá estrutura para atender mais clientes sem aumentar o caos.'; }
  const why = ['Atende ' + P.lim + ', do jeito que você trabalha hoje'];
  if (a.appr) why.push('Aprovação por link: o cliente aprova sem WhatsApp e sem login');
  if (a.tools) why.push('Substitui Trello, Notion, planilhas e e-mails em uma única assinatura');
  if (a.fin && key !== 'eugencia') why.push('Financeiro completo com fluxo de caixa e % de lucro');
  if (a.fin && key === 'eugencia') why.push('Quer o financeiro completo? Ele está no Agência Pro (R$ 127/mês)');
  if (a.time) why.push('Logins, senhas e arquivos de cada cliente sempre à mão');
  if (window.fbq) fbq('trackCustom', 'QuizCompleted', { plano: P.nm, score: pct });
  quizBox.innerHTML =
    '<div class="quiz-top"><span>Seu resultado</span><button id="qRedo">↺ Refazer</button></div>' +
    '<div class="quiz-bar"><span style="width:100%"></span></div>' +
    '<div class="quiz-step quiz-res"><span class="lvl">● ' + lvl + '</span><h3>' + title + '</h3><p>' + text + '</p>' +
    '<div class="meter"><div class="meter-track"><span id="qMeter"></span></div><b id="qPct">0%</b></div>' +
    '<div class="rec"><div><small>Plano ideal para você</small><div class="nm grad-text">' + P.nm + '</div><div class="pr">' + P.pr + ' · ' + P.lim + '</div></div>' +
    '<ul>' + why.map(w => '<li>' + w + '</li>').join('') + '</ul></div>' +
    '<div class="quiz-actions"><a class="btn btn-primary btn-lg btn-pulse" href="' + P.url + '" data-lead="' + P.lead + '">Assinar ' + P.nm + ' <span class="arr">→</span></a><a class="btn btn-ghost btn-lg" href="#planos" id="qSeePlans">Comparar planos</a></div></div>';
  document.getElementById('qRedo').onclick = renderIntro;
  document.getElementById('qSeePlans').onclick = () => {
    const el = document.getElementById(P.id);
    setTimeout(() => { el.animate([{ boxShadow: '0 0 0 0 rgba(255,45,135,.7)' }, { boxShadow: '0 0 0 18px rgba(255,45,135,0)' }], { duration: 1100, iterations: 2 }); }, 700);
  };
  requestAnimationFrame(() => requestAnimationFrame(() => { document.getElementById('qMeter').style.width = pct + '%'; }));
  const el = document.getElementById('qPct'), t0 = performance.now();
  (function step(now) { const p = Math.min((now - t0) / 1200, 1); el.textContent = Math.round(pct * (1 - Math.pow(1 - p, 3))) + '%'; if (p < 1) requestAnimationFrame(step); })(t0);
  setTimeout(() => { el.textContent = pct + '%'; }, 1300);
}
renderIntro();

/* ---- Lightbox gallery + carousel ---- */
const lb = document.getElementById('lightbox'), lbImg = lb.querySelector('img');
const gallery = []; let gi = 0;
document.querySelectorAll('.testi-img').forEach(t => {
  const start = gallery.length;
  t.dataset.full.split('|').forEach(s => gallery.push(s));
  t.addEventListener('click', () => { gi = start; showLb(); lb.classList.add('open'); });
});
function showLb() { lbImg.src = gallery[gi]; }
function stepLb(d) { gi = (gi + d + gallery.length) % gallery.length; showLb(); }
lb.querySelector('.lb-prev').onclick = e => { e.stopPropagation(); stepLb(-1); };
lb.querySelector('.lb-next').onclick = e => { e.stopPropagation(); stepLb(1); };
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-close')) lb.classList.remove('open'); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') lb.classList.remove('open');
  if (e.key === 'ArrowRight') stepLb(1);
  if (e.key === 'ArrowLeft') stepLb(-1);
});
const track = document.getElementById('testiTrack');
const cardW = () => { const c = track.querySelector('.testi-card'); return c ? c.getBoundingClientRect().width + 22 : 360; };
document.getElementById('tPrev').onclick = () => track.scrollBy({ left: -cardW(), behavior: 'smooth' });
document.getElementById('tNext').onclick = () => track.scrollBy({ left: cardW(), behavior: 'smooth' });

/* ---- Nav ---- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
const toggle = document.getElementById('navToggle'), menu = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

/* ---- Reveal ---- */
const heroVisual = document.getElementById('heroVisual');
const toolsRow = document.getElementById('toolsRow');
let dashFired = false;
function settle(el, ms) { setTimeout(() => { el.style.transition = 'none'; setTimeout(() => { el.style.transition = ''; }, 60); }, ms); }
function animateCount(el) {
  const target = +el.dataset.count, pre = el.dataset.prefix || '', suf = el.dataset.suffix || '', t0 = performance.now();
  setTimeout(() => { el.textContent = pre + target + suf; }, 1500);
  (function step(now) { const p = Math.min((now - t0) / 1400, 1); el.textContent = pre + Math.round(target * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(step); })(t0);
}
function fireDash() {
  if (dashFired) return; dashFired = true;
  document.querySelectorAll('.metric .val[data-count]').forEach(animateCount);
  document.querySelectorAll('#chart span').forEach(s => { s.style.height = s.style.getPropertyValue('--h'); settle(s, 1300); });
}
function checkReveal() {
  const vh = window.innerHeight;
  document.querySelectorAll('.reveal:not(.in)').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.92 && r.bottom > 0) { el.classList.add('in'); settle(el, 1150); }
  });
  if (heroVisual && !heroVisual.classList.contains('in') && heroVisual.getBoundingClientRect().top < vh * 0.85) {
    heroVisual.classList.add('in'); settle(heroVisual.querySelector('.hero-photo'), 1100);
  }
  const dash = document.querySelector('.dash');
  if (dash) { const r = dash.getBoundingClientRect(); if (r.top < vh * 0.7 && r.bottom > 0) fireDash(); }
  const sm = document.querySelector('.sm-card');
  if (sm && sm.classList.contains('in') && !toolsRow.classList.contains('merged')) setTimeout(() => toolsRow.classList.add('merged'), 900);
}
let ticking = false;
const onRev = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { checkReveal(); ticking = false; }); };
window.addEventListener('scroll', onRev, { passive: true });
window.addEventListener('resize', onRev, { passive: true });
window.addEventListener('load', checkReveal);
checkReveal(); setTimeout(checkReveal, 200);

/* ---- Hero glow follows pointer ---- */
const hero = document.querySelector('.hero'), gp = document.querySelector('.hero .glow-pink'), gpu = document.querySelector('.hero .glow-purple');
if (hero && window.matchMedia('(pointer:fine)').matches) {
  hero.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth - 0.5, y = e.clientY / window.innerHeight - 0.5;
    gp.style.transform = `translateX(-60%) translate(${x * 40}px, ${y * 30}px)`;
    gpu.style.transform = `translateX(10%) translate(${x * -50}px, ${y * 40}px)`;
  });
}

/* ---- Motion logo parallax ---- */
const fluffs = [...document.querySelectorAll('.fluff-wrap[data-par]')];
function parallax(){ const vh = window.innerHeight; fluffs.forEach(f => { const r = f.parentElement.getBoundingClientRect(); const c = r.top + r.height/2 - vh/2; f.style.transform = 'translateY(' + (c * +f.dataset.par).toFixed(1) + 'px)'; }); }
window.addEventListener('scroll', () => requestAnimationFrame(parallax), { passive: true }); parallax();
