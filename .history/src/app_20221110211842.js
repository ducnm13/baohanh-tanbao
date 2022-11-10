const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
require("dotenv").config();

const route = require("./routes");
const db = require("./config/db");

// connect database
db.connect();

const app = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(
	express.urlencoded({
		extended: true,
	}),
);

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));

// Set view engine
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(process.env.PORT || port, () =>
	console.log(`App listening at http://localhost:${port}`),
);
