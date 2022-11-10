const QRCode = require("qrcode");

class SiteController {
	// [GET] /
	home(req, res) {
		res.render("home");
	}
	test(req, res) {
		QRCode.toDataURL("http://192.168.1.10:3000/baohanh", function (err, url) {
			if (err) return console.log("ERROR ... ");
			res.send("<img src=" + url + " />");
		});
	}
}

module.exports = new SiteController();
