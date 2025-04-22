import express from 'express'
import { Router } from "express";
import { pdf } from "./libs/pdf3.js"
import {registro} from './registroTurno.js'

const fecha= '19/4/2025'


const app = express()
app.listen(3000, () => {
    console.log('Todo correcto')
  })

const router = Router()

router.get('/download', async(req, res) => {
  const buffer = await pdf(registro,[{title:"fecha",value:"15/4"},{title:"Domicilio",value:"En casa"}]);
  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "inline; filename=adma.pdf",
    "Content-Length": buffer.length
  });
  res.end(buffer)
})
    
app.use(router)  

 