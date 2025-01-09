const body = document.querySelector('body');
const temp = document.querySelector('h1')
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    temp.innerHTML = "temp is loading...";
})