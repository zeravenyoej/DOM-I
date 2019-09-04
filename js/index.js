const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//****************** HEADER ********************************* */
const headerLinks = document.querySelectorAll('nav a');

headerLinks[0].textContent = 'Services';
headerLinks[1].textContent = 'Product';
headerLinks[2].textContent = 'Vision';
headerLinks[3].textContent = 'Features';
headerLinks[4].textContent = 'About';
headerLinks[5].textContent = 'Contact';

const nav = document.querySelector('header nav');

const firstNav = document.createElement('a');
const lastNav = document.createElement('a');
firstNav.textContent = 'first';
lastNav.textContent = 'last'; 
firstNav.style.color = 'green';
lastNav.style.color = 'green';

nav.prepend(firstNav);
nav.append(lastNav);


headerLinks.forEach(function (link) {
  link.style.color = 'green';
})

//****************** .CTA (STUFF UNDER HEADER) ********************************* */
const h1Text = document.querySelector('h1');
h1Text.textContent = "DOM IS AWESOME";

const bttn = document.querySelector('button');
bttn.textContent = 'Get Started';

const mainImg = document.querySelector('#cta-img');
mainImg.src = "img/header-img.png";


// ********************************* MAIN CONTENT ***********************//
const h4Text = document.querySelectorAll('.main-content h4');

h4Text[0].textContent = 'FEATURES';
h4Text[1].textContent = 'ABOUT';
h4Text[2].textContent = 'SERVICES';
h4Text[3].textContent = 'PRODUCT';
h4Text[4].textContent = 'VISION';

const contentImg = document.querySelector('#middle-img');
contentImg.src = 'img/mid-page-accent.jpg';


const pText = document.querySelectorAll('.main-content p');

pText[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//************************************ CONTACT **************************** */

const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = 'CONTACT';

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = '123 Way 457 Street Somewhere, USA';
contactP[1].textContent = '1 (800) 888-8888';
contactP[2].textContent = 'sales@greatidea.io';


//******************************** FOOTER ******************************** */


const footerText = document.querySelector('footer p');
footerText.textContent = 'Copyright Great Idea! 2018';

