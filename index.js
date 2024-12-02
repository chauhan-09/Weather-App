const temp = document.querySelector('.temp');
const btn = document.querySelector('.btn');
const city = document.querySelector('.city');

btn.addEventListener('click', () => {
    
    if(city.value == '') alert('Please enter a city!');
})