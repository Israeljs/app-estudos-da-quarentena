require('dotenv')
const app = require('./app')
const port = process.env.SERVER_PORT || 8080

app.listen(port, () => {
  console.log(`Port ${port}`)
})
