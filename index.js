import PDFDocument from 'pdfkit-table'
import fs from 'fs'
const doc = new PDFDocument({
  info: {
    Title: "ADMA",
  },
  layout: 'landscape',
  size: 'A4',
  margins: {
    top: 25,
    bottom: 10,
    left: 15,
    right: 20
  }
});

doc.pipe(fs.createWriteStream('PLANILLA_DE_CIRUGIA.pdf'));

function header(doc) {
  doc.fontSize(11);
  doc.font('Helvetica');
  doc.text(`Municipalidad de Alta Gracia 
    Programa Municipal de Salud Animal`, {
    align: 'center',
  });
  doc.image('gobierno.png', 690, 15, { width: 110 });
  doc.image('adma1.png', 30, 10, { width: 100 });
  doc.moveDown(2);
}

function tablenew(doc) {
  doc.x = 15;
  doc.table({
    columnStyles: [30,130, 130, 130, 130, 130, 50, 60, 47],
    data: [["N°","Nombre", "Apellido", "DNI", "Barrio", "Domicilio", "Sexo", "Tamaño", "Especie"]]
  });
}

function generateRow(doc, row, index){
  doc.table({
    columnStyles: [30,130, 130, 130, 130, 130, 50, 60, 47],
    data: [[index + 1 ,row.name, row.lastName, row.dni, row.neighborhood, row.home, row.sex, row.size, row.specie]]
  });

  doc.table({
    columnStyles: [130],
    data: [["Observaciones", row.obs]]
  });
}

const rows = [
  { name: "Lucas", lastName: "Pérez", dni: "29567321", sex: "macho", size: "Mediano", specie: "Perro", obs: "", home: "Belgrano 123", neighborhood: "Villa Oviedo" },
  { name: "Martina", lastName: "Gómez", dni: "38451245", sex: "hembra", size: "Pequeño", specie: "Gato", obs: "Vacunado recientemente", home: "Sarmiento 456", neighborhood: "Liniers" },
  { name: "Julián", lastName: "Rodríguez", dni: "31234567", sex: "macho", size: "Grande", specie: "Perro", obs: "", home: "Los Sauces 789", neighborhood: "Villa Camiares" },
  { name: "Camila", lastName: "Fernández", dni: "41789456", sex: "hembra", size: "Mediano", specie: "Gato", obs: "Agresiva con extraños", home: "España 1024", neighborhood: "Residencial El Crucero" },
  { name: "Nahuel", lastName: "Sosa", dni: "36547890", sex: "macho", size: "Grande", specie: "Perro", obs: "", home: "Alvear 321", neighborhood: "Don Bosco" },
  { name: "Agustina", lastName: "López", dni: "38765412", sex: "hembra", size: "Pequeño", specie: "Gato", obs: "", home: "Bv. Alfonsín 876", neighborhood: "Bicentenario" },
  { name: "Santiago", lastName: "Ruiz", dni: "30567123", sex: "macho", size: "Mediano", specie: "Perro", obs: "", home: "Los Álamos 345", neighborhood: "General Bustos" },
  { name: "Sofía", lastName: "Díaz", dni: "42356789", sex: "hembra", size: "Grande", specie: "Perro", obs: "Recuperado de cirugía", home: "Dean Funes 900", neighborhood: "La Perla" },
  { name: "Matías", lastName: "Castro", dni: "29876123", sex: "macho", size: "Grande", specie: "Perro", obs: "", home: "Mitre 444", neighborhood: "Villa del Libertador" },
  { name: "Paula", lastName: "Romero", dni: "35489761", sex: "hembra", size: "Pequeño", specie: "Gato", obs: "", home: "Urquiza 532", neighborhood: "Villa Juana" },
  { name: "Tomás", lastName: "Martínez", dni: "31987645", sex: "macho", size: "Mediano", specie: "Perro", obs: "Ansioso en la calle", home: "Rivadavia 22", neighborhood: "Villa Sur" },
  { name: "Carla", lastName: "Molina", dni: "39218456", sex: "hembra", size: "Grande", specie: "Perro", obs: "", home: "Belisario Roldán 33", neighborhood: "La Hornilla" },
  { name: "Iván", lastName: "Navarro", dni: "30045678", sex: "macho", size: "Pequeño", specie: "Gato", obs: "", home: "José Hernández 678", neighborhood: "Villa Mitre" },
  { name: "Valentina", lastName: "Arias", dni: "42018765", sex: "hembra", size: "Mediano", specie: "Perro", obs: "Tiene collar", home: "Italia 312", neighborhood: "Sabattini" },
  { name: "Bruno", lastName: "Quiroga", dni: "33981234", sex: "macho", size: "Grande", specie: "Perro", obs: "", home: "Av. del Libertador 1090", neighborhood: "Tiro Federal" },
  { name: "Milagros", lastName: "Torres", dni: "40012387", sex: "hembra", size: "Pequeño", specie: "Gato", obs: "", home: "La Rioja 754", neighborhood: "Parque Virrey" },
  { name: "Facundo", lastName: "Agüero", dni: "37245698", sex: "macho", size: "Mediano", specie: "Perro", obs: "", home: "25 de Mayo 299", neighborhood: "Pellegrini" },
  { name: "Julieta", lastName: "Morales", dni: "38567234", sex: "hembra", size: "Grande", specie: "Perro", obs: "Tiene chip", home: "9 de Julio 81", neighborhood: "Córdoba Centro" },
  { name: "Gabriel", lastName: "Páez", dni: "29673412", sex: "macho", size: "Pequeño", specie: "Gato", obs: "", home: "Av. Belgrano 400", neighborhood: "Villa Parque" },
  { name: "Antonella", lastName: "Giménez", dni: "41567823", sex: "hembra", size: "Mediano", specie: "Perro", obs: "", home: "San Martín 1200", neighborhood: "Lourdes" }
];

header(doc);
tablenew(doc);

let count = 0;
rows.forEach((row, index) => {
  const rowHeight = 20; 
  const docHeight = doc.page.height - doc.page.margins.top - doc.page.margins.bottom; 

  if (count === 10) {
    doc.addPage();
    header(doc); 
    tablenew(doc); 
    count = 0; 
  }

  generateRow(doc, row, index); 
  count++; 
});

doc.end();