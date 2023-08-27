import '../styles/module.css'

function render(arg){
    const element = document.createElement("div");
    element.classList.add("about");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.innerText = `Welcome to Enchanted Eats!`;

    const para1 = document.createElement("div");
    para1.innerText = `Step into a Realm of Gastronomic Wonder Discover a dining experience like no other at Enchanted Eats, where the art of cooking meets the allure of enchantment. Nestled within the heart of a mystical forest, our restaurant beckons you to embark on a journey of taste, sight, and imagination.`;

    const para2 = document.createElement("div");
    para2.innerText = `Wander through our ethereal interior, adorned with hanging gardens, twinkling stars, and captivating tapestries that tell tales of old. Every nook and cranny is designed to transport you to a world of magic.`;

    const para3 = document.createElement("div");
    para3.innerText = `Our menu is a blend of tradition and innovation, where each dish tells a unique story. From the moment you taste our "Whispering Woods Mushroom Risotto" to the grand reveal of the "Enchanted Firecracker Prawns," every bite is an adventure.`;
    
    const para4 = document.createElement("div");
    para4.innerText = `Enchanted Eats is dedicated to creating a haven where the ordinary transforms into the extraordinary, and where every guest leaves with a sense of childlike wonder. The restaurant aims to remind its patrons that the magic of imagination is only a bite away. Experience the enchantment, savor the flavors, and immerse yourself in the world of Enchanted Eats – where the boundary between reality and fantasy blurs, leaving you spellbound and craving more.`;

    element.append(heading,para1,para2,para3,para4);
    arg.append(element);
}

export {render as renderHome};