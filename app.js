const apiKey = "d33897a65a2ecbbe5830888f65a7b398";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weather.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weather.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weather.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        weather.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weather.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weather.src = "images/snow.png";
    }

    document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value); 

}); 

searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkWeather(searchBox.value);
    }
});

