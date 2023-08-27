import './styles/reset.css';
import './styles/style.css';

import {renderAbout}  from './modules/about.js';
import {renderHome} from './modules/home.js';
import {renderMenu} from './modules/menu.js';

const content = document.querySelector(".content");

// navbar start

const navbar = document.createElement("div");
navbar.classList.add("navbar");

const options = document.createElement("ul");
options.classList.add("options");

const title = document.createElement("h1");
title.innerText = 'The Restaurant';

const home = document.createElement("li");
const menu = document.createElement("li");
const about = document.createElement("li");

home.innerText = 'Home';
menu.innerText = 'Menu';
about.innerText = 'About';

options.append(home, menu, about);
navbar.append(title, options);

// navbar end


// hero start

const hero = document.createElement("div");
hero.classList.add("hero");

const heroContent = document.createElement("hero-content");
heroContent.classList.add("hero-content");

renderHome(heroContent);

home.addEventListener('click', ()=>{
    heroContent.innerHTML = '';
    renderHome(heroContent);
})

menu.addEventListener('click', ()=>{
    heroContent.innerHTML = '';
    renderMenu(heroContent);
})

about.addEventListener('click', ()=>{
    heroContent.innerHTML = '';
    renderAbout(heroContent);
})

hero.append(heroContent);

// hero end


// footer start 

const footer = document.createElement("div");
footer.classList.add("footer");
footer.innerText = "Serving since 2023"

// footer end



content.append(navbar, hero, footer);