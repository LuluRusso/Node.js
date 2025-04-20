import express from 'express'
import { Router } from "express";
import { pdf } from "./libs/pdf2.js"
import {registro} from './registro.js'

const fecha= '19/4/2025'


const app = express()
app.listen(3000, () => {
    console.log('Todo correcto')
  })

const router = Router()

router.get('/download', (req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "inline; filename=adma.pdf"
  });
  pdf(res, registro,fecha);
})
    
app.use(router)  

 