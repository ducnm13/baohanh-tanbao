const Baohanh = require("../models/Baohanh");
const QRCode = require("qrcode");
class QRControler {
	// [GET] /qrcode
	index(req, res) {
		res.render("qrcode");
	}

	store(req, res, next) {
		// Random ID
		function randomString(length) {
			var chars =
				"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
					"",
				);

			if (!length) {
				length = Math.floor(Math.random() * chars.length);
			}

			var str = "";
			for (var i = 0; i < length; i++) {
				str += chars[Math.floor(Math.random() * chars.length)];
			}
			return str;
		}

		// End random id

		const formData = req.body;

		const current = new Date();
		let currentDay = current.getDate();
		let currentMonth = current.getMonth() + 1;
		let currentYear = current.getFullYear();

		const date1 = `${currentDay}/${currentMonth}/${currentYear}`;
		let year = formData.year == 1 ? 1 : 2;

		let bh_year = currentYear + year;
		const date2 = `${currentDay}/${currentMonth}/${bh_year} `;

		const idBH = "DH-" + randomString(8);
		let aaa;

		formData.idBH = idBH;
		formData.date = new Date(date1);
		formData.date2 = new Date(date2);
		const baohanh = new Baohanh(req.body);
		baohanh
			.save()
			.then(() => {
				QRCode.toDataURL(
					`http://${req.headers.host}/baohanh/${idBH}`,
					function (err, url) {
						// res.render("showQRCode", { url, idBH });
						res.send(`<img src="" alt="" />`);
					},
				);
			})
			.catch(err => {
				console.log(err);
			});
	}
}

module.exports = new QRControler();
