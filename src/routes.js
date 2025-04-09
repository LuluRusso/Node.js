import { Router } from "express";
import { pdf } from "./libs/pdf.js"

const router = Router()

router.get('/download', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=adma.pdf"
      });
    pdf((data)=>res.write(data),()=>res.end())

    

    
  })
export default router

