const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  //console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {

  console.log(req.body);

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let operator = req.body.operator;

  let result = 0;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === 'x') {
    result = num1 * num2;
  } else if (operator === ':') {
    result = num1 / num2;
  } else if (operator === 'Select an Operator') {
    res.send(`<h1>Please select an operator</h1>             
              <a href="/">New Operation</a>`);
  }

  res.send(`<body style="  background-color: #0bff34;">
              <h1 align="center" style=" color: #ff0be7;">${num1} ${operator} ${num2} = ${result}</h1>            
              <a href="/">New Operation</a>
            </body>`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

