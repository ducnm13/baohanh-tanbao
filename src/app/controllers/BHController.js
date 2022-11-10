const Baohanh = require("../models/Baohanh");
const { mongooseToObject } = require("../../util/mongoose");
class BHController {
	// [GET] /baohanh
	index(req, res) {
		res.render("baohanh");
	}

	show(req, res, next) {
		Baohanh.findOne({ idBH: req.params.slug })
			.then(data => {
				const date1 = new Date(data.date);
				const date2 = new Date(data.date2);

				let date1Day = date1.getDate();
				let date1Month = date1.getMonth() + 1;
				let date1Year = date1.getFullYear();

				let date2Day = date2.getDate();
				let date2Month = date2.getMonth() + 1;
				let date2Year = date2.getFullYear();

				let str1 = `${date1Month}/${date1Day}/${date1Year}`;
				let str2 = `${date2Month}/${date2Day}/${date2Year}`;
				res.render("baohanh", { data: mongooseToObject(data), str1, str2 });
			})
			.catch(next);
	}
}

module.exports = new BHController();
