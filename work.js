// Sample data for sports personalities
const sportsPersons = [
    { id: 1, name: 'LeBron James' },
    { id: 2, name: 'Lionel Messi' },
    { id: 3, name: 'Serena Williams' },
    { id: 4, name: 'Cristiano Ronaldo' },
    { id: 5, name: 'Simone Biles' }
];

function searchSportsPerson() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const filteredPersons = sportsPersons.filter(person => person.name.toLowerCase().includes(searchInput));

    if (filteredPersons.length > 0) {
        filteredPersons.forEach(person => {
            const personDiv = document.createElement('div');
            personDiv.textContent = person.name;
            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.onclick = () => addToCart(person);
            personDiv.appendChild(addButton);
            resultsDiv.appendChild(personDiv);
        });
    } else {
        resultsDiv.textContent = 'No results found.';
    }
}

function addToCart(person) {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');

    const cartItem = document.createElement('li');
    cartItem.textContent = person.name;
    cartItems.appendChild(cartItem);

    cartCount.textContent = parseInt(cartCount.textContent) + 1;
}
function addToCart(person) {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');

    const cartItem = document.createElement('li');
    cartItem.textContent = person.name;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => {
        cartItems.removeChild(cartItem);
        cartCount.textContent = parseInt(cartCount.textContent) - 1;
    };
    
    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);

    cartCount.textContent = parseInt(cartCount.textContent) + 1;
}
