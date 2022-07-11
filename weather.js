const apikey = "203feade926c4b9e7de7bda4c57e5d43";

const userlocation = () => {
    const citynameinput = document.getElementById("citynameinput").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citynameinput}&appid=${apikey}`) 
    .then(Response => Response.json())
    .then(data => {
        let nameval = data['name']
        let descrip = data['weather']['0']['description'] 
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
        city.innerHTML=`Weather of <span>${nameval}<span>`})
    .catch(err => alert('You entered Wrong city name'))
}