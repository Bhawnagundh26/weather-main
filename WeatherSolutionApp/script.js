const apikey="9d572b90b30715ed2420eace6c8f1471";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const city=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    var data=await response.json();
  
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/Hr";

    if(data.weather[0].main == "Clouds")
    {
        weathericon.src="Images/clouds.png";
        document.body.style.backgroundImage = "url('Images/cloud_bg.jpg')";
        document.body.style.backgroundSize = "cover"; 
        
       
    }
    else  if(data.weather[0].main == "Clear")
        {
            weathericon.src="Images/clear.png";
            document.body.style.backgroundImage = "url('Images/clear_bg.jpg')";
            document.body.style.backgroundSize = "cover";
            
        }
    else  if(data.weather[0].main == "Rain")
        {
            weathericon.src="Images/rain.png";
            const rainAudio = new Audio('Images/light-rain-109591.mp3');
            rainAudio.play();
            document.body.style.backgroundImage = "url('Images/rain_bg.jpg')";
            document.body.style.backgroundSize = "cover"; 
        }
    else  if(data.weather[0].main == "Drizzle")
        {
            weathericon.src="Images/drizzle.png";
            document.body.style.backgroundImage = "url('Images/drizzle_bg.jpg')";
            document.body.style.backgroundSize = "cover";
        }
    else  if(data.weather[0].main == "Mist")
        {
            weathericon.src="Images/mist.png";
            document.body.style.backgroundImage = "url('Images/mist_bg.jpg')";
            document.body.style.backgroundSize = "cover";
        }
    
    
}




btn.addEventListener("click",()=>{

     checkWeather(city.value);
})


