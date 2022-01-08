import './style.css';

export default function createContact() {
    const content = document.querySelector('#content');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    contactDiv.appendChild(createHeader());
    contactDiv.appendChild(createInfo());
    contactDiv.appendChild(createSchedule());
    content.appendChild(contactDiv);

}

const createHeader = () => {
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = "Hours & Location";

    return contactHeader;
}

const createInfo = () => {
    const info = document.createElement('div');
    
    const street = document.createElement('h4');
    street.textContent = "2000 Baker St,";
    
    const cityState = document.createElement('h4');
    cityState.textContent = "San Francisco, CA 94123";
    
    const phone = document.createElement('h4');
    phone.textContent = "(925) 900-8000";

    const email = document.createElement('h4');
    email.textContent = "restaurant@gmail.com";

    info.append(street, cityState, phone, email);
    
    return info;
}

const createSchedule = () => {
    const schedule = document.createElement('div');

    const tueThur = document.createElement('p');
    tueThur.textContent = "Tuesday-Thursday 5 PM - 9 PM";
    
    const friSat = document.createElement('p');
    friSat.textContent = "Friday & Saturday 12 PM - 9:30 PM";
    
    const sunday = document.createElement('p');
    sunday.textContent = "Sunday 12 PM - 9 PM";

    schedule.append(tueThur, friSat, sunday);
    schedule.classList.add('schedule');

    return schedule
}