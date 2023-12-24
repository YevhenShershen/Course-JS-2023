let lat;
let long;


function startApp(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position)=> {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      console.log(`lat: ${lat}, long: ${long}`);
    }
    )
  }
}

