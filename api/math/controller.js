const helper = require('./helper');

exports.addTwoNumber = function (req, res, next) {
  const body = req.body;
  if (body.num1 === undefined || !body.num2 === undefined) {
    res.status(400).json({ message: "Mandatory field is missing. " });
  }
  const sum = helper.addTwoNumber(body.num1, body.num2);
  res.status(200).json({ sum });
};
