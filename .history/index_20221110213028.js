const app = require("./src/app");

const port = process.env.PORT || 3001;
app.listen(process.env.PORT || port, () =>
	console.log(`App listening at http://localhost:${port}`),
);
