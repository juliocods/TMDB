const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const routes = require("./routes");
const db = require("./config/db");
const envs = require("./config/envs");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(envs.PORT, () =>
    console.log(`Servidor escuchando en el puerto ${envs.PORT}`)
  );
});
