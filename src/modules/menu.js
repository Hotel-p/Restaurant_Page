import '../styles/module.css'

function render(arg){
    const element = document.createElement("div");
    element.classList.add("about");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.innerText = `Our Menu`;

    const subHeading1 = document.createElement("div");
    subHeading1.classList.add("sub-heading");
    subHeading1.innerText = `Appetizers`;
    const para1 = document.createElement("div");
    para1.innerText = `Whispering Woods Mushroom Risotto
    Creamy Arborio rice infused with wild forest mushrooms, drizzled with truffle essence and garnished with edible gold flakes. (Vegan option available)

    Fairy Ring Calamari
    Crispy calamari rings served with a tangy elderflower dipping sauce, accompanied by a sprinkle of enchanted sea salt.
    
    Pixie's Garden Spring Rolls
    Delicate spring rolls filled with julienned vegetables, edible flowers, and a hint of magic. Served with a zesty dragonfruit dipping sauce. (Vegan)`;

    const subHeading2 = document.createElement("div");
    subHeading2.classList.add("sub-heading");
    subHeading2.innerText = `Soups & Salads`;
    const para2 = document.createElement("div");
    para2.innerText = `Dragon's Breath Soup
    A velvety soup with a touch of mystery—upon serving, it releases a fragrant cloud of aromatic smoke, revealing the rich flavors of roasted vegetables and ancient herbs. (Vegan)
    
    Enchanted Garden Salad
    A delightful medley of fresh greens, vibrant edible blossoms, toasted nuts, and drizzled with an ethereal honey-lavender vinaigrette.`;

    const subHeading3 = document.createElement("div");
    subHeading3.classList.add("sub-heading");
    subHeading3.innerText = `Main Courses`;
    const para3 = document.createElement("div");
    para3.innerText = `Spellbound Sea Bass
    Pan-seared sea bass glazed with a delicate citrus-infused spell, accompanied by saffron-infused risotto and braised fennel fronds.
    
    Potion Pot Pie
    A bewitching pie with a flaky, color-changing crust that unveils layers of tender meat or seasonal vegetables in a rich, flavorful elixir reduction. Served with enchanted root vegetables.
    
    Enchanted Forest Linguine
    Fresh linguine tossed in a wild mushroom and truffle cream sauce, garnished with edible forest herbs and sprinkled with enchanted Parmesan.
    
    Legendary Labyrinth Lamb
    Slow-roasted lamb shank marinated in an ancient blend of spices, served with roasted root vegetables and a magical pomegranate reduction.`;

    const subHeading4 = document.createElement("div");
    subHeading4.classList.add("sub-heading");
    subHeading4.innerText = `Desserts`;
    const para4 = document.createElement("div");
    para4.innerText = `Mystic Molten Chocolate Cake
    A chocolate lover's dream—rich molten lava cake with a hidden center of edible glitter, served with vanilla bean ice cream and a sprinkle of stardust.
    
    Enchanted Berry Parfait
    Layers of mixed berries, rose-infused yogurt, and enchanted granola create a harmonious dessert symphony.
    
    Wandering Wizard's Cheesecake
    Creamy cheesecake infused with hints of wizardly spices and topped with a compote of foraged berries and candied starfruit.`;
    
    element.append(heading,subHeading1,para1,subHeading2,para2,subHeading3,para3,subHeading4,para4);
    arg.append(element);
}

export {render as renderMenu};