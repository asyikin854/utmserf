/* global document, window, clearInterval, setInterval, clearTimeout, setTimeout */
(function () {
  'use strict';

  /* ── Sticky Header ── */
  const header = document.getElementById('hiref-header');
  if (header) {
    const THRESHOLD = 60;
    function onScroll() {
      header.classList.toggle('is-solid', window.scrollY > THRESHOLD);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Desktop Mega-Menu ── */
  const navItems = document.querySelectorAll('.hiref-nav__item');
  let dropdownTimer = null;

  navItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (dropdownTimer) clearTimeout(dropdownTimer);
      navItems.forEach(function (n) { if (n !== item) n.classList.remove('is-active'); });
      item.classList.add('is-active');
    });
    item.addEventListener('mouseleave', function () {
      dropdownTimer = setTimeout(function () {
        item.classList.remove('is-active');
      }, 120);
    });
  });

  // Keep dropdown open when hovering over it
  document.querySelectorAll('.hiref-dropdown').forEach(function (dd) {
    dd.addEventListener('mouseenter', function () {
      if (dropdownTimer) clearTimeout(dropdownTimer);
    });
    dd.addEventListener('mouseleave', function () {
      dropdownTimer = setTimeout(function () {
        navItems.forEach(function (n) { n.classList.remove('is-active'); });
      }, 120);
    });
  });

  /* ── Mobile Hamburger ── */
  var hamburger = document.getElementById('hiref-hamburger');
  var mobileMenu = document.getElementById('hiref-mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  /* ── Hero Image Slider ── */
  var heroSlides = document.querySelectorAll('.hiref-hero__slide');
  var heroDots   = document.querySelectorAll('.hiref-hero__dot[data-slide]');
  var slideTimer = null;
  var currentSlide = 0;

  function goToSlide(i) {
    heroSlides.forEach(function (s) { s.classList.remove('is-active'); });
    heroDots.forEach(function (d) { d.classList.remove('is-active'); });
    currentSlide = (i + heroSlides.length) % heroSlides.length;
    if (heroSlides[currentSlide]) heroSlides[currentSlide].classList.add('is-active');
    var dot = document.querySelector('.hiref-hero__dot[data-slide="' + currentSlide + '"]');
    if (dot) dot.classList.add('is-active');
  }

  function startSlideTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(function () { goToSlide(currentSlide + 1); }, 6000);
  }

  if (heroSlides.length > 0) {
    heroDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goToSlide(parseInt(this.getAttribute('data-slide'), 10));
        startSlideTimer();
      });
    });
    startSlideTimer();
  }

  /* ── Hero Topic Cycler ── */
  var topicEl    = document.querySelector('.hiref-hero__topic');
  var TOPICS     = [
    'Turbulent Combustion & Flame Dynamics',
    'Supersonic Reacting Flow Research',
    'Nanomaterial Flame-Based Synthesis',
    'Microscale Combustion Systems',
    'Thermofluids & Heat Transfer'
  ];
  var topicIdx   = 0;
  var topicTimer = null;

  function cycleTopic() {
    if (!topicEl) return;
    topicEl.classList.add('is-out');
    topicTimer = setTimeout(function () {
      topicIdx = (topicIdx + 1) % TOPICS.length;
      topicEl.textContent = TOPICS[topicIdx];
      topicEl.classList.remove('is-out');
      topicTimer = setTimeout(cycleTopic, 4000);
    }, 500);
  }

  if (topicEl) {
    topicEl.textContent = TOPICS[0];
    topicTimer = setTimeout(cycleTopic, 4000);
  }

  /* ── Collaboration Tabbed Carousel ── */
  var collabTabs    = document.querySelectorAll('.hiref-collab__tab');
  var collabPanels  = document.querySelectorAll('.hiref-collab__panel');
  var collabTimers  = {};
  var CARDS_VISIBLE = window.innerWidth < 768 ? 2 : 4;

  window.addEventListener('resize', function () {
    CARDS_VISIBLE = window.innerWidth < 768 ? 2 : 4;
    collabPanels.forEach(function (panel) {
      var track = panel.querySelector('.hiref-collab__track');
      if (track) updateTrack(track, 0, panel.getAttribute('data-tab'));
    });
  });

  function getCardWidth(track) {
    var gap = 16;
    return (track.parentElement.offsetWidth - gap * (CARDS_VISIBLE - 1)) / CARDS_VISIBLE;
  }

  function updateTrack(track, offset, tabId) {
    var cw = getCardWidth(track);
    var cards = track.querySelectorAll('.hiref-collab-card');
    cards.forEach(function (card) {
      card.style.width = cw + 'px';
    });
    track.style.transform = 'translateX(-' + (offset * (cw + 16)) + 'px)';

    var total = Math.ceil(cards.length / 2); // doubled, real count
    var panel = track.closest('.hiref-collab__panel');
    var dots  = panel ? panel.querySelectorAll('.hiref-collab__dot') : [];
    dots.forEach(function (d, i) {
      d.classList.toggle('is-active', i === (offset % total));
    });
  }

  function startCollabTimer(tabId) {
    clearInterval(collabTimers[tabId]);
    var panel = document.querySelector('.hiref-collab__panel[data-tab="' + tabId + '"]');
    if (!panel) return;
    var track = panel.querySelector('.hiref-collab__track');
    if (!track) return;
    var items = track.querySelectorAll('.hiref-collab-card');
    var total = Math.ceil(items.length / 2);
    var offset = parseInt(panel.getAttribute('data-offset') || '0', 10);

    collabTimers[tabId] = setInterval(function () {
      offset = (offset + 1) % total;
      panel.setAttribute('data-offset', offset);
      updateTrack(track, offset, tabId);
    }, 2800);
  }

  function activateTab(tabId) {
    collabTabs.forEach(function (t) {
      t.classList.toggle('is-active', t.getAttribute('data-tab') === tabId);
    });
    collabPanels.forEach(function (p) {
      var isActive = p.getAttribute('data-tab') === tabId;
      p.classList.toggle('is-active', isActive);
      if (isActive) {
        p.setAttribute('data-offset', '0');
        var track = p.querySelector('.hiref-collab__track');
        if (track) updateTrack(track, 0, tabId);
        startCollabTimer(tabId);
      } else {
        clearInterval(collabTimers[p.getAttribute('data-tab')]);
      }
    });
  }

  collabTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activateTab(tab.getAttribute('data-tab'));
    });
  });

  // Arrow navigation
  document.querySelectorAll('.hiref-collab__arrow').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel  = btn.closest('.hiref-collab__panel');
      var track  = panel ? panel.querySelector('.hiref-collab__track') : null;
      if (!track) return;
      var tabId  = panel.getAttribute('data-tab');
      var items  = track.querySelectorAll('.hiref-collab-card');
      var total  = Math.ceil(items.length / 2);
      var offset = parseInt(panel.getAttribute('data-offset') || '0', 10);
      var dir    = btn.classList.contains('hiref-collab__arrow--prev') ? -1 : 1;
      offset     = (offset + dir + total) % total;
      panel.setAttribute('data-offset', offset);
      updateTrack(track, offset, tabId);
      startCollabTimer(tabId);
    });
  });

  // Dot navigation
  document.querySelectorAll('.hiref-collab__dot').forEach(function (dot) {
    dot.addEventListener('click', function () {
      var panel  = dot.closest('.hiref-collab__panel');
      var track  = panel ? panel.querySelector('.hiref-collab__track') : null;
      if (!track) return;
      var tabId  = panel.getAttribute('data-tab');
      var offset = parseInt(dot.getAttribute('data-index') || '0', 10);
      panel.setAttribute('data-offset', offset);
      updateTrack(track, offset, tabId);
      startCollabTimer(tabId);
    });
  });

  // Init first tab
  if (collabTabs.length > 0) {
    var firstTab = collabTabs[0].getAttribute('data-tab');
    activateTab(firstTab);
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var hash = this.getAttribute('href');
      if (hash === '#') return;
      var target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        var headerH = header ? header.offsetHeight : 0;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - headerH,
          behavior: 'smooth'
        });
      }
    });
  });

}());
