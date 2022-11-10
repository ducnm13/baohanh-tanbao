const express = require("express");

const app = express();
const port = 3000;

app.listen(process.env.PORT || port, () =>
	console.log(`App listening at http://localhost:${port}`),
);
