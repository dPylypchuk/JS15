const apiKey = 'b11690f2523546db916195812232005';

const cityInput = document.getElementById('city-input');
const getheatherBtn = document.getElementsById('get-weather-btn');
const weatherinfo = document.getElementById('weather-info');

getheatherBtn.addEventListener('click'. function() {
    const city = cityInput.value.trin(),
    const url =`https://apl.weatherapi.com/v1/current.json?key=${apiKey}&units-netrlc`,

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        console cityTemp = data.main.temp;
        const cityDesc = data.weather[0].description;

        weatherInfo.innerHTML = `<p> Температура у міці ${city}: ${cityTemp}*c</p>
                                 <p> Опис погоди: ${cityDesc}</p>`
    })
    .catch(error => {
        console.error(error);
        weatherInfo.innerHTML = `Сталася помилка при отриманні даних. Спробуйте ще раз.`;    
    }),
});