const weather_city = document.querySelector('.city')
const btn = document.querySelector('.btn');
const weather = document.querySelector('.weather');
const apikey = "80300c3c403593e35aec39047d4392ae";

btn.addEventListener('click', () => {  
    const city = weather_city.value;
    getweather(city);
})


async function getweather(city)
{
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiurl);

    if(!response.ok) window.alert('Please enter a valid city');
    else 
    {
        const data = await response.json();
        displayweather(data);
    }
}

function displayweather(response)
{
    const {name:city,
        main: {temp,humidity} } = response;

    weather.innerHTML = (temp - 273).toFixed(1) + "°C";
}