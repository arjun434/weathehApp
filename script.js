const apiKey = "3568ee36b04178848bfa85a169878573";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search .search-bar");
const searchBtn= document.querySelector(".search .search-btn");

// Store the default city in localStorage
localStorage.setItem("defaultCity", "Kolkata");

// Check if a default city has been set
const defaultCity = localStorage.getItem("defaultCity");
if (defaultCity) {
  // Display weather information for the default city
  checkWeather(defaultCity);
}



async function checkWeather(city){
    const response  = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    
document.querySelector(".city").innerHTML = "Weather in " + data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".description").innerHTML = data.weather[0].description;
let descri = document.querySelector(".description").innerHTML = data.weather[0].description;
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city +"')";

    if (descri == "haze") {
    document.body.style.backgroundImage = "url('bgimages/haze.jpg')";
    }
    if (descri == "sunny") {
        document.body.style.backgroundImage = "url('bgimages/haze.jpg')";
    }
    if (descri == "broken clouds") {
        document.body.style.backgroundImage = "url('bgimages/brokenClouds.jpg')";
    }
    if (descri == "few clouds " || descri == "scattered clouds") {
        document.body.style.backgroundImage = "url('bgimages/fewClouds.jpg')";
    }
    if (descri == "smoke") {
        document.body.style.backgroundImage = "url('bgimages/smoke.jpg')";
    }
    if (descri == "overcast clouds") {
        document.body.style.backgroundImage = "urlmexico city('bgimages/overcastclouds.jpg')";
    }
    if (descri == "clear sky") {
        document.body.style.backgroundImage = "url('bgimages/clearSky.jpg')";
    }
    if (descri == "light rain" || descri == "light rain" || descri == "moderate rain" || descri == "drizzle" || descri == "	very heavy rain" ) {
        document.body.style.backgroundImage = "url('bgimages/rainy.jpg')";
    }
    if (descri == "thunderstorm with light rain" || descri == "	light thunderstorm" || descri == "	thunderstorm with drizzle" || descri == "	heavy thunderstorm" || descri == "	thunderstorm" ) {
        document.body.style.backgroundImage = "url('bgimages/thunder.jpg')";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});


