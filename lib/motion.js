/* MEPTOR motion engine
 * Lenis smooth scroll + GSAP ScrollTrigger + SplitText, one RAF loop (gsap.ticker).
 * Ported from the design canvas. Attach with: const m = new MeptorMotion(rootEl); m.start(); … m.destroy();
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

export class MeptorMotion {
  constructor(root) {
    this._root = root;
    this.props = { motion: true };
    this.state = { menu: false };
    this._ind = 0;
    this._tm = 0;
  }
  setState(o) { Object.assign(this.state, o); }
  start() { this._bind(); this._start(0); }
  destroy() { this._stop(); if (this._unbind) { this._unbind(); this._unbind = null; } }
  _setTm(i) {
    const r = this._root || document.querySelector('.mp');
    if (!r) return;
    const sl = r.querySelectorAll('.tm-s'), n = sl.length || 1;
    i = ((i % n) + n) % n;
    this._tm = i;
    sl.forEach((el, k) => el.classList.toggle('on', k === i));
    const c = r.querySelector('.tm-cur');
    if (c && c.firstChild) c.firstChild.nodeValue = String(i + 1).padStart(2, '0');
  }
  _setInd(i) {
    if (i === this._ind) return;
    this._ind = i;
    const r = this._root || document.querySelector('.mp');
    if (!r) return;
    r.querySelectorAll('.dkc').forEach((el, k) => {
      el.classList.toggle('on', k === i);
      const b = el.querySelector('.dk-hit');
      if (b) b.setAttribute('aria-pressed', k === i ? 'true' : 'false');
    });
  }
  _stop() {
    clearTimeout(this._t);
    if (this._cleanup) { try { this._cleanup(); } catch (e) {} this._cleanup = null; }
  }
  _start(tries) {
    if (((this.props || {}).motion ?? true) === false) return;
    const root = this._root;
    if (!root) return;
    this._cleanup = this._init(root, window, gsap, ScrollTrigger, SplitText, Lenis);
  }
  _init(root, win, g, ST, Split, LenisC) {
    g.registerPlugin(ST);
    if (Split) g.registerPlugin(Split);
    const doc = root.ownerDocument;
    const $ = (s, c) => (c || root).querySelector(s);
    const $$ = (s, c) => Array.from((c || root).querySelectorAll(s));

    /* 1 · find the element that really scrolls (window, or a scrolling wrapper) */
    let scroller = win;
    for (let n = root.parentElement; n && n !== doc.body && n !== doc.documentElement; n = n.parentElement) {
      const oy = win.getComputedStyle(n).overflowY;
      if (/(auto|scroll|overlay)/.test(oy) && n.scrollHeight > n.clientHeight + 2) { scroller = n; break; }
    }
    if (scroller !== win) ST.defaults({ scroller: scroller });
    ST.config({ ignoreMobileResize: true, limitCallbacks: true });
    root.classList.add('js-motion');

    const E = 'expo.out';
    const splits = [], counters = [], cleanups = [];
    let lenis = null, tick = null, onClick = null;

    const mm = g.matchMedia(root);
    mm.add({ desk: '(min-width: 901px)', mob: '(max-width: 900px)', reduce: '(prefers-reduced-motion: reduce)' }, (ctx) => {
      const { desk, reduce } = ctx.conditions;
      if (reduce) return;
      /* phones: reveals also play when a section is entered from below (e.g. after jumping past it via a nav link), so
         nothing is left hidden when scrolling back up; desktop keeps its original behaviour */
      const once = (trigger, start) => ({ trigger: trigger, start: start || 'top 86%', toggleActions: desk ? 'play none none reverse' : 'play none play reverse' });

      /* 2 · Lenis smooth scrolling, driven by GSAP's ticker (desktop + mouse only) */
      if (desk && LenisC && scroller === win && win.matchMedia('(pointer: fine)').matches) {
        /* lerp-based (not duration-based) so every wheel/trackpad tick responds instantly and settles naturally */
        lenis = new LenisC({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true, syncTouch: false, autoRaf: false });
        lenis.on('scroll', ST.update);
        tick = (t) => lenis.raf(t * 1000);        /* ONE loop: GSAP's ticker drives Lenis */
        g.ticker.add(tick);
        g.ticker.lagSmoothing(0);
      }
      onClick = (e) => {
        const a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href');
        const t = id && id.length > 1 ? root.querySelector(id) : null;
        if (!t) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(t, { offset: -90, duration: 1.4 });
        else t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      root.addEventListener('click', onClick);
      /* Lenis already smooths the scroll position, so scroll-linked tweens follow it closely instead of lagging behind a second smoother */
      const sc = (n) => (lenis ? 0.25 : Math.min(n, 0.6));

      /* 3 · hero: intro sequence + scroll-scrubbed recede */
      g.set('.hero-f', { transformOrigin: '50% 0%' });
      /* opening curtain: logo rises, counter runs, curtain wipes up into the hero */
      const loader = $('.loader'), numEl = $('.ld-num');
      root.classList.add('js-load');
      if (lenis) lenis.stop();
      const cnt = { v: 0 };
      const ld = g.timeline({ defaults: { ease: E }, onComplete: () => { if (lenis) lenis.start(); g.set(loader, { display: 'none' }); } });
      ld.from('.ld-mark', { yPercent: 110, duration: 1.1 }, 0.1)
        .from('.ld-word span', { yPercent: 110, duration: 1, stagger: 0.05 }, 0.3)
        .from('.ld-tag', { opacity: 0, letterSpacing: '0.6em', duration: 1.2 }, 0.55)
        .from('.ld-glow', { scale: 0.6, opacity: 0, duration: 1.8, ease: 'power2.out' }, 0)
        .to(cnt, { v: 100, duration: 1.7, ease: 'power2.inOut', onUpdate: () => { if (numEl && numEl.firstChild) numEl.firstChild.nodeValue = String(Math.round(cnt.v)).padStart(3, '0'); } }, 0.15)
        .to('.ld-bar i', { scaleX: 1, duration: 1.7, ease: 'power2.inOut' }, 0.15)
        .to('.ld-c', { y: -30, opacity: 0, duration: 0.7, ease: 'power2.in' }, 1.95)
        .to('.ld-foot', { opacity: 0, duration: 0.5 }, 1.95)
        .to(loader, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.1, ease: 'expo.inOut' }, 2.25);
      cleanups.push(() => { if (numEl && numEl.firstChild) numEl.firstChild.nodeValue = '000'; root.classList.remove('js-load'); g.set(loader, { clearProps: 'all' }); });
      g.timeline({ defaults: { ease: E }, delay: 2.45 })
        .from('.hs-slide.on img', { scale: 1.28, duration: 2.6 }, 0)
        .from('.hero-h .ln > span', { yPercent: 70, opacity: 0, filter: 'blur(14px)', duration: 1.6, stagger: 0.14 }, 0.35)
        .from('.hero-card', { clipPath: 'inset(100% 0% 0% 0% round 20px)', y: 40, duration: 1.5 }, 0.75)
        .from('.hero-card > *', { y: 22, opacity: 0, duration: 1.1, stagger: 0.07 }, 1)
        .from('.hero-stats', { clipPath: 'inset(0% 0% 100% 0% round 18px)', y: 30, duration: 1.4 }, 0.95)
        .from('.hero-stats li', { y: 18, opacity: 0, duration: 1.1, stagger: 0.08 }, 1.15)
        .from(desk ? '.hero-bar' : '.hero-bar > *', { y: 20, opacity: 0, duration: 1.2, stagger: desk ? 0 : 0.06 }, 1.2);
      /* hero carousel: curtain-wipe between slides, slow push-in, autoplay while the hero is on screen */
      {
        const slides = $$('.hs-slide'), dotsEl = $('.hs-dots'), dotBtns = $$('.hs-dot');
        let cur = 0, busy = false, hAuto = null, hVis = true;
        const paint = (i) => {
          dotBtns.forEach((d, k) => { d.classList.toggle('on', k === i); d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
          dotsEl.classList.remove('run'); void dotsEl.offsetWidth; if (hVis) dotsEl.classList.add('run');
        };
        const drift = (img) => g.fromTo(img, { scale: 1.06 }, { scale: 1, duration: 8, ease: 'none', overwrite: 'auto' });
        const go = (i) => {
          i = ((i % slides.length) + slides.length) % slides.length;
          if (i === cur || busy) return;
          busy = true;
          const prev = slides[cur], next = slides[i], dir = i > cur || (cur === slides.length - 1 && i === 0) ? 1 : -1;
          cur = i; paint(i);
          next.classList.add('on');
          g.set(next, { zIndex: 3 }); g.set(prev, { zIndex: 2 });
          g.timeline({ onComplete: () => { prev.classList.remove('on'); g.set(prev, { clearProps: 'zIndex,clipPath' }); g.set(next, { zIndex: 2 }); busy = false; } })
            .fromTo(next, { clipPath: dir > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.inOut' }, 0)
            .fromTo(next.querySelector('img'), { scale: 1.22, xPercent: 6 * dir }, { scale: 1.06, xPercent: 0, duration: 1.9, ease: 'expo.inOut' }, 0)
            .to(prev.querySelector('img'), { xPercent: -10 * dir, scale: 1.02, duration: 1.5, ease: 'expo.inOut' }, 0)
            .add(() => { drift(next.querySelector('img')); g.set(prev.querySelector('img'), { xPercent: 0 }); }, 1.9);
          schedule();
        };
        const schedule = () => { if (hAuto) hAuto.kill(); hAuto = hVis ? g.delayedCall(6.5, () => go(cur + 1)) : null; };
        this._heroGo = (i) => go(i);
        paint(0);
        g.delayedCall(3.2, () => { schedule(); paint(cur); });
        ST.create({ trigger: '.hero', start: 'top bottom', end: 'bottom top', onToggle: (self) => { hVis = self.isActive; schedule(); paint(cur); } });
        const hf = $('.hero-f');
        let sx = null, sy = null;
        const ts = (e) => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; };
        const te = (e) => { if (sx === null) return; const t = e.changedTouches[0]; const dx = t.clientX - sx, dy = t.clientY - sy; sx = null; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4 && !e.target.closest('a, button')) go(cur + (dx < 0 ? 1 : -1)); };
        hf.addEventListener('touchstart', ts, { passive: true }); hf.addEventListener('touchend', te, { passive: true });
        cleanups.push(() => { if (hAuto) hAuto.kill(); this._heroGo = null; hf.removeEventListener('touchstart', ts); hf.removeEventListener('touchend', te); dotsEl.classList.remove('run'); slides.forEach((sl, k) => { sl.classList.toggle('on', k === 0); g.set(sl, { clearProps: 'zIndex,clipPath' }); }); });
      }
      g.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: sc(1.2) } })
        .to('.hero-m', { yPercent: 22, scale: 1.1, ease: 'none' }, 0)
        .to(desk ? '.hero-txt' : '.hero-h', { y: desk ? -170 : -90, opacity: 0, ease: 'none' }, 0)
        .to(desk ? '.hero-bar' : '.hero-stats, .hero-card', { y: desk ? -70 : -40, opacity: desk ? 0 : 0.25, ease: 'none' }, 0)
        .to('.hero-f', { scale: 0.94, borderRadius: 44, ease: 'none' }, 0);

      /* 4 · nav: frosts in after the hero, hides on scroll-down, returns on scroll-up */
      g.timeline({ scrollTrigger: { trigger: '.hero', start: 'bottom 150px', end: 'bottom 40px', scrub: sc(0.8) } })
        .to('.nav-bg', { opacity: 1, ease: 'none' }, 0)
        .to('.nav-prog', { opacity: 1, ease: 'none' }, 0)
        .to('.nav', { color: '#0d191c', ease: 'none' }, 0);
      g.to('.nav-prog', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom bottom', scrub: sc(0.4) } });
      const nav = $('.nav');
      let hidden = false;
      ST.create({ start: 0, end: 'max', onUpdate: (self) => {
        const h = self.direction === 1 && self.scroll() > 1100;
        if (h !== hidden) { hidden = h; g.to(nav, { yPercent: h ? -115 : 0, duration: 0.6, ease: 'power3.out', overwrite: 'auto' }); }
      } });

      /* 5 · eyebrows wipe in */
      $$('.eb').forEach((el) => g.from(el, { clipPath: 'inset(0% 100% 0% 0%)', x: -14, filter: 'blur(6px)', duration: 1.1, ease: E, scrollTrigger: once(el, 'top 92%') }));

      /* 6 · blur-focus text: headings drift in letter by letter, sentences word by word,
         each one rising out of a soft blur into sharp focus (plays forward on the way down, rewinds on the way up) */
      const B = desk ? 12 : 8;
      const focusIn = (el, o) => {
        if (!Split || !el) return;
        splits.push(Split.create(el, { type: o.chars ? 'words,chars' : 'words', wordsClass: 'sw', charsClass: 'sc', autoSplit: true, onSplit: (self) => {
          const t = o.chars ? self.chars : self.words;
          return g.fromTo(t, { opacity: 0, yPercent: o.y, x: o.x || 0, rotation: o.r || 0, filter: 'blur(' + B + 'px)' },
            { opacity: 1, yPercent: 0, x: 0, rotation: 0, filter: 'blur(0px)', duration: o.d, ease: 'power3.out',
              stagger: { amount: Math.min(o.max, t.length * o.each) }, scrollTrigger: once(el, o.start) });
        } }));
      };
      $$('.about h2, .svc-head h2, .why-head h2, .ind-head h2, .tm-c h2, .ins-head h2, .cta h2')
        .forEach((el) => focusIn(el, { chars: true, y: 55, x: 6, r: 4, d: 1.25, each: 0.022, max: 0.85, start: 'top 88%' }));
      $$('.vm h3')
        .forEach((el) => focusIn(el, { chars: true, y: 40, x: 4, d: 1.05, each: 0.016, max: 0.55, start: 'top 92%' }));
      $$('.art h3')
        .forEach((el) => focusIn(el, { y: 45, d: 1.1, each: 0.035, max: 0.5, start: 'top 92%' }));
      $$('.trust p, .ab-text .lead, .vm p, .svc-head > p, .why-head > p, .ind-head > p, .tm-d, .cta-d, .ft-desc, .lbl, .ws-l, .ft-tag')
        .forEach((el) => focusIn(el, { y: 40, d: 1.1, each: 0.03, max: 0.7, start: 'top 92%' }));

      /* 7 · images: cinematic mask + scale uncover + true parallax */
      $$('.pimg').forEach((fr) => {
        const img = $('img', fr);
        if (!img) return;
        g.fromTo(fr, { clipPath: 'inset(16% 10% 16% 10% round 22px)' }, { clipPath: 'inset(0% 0% 0% 0% round 22px)', ease: 'none', scrollTrigger: { trigger: fr, start: 'top 98%', end: 'top 42%', scrub: sc(1) } });
        g.fromTo(img, { scale: 1.32 }, { scale: 1.04, ease: 'none', scrollTrigger: { trigger: fr, start: 'top bottom', end: 'top 30%', scrub: sc(1) } });
        g.fromTo(img, { yPercent: desk ? -6 : -4 }, { yPercent: desk ? 6 : 4, ease: 'none', scrollTrigger: { trigger: fr, start: 'top bottom', end: 'bottom top', scrub: sc(1.2) } });
      });
      if (desk) {
        [['.ab-m1', 60], ['.ab-m2', 200], ['.tm-img', 80], ['.ab-stat', 70]].forEach(([s, d]) => {
          const el = $(s);
          if (el) g.fromTo(el, { y: d / 2 }, { y: -d / 2, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: sc(1.4) } });
        });
      }
      g.from('.num', { yPercent: 60, clipPath: 'inset(0% 0% 100% 0%)', duration: 1.4, ease: E, scrollTrigger: once('.ab-stat', 'top 88%') });

      /* 8 · services: section expands, cards rise in 3D, then a pinned horizontal scrub */
      g.fromTo('.svc', { clipPath: 'inset(0% 3% 0% 3% round 52px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: { trigger: '.svc', start: 'top bottom', end: 'top 30%', scrub: sc(1) } });
      const cards = $$('.card');
      g.set(cards.map((c) => $('img', c)), { scale: 1.18 });
      g.from(cards, desk
        ? { clipPath: 'inset(100% 0% 0% 0% round 18px)', y: 150, rotationX: -18, transformPerspective: 1100, transformOrigin: '50% 100%', duration: 1.6, ease: E, stagger: 0.09, scrollTrigger: once('.svc-vp', 'top 90%') }
        : { clipPath: 'inset(0% 0% 0% 100% round 18px)', x: 80, duration: 1.4, ease: E, stagger: 0.08, scrollTrigger: once('.svc-vp', 'top 88%') });
      if (desk) {
        const track = $('.svc-track'), vp = $('.svc-vp');
        root.classList.add('js-h');
        const dist = () => Math.max(0, track.scrollWidth - vp.clientWidth);
        const h = g.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: vp, start: 'center center', end: () => '+=' + dist(), pin: true, scrub: sc(1), invalidateOnRefresh: true } });
        cards.forEach((c) => g.fromTo($('img', c), { xPercent: -7 }, { xPercent: 7, ease: 'none', scrollTrigger: { trigger: c, containerAnimation: h, start: 'left right', end: 'right left', scrub: true } }));
      } else {
        /* phones: each card's text follows it in (staggered), and the photos settle out of their zoom as the row scrolls past */
        g.fromTo($$('.card .c-top, .card .c-d, .card .c-more'), { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.06, delay: 0.3, scrollTrigger: once('.svc-vp', 'top 88%') });
        g.fromTo(cards.map((c) => $('img', c)), { scale: 1.18 }, { scale: 1.04, ease: 'none', scrollTrigger: { trigger: '.svc-vp', start: 'top bottom', end: 'bottom top', scrub: sc(1) } });
      }

      /* 9 · why: dark room opens, decor drifts at its own depth, pillars + counting stats */
      g.fromTo('.why', { clipPath: 'inset(5% 4% 0% 4% round 64px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: { trigger: '.why', start: 'top bottom', end: 'top 20%', scrub: sc(1) } });
      /* torch: lens + light are moved with transforms only; idle drift runs only while the section is on screen */
      const whyEl = $('.why'), lens = $('.why-hid'), lensIn = $('.why-hid-in'), torch = $('.why-torch');
      root.classList.add('js-lens');
      let W = 0, H = 0;
      const size = () => { W = whyEl.offsetWidth; H = whyEl.offsetHeight; lensIn.style.width = W + 'px'; lensIn.style.height = H + 'px'; };
      size();
      ST.addEventListener('refreshInit', size);
      const pos = { x: 0.74 * W, y: 0.22 * H };
      const draw = () => {
        lens.style.transform = 'translate3d(' + (pos.x - 320) + 'px,' + (pos.y - 320) + 'px,0)';
        lensIn.style.transform = 'translate3d(' + (320 - pos.x) + 'px,' + (320 - pos.y) + 'px,0)';
        torch.style.transform = 'translate3d(' + (pos.x - 440) + 'px,' + (pos.y - 440) + 'px,0)';
      };
      draw();
      let idle = null, live = false, vis = false;
      const makeIdle = () => {
        if (idle) idle.kill();
        idle = g.timeline({ repeat: -1, yoyo: true, paused: !vis, defaults: { ease: 'sine.inOut', onUpdate: draw } })
          .to(pos, { x: 0.26 * W, y: 0.48 * H, duration: 8 })
          .to(pos, { x: 0.62 * W, y: 0.74 * H, duration: 8 });
      };
      makeIdle();
      const qx = g.quickTo(pos, 'x', { duration: 0.55, ease: 'power3', onUpdate: draw });
      const qy = g.quickTo(pos, 'y', { duration: 0.55, ease: 'power3', onUpdate: draw });
      ST.create({ trigger: whyEl, start: 'top bottom', end: 'bottom top', onToggle: (self) => { vis = self.isActive; if (vis && !live) idle.play(); else idle.pause(); } });
      const wMove = (e) => { const r = whyEl.getBoundingClientRect(); qx(e.clientX - r.left); qy(e.clientY - r.top); };
      const wEnter = () => { live = true; idle.pause(); };
      const wLeave = () => { live = false; makeIdle(); };
      if (desk) { whyEl.addEventListener('pointermove', wMove); whyEl.addEventListener('pointerenter', wEnter); whyEl.addEventListener('pointerleave', wLeave); }
      const tMove = (e) => { const t = e.touches && e.touches[0]; if (!t) return; live = true; idle.pause(); const r = whyEl.getBoundingClientRect(); qx(t.clientX - r.left); qy(t.clientY - r.top); };
      const tEnd = () => { if (live) { live = false; makeIdle(); } };
      if (!desk) { whyEl.addEventListener('touchstart', tMove, { passive: true }); whyEl.addEventListener('touchmove', tMove, { passive: true }); whyEl.addEventListener('touchend', tEnd, { passive: true }); }
      cleanups.push(() => {
        if (idle) idle.kill();
        ST.removeEventListener('refreshInit', size);
        whyEl.removeEventListener('pointermove', wMove); whyEl.removeEventListener('pointerenter', wEnter); whyEl.removeEventListener('pointerleave', wLeave);
        whyEl.removeEventListener('touchstart', tMove); whyEl.removeEventListener('touchmove', tMove); whyEl.removeEventListener('touchend', tEnd);
        [lens, lensIn, torch].forEach((el) => { el.style.transform = ''; });
        lensIn.style.width = lensIn.style.height = '';
        root.classList.remove('js-lens');
      });
      const whyRange = { trigger: '.why', start: 'top bottom', end: 'bottom top', scrub: sc(1.5) };
      g.to('.wh-rings', { rotation: 60, scale: 1.18, ease: 'none', scrollTrigger: whyRange });
      g.fromTo('.wh-word', { xPercent: desk ? 9 : 3 }, { xPercent: desk ? -9 : -3, ease: 'none', scrollTrigger: whyRange });   /* phones: smaller drift keeps the word inside the section */
      g.fromTo('.why-base', { yPercent: -12 }, { yPercent: 12, ease: 'none', scrollTrigger: whyRange });
      if (desk) g.from('.pil', { clipPath: 'inset(100% 0% 0% 0% round 18px)', y: '+=120', rotationX: 14, transformOrigin: '50% 100%', duration: 1.6, ease: E, stagger: 0.12, scrollTrigger: once('.why-pil', 'top 85%') });
      $$('.ws-n').forEach((el, i) => {
        const tn = el.firstChild;
        const m = tn && tn.nodeType === 3 ? tn.nodeValue.match(/^([\d,]+)(.*)$/) : null;
        g.from(el, { yPercent: 45, opacity: 0, filter: 'blur(12px)', duration: 1.5, ease: E, delay: i * 0.12, scrollTrigger: once(el, 'top 92%') });
        if (!m) return;
        counters.push([tn, tn.nodeValue]);
        const target = parseInt(m[1].replace(/,/g, ''), 10), suf = m[2], o = { v: 0 };
        g.to(o, { v: target, duration: 2.2, ease: 'power3.out', delay: i * 0.12, scrollTrigger: once(el, 'top 92%'),
          onUpdate: () => { tn.nodeValue = Math.round(o.v).toLocaleString('en-US') + suf; } });
      });

      /* 10 · industries: staggered clip-rise, icons turn into place */
      /* the deck: cards start stacked as a fanned hand in the centre and deal out into the row as you scroll */
      const deck = $('.deck'), dks = $$('.dkc');
      if (desk) {
        g.from(dks, {
          x: (i, el) => { const d = deck.getBoundingClientRect(), r = el.getBoundingClientRect(); return (d.left + d.width / 2) - (r.left + r.width / 2); },
          y: (i) => 70 + Math.abs(i - 3.5) * 18, rotation: (i) => (i - 3.5) * 7, scale: 0.8, transformOrigin: '50% 140%', ease: 'none',
          scrollTrigger: { trigger: deck, start: 'top 98%', end: 'top 30%', scrub: sc(1.2), invalidateOnRefresh: true } });
      } else {
        /* phones: the deck is replaced by a compact 2-column grid (.ind-m); the pillars use the same grid.
           Cards fade up (staggered per column via CSS) once their top passes a line just above the bottom of the screen,
           and reset when they drop back below it, so they replay on the way down and stay settled when scrolled up past.
           The observer's root reaches far above the viewport, so "intersecting" means "reached", and even a jump
           (nav link, back to top) crosses the line and updates the state. */
        const ioGroups = $$('.ind-m, .why-pil'), ioCards = $$('.im-card, .why-pil .pil');
        const io = new IntersectionObserver((ents) => ents.forEach((en) => en.target.classList.toggle('in', en.isIntersecting)),
          { rootMargin: '100000px 0px -7% 0px', threshold: 0 });
        ioGroups.forEach((el) => el.classList.add('io'));
        ioCards.forEach((el) => io.observe(el));
        /* depth: each card's line-art drifts against the scroll (transform only, scrubbed) */
        $$('.im-art').forEach((a) => g.fromTo(a, { yPercent: 16 }, { yPercent: -16, ease: 'none', scrollTrigger: { trigger: a.parentNode, start: 'top bottom', end: 'bottom top', scrub: sc(1) } }));
        cleanups.push(() => { io.disconnect(); ioGroups.forEach((el) => el.classList.remove('io')); ioCards.forEach((el) => el.classList.remove('in')); });
      }
      /* one-view showcase (desktop): auto-advances while visible, pauses on hover, restarts after a manual pick */
      const stage = deck;
      let auto = null, inView = false, hover = false;
      const stopAuto = () => { if (auto) { auto.kill(); auto = null; } };
      const step = () => {
        if (ST.isScrolling()) { auto = g.delayedCall(0.8, step); return; }   /* never reflow the deck mid-scroll */
        this._setInd(((this._ind ?? 0) + 1) % 8); auto = g.delayedCall(3.6, step);
      };
      const startAuto = () => { stopAuto(); if (inView && !hover) auto = g.delayedCall(3.6, step); };
      this._indRestart = startAuto;
      if (desk) ST.create({ trigger: stage, start: 'top 70%', end: 'bottom 30%', onToggle: (self) => { inView = self.isActive; startAuto(); } });
      const onEnter = () => { hover = true; stopAuto(); }, onLeave = () => { hover = false; startAuto(); };
      if (desk) { stage.addEventListener('mouseenter', onEnter); stage.addEventListener('mouseleave', onLeave); }
      cleanups.push(() => { stopAuto(); this._indRestart = null; stage.removeEventListener('mouseenter', onEnter); stage.removeEventListener('mouseleave', onLeave); });

      /* 11 · testimonial + insights details */
      g.from('.tm-q svg', { scale: 0.3, rotation: -25, transformOrigin: '0% 100%', duration: 1.4, ease: E, scrollTrigger: once('.tm-q', 'top 88%') });
      g.from('.tm-slides', { y: 30, opacity: 0, clipPath: 'inset(0% 0% 100% 0%)', duration: 1.3, ease: E, delay: 0.15, scrollTrigger: once('.tm-q', 'top 88%') });
      g.from('.tm-nav > *', { y: 16, opacity: 0, duration: 1, ease: E, stagger: 0.06, delay: 0.4, scrollTrigger: once('.tm-q', 'top 88%') });
      /* testimonial carousel: autoplays while visible, pauses on hover, restarts after a manual step */
      {
        const tq = $('.tm-q'), prog = $('.tm-prog');
        let tAuto = null, tVis = false, tHover = false;
        const tStop = () => { if (tAuto) { tAuto.kill(); tAuto = null; } prog.classList.remove('run'); };
        const tStart = () => { tStop(); if (!tVis || tHover) return; void prog.offsetWidth; prog.classList.add('run'); tAuto = g.delayedCall(7, () => { this._setTm((this._tm ?? 0) + 1); tStart(); }); };
        this._tmRestart = tStart;
        ST.create({ trigger: tq, start: 'top 80%', end: 'bottom 20%', onToggle: (self) => { tVis = self.isActive; tStart(); } });
        const he = () => { tHover = true; if (tAuto) tAuto.paused(true); }, hl = () => { tHover = false; if (tAuto) tAuto.paused(false); else tStart(); };
        tq.addEventListener('mouseenter', he); tq.addEventListener('mouseleave', hl);
        cleanups.push(() => { tStop(); this._tmRestart = null; tq.removeEventListener('mouseenter', he); tq.removeEventListener('mouseleave', hl); });
      }
      g.to('.tm-chip', { y: -8, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      $$('.art').forEach((a) => g.from($$('p:not(.meta), .tl', a), { y: 18, opacity: 0, filter: 'blur(' + B + 'px)', duration: 1.1, ease: 'power3.out', stagger: 0.08, delay: 0.25, scrollTrigger: once(a, 'top 85%') }));
      $$('.meta').forEach((el) => g.from(el, { clipPath: 'inset(0% 100% 0% 0%)', duration: 1.1, ease: E, scrollTrigger: once(el, 'top 94%') }));

      /* 12 · buttons and links settle in */
      $$('.gb, .tl').forEach((el) => {
        if (el.closest('.hero, .nav, .card, .sheet')) return;
        g.from(el, { y: 26, scale: 0.94, opacity: 0, duration: 1.1, ease: E, scrollTrigger: once(el, 'top 95%') });
      });

      /* 13 · ticker: scrubbed by scroll, leans with scroll velocity */
      const skew = g.quickTo('.tk-t', 'skewX', { duration: 0.5, ease: 'power3' });
      let settle = null;
      g.fromTo('.tk-t', { xPercent: 0 }, { xPercent: -32, ease: 'none', scrollTrigger: { trigger: '.tk', start: 'top bottom', end: 'bottom top', scrub: sc(1),
        onUpdate: (self) => { skew(g.utils.clamp(-10, 10, self.getVelocity() / -260)); if (settle) settle.kill(); settle = g.delayedCall(0.14, () => skew(0)); } } });

      /* 14 · CTA portal opens; footer architecture + rising wordmark */
      g.fromTo('.cta-f', { clipPath: 'inset(10% 8% 10% 8% round 64px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'top 22%', scrub: sc(1) } });
      g.fromTo('.cta-f > img', { yPercent: -8, scale: 1.25 }, { yPercent: 8, scale: 1.05, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'bottom top', scrub: sc(1.2) } });
      g.from('.ft-c', { clipPath: 'inset(0% 0% 100% 0%)', y: 60, duration: 1.3, ease: E, stagger: 0.08, scrollTrigger: once('.ft-grid', 'top 94%') });
      g.from('.ft-word span', { yPercent: 105, ease: 'none', stagger: 0.08, scrollTrigger: { trigger: '.ft-word', start: 'top bottom', end: 'bottom bottom', scrub: sc(1) } });

      /* phones: swipe progress lines under the services and insights carousels */
      if (!desk) {
        [['.svc-vp', '.svc-dots i'], ['.ins-grid', '.ins-dots i']].forEach(([sv, si]) => {
          const sc2 = $(sv), bar = $(si);
          if (!sc2 || !bar) return;
          let raf = 0;
          const upd = () => { raf = 0; const max = sc2.scrollWidth - sc2.clientWidth; const pr = max > 0 ? sc2.scrollLeft / max : 1; const vis = Math.min(1, sc2.clientWidth / sc2.scrollWidth); bar.style.transform = 'translateX(' + (pr * (1 - vis) * 100 / vis) + '%) scaleX(1)'; bar.style.width = (vis * 100) + '%'; };
          const on = () => { if (!raf) raf = requestAnimationFrame(upd); };
          sc2.addEventListener('scroll', on, { passive: true });
          upd();
          cleanups.push(() => { sc2.removeEventListener('scroll', on); bar.style.transform = ''; bar.style.width = ''; });
        });
        g.from('.art', { clipPath: 'inset(0% 0% 0% 100% round 20px)', x: 40, duration: 1.2, ease: E, stagger: 0.08, scrollTrigger: once('.ins-grid', 'top 88%') });
      }

      /* phones / narrow windows: carousels can also be dragged with a mouse (touch already swipes natively) */
      if (!desk) {
        $$('.svc-vp, .ins-grid').forEach((sc3) => {
          let down = false, moved = false, sx = 0, sl = 0, snap = '';
          const pd = (e) => {
            if (e.pointerType !== 'mouse' || e.button !== 0) return;
            down = true; moved = false; sx = e.clientX; sl = sc3.scrollLeft;
            snap = sc3.style.scrollSnapType; sc3.style.scrollSnapType = 'none'; sc3.classList.add('dragging');
          };
          const pm = (e) => {
            if (!down) return;
            const dx = e.clientX - sx;
            if (Math.abs(dx) > 4) moved = true;
            sc3.scrollLeft = sl - dx;
            e.preventDefault();
          };
          const pu = () => {
            if (!down) return;
            down = false; sc3.classList.remove('dragging');
            const kids = Array.from(sc3.children[0] && sc3.children[0].classList.contains('svc-track') ? sc3.children[0].children : sc3.children);
            const pad = parseFloat(getComputedStyle(sc3).scrollPaddingLeft) || 0;
            const base = sc3.getBoundingClientRect().left + pad;
            let best = sc3.scrollLeft, bd = Infinity;
            kids.forEach((k) => { const d = k.getBoundingClientRect().left - base; if (Math.abs(d) < bd) { bd = Math.abs(d); best = sc3.scrollLeft + d; } });
            sc3.scrollTo({ left: best, behavior: 'smooth' });
            setTimeout(() => { sc3.style.scrollSnapType = snap; }, 450);
          };
          const ck = (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } };
          sc3.addEventListener('pointerdown', pd);
          win.addEventListener('pointermove', pm, { passive: false });
          win.addEventListener('pointerup', pu);
          sc3.addEventListener('click', ck, true);
          sc3.addEventListener('dragstart', (e) => e.preventDefault());
          cleanups.push(() => { sc3.removeEventListener('pointerdown', pd); win.removeEventListener('pointermove', pm); win.removeEventListener('pointerup', pu); sc3.removeEventListener('click', ck, true); sc3.style.scrollSnapType = ''; });
        });
      }

      /* custom cursor: lagging ring, contextual labels, dark-section awareness (desktop, fine pointer) */
      if (desk && win.matchMedia('(pointer: fine)').matches) {
        const cur = $('.cur'), dot = $('.cur-dot'), ring = $('.cur-ring');
        root.classList.add('has-cur');
        const dx = g.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' }), dy = g.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
        const rx = g.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' }), ry = g.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });
        let lastT = null;
        const cm = (e) => {
          dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
          const t = e.target;
          if (t === lastT) return;
          lastT = t;
          const lab = t.closest && (t.closest('.card') ? 'View' : t.closest('.art') ? 'Read' : t.closest('.dkc:not(.on)') ? 'Open' : '');
          ring.setAttribute('data-label', lab || '');
          cur.classList.toggle('lab', !!lab);
          cur.classList.toggle('hov', !lab && !!(t.closest && t.closest('a, button, .gb')));
          cur.classList.toggle('on-dark', !!(t.closest && t.closest('.why, .hero-f, .cta-f, .card, .dkc, .loader')));
        };
        const cd = () => cur.classList.add('down'), cu = () => cur.classList.remove('down');
        const cl = () => g.to(cur, { opacity: 0, duration: 0.3 }), ce = () => g.to(cur, { opacity: 1, duration: 0.3 });
        win.addEventListener('pointermove', cm, { passive: true });
        win.addEventListener('pointerdown', cd); win.addEventListener('pointerup', cu);
        doc.addEventListener('mouseleave', cl); doc.addEventListener('mouseenter', ce);
        cleanups.push(() => { win.removeEventListener('pointermove', cm); win.removeEventListener('pointerdown', cd); win.removeEventListener('pointerup', cu); doc.removeEventListener('mouseleave', cl); doc.removeEventListener('mouseenter', ce); root.classList.remove('has-cur'); });
      }

      /* card hover: tilt toward the pointer (CSS rotate axis/angle, so it never fights GSAP transforms) */
      if (desk && win.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let tEl = null, tRaf = 0, tx = 0, ty = 0;
        const pick = (t) => { const c = t.closest && t.closest('.card, .pil, .art'); return c && c.classList.contains('art') ? c.querySelector('.pimg') : c; };
        const untilt = (el) => { el.classList.remove('tilt'); el.style.rotate = ''; };
        const tiltMove = (e) => {
          const el = pick(e.target);
          if (el !== tEl) { if (tEl) untilt(tEl); tEl = el; if (el) el.classList.add('tilt'); }
          if (!el) return;
          const r = el.getBoundingClientRect();
          tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height;
          if (!tRaf) tRaf = requestAnimationFrame(() => {
            tRaf = 0; if (!tEl) return;
            const ax = -(ty - 0.5), ay = tx - 0.5, mag = Math.min(1, Math.hypot(ax, ay) * 2) * (tEl.classList.contains('pimg') ? 5 : 8);
            tEl.style.rotate = ax.toFixed(3) + ' ' + ay.toFixed(3) + ' 0 ' + mag.toFixed(2) + 'deg';
            tEl.style.setProperty('--gx', (tx * 100).toFixed(1) + '%'); tEl.style.setProperty('--gy', (ty * 100).toFixed(1) + '%');
          });
        };
        const tiltOut = () => { if (tEl) { untilt(tEl); tEl = null; } };
        root.addEventListener('pointermove', tiltMove, { passive: true });
        root.addEventListener('pointerleave', tiltOut);
        cleanups.push(() => { root.removeEventListener('pointermove', tiltMove); root.removeEventListener('pointerleave', tiltOut); tiltOut(); });
      }

      /* tap / click: a soft glow, a thin ring and a few twinkling sparkles */
      const bursts = $$('.burst');
      let bi = 0;
      const fire = (e) => {
        if (e.button > 0 || !bursts.length) return;
        const b = bursts[bi++ % bursts.length];
        const ring = b.querySelector('.b-ring'), glow = b.querySelector('.b-glow'), stars = Array.from(b.querySelectorAll('.b-s'));
        g.killTweensOf([b, ring, glow].concat(stars));
        g.set(b, { x: e.clientX, y: e.clientY, visibility: 'visible' });
        const tl = g.timeline({ onComplete: () => g.set(b, { visibility: 'hidden' }) });
        tl.fromTo(glow, { scale: 0.2, opacity: 1 }, { scale: 1.1, opacity: 0, duration: 0.55, ease: 'power2.out' }, 0)
          .fromTo(ring, { scale: 0.2, opacity: 0.9 }, { scale: 1.5, opacity: 0, duration: 0.7, ease: 'expo.out' }, 0);
        const off = Math.random() * Math.PI * 2, n = stars.length;
        stars.forEach((st, i) => {
          const a = off + (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.6;
          const d = 22 + Math.random() * 30, sz = 0.45 + Math.random() * 0.75, t0 = Math.random() * 0.08;
          tl.fromTo(st, { x: 0, y: 0, scale: 0, rotation: -90, opacity: 1 },
            { x: Math.cos(a) * d, y: Math.sin(a) * d, scale: sz, rotation: 0, duration: 0.42, ease: 'back.out(2.2)' }, t0)
            .to(st, { scale: 0, rotation: 90, duration: 0.38, ease: 'power2.in' }, t0 + 0.42);
        });
      };
      root.addEventListener('pointerdown', fire, { passive: true });
      cleanups.push(() => { root.removeEventListener('pointerdown', fire); g.set(bursts, { visibility: 'hidden' }); });

      return () => {
        if (onClick) root.removeEventListener('click', onClick);
        if (lenis) { g.ticker.remove(tick); lenis.destroy(); lenis = null; }
        splits.splice(0).forEach((s) => s.revert());
        cleanups.splice(0).forEach((f) => f());
        counters.splice(0).forEach(([tn, v]) => { tn.nodeValue = v; });
        root.classList.remove('js-h');
      };
    }, root);

    /* 15 · recalculate positions once images and fonts settle */
    let rq = null, dead = false;
    const refresh = () => { if (dead) return; if (rq) rq.kill(); rq = g.delayedCall(0.2, () => ST.refresh(true)); };
    const imgs = $$('img').filter((i) => !i.complete);
    const waits = imgs.map((i) => new Promise((res) => { i.addEventListener('load', res, { once: true }); i.addEventListener('error', res, { once: true }); }));
    if (doc.fonts && doc.fonts.ready) waits.push(doc.fonts.ready);
    Promise.all(waits).then(refresh);

    return () => {
      if (rq) rq.kill();
      dead = true;
      mm.revert();
      root.classList.remove('js-motion');
    };
  }
  /* event delegation — replaces the canvas' inline handlers */
  _bind() {
    const r = this._root, v = (this.v = this.renderVals());
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let magEl = null;
    const ev = (el, e) => ({ currentTarget: el, clientX: e.clientX, clientY: e.clientY, target: e.target });
    const move = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (fine) {
        const m = t.closest('[data-magnetic]');
        if (m !== magEl) { if (magEl) v.magOut({ currentTarget: magEl }); magEl = m; }
        if (m) v.mag(ev(m, e));
      }
      const d = t.closest('.dkc');
      if (d) v.spot(ev(d, e));
      const w = t.closest('.why');
      if (w) v.track(ev(w, e));
    };
    const over = (e) => {
      if (!fine || !(e.target instanceof Element)) return;
      const d = e.target.closest('.dkc[data-ind]');
      if (d) v['p' + d.dataset.ind]();
    };
    const click = (e) => {
      if (!(e.target instanceof Element)) return;
      const h = e.target.closest('[data-hs]');
      if (h) { v['hs' + h.dataset.hs](); return; }
      const dh = e.target.closest('.dk-hit');
      if (dh) { v['p' + dh.closest('.dkc').dataset.ind](); return; }
      const b = e.target.closest('.tm-btn[data-dir]');
      if (b) (b.dataset.dir === '1' ? v.tmNext : v.tmPrev)();
    };
    const focus = (e) => {
      if (!(e.target instanceof Element)) return;
      const dh = e.target.closest('.dk-hit');
      if (dh) v['p' + dh.closest('.dkc').dataset.ind]();
    };
    const why = r.querySelector('.why');
    const wOn = () => v.whyOn({ currentTarget: why }), wOff = () => v.whyOff({ currentTarget: why });
    r.addEventListener('pointermove', move, { passive: true });
    r.addEventListener('pointerover', over, { passive: true });
    r.addEventListener('click', click);
    r.addEventListener('focusin', focus);
    if (why) { why.addEventListener('pointerenter', wOn); why.addEventListener('pointerleave', wOff); }
    this._unbind = () => {
      r.removeEventListener('pointermove', move); r.removeEventListener('pointerover', over);
      r.removeEventListener('click', click); r.removeEventListener('focusin', focus);
      if (why) { why.removeEventListener('pointerenter', wOn); why.removeEventListener('pointerleave', wOff); }
    };
  }
  renderVals() {
    const st = this.state || {};
    const v = {};
    v.setRoot = (el) => { this._root = el; };
    v.rootCls = ((this.props || {}).motion ?? true) ? '' : 'still';
    v.menuOpen = !!st.menu;
    const ind = this._ind ?? 0;
    const tm = this._tm ?? 0;
    for (let i = 0; i < 4; i++) v['t' + i] = i === tm ? 'on' : '';
    for (let i = 0; i < 3; i++) v['hs' + i] = () => {
      if (this._heroGo) { this._heroGo(i); return; }
      const r = this._root || document.querySelector('.mp');
      if (!r) return;
      r.querySelectorAll('.hs-slide').forEach((el, k) => el.classList.toggle('on', k === i));
      r.querySelectorAll('.hs-dot').forEach((el, k) => el.classList.toggle('on', k === i));
    };
    v.tmPrev = () => { this._setTm((this._tm ?? 0) - 1); if (this._tmRestart) this._tmRestart(); };
    v.tmNext = () => { this._setTm((this._tm ?? 0) + 1); if (this._tmRestart) this._tmRestart(); };
    for (let i = 0; i < 8; i++) {
      v['c' + i] = i === ind ? 'on' : '';
      v['a' + i] = i === ind;
      v['p' + i] = () => { this._setInd(i); if (this._indRestart) this._indRestart(); };
    }
    v.indNum = '0' + (ind + 1);
    v.indP = ((ind + 1) / 8).toFixed(3);
    v.spot = (e) => {
      const el = e.currentTarget;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = Math.round(e.clientX - r.left), y = Math.round(e.clientY - r.top);
      if (el.__raf) cancelAnimationFrame(el.__raf);
      el.__raf = requestAnimationFrame(() => { el.style.setProperty('--px', x + 'px'); el.style.setProperty('--py', y + 'px'); });
    };
    v.viewMove = (e) => {
      const el = e.currentTarget;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width - 0.5).toFixed(3), my = ((e.clientY - r.top) / r.height - 0.5).toFixed(3);
      if (el.__raf) cancelAnimationFrame(el.__raf);
      el.__raf = requestAnimationFrame(() => { el.style.setProperty('--mx', mx); el.style.setProperty('--my', my); });
    };
    v.viewOut = (e) => { const el = e.currentTarget; if (el) { el.style.setProperty('--mx', 0); el.style.setProperty('--my', 0); } };
    v.toggleMenu = () => this.setState({ menu: !(this.state || {}).menu });
    v.closeMenu = () => this.setState({ menu: false });
    v.whyCls = '';
    v.whyOn = (e) => { if (e.currentTarget && !e.currentTarget.closest('.js-lens')) e.currentTarget.classList.add('is-live'); };
    v.whyOff = (e) => { if (e.currentTarget) e.currentTarget.classList.remove('is-live'); };
    v.track = (e) => {
      const el = e.currentTarget;
      if (!el || el.closest('.js-lens')) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (el.__raf) cancelAnimationFrame(el.__raf);
      const layers = el.__layers || (el.__layers = el.querySelectorAll('.why-hid, .why-torch'));
      el.__raf = requestAnimationFrame(() => {
        layers.forEach((l) => { l.style.setProperty('--fx', Math.round(x) + 'px'); l.style.setProperty('--fy', Math.round(y) + 'px'); });
      });
    };
    v.mag = (e) => {
      const el = e.currentTarget;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      el.style.translate = (dx * 0.16).toFixed(1) + 'px ' + (dy * 0.28 - 2).toFixed(1) + 'px';
    };
    v.magOut = (e) => { if (e.currentTarget) e.currentTarget.style.translate = ''; };
    return v;
  }
}
