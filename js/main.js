(function() {
  'use strict';

  /* ─── Nav hide/show on scroll (shared) ─── */
  const nav = document.querySelector('.nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 200) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      lastScroll = current;
    }, { passive: true });
  }

  /* ─── Intersection Observer for scroll reveal (index.html) ─── */
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });
  }

  /* ─── #figures anchor offset (index.html) ─── */
  if (location.hash === '#figures') {
    setTimeout(() => {
      const target = document.getElementById('figures');
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 300);
  }

  /* ─── Hash routing for teacher bio views (teachers.html) ─── */
  const views = document.querySelectorAll('.view');
  if (views.length > 0) {
    const order = ['shakyamuni', 'buddhaghosa', 'mahasi', 'goenka', 'nhat-hanh', 'kabat-zinn'];

    function route() {
      const hash = location.hash.slice(1); // remove #
      const allViews = document.querySelectorAll('.view');

      if (!hash) {
        // No hash — default to first teacher
        allViews.forEach((v) => v.classList.remove('active'));
        const first = document.getElementById('view-shakyamuni');
        if (first) first.classList.add('active');
        document.title = '释迦牟尼 · 正念导师传记';
      } else if (order.indexOf(hash) !== -1) {
        // Detail view
        allViews.forEach((v) => v.classList.remove('active'));
        const target = document.getElementById('view-' + hash);
        if (target) {
          target.classList.add('active');
          // Update page title
          const name = target.querySelector('.bio__name');
          if (name) document.title = name.textContent + ' · 正念导师传记';
        }
        window.scrollTo(0, 0);
      }
    }

    // Initial route
    route();

    // Listen for hash changes
    window.addEventListener('hashchange', route);
  }
})();
