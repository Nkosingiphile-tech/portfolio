let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navmenu');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



document.addEventListener('DOMContentLoaded', function() {
    const navlinks = document.querySelectorAll('header nav a');
    const currentPath = window.location.pathname.split('/').pop().toLowerCase(); // Get the current page filename

    navlinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop().toLowerCase();

        if (currentPath === linkPath) {
            link.classList.add('active'); // Add 'active' class to the link matching the current page
        } else {
            link.classList.remove('active'); // Remove 'active' class from other links
        }

        // Special case for the homepage (often index.html or just '/')
        if (currentPath === '' || currentPath === 'index.html') {
            const homeLink = document.querySelector('header nav a[href="index.html"]'); // Adjust the selector if your homepage link is different (e.g., href="/")
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    });
});

window.onscroll = () => {
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header nav a');
    const currentPath = window.location.pathname.split('/').pop().toLowerCase();

    // Only remove the scroll-based active class if we are NOT on the homepage
    if (currentPath !== '' && currentPath !== 'index.html') {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
                });
            }
        });
    } else {
        // If on the homepage, ensure only the "Home" link (based on href) is active
        navlinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop().toLowerCase();
            if (linkPath === '' || linkPath === 'index.html') {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
};