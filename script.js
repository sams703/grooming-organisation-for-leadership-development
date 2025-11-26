// Mobile menu toggle + close on link click
(function () {
    const btn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // close menu when any nav link is clicked (mobile)
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    });
})();

// Gallery show/hide toggle
(function () {
    const openBtn = document.getElementById('open-gallery-btn');
    const closeBtn = document.getElementById('close-gallery-btn');
    const gallery = document.getElementById('gallery');
    if (!openBtn || !gallery) return;

    function showGallery() {
        gallery.classList.remove('hidden');
        gallery.classList.add('show');
        openBtn.setAttribute('aria-expanded', 'true');
        setTimeout(() => gallery.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    }

    function hideGallery() {
        gallery.classList.remove('show');
        gallery.classList.add('hidden');
        if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
    }

    openBtn.addEventListener('click', showGallery);
    if (closeBtn) closeBtn.addEventListener('click', hideGallery);

    gallery.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        // keep gallery open if the link navigates away
    }));
})();

