import Restaurant from './restaurant2.jpeg';



function addContents(content) {    
    const headline = document.createElement('p');
    headline.textContent = `The best restaurant in the bay area, hands down - Some Reviewer`;

    const myRestaurant = new Image();
    myRestaurant.src = Restaurant;

    const copy = document.createElement('p');
    copy.textContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis pulvinar ante, quis lacinia dui. Pellentesque habitant morbi
    tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet felis ut leo congue bibendum sollicitudin vel ipsum.
    Maecenas et eros id justo consectetur facilisis eu eget arcu. Sed porta tincidunt nunc id mollis. Curabitur lorem arcu, fermentum nec nisi 
    a, ullamcorper tempus purus. Quisque enim arcu, faucibus nec nunc id, rutrum laoreet magna. In ultrices lectus at nunc malesuada, id 
    fringilla ante sollicitudin. Cras pretium sodales vestibulum. Fusce eu tellus nunc. Vestibulum nec eros sed purus tempus eleifend.
    `;
    content.appendChild(headline);
    content.appendChild(myRestaurant);
    content.appendChild(copy);
};



export default addContents;