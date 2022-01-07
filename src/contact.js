import './style.css';

export default function createContact() {
    const content = document.querySelector('#content');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    contactDiv.appendChild(createHeader());
    contactDiv.appendChild(createInfo());
    content.appendChild(contactDiv);

}

const createHeader = () => {
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = "Hours & Location";

    return contactHeader;
}

const createInfo = () => {
    const info = document.createElement('div');
    
    const street = document.createElement('p');
    street.textContent = "2000 Baker St,";
    
    const cityState = document.createElement('p');
    cityState.textContent = "San Francisco, CA 94123";
    
    const phone = document.createElement('p');
    phone.textContent = "(925) 900-8000";

    const email = document.createElement('p');
    email.textContent = "restaurant@gmail.com";

    info.append(street, cityState, phone, email);

    return info;
}