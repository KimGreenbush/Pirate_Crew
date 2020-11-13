const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/piratecrewdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Not connected to the database", err))