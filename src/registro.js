class Animal {
    constructor(surgeryNumber,ownerName,home,phone,animalName,age,species,sex,weight,feactures) {
      this.surgeryNumber = surgeryNumber;
      this.ownerName=ownerName;
      this.home=home;
      this.phone=phone;
      this.animalName=animalName;
      this.age=age;
      this.species=species;
      this.sex=sex;
      this.weight=weight;
      this.feactures=feactures;
    }
  }
 const registro = [
  new Animal('3000', 'Daniela Sosa', 'Tusca 76', '3516177712', 'Pepe', '3a', 'P', 'M', '15kg', 'Peludo Negro'),
  new Animal('3001', 'Carlos Gómez', 'Belgrano 123', '3511234567', 'Luna', '2a', 'G', 'H', '12kg', 'Tranquila y gris'),
  new Animal('3002', 'Sofía Pérez', 'Mitre 456', '3517654321', 'Toby', '5a', 'P', 'M', '18kg', 'Ladrador y juguetón'),
  new Animal('3003', 'Juan Rodríguez', 'San Juan 789', '3511122334', 'Mimi', '1a', 'G', 'H', '5kg', 'Blanca con manchas'),
  new Animal('3004', 'Lucía Fernández', 'Rivadavia 101', '3519988776', 'Rocky', '4a', 'P', 'M', '20kg', 'Negro y obediente'),
  new Animal('3005', 'Martín López', 'Santa Fe 202', '3514433221', 'Nina', '6a', 'G', 'H', '6kg', 'Muy cariñosa'),
  new Animal('3006', 'Ana Torres', 'Córdoba 303', '3515566778', 'Simba', '3a', 'P', 'M', '14kg', 'Pelaje dorado'),
  new Animal('3007', 'Diego Ruiz', 'Catamarca 404', '3516677889', 'Lola', '7a', 'G', 'H', '25kg', 'Ojos verdes'),
  new Animal('3008', 'Valeria Díaz', 'Salta 505', '3517788990', 'Bruno', '2a', 'P', 'M', '22kg', 'Pelo corto y negro'),
  new Animal('3009', 'Federico Medina', 'La Rioja 606', '3518899001', 'Kira', '4a', 'G', 'H', '17kg', 'Muy activa'),
  new Animal('3010', 'Carla Molina', 'Buenos Aires 707', '3519900112', 'Max', '1a', 'P', 'M', '7kg', 'Café claro y tímido'),
  new Animal('3011', 'Juliana Pérez', 'Chacabuco 808', '3519988112', 'Rex', '2a', 'P', 'M', '10kg', 'Muy juguetón'),
  new Animal('3012', 'María González', 'Calle Falsa 909', '3517777666', 'Bella', '3a', 'G', 'H', '8kg', 'Pelaje suave y blanco'),
  new Animal('3013', 'Tomás Rodríguez', 'Avenida San Martín 1010', '3516666777', 'Bobby', '4a', 'P', 'M', '23kg', 'De color marrón y alegre'),
  new Animal('3014', 'Paola García', 'Colon 2020', '3515555444', 'Lucho', '5a', 'G', 'H', '12kg', 'Fiel y protector'),
  new Animal('3015', 'Ricardo Díaz', 'San Luis 3030', '3514444333', 'Zoe', '6a', 'P', 'M', '6kg', 'Cariñosa y tranquila'),
  new Animal('3016', 'Valeria Sánchez', 'Lavalle 4040', '3513333222', 'Rocky', '2a', 'G', 'H', '20kg', 'Gris con blanco y enérgico'),
  new Animal('3017', 'Felipe Fernández', 'Rivadavia 5050', '3512222111', 'Luna', '3a', 'P', 'M', '5kg', 'Divertida y afectuosa'),
  new Animal('3018', 'Luciana Gómez', 'Obispo Trejo 6060', '3511111000', 'Toby', '1a', 'G', 'H', '15kg', 'Ladrador y protector'),
  new Animal('3019', 'Esteban Ruiz', 'Mendoza 7070', '3519999888', 'Chester', '4a', 'P', 'M', '22kg', 'Negro con blanco y tranquilo'),
  new Animal('3020', 'Sofia Martínez', 'Mitre 8080', '3518888777', 'Mimi', '5a', 'G', 'H', '7kg', 'Limpia y tranquila'),
  new Animal('3000', 'Daniela Sosa', 'Tusca 76', '3516177712', 'Pepe', '3a', 'P', 'M', '15kg', 'Peludo Negro'),
  new Animal('3001', 'Carlos Gómez', 'Belgrano 123', '3511234567', 'Luna', '2a', 'G', 'H', '12kg', 'Tranquila y gris'),
  new Animal('3002', 'Sofía Pérez', 'Mitre 456', '3517654321', 'Toby', '5a', 'P', 'M', '18kg', 'Ladrador y juguetón'),
  new Animal('3003', 'Juan Rodríguez', 'San Juan 789', '3511122334', 'Mimi', '1a', 'G', 'H', '5kg', 'Blanca con manchas'),
  new Animal('3004', 'Lucía Fernández', 'Rivadavia 101', '3519988776', 'Rocky', '4a', 'P', 'M', '20kg', 'Negro y obediente'),
  new Animal('3005', 'Martín López', 'Santa Fe 202', '3514433221', 'Nina', '6a', 'G', 'H', '6kg', 'Muy cariñosa'),
  new Animal('3006', 'Ana Torres', 'Córdoba 303', '3515566778', 'Simba', '3a', 'P', 'M', '14kg', 'Pelaje dorado'),
  new Animal('3007', 'Diego Ruiz', 'Catamarca 404', '3516677889', 'Lola', '7a', 'G', 'H', '25kg', 'Ojos verdes'),
  new Animal('3008', 'Valeria Díaz', 'Salta 505', '3517788990', 'Bruno', '2a', 'P', 'M', '22kg', 'Pelo corto y negro'),
  new Animal('3009', 'Federico Medina', 'La Rioja 606', '3518899001', 'Kira', '4a', 'G', 'H', '17kg', 'Muy activa'),
  new Animal('3010', 'Carla Molina', 'Buenos Aires 707', '3519900112', 'Max', '1a', 'P', 'M', '7kg', 'Café claro y tímido'),
  new Animal('3011', 'Juliana Pérez', 'Chacabuco 808', '3519988112', 'Rex', '2a', 'P', 'M', '10kg', 'Muy juguetón'),
  new Animal('3012', 'María González', 'Calle Falsa 909', '3517777666', 'Bella', '3a', 'G', 'H', '8kg', 'Pelaje suave y blanco'),
  new Animal('3013', 'Tomás Rodríguez', 'Avenida San Martín 1010', '3516666777', 'Bobby', '4a', 'P', 'M', '23kg', 'De color marrón y alegre'),
  new Animal('3014', 'Paola García', 'Colon 2020', '3515555444', 'Lucho', '5a', 'G', 'H', '12kg', 'Fiel y protector'),
  new Animal('3015', 'Ricardo Díaz', 'San Luis 3030', '3514444333', 'Zoe', '6a', 'P', 'M', '6kg', 'Cariñosa y tranquila'),
  new Animal('3016', 'Valeria Sánchez', 'Lavalle 4040', '3513333222', 'Rocky', '2a', 'G', 'H', '20kg', 'Gris con blanco y enérgico'),
  new Animal('3017', 'Felipe Fernández', 'Rivadavia 5050', '3512222111', 'Luna', '3a', 'P', 'M', '5kg', 'Divertida y afectuosa'),
  new Animal('3018', 'Luciana Gómez', 'Obispo Trejo 6060', '3511111000', 'Toby', '1a', 'G', 'H', '15kg', 'Ladrador y protector'),
  new Animal('3019', 'Esteban Ruiz', 'Mendoza 7070', '3519999888', 'Chester', '4a', 'P', 'M', '22kg', 'Negro con blanco y tranquilo'),
  new Animal('3020', 'Sofia Martínez', 'Mitre 8080', '3518888777', 'Mimi', '5a', 'G', 'H', '7kg', 'Limpia y tranquila')

];


export {registro}