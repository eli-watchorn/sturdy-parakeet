const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(200);
});


app.get("/getListing", (req, res) => {
    res.send(200);
});

app.listen(PORT, () => {
    console.log('Running on Port ${PORT}');
    
});