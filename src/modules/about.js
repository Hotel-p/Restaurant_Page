import '../styles/module.css'

function render(arg){
    const element = document.createElement("div");
    element.classList.add("about");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.innerText = `About Us`;

    const para1 = document.createElement("div");
    para1.innerText = `Hey There! We at Enchanted Eats are a team of passionate individuals dedicated to bring about a culinary revolution`;

    const para2 = document.createElement("div");
    para2.innerText = `Here you step into a world of culinary magic and delight at Enchanted Eats, where gastronomy and enchantment blend seamlessly to create an unforgettable dining experience. Nestled in the heart of a whimsical forest, this fictional restaurant offers a one-of-a-kind journey for your senses.`;

    const para3 = document.createElement("div");
    para3.innerText = `The menu at Enchanted Eats is a fusion of traditional and imaginative cuisines from around the world. Each dish is carefully crafted to tell a story, drawing inspiration from myths, legends, and fairy tales. From the "Dragon's Breath Soup" that billows aromatic smoke upon serving to the "Enchanted Garden Salad" filled with edible flowers and delicate herbs, every plate is a work of art. The "Potion Pot Pie" changes colors as you eat it, revealing layers of flavors as enchanting as its appearance.`;

    const para4 = document.createElement("div");
    para4.innerText = `Enchanted Eats is dedicated to creating a haven where the ordinary transforms into the extraordinary, and where every guest leaves with a sense of childlike wonder. The restaurant aims to remind its patrons that the magic of imagination is only a bite away. Experience the enchantment, savor the flavors, and immerse yourself in the world of Enchanted Eats – where the boundary between reality and fantasy blurs, leaving you spellbound and craving more.`;

    element.append(heading,para1,para2,para3,para4);
    arg.append(element);
}

export {render as renderAbout};