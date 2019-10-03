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

//*****************HEADER *****************************************/
const headerLinks = document.querySelectorAll('nav a');
headerLinks[0].textContent = siteContent['nav']['nav-item-1'];
headerLinks[1].textContent = siteContent['nav']['nav-item-2'];
headerLinks[2].textContent = siteContent['nav']['nav-item-3'];
headerLinks[3].textContent = siteContent['nav']['nav-item-4'];
headerLinks[4].textContent = siteContent['nav']['nav-item-5'];
headerLinks[5].textContent = siteContent['nav']['nav-item-6'];

headerLinks[0].style.color='green';
headerLinks[1].style.color='green';
headerLinks[2].style.color='green';
headerLinks[3].style.color='green';
headerLinks[4].style.color='green';
headerLinks[5].style.color='green';

//Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
const nav = document.querySelector('nav');
const firstLink = document.createElement('a');
firstLink.textContent='first';
nav.prepend(firstLink);

const lastLink = document.createElement('a');
lastLink.textContent='last';
nav.appendChild(lastLink);


// ************************** CTA ***************************************/
const dom = document.querySelector('h1');
dom.textContent=siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const mainImg = document.querySelector('#cta-img');
mainImg.src=siteContent['cta']['img-src'];

// ******************************** h4s ********************/
const h4s = document.querySelectorAll('h4');
h4s[0].textContent=siteContent['main-content']['features-h4'];
h4s[1].textContent=siteContent['main-content']['about-h4'];
h4s[2].textContent=siteContent['main-content']['services-h4'];
h4s[3].textContent=siteContent['main-content']['product-h4'];
h4s[4].textContent=siteContent['main-content']['vision-h4'];
h4s[5].textContent=siteContent['contact']['contact-h4'];

// **************************** P-TAGS *****************************/
const ps= document.querySelectorAll('p');
ps[0].textContent=siteContent['main-content']['features-content'];
ps[1].textContent=siteContent['main-content']['about-content'];
ps[2].textContent=siteContent['main-content']['services-content'];
ps[3].textContent=siteContent['main-content']['product-content'];
ps[4].textContent=siteContent['main-content']['vision-content'];
ps[5].textContent=siteContent['contact']['address'];
ps[6].textContent=siteContent['contact']['phone'];
ps[7].textContent=siteContent['contact']['email'];

// ************************************ MAIN IMAGE *****************/
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// **************************** FOOTER *****************************/
const footer = document.querySelector(' footer p')
footer.textContent=siteContent['footer']['copyright'];

