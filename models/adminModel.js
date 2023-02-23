const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    employeeID: { type: mongoose.Schema.Types.ObjectId, ref: "employee" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", adminSchema);
