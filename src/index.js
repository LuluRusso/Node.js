import express from 'express'
import router from './routes.js'
const app = express()
app.listen(3000, () => {
    console.log('server on port 3000')
  })

app.use(router)  

  