const PirateController = require("../controllers/pirate.controller");

module.exports = function (app) {
	app.get("/api/pirates", PirateController.index);
	app.post("/api/pirates/new", PirateController.createPirate);
	app.get("/api/pirates/:id", PirateController.singlePirate);
	app.put("/api/pirates/:id", PirateController.updatePirate);
	app.delete("/api/pirates/:id", PirateController.deletePirate);
};
