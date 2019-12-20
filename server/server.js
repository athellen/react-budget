const path = require("path");
const express = require("express");
const app = express(); //invoking express for incase you want to use its methods
const publicPath = path.join(__dirname, "..", "public"); //dirname sets an absolute path
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is running");
});
