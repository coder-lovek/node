const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes'); 
app.use(bodyParser.json());

app.use('/person', personRoutes);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
