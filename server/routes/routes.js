const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
	app.get("/api/authors", AuthorController.index);
	app.post("/api/authors/new", AuthorController.createAuthor);
	app.get("/api/authors/:id", AuthorController.singleAuthor);
	app.put("/api/authors/:id", AuthorController.updateAuthor);
	app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};
