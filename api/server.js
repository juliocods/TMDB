const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();

const routes = require("./routes");
const db = require("./config/db");

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);

const PORT = process.env.PORT || 3000;

db.sync({ force: false }).then(() => {
  app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
});
