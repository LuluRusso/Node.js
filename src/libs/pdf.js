import PDFDocument from 'pdfkit'


export function pdf(dataCallback,endCallback) {
    const doc = new PDFDocument()
    doc.on('data',dataCallback)
    doc.on('end',endCallback)
    doc.text("Prueba 1")

    doc.end()
}

  