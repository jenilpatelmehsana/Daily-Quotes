const express = require("express");

const PORT = 8888;

const app = express();

app.use(express.static("public"));

app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
