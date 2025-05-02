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
    
    doc.moveDown(2)
  }
  

  function footer(doc) {
    const secondPart=`NO DAR TURNO SI LA PERRA ESTA EN CELO (CONSULTAR CUANTOS DIAS DESPUES SE PUEDE CASTRAR) 
NO DAR TURNO SI LA HEMBRA TUVO CRIA EN LOS ULTIMOS DIAS 45.
LOS FELINOS DEBEN PESAR MAS DE 2 KG Y HABER CAMBIADO LOS DIENTES.`
    doc.fontSize(9);
    doc.text(secondPart,15, doc.page.height - 60,{
        align:'center'
        
    })
  }
  

   

export async function pdf(registro,fecha) {

    
    function generateRow (doc,data){
      console.log(data)
      doc.table({
        columnStyles: [100, 100, 100, 100, 100, 50, 60, 50],
        headers: ["prueba de error"], 
        data: [[data.name || "", 
          data.dni || "", 
          data.neighborhood || "", 
          data.home || "", 
          data.sex || "", 
          data.size || "", 
          data.specie || ""]],
        options: {
          hideHeader: true // ✅ así evitás definir headers
        }
      });
      doc.table({
        columnStyles: [100],
        headers: ["prueba de error"],
        data: [["Observaciones", 
          data.obs || ""]],
        options: {
          hideHeader: true // ✅ así evitás definir headers
        }
      });
    };
    function tablenew(doc) {
      doc.x = 15;
      doc.table({
        headers: ["prueba de error"],
        columnStyles: [130, 130, 130, 130, 130, 50, 60, 50],
        data: [["Nombre", "Apellido", "DNI", "Barrio", "Domicilio", "Sexo", "Tamaño", "Especie"]],
        
      });}
    
    //rows.map((row) => generateRow(row));
    const stream = new PassThrough()
    const chunks = []
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
    /*const animalData = {
      title: { label: `                                                        PLANILLA DE CIRUGIA                                                      FECHA: ${fecha}`},
      headers:[
          { label: "-", align: 'center' },
          { label: "Nombre Responsable", align: 'center' },
          { label: "DNI", align: 'center' },
          { label: "Domicilio", align: 'center' },
          { label: "Barrio", align: 'center' },
          { label: "Telefono", align: 'center' },
          { label: "Espe.", align: 'center' },
          { label: "Sexo", align: 'center' },
          { label: "Tamaño", align: 'center' },

        ],
    }*/
    doc.pipe(stream)
    stream.on('data', chunk => chunks.push(chunk))
    const endPromise = new Promise((resolve) => {
        stream.on('end', () => {
          resolve(Buffer.concat(chunks))
        })
      })

    let c=0
    header(doc)
    tablenew(doc)
    for (let data of registro){
      if (c==8){
        doc.addPage();
        header(doc); 
        tablenew(doc); 
        count = 0; 
      }
      generateRow(doc, row); 
      count++;
  }

  
        
        
        footer(doc)
        doc.end()
        return endPromise()
    }


    



  