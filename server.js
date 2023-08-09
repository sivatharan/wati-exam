const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const math = require("./api/math/controller");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// TODO: Route need to be moved in to other folder
app.post("/add", math.addTwoNumber);

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
