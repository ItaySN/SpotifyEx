const express = require('express')

const app = express()
require('dotenv').config()

app.use(express.json())

app.use("/albums/", require("./routes/albums"));
app.use("/artists/", require("./routes/artists"));
app.use("/playlists/", require("./routes/playlists"));
app.use("/songs/", require("./routes/songs"));
app.use("/users/", require("./routes/users"));



module.exports = app;