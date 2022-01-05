import addContents from './onPageLoad';
import createMenu from './menu';
import createContact from './contact';

const tabsContainer = document.querySelector("#tabs-container");
const content = document.querySelector('#content');

function createTabs() {
    const container = document.createElement('div');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.id = "home";

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.id = "contact";

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.id = "menu";

    container.appendChild(homeBtn);
    container.appendChild(contactBtn);
    container.appendChild(menuBtn);

    return container;
}

tabsContainer.appendChild(createTabs());
addContents(content);

const tabs = document.querySelectorAll('button');


tabs.forEach(tab => tab.addEventListener('click', (e) => {
    clearContents();
    loadTab(e);


}));

function loadTab(e) {
    if (e.target.id == "home") {
        addContents(content);
    } else if (e.target.id == "menu") {
        createMenu();
    } else {
        createContact();
    }
}

function clearContents() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}