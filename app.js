require("dotenv").config();
const express = require("express");
const app = express();
const rajaRouter = require("./api/rajaongkir/rajaongkir.router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/raja-ongkir", rajaRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log("app is running in port ", process.env.APP_PORT);
});