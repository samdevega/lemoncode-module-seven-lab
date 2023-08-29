const express = require('express')
const path = require('path')
const staticFilesPath = path.resolve(__dirname, process.env.STATIC_FILES_PATH)
const port = process.env.PORT || 8081;
const app = express()

app.use('/', express.static(staticFilesPath))
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})
