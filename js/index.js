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

var navBarElements = document.querySelectorAll('nav a');
for (let i = 0; i < navBarElements.length; i++) {
    navBarElements[i].textContent = siteContent["nav"][`nav-item-${i+1}`]
    navBarElements[i].style.color = 'green';
}
var nav = document.querySelector('nav');
let a = document.createElement('a');
    a.textContent = 'Visit';
let b = document.createElement('a');
b.textContent = 'Create';
nav.prepend(a)
nav.prepend(b)
// CTA
document.querySelector('.cta-text h1').textContent = siteContent["cta"]['h1'];
document.querySelector('.cta-text button').textContent = siteContent["cta"]['button'];
document.querySelector('.cta #cta-img').setAttribute('src', siteContent["cta"]['img-src'])

// Main

document.querySelector('.cta #cta-img').setAttribute('src', siteContent["cta"]['img-src'])
document.querySelector('.cta #cta-img').setAttribute('src', siteContent["cta"]['img-src'])

var topText = document.querySelectorAll('.main-content .top-content .text-content')
topText[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
topText[0].querySelector('p').textContent = siteContent['main-content']['features-content']
topText[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
topText[1].querySelector('p').textContent = siteContent['main-content']['about-content']

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

var bottomText = document.querySelectorAll('.main-content .bottom-content .text-content')
bottomText[0].querySelector('h4').textContent = siteContent['main-content']['services-h4']
bottomText[0].querySelector('p').textContent = siteContent['main-content']['services-content']
bottomText[1].querySelector('h4').textContent = siteContent['main-content']['product-h4']
bottomText[1].querySelector('p').textContent = siteContent['main-content']['product-content']
bottomText[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
bottomText[2].querySelector('p').textContent = siteContent['main-content']['vision-content']

const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4']
var contactPArray = contact.querySelectorAll('p');
console.log(contactPArray);

for (let i = 0; i < contactPArray.length; i++) {
  var keys = Object.keys( siteContent['contact'] );
  contactPArray[i].textContent = siteContent['contact'][keys[i+1]];
}
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];


