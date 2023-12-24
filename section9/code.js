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
}
catch (err){
console.log(err)
}
}
