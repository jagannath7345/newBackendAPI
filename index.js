const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const empRoutes = require("./routes/routes");
mongoose.set("strictQuery", true);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', empRoutes)

mongoose
  .connect("mongodb://localhost:27017/popluate_db")
  .then(() => {
    console.log(`Database contected sucessfully`);
  })
  .catch(() => {
    console.log("Connection Failed");
  });
app.listen(5000, () => {
  console.log(`Server listing at 5000`);
});
