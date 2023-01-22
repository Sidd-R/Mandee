const express = require('express')
const app = express()
const port = 4000

app.use(require('cors')())
app.use(express.json())
app.use("/uploads",express.static("./uploads"))
app.use('/register',require("./routes/register"))
app.use('/products',require("./routes/products"))
app.use('/deals',require("./routes/deals"))
// app.use("/uploads",express.static("./uploads"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))