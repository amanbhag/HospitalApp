const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://amanbhagtani:amanbhagtani@cluster0.ifntkts.mongodb.net/"
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch((ex) => {
    console.log(ex);
  });
