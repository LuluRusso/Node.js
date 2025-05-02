import PDFDocument from 'pdfkit-table'
import { PassThrough } from 'stream'
function header(doc) {  
    doc.rect(10, 10, 820,575).stroke
    doc.fontSize(11);   
    doc.font('Helvetica')
    doc.text(`Municipalidad de Alta Gracia
Programa Municipal de Salud Animal`, {
        align: 'center',
        underline:true,
        })
    doc.image('src/assets/gobierno.png',690,15,{
        width:110
    })
    doc.image('src/assets/adma1.png', 30, 10, {
        width:100
    })
    
    doc.moveDown(2)
  }
  

  function footer(doc) {
    const secondPart='Con mi firma, declaro bajo juramento no poseer los medios económicos para solventar los costos de esterilización de mi mascota en forma privada. Dejo constancia de conocer los riesgos posibles presentes en todo tipo de intervención quirúrgica. Asumo toda responsabilidad autorizando al M. Veterinario del Programa de Salud Animal a realizar dicha intervención, comprometiéndome a no realizar demanda o juicio alguno contra la Fundación Amigos del Mejor Amigo, Municipalidad de Alta Gracia, ni al profesional Veterinario actuamente. Adjunto a la presente fotocopia de mi DNI.'
    doc.fontSize(9);
    doc.text(secondPart,15, doc.page.height - 60,{
        align:'center'
        
    })
  }
  

   

export async function pdf(registro,fecha) {

    const stream = new PassThrough()
    const chunks = []
    let b=true
    const totalRow=[]
    let inicio= 0
    let final= 13
    
    while (b==true){
        b= false
        const Row=[]
        let c=0

        for (let p of registro){
            if (inicio <= c && c < final){
                Row.push([String(c+1),p.surgeryNumber,p.ownerName,p.home,p.phone,p.animalName,p.age,p.species,p.sex,p.weight,p.feactures])
                b=true}
                
                
            c++
        }
        if (b==true){totalRow.push(Row)}
    
        inicio+=13
        final+=13
        
    }
    
    const doc = new PDFDocument({
        info: {
            Title: `ADMA`,
          },
        layout: 'landscape',
        size:'A4',
        margins: {
            top: 25,
            bottom: 10,
            left: 15,
            right: 20
          }
    })
    
    doc.pipe(stream)
    stream.on('data', chunk => chunks.push(chunk))
    const endPromise = new Promise((resolve) => {
        stream.on('end', () => {
          resolve(Buffer.concat(chunks))
        })
      })
    for (let Row of totalRow){
        header(doc)
        doc.rect(10, 10, 820,575).stroke().fill("black")
        doc.text(`                                                        PLANILLA DE CIRUGIA                                                      FECHA: ${fecha}`)
        doc.moveDown(1)
        const animalData = {
            headers:[
                { label: "-", align: 'center' },
                { label: "N° Cirugía", align: 'center' },
                { label: "Nombre y Apellido Responsable", align: 'center' },
                { label: "Domicilio", align: 'center' },
                { label: "Telefono", align: 'center' },
                { label: "Nombre Paciente", align: 'center' },
                { label: "Edad", align: 'center' },
                { label: "Espe.", align: 'center' },
                { label: "Sexo", align: 'center' },
                { label: "Peso", align: 'center' },
                { label: "Características", align: 'center' },
                { label: "Firmas", align: 'center' },
              ],
            rows: Row
          }
    
    

        
        await doc.table(animalData,{

            width: doc.page.width - 30,
            prepareHeader: () => doc.font('Helvetica-Bold').fontSize(8).fillColor('black'),
            prepareRow: () => doc.font('Helvetica-Bold').fontSize(8).fillColor('black'),
            columnSpacing: 10,
            columnsSize: [20,35,150,100,80,65,25,30,20,30,190,70],
            padding: 0
        })
        
        footer(doc)
        
    }


    doc.end()
    return endPromise
}


  