const apiKey = "3568ee36b04178848bfa85a169878573";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search .search-bar");
const searchBtn= document.querySelector(".search .search-btn");

async function checkWeather(city){
    const response  = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    
document.querySelector(".city").innerHTML = "Weather in " + data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city +"')";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


