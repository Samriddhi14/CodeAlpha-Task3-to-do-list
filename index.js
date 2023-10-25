import express from "express";
import bodyParser from "body-parser";
import moment from "moment";


const app = express();
const port = 3000;
const tasks = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => { 
    const task = req.body["ektask"];
    const currentDate = new Date();
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
  };
    res.render("index.ejs", { thetasks: tasks , currentDate,formatDate});
  });

  app.get('/Home',(req, res) => {
    const task = req.body["ektask"];
    const currentDate = new Date();
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
  };
    res.render("index.ejs", { thetasks: tasks, currentDate, formatDate});
  })
  app.post('/', (req, res) => { 
    const task = req.body["ektask"];
    const currentDate = new Date();
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
  };
    tasks.push(task); 
    res.render("index.ejs", { thetasks: tasks, currentDate, formatDate});
  })



app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});