/* Global Variables */
const button = document.getElementById('generate');
//const zip = document.getElementById('zip').value;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

const feelingsStyle = document.getElementById('feelings');
let feelings = document.getElementById('feelings');
const apiKey = "3320678975e3c9011dc0b7f13631e24f";
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';



const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
'Content - Type': 'application / json',
},
// Body data type must match “Content-Type” header
body: JSON.stringify(data),
});

try {
    const newData = await response.json();
    console.log(newData);
    return newData;
} catch (error) {
    console.log("error", error);
}
}
postData('/add', { 'feelings': feelings.value });


function drawWeather(d) { 
    let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    let fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('content').innerHTML = feelings.value;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('date').innerHTML = newDate;
    
    
}
function updateUI() {
     feelingsStyle.style.height= "155px";
}
let projectData = {};
async function  getWeather() {
    let zipCode = document.getElementById('zip').value;

    const options = {
        method: 'POST'
        // Body data type must match "Content-Type" header        
        ,body: JSON.stringify(projectData)
    };
         await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`, options)
        .then(function (resp) { return  resp.json() }) // Convert data to json
        .then(function (data) {
            //data = res;
            console.log(data);
            drawWeather(data); // Call drawWeather

            //console.log(data);
        }).then(updateUI)
        .catch(function () {
            // catch any errors
        })

}
button.addEventListener('click', getWeather);
 
