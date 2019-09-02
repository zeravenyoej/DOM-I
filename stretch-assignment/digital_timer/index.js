const navLinks = document.querySelectorAll('nav a');
navLinksNames = ['Services', 'Product', 'Vision', 'Features', 'About'];
navLinksNames.forEach (function (link) {
    navLinks.textContent = link;
})
