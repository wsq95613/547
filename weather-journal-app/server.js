// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, ()=>{
    // Callback to debug
    console.log(`server running`);
    console.log(`running on localhost: ${port}`);
})

// Callback function to complete GET '/all'
app.get('/all',(req,res)=>{
    console.log('been updated');
    console.log(projectData);
    res.send(projectData);
})
// Post Route
app.post('/add',(req,res)=>{
    projectData["date"] = req.body.date;
    projectData["temp"] = req.body.temp;
    projectData["feel"] = req.body.feel;
    console.log('been added:');
    console.log(projectData);
    res.send(projectData);
})