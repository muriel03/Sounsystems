const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const app = express();

const userLoggedMiddleware = require("./src/middlewares/userLoggeMiddlewares");

app.use(
  session({
    secret: "Mensaje de session",
    resave: false,
    saveUninitialized: false,
  }) 
);

app.use(userLoggedMiddleware);
app.use(cookies());

app.use(express.urlencoded({ extended: false }));

const multer = require("multer");

const path = require("path");
const mainRouter = require("./src/mainRouters/mainRouter");
const usersRouter = require("./src/mainRouters/usersRouter");
const productRouter = require("./src/mainRouters/productRouter");
const typeUserRouter = require("./src/mainRouters/typeUserRouter");
const brandsRouter = require("./src/mainRouters/brandsRouter");
const categoryRouter = require("./src/mainRouters/categeryRouter");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "./src/views"));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.json());
 
app.use("/", mainRouter);
app.use("/products", productRouter);
app.use("/type", typeUserRouter);
app.use("/users", usersRouter);
app.use("/brands", brandsRouter);
app.use("/category", categoryRouter);

app.listen(3030, () => console.log("Servidor arriba en el puerto 3030"));
