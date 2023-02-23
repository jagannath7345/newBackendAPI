const employeeModel = require("../models/employeeModel");

const employeeData = async (req, res) => {
  const { name, email } = req.body;
  const newData = new  employeeModel({
    name:name,
    email:email
  });
  await newData.save();
  res.send(newData)
};

module.exports = employeeData