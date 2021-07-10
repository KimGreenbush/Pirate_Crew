const PirateController = require("../controllers/pirate.controller");

module.exports = function (app) {
	app.get("/api/pirate", PirateController.index);
	app.post("/api/pirate/new", PirateController.createPirate);
	app.get("/api/pirate/:id", PirateController.singlePirate);
	app.put("/api/pirate/:id", PirateController.updatePirate);
	app.delete("/api/pirate/:id", PirateController.deletePirate);
};
