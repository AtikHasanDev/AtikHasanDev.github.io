(function () {
  'use strict';
  var button = document.querySelector('.nav-toggle');
  var nav = document.querySelector('#site-nav');
  if (button) button.innerHTML = 'Menu <span class="menu-icon" aria-hidden="true"></span>';
  if (nav) Array.from(nav.querySelectorAll('a')).forEach(function (link, index) { link.style.setProperty('--index', index); });
  if (button && nav) {
    function closeMenu() { button.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); document.body.classList.remove('menu-open'); }
    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); button.focus(); } });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !nav.classList.contains('is-open')) return;
      var last = nav.querySelector('a:last-child');
      if (e.shiftKey && document.activeElement === button) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); button.focus(); }
    });
    window.matchMedia('(min-width: 701px)').addEventListener('change', function (e) { if (e.matches) closeMenu(); });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target) && !button.contains(e.target)) closeMenu(); });
    var sections = Array.from(document.querySelectorAll('main > section[id]'));
    var links = Array.from(nav.querySelectorAll('a'));
    var queued = false;
    function updateSection() {
      var active = sections[0];
      sections.forEach(function (section) { if (section.getBoundingClientRect().top <= 150) active = section; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) active = sections[sections.length - 1];
      if (active) links.forEach(function (link) {
        if (link.getAttribute('href') === '#' + active.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      queued = false;
    }
    window.addEventListener('scroll', function () { if (!queued) { queued = true; window.requestAnimationFrame(updateSection); } }, { passive: true });
    window.addEventListener('resize', updateSection); window.addEventListener('load', updateSection); updateSection();
  }
  var year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    document.querySelectorAll('.section:not(.section-main):not(.tagline-section) .section-block').forEach(function (section) {
      section.classList.add('reveal'); observer.observe(section);
    });
    var words = document.querySelectorAll('.tagline span');
    var wordObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        // A short stagger preserves reading order for words on the same line.
        setTimeout(function () { entry.target.classList.add('is-visible'); }, Number(entry.target.dataset.order) * 60);
        wordObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -25% 0px', threshold: 1 });
    words.forEach(function (word, index) { word.dataset.order = index; wordObserver.observe(word); });
    document.documentElement.classList.add('motion-ready');
  }
}());
