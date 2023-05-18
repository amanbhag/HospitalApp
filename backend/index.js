const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;
const userRouter = require("./routes/user");
require("./db/index");
app.use(cors());

app.use(express.json());

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
