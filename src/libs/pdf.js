import PDFDocument from 'pdfkit-table'




export function pdf(req,res,registro) {
    const doc = new PDFDocument({
        margins: {
            top: 70,
            bottom: 50,
            left: 55,
            right: 72
          }
    })
    res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=adma.pdf"
      });
    doc.on('data', data => res.write(data))
    doc.on('end',()=>res.end())
    
    doc.fontSize(11);
    doc.rect(30, 30, 550,350 )
    doc.rect(30, 410, 550,350 )
    doc.image('ADMA.png', 105, 40, {
        width:400,
        align: 'center', // Alineación horizontal
        valign: 'center' // Alineación vertical
    });
    doc.moveDown(5)
    doc.text('COMPROBANTE DE CIRUGÍA DE CASTRACIÓN', {
        align: 'center',
        underline: 'true'
    })
    doc.moveDown()
    
    const firstPart=`En el día de la fecha, 12/04/25, se realizó la cirugía de castración a la mascota perteneciente a Lucía Russo DNI: 46.766.674 Número de teléfono: 351-6177712 Domicilio en: Tusca 23 Barrio: Sección C`
    doc.text(firstPart,{
        width: '500',
        align:'justify'
    })

    const animalData = {
        title: 'Datos del animal',
        headers: ["N° Cirugía", "Nombre", "Edad","Especie","Sexo","Peso","Características"],
        rows: [
            ["39241", "Feli", "7m","C","H","15kg","Blanca manchas negras"],
            ]
      }
    doc.table(animalData,{
        width: 500,  // Define el ancho de la tabla
       // Posición vertical
      })
    const secondPart='Mediante el presente, el propietario certifica que la cirugía de castración ha sido realizada en las condiciones acordadas con la Fundación ADMA. Asimismo, se compromete a seguir todas las indicaciones postoperatorias recomendadas para el bienestar del animal.'
    doc.fontSize(10);
    doc.text(secondPart,{
        
        width: '500',
        align:'justify'
    })
    doc.end()
}

  