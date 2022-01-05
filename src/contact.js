import './style.css';

export default function createContact() {
    const content = document.querySelector('#content');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const contactHeader = document.createElement('h2');
    contactHeader.textContent = "Hours & Location"
    
    contactDiv.appendChild(contactHeader);
    content.appendChild(contactDiv);

}