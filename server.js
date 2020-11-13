const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json(), express.urlencoded({ exteded: true }))
app.use(cors())

require("./server/config/mongoose.config")
require("./server/routes/routes")(app)

app.listen(9001, () => console.log("Server is over 9000"))