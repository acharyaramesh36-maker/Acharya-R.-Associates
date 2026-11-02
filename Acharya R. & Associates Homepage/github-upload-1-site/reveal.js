// Staggered scroll-reveal for grids marked data-rv: each item fades up and its top rule draws in.
// Uses the Web Animations API so it still plays where page CSS disables transitions.
(function () {
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;
  var EASE = 'cubic-bezier(.22,.7,.2,1)';
  function show(g) {
    if (g._shown) return; g._shown = 1;
    Array.prototype.forEach.call(g.children, function (it, i) {
      var d = i * 140;
      if (it.animate) {
        it.animate([{ opacity: 0, transform: 'translateY(36px)' }, { opacity: 1, transform: 'none' }], { duration: 900, delay: d, easing: EASE, fill: 'both' });
        var ln = it.querySelector('[data-rv-line]');
        if (ln) ln.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 1100, delay: d + 150, easing: 'cubic-bezier(.65,.05,.25,1)', fill: 'both' });
      }
      it.style.opacity = '';
    });
  }
  function prep(g) {
    if (g._rv) return; g._rv = 1;
    if (!io || !document.body.animate) return;
    Array.prototype.forEach.call(g.children, function (it) {
      var c = getComputedStyle(it).borderTopColor;
      it.style.position = 'relative'; it.style.borderTopColor = 'transparent'; it.style.opacity = '0';
      var ln = document.createElement('span'); ln.setAttribute('data-rv-line', ''); ln.setAttribute('aria-hidden', 'true');
      ln.style.cssText = 'position:absolute;left:0;right:0;top:-1px;height:1px;background:' + c + ';transform-origin:left center;transform:scaleX(0);pointer-events:none';
      it.insertBefore(ln, it.firstChild);
      it.addEventListener('mouseenter', function () { ln.style.background = '#D4B26A'; ln.style.height = '2px'; });
      it.addEventListener('mouseleave', function () { ln.style.background = c; ln.style.height = '1px'; });
    });
    io.observe(g);
  }
  function check() { document.querySelectorAll('[data-rv]').forEach(function (g) { if (!g._rv || g._shown || !g.style) return; var r = g.getBoundingClientRect(); if (r.top < innerHeight * 0.92 && r.bottom > 0) show(g); }); }
  function scan() { document.querySelectorAll('[data-rv]').forEach(prep); check(); }
  addEventListener('scroll', check, { passive: true }); addEventListener('resize', check);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
  setInterval(scan, 800);
})();
