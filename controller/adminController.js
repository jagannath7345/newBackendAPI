const adminModel = require("../models/adminModel");

const adminData = async(req, res)=>{
    const{name, email} = req.body;
  const newData = new adminModel({
        name:name,
        email:email,
        employeeID:req.body.employeeID
    })
await newData.save();
res.send(newData);
}
const empData = async(req, res)=>{
   const resutlData =  await adminModel.find({_id:req.body.admin_id}).populate("employeeID")
   res.send(resutlData)
}
module.exports = adminData
module.exports = empData;