const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.render("./src/index.js");
});

app.listen(process.env.PORT || port, () =>
	console.log(`App listening at http://localhost:${port}`),
);

