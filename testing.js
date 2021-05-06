var express = require("express")
var app = express();
var util = require('./tester');
const course = require('./courses')
const data = course.data;

const fs = require('fs')
let rawdata = fs.readFileSync('./courses.json');
let courses = JSON.parse(rawdata);



//Route list
app.get('/', function(req,res)
{
  res.send("<h1> Welcome to the API server! </h1>");
});


app.get('/courses', function(req,res)
{
     let outputJSON =  {course: courses['courses']}
   res.json(outputJSON);
   console.log("Loading data...");
});



app.get('/courses/by_code/:course_code', (req, res) =>
{
    let query = req.params['course_code']
    filtered_courses = courses['courses'].filter(q => q.course_code.includes(query))
    let outputJSON = {courses: filtered_courses}
    res.json(outputJSON)
    console.log("Loading data...");
})



app.get('/courses/by_title/:title', (req,res) =>
{
      let query = req.params['title']
    filtered_courses = courses['courses'].filter(q => q.title.includes(query))
    let outputJSON = {courses: filtered_courses}
    res.json(outputJSON)
    
      console.log("Loading data...");
});



app.get('/courses/by_instructor/:instructor', (req,res) =>
{
      let query = req.params['instructor']
    filtered_courses = courses['courses'].filter(q => q.instructor.includes(query))
    let outputJSON = {courses: filtered_courses}
    res.json(outputJSON)
   
      console.log("Loading data...");
});



app.get('/courses/by_level/:course_level', (req,res) =>
{
      let query = req.params['course_level']
    filtered_courses = courses['courses'].filter(q => q.course_level.includes(query))
    let outputJSON = {courses: filtered_courses}
    res.json(outputJSON)
    
      console.log("Loading data...");
});




app.use('/API',express.static('public'));

app.listen(3000, function()
{
      console.log("Server is running.")
      
	})
