// Setup empty JS object to act as endpoint for all routes
data = {};

const key = '3320678975e3c9011dc0b7f13631e24f'
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors({
origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200
}));

// Initialize the main project folder
app.use(express.static('website'));

//function getFun() {
/*
    app.post('/', function (req, res) {
        req.send('ikr');
              
       // data.push(req.body)
    }
    )

//button.addEventListener('click', getFun)    


const obj = { username: 'Flavio' };

app.post('/', (req, res) => res.json(obj)
);


*/
// Setup Server

const port = 3000;
const server = app.listen(port, listening);

function listening(){
    // console.log("server running"); 
     console.log(`running on localhost: ${port} `);
}

//add GET
//app.get('/')

/*

app.get('/add', function (req, res) {
    
    console.log(data.temperature);
    console.log(data.date);
   // console.log(d.userResponse);

})

*/

