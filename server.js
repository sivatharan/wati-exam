const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

// TODO: Route need to be moved in to other folder
// TODO : API need to move to the modules
app.post("/add", (req, res) => {
  const body = req.body;
  if (body.num1 === undefined || !body.num2 === undefined) {
    res.status(400).json({ message: "Mandatory field is missing. " });
  }
  const sum = body.num1 + body.num2;
  res.status(200).json({ sum });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
