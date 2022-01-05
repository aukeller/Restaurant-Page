export default function createMenu() {
    const content = document.querySelector('#content');

    const menuDiv = document.createElement('div');

    menuDiv.textContent = "menu";

    content.appendChild(menuDiv);

}