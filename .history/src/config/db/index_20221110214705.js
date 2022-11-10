const mongoose = require("mongoose");

async function connect() {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log("Connect oke ..");
	} catch (error) {
		console.log(error);
	}
}

module.exports = { connect };
