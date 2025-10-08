const express = require("express");
const app = express();

app.get("/square/:number", (req, res) => {
    const num = parseInt(req.params.number);
    const square = num * num;
    res.send(`<h3>The square of ${num} is: ${square}</h3>`)
app.listen(4000)
