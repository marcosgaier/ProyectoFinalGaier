const admin = require('firebase-admin');

// Reemplaza con la ruta a tu archivo de clave de servicio
const serviceAccount = require('../ametrina-gaier-firebase-adminsdk-4s5fx-815487bcac.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Reemplaza con tu JSON
const data = [
    {
        "id": 1,
        "title": "Cartera Zami",
        "price": 5000,
        "imagePath": "/images/CarteraZami.jpg",
        "category": "Carteras",
        "stock": 10,
        "description": "Cartera Zami elegante y versátil, perfecta para cualquier ocasión."
    },
    {
        "id": 2,
        "title": "Cartera Nare",
        "price": 7000,
        "imagePath": "/images/CarteraNare.jpg",
        "category": "Carteras",
        "stock": 8,
        "description": "Cartera Nare de diseño moderno, ideal para llevar todo lo necesario con estilo."
    },
    {
        "id": 3,
        "title": "Cartera Fanny",
        "price": 4500,
        "imagePath": "/images/CarteraFanny.jpg",
        "category": "Carteras",
        "stock": 5,
        "description": "Cartera Fanny, compacta y práctica, perfecta para el día a día."
    },
    {
        "id": 4,
        "title": "Posa saquito de té",
        "price": 2500,
        "imagePath": "/images/PosaSaquitoTe.jpg",
        "category": "Ceramicas",
        "stock": 20,
        "description": "Elegante posa saquito de té, ideal para tus momentos de relax."
    },
    {
        "id": 5,
        "title": "Bandeja oval jaspeada",
        "price": 1800,
        "imagePath": "/images/BandejaOval.jpg",
        "category": "Ceramicas",
        "stock": 15,
        "description": "Bandeja oval con un toque jaspeado, añade un toque único a tu mesa."
    },
    {
        "id": 6,
        "title": "Taza de té vainilla gris",
        "price": 3200,
        "imagePath": "/images/TazaTe.jpg",
        "category": "Ceramicas",
        "stock": 12,
        "description": "Disfruta de tu té en esta hermosa taza de tonos suaves y diseño confortable."
    },
    {
        "id": 7,
        "title": "Conjunto de funda de edredón Florence",
        "price": 30000,
        "imagePath": "/images/Florence.webp",
        "category": "Blanqueria",
        "stock": 6,
        "description": "Funda de edredón Florence, confort y estilo para tu dormitorio."
    },
    {
        "id": 8,
        "title": "Conjunto de funda de edredón Honor",
        "price": 45000,
        "imagePath": "/images/Honor.webp",
        "category": "Blanqueria",
        "stock": 4,
        "description": "Conjunto Honor, elegancia y comodidad para tus noches."
    },
    {
        "id": 9,
        "title": "Sábana de seda",
        "price": 35000,
        "imagePath": "/images/SabanaSeda.webp",
        "category": "Blanqueria",
        "stock": 10,
        "description": "Sábanas de seda suaves al tacto, garantizando un sueño placentero."
    }
];

data.forEach((item) => {
  db.collection('products').doc(item.id.toString()).set(item)
    .then(() => console.log(`Documento ${item.id} agregado con éxito`))
    .catch((error) => console.error(`Error agregando documento: ${error}`));
});
