const app = require('./app');
const port = 8080

app.listen(port, () => {
  console.log(`port is listening at http://localhost:${port}`)
})
