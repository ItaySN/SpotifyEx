const app = require('./app');
const port = 8585

app.listen(port, () => {
  console.log(`port is listening at http://localhost:${port}`)
})
