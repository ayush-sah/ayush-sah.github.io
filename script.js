/* =================================================================
   Ayush Sah — Portfolio Script
   Minimal JS: typewriter, year, smooth fade-in on scroll
   ================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Year in footer ----------
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ---------- Typewriter effect for hero tagline ----------
    const typedEl = document.getElementById('typed');
    if (typedEl) {
        const phrases = [
            'backend engineer · fintech · distributed systems',
            'building data-intensive platforms at Deutsche Bank',
            'java · golang · python · gcp',
            'currently shipping dbCIS to corporate clients'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let pauseAfterTyping = 1800;
        let pauseAfterDeleting = 400;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (!isDeleting) {
                typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(type, pauseAfterTyping);
                    return;
                }
                setTimeout(type, 55 + Math.random() * 50);
            } else {
                typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(type, pauseAfterDeleting);
                    return;
                }
                setTimeout(type, 25);
            }
        }

        // Respect reduced motion
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            typedEl.textContent = phrases[0];
        } else {
            setTimeout(type, 600);
        }
    }

    // ---------- Fade-in on scroll for sections ----------
    // Only run if IntersectionObserver is available. Add a class to body
    // first so CSS knows to hide sections initially — this way, if JS fails
    // partway, content is never permanently invisible.
    if ('IntersectionObserver' in window) {
        document.body.classList.add('js-scroll-fade');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -60px 0px'
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Safety net: after 4 seconds, force everything visible regardless.
        // Protects against any observer edge case.
        setTimeout(() => {
            document.querySelectorAll('.section').forEach(s => s.classList.add('is-visible'));
        }, 4000);
    }

    // ---------- Konami-style easter egg: type "sudo" anywhere ----------
    let buffer = '';
    document.addEventListener('keydown', (e) => {
        if (e.key.length === 1) {
            buffer = (buffer + e.key).slice(-4);
            if (buffer === 'sudo') {
                document.body.style.transition = 'filter 0.3s';
                document.body.style.filter = 'hue-rotate(60deg)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 800);
                buffer = '';
            }
        }
    });

});
