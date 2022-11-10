const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Baohanh = new Schema({
	idBH: { type: String, maxLength: 15 },
	idSP: { type: String, min: 30 },
	name: { type: String, maxLength: 500 },
	date: { type: Date, default: Date.now },
	date2: { type: Date },
});

module.exports = mongoose.model("Baohanh", Baohanh);
