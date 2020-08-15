
 // Global Variables 
const button = document.getElementById('generate');
//const zip = document.getElementById('zip').value;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

const feelingsStyle = document.getElementById('feelings');
let feelings = document.getElementById('feelings');
const apiKey = "3320678975e3c9011dc0b7f13631e24f";
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';



// Async POST

const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
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

function drawWeather(d) { 
    let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    let fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('content').innerHTML = feelings.value;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('date').innerHTML = newDate;
    return d;
    
}
function updateUI() {
     feelingsStyle.style.height= "155px";
}

async function  getWeather() {
    let zipCode = document.getElementById('zip').value;

    const options = {
        method: 'POST'
        // Body data type must match "Content-Type" header        
    };
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`, options)
        .then(function (res) { return res.json() }) // Convert data to json
        .then(function (data) {
            
            drawWeather(data);
           
            postData('/add', { temperature: data.main.temp, date: newDate, content: feelings.value });

            return postData;
           
        })
        
 
        .then(updateUI)
        .catch(function () {
            // catch any errors
        });

}
button.addEventListener('click', getWeather);
 