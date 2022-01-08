export default function createMenu() {
    const content = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    
    const firstMenuItems = ["Marinated Olives", "Ignalat burrata", "smoked burrata", "salumi", "arugula salad", "citrus salad"];
    const secondMenuItems = ["braised meatballs", "beet salad", "romanesco", "zuppa", "trippa", "Calamari", "octopus carpaccio"];

    menuDiv.appendChild(createMenuPanel(firstMenuItems));
    menuDiv.appendChild(createMenuPanel(secondMenuItems));

    content.appendChild(menuDiv);

}

const createMenuPanel = (items) => {
    const container = document.createElement('div');
    
    items.forEach(item => {
        let itemP = document.createElement('h3');
        itemP.textContent = item;
        container.appendChild(itemP);
    });

    return container;
}

