const API_KEY = "cacc4f433d0fd4f866197311dd0b3af8"
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url);
}
function onGeoError(){
    alert("Cannot find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);