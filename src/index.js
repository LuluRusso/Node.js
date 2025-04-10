import express from 'express'
import { Router } from "express";
import { pdf } from "./libs/pdf.js"
const app = express()
app.listen(3000, () => {
    console.log('server on port 3000')
  })

const router = Router()

router.get('/download', (req, res) => {
  pdf(req, res, {
    nombre: 'factura123.pdf',
    disposicion: 'attachment' // Acá irían los datos del registro
  });
})
    
app.use(router)  

 