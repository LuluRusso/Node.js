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
    doc.image('gobierno.png',690,15,{
        width:110
    })
    doc.image('adma1.png', 30, 10, {
        width:100
    })
    
    doc.moveDown(3)
  }
  

  function footer(doc) {
    const secondPart=`NO DAR TURNO SI LA PERRA ESTA EN CELO (CONSULTAR CUANTOS DÍAS DESPUES SE PUEDE CASTRAR). 
NO DAR TURNO SI LA HEMBRA TUVO CRÍA  EN  LOS ÚLTIMOS DIAS. 
LOS FELINOS DEBEN PESAR MAS DE 2  Y HABER  CAMBIANDO LOS DIENTES.`
    doc.fontSize(9);
    doc.text(secondPart,15, doc.page.height - 60,{
        align:'center'
        
    })
    doc.moveDown(1)
  }

function registers(doc,filter){
    doc.text("Los siguientes registros comparten las siguientes características:",
        {align:'left',
        underline:true,   
        })
    doc.text(filter.map(f => (`${f.title}: ${f.value}   `)),{align:'left'})
}
   

export async function pdf(registro,filter) {

    const stream = new PassThrough()
    const chunks = []
    let b=true
    const totalRow=[]
    let inicio= 0
    let final= 11
    
    while (b==true){
        b= false
        const Row=[]
        let c=0
        for (let p of registro){
            if (inicio <= c && c < final){
                
                Row.push([String(c+1),p.name,p.dni,p.home,p.neighborhood,p.phone,p.specie,p.sex,p.size])
                b=true
                Row.push(['Observaciones',p.obs])
            }
            c++
        }

        if (b==true){totalRow.push(Row)}
        inicio+=11
        final+=11
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
        registers(doc,filter)
        doc.moveDown(1)    
        //doc.fontSize(11);   
        //doc.font('Helvetica-Bold')
        await doc.table({
            headers:[
                { label: "-", align: 'center'},
                { label: "Nombre y Apellido Responsable", align: 'center'},
                { label: "DNI", align: 'center' },
                { label: "Domicilio", align: 'center' },
                { label: "Barrio", align: 'center' },
                { label: "Telefono", align: 'center' },  
                { label: "Especie", align: 'center' },
                { label: "Sexo", align: 'center' },
                { label: "Tamaño", align: 'center' },
              ],
            rows: Row,
            
            width: doc.page.width - 30,
            prepareHeader: () => doc.font('Helvetica-Bold').fontSize(8).fillColor('black')
,
            prepareRow: () => doc.font('Helvetica-Bold').fontSize(8).fillColor('black'),

            //columnsSize: [20,35,150,100,80,65,25,30,20,30,190,70],
            padding: 0
        })
        
        footer(doc)
        
    }


    doc.end()
    return endPromise
}

