let lat;
let long;
const apiKey = 'f581cefe7274768d9ea68a6290d7776e'
const unit = 'metric'

function startApp(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position)=> {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      console.log(`lat: ${lat}, long: ${long}`);

      getWeatherData()
    }
    )
  }
}

async function  getWeatherData(){
  let url= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${unit}&appid=${apiKey}`;
try{
  const response = await fetch(url)
  const data = await response.json();
  console.log(data)
  updateWeatherData(data)
}
catch (err){
console.log(err)
}
}


function updateWeatherData(data){
const {current} = data

const temp = current.temp;
const pressure = current.pressure
const humidity = current.humidity
const clouds = current.clouds
const windSpeed = current.wind_speed
const sunRise = new Date(current.sunrise * 1000)
const sunSet = new Date (current.sunset * 1000)

document.getElementById("temp").innerHTML = temp
document.getElementById("pressure").innerHTML = pressure
document.getElementById("humidity").innerHTML = humidity
document.getElementById("cloudsPerc").innerHTML = clouds
document.getElementById("windSpeed").innerHTML = windSpeed
document.getElementById("sunRise").innerHTML = sunRise.getHours() + " : " + sunRise.getMinutes()
document.getElementById("sunSet").innerHTML = sunSet.getHours() + " : " + sunSet.getMinutes()


let imgIcon = current.weather[0].icon

let imgUrl = `https://openweathermap.org/img/wn/${imgIcon}@2x.png`
document.getElementById('currentWeatherImg').setAttribute("src", imgUrl);

const timeZone = data.timezone
const locationLink = document.getElementById('locationLink')
locationLink.innerHTML = timeZone

locationLink.href = `https://openstreetmap.org/#map=20/${lat}/${long}`
}