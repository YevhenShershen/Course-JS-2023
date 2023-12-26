//157. Losowy user z randomuser.me
const URL = "https://randomuser.me/api"
window.onload = function(){
  fetch(URL)
  .then(response => response.json())
  .then(data => dataReady(data))
}

function dataReady(data){
  console.log(data);
  var result =data.results[0];
  var fullname = result.name.title + " "
  + result.name.first + " "
  +result.name.last;

console.log(result)
document.getElementById('full-name').innerHTML = fullname

  var img = result.picture.large;
  console.log(img)
  document.getElementById('avatar-img').src = img

  var username = result.login.username;
  document.getElementById('username').innerHTML = "@" + username;

var email = result.email;
document.getElementById("email").innerHTML = email

var country = result.location.country;
document.getElementById("country").innerHTML = country
}