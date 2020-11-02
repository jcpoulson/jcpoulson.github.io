// Variables
const modalSection = document.querySelector('.modal-test');
const cardInfo = document.querySelector('.info');
const img = document.querySelector('.img');
const container = document.querySelector('.container');
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
const employees = [];

//Fetch Request
/* The fetch request first parses the json data
    Then it returns data in an array
    then it maps through the array and stores all the data properties in an object called dude
    finally it generates html through the generateHTML function for each object in the array
*/
fetch(urlAPI)
    .then(response => response.json())
    .then(data => data.results)
    .then(people => people.map(person => {
        person.name = person.name.first + ' ' + person.name.last;
        person.address = person.location.street.number + ' ' + person.location.street.name + ' ' + person.location.city + ', ' + person.location.state + ' ' + person.location.postcode;
        let dude = ({name: person.name, email: person.email, city: person.location.city, img: person.picture.large, phone: person.phone, dob: person.dob.date, address: person.address})
        return dude;
    }))
     .then(generateHTML)
    
    
    

//Functions

/* 
    This function stores the object properties in variables and then generates HTML
    through string interpolation, then adds it to the DOM
*/
function generateHTML(person, index) {
    let employees = person;
    
    employees.forEach( (employee, index) => {
        let div = document.createElement('div');
    container.appendChild(div);
    let name = employee.name;
    let email = employee.email;
    let city = employee.city;
    let pic = employee.img;
    let phone = employee.phone;
    let address = employee.address;
    let dob = employee.dob;

    let date = new Date(dob);
    
    let html = 
`<div class="card" data-index="${index}" id="card">
        <div class="img">
            <img src="${pic}">
        </div>
        <div class="info">
            <h1>${name}</h1>
            <p class="email">${email}</p>
            <p class="city">${city}</p>
            <p class="phone" style="display: none;">${phone}</p>
            <p class="address" style="display: none;">${address}</p>
            <p class="dob" style="display: none;">${date}</p>
        </div>
    </div>`
    div.innerHTML = html;
    })
}






// Modal Interaction

/* 
    This function grabs all the data from the card being clicked and then uses that data to generate HTML and display it
    on the page
*/

container.addEventListener('click', function(e) {
    if (e.target !== container) {
        const card = e.target.closest('.card');
        const index = card.getAttribute('data-index');

        function displayModal(index) {
            let name = card.querySelector('.info').querySelector('h1').textContent;
            let picture = card.querySelector('.img').querySelector('img').src;
            let email = card.querySelector('.info').querySelector('.email').textContent;
            let city = card.querySelector('.info').querySelector('.city').textContent;
            let phone = card.querySelector('.info').querySelector('.phone').textContent;
            let address = card.querySelector('.info').querySelector('.address').textContent;
            let dob = card.querySelector('.info').querySelector('.dob').textContent

            let modalHTML = 
            `<div class="overlay">
                <div class="modal">
                <button class="modal-close" id="close">X</button>
                        <div class="modal-content">
                        <img class="avatar" src="${picture}" />
                        <div class="text-container">
                        <h2 class="name">${name}</h2>
                        <p class="email">${email}</p>
                        <p class="address">${city}</p>
                        <hr />
                        <p>${phone}</p>
                        <p class="address">${address}</p>
                        <p>Birthday: ${dob}</p>
                        </div>
                    </div>
                </div>
            </div>`
            modalSection.innerHTML = modalHTML;
        }
        displayModal(card);
    }
})

/* 
    This function targets the close button and gets rid of the HTML
*/
modalSection.addEventListener('click', function(e) {
    if (e.target.id === 'close') {
        modalSection.innerHTML = '';
    }
})

