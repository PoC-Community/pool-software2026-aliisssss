const button = document.getElementById('myButton');
if (button) {
    button.addEventListener('click', (event) => {
        console.log('Button clicked!', event);
        alert('Button was clicked!');
    });
}

const form = document.getElementById('myForm');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const formData = new FormData(form);
        const name = formData.get('name');
        console.log('Form submitted! Name:', name);
        document.getElementById('display-name').textContent = `Hello, ${name}!`;
    });
}

const input = document.getElementById('myInput');
if (input) {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            console.log('Enter key pressed! Value:', input.value);
        }
    });
}

const list = document.getElementById('myList');
if (list) {
    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            console.log('List item clicked:', event.target.textContent);
            event.target.style.textDecoration = 'line-through';
        }
    });
}

let count = 0;
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

if (incrementBtn && decrementBtn && counterDisplay) {
    incrementBtn.addEventListener('click', () => {
        count++;
        counterDisplay.textContent = count;
    });

    decrementBtn.addEventListener('click', () => {
        count--;
        counterDisplay.textContent = count;
    });
}
