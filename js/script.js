(function () {
  'use strict';
  var button = document.querySelector('.nav-toggle');
  var nav = document.querySelector('#site-nav');
  if (button && nav) {
    function closeMenu() { button.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); button.focus(); } });
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
}());
