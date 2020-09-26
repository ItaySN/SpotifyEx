const express = require('express')

const app = express()
app.use(express.json())

app.use("/albums/", require("./routes/albums"));
app.use("/artists/", require("./routes/artists"));
app.use("/playlists/", require("./routes/playlists"));
app.use("/songs/", require("./routes/songs"));




module.exports = app;