const SiteRouter = require("./site");
const QRCodeRouter = require("./qrcode");
const BHRouter = require("./baohanh");

function route(app) {
	app.use("/qrcode", QRCodeRouter);
	app.use("/baohanh", BHRouter);
	app.use("/", SiteRouter);
}

module.exports = route;
