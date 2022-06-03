const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {  
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {

  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  let operator = req.body.operator;

  let result = 0;

  switch (operator) {  
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case 'x':
    result = num1 * num2;
    break;
  case ':':
    result = num1 / num2;
    break;
  default:
    result = 'Invalid operation';
  }

  // Send the result to the result.html with the variable result
  res.send(`<!DOCTYPE html>
  <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <title>Calculator</title>
    </head>
  
    <body>
      <div class="container">
        <div class="panel">
          <h1>Calculator</h1>
          <p>Insert Numbers and select an operation</p>
          <form action="/" method="post" class="form cf">
            <div class="operation plan cf ">
              <input
                maxlength="20"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                type="number"
                name="num1"
                placeholder=""
                autocomplete="off"
                value="${num1}"
              >
  
              <div class="custom-select">
                <input class="hidden" id="+" type="radio" name="operator" value="+">
                <label for="+">+</label>
                <input class="hidden" id="-" type="radio" name="operator" value="-">
                <label for="-">-</label>
                <input class="hidden" id="x" type="radio" name="operator" value="x">
                <label for="x">x</label>
                <input class="hidden" id=":" type="radio" name="operator" value=":">
                <label for=":">:</label>
              </div>
  
              <input
                maxlength="20"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                type="number"
                name="num2"
                placeholder=""
                autocomplete="on"     
                value="${num2}"                        
              >
  
            </div>
            <button type="submit" name="submit">Calculate</button>
          </form>
  
          <p><strong>${num1} ${operator} ${num2} = ${result}<strong></p>
  
        </div>
      </div>
      <script>
        document.getElementById('${operator}').checked = true;
      </script>
    </body>
  
  </html>`);
});

app.listen(3000, "192.168.1.159", () => {
  console.log('Example app listening on port 3000!');
});

