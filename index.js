

const express = require("express");
const PORT=process.env.PORT || 5000;


const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Главная страница</h1>")
})

app.get("/test", (req, res) => {
    res.send("<h1>Тестовая страница</h1>")
})

app.get("/test2", (req, res) => {
    res.send("<h1>Тестовая страница 2</h1>")
})

app.listen(PORT);