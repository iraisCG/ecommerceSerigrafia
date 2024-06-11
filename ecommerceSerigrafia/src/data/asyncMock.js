

export const productos = [

    {
        id:1,
        nombre:"Pantalla de serigrafía", 
        precio: 230,
        categoria: "Pantallas",
        stock: 10,
        descripcion: "Marco de 50x60 cm con 150 hilos por cm lineal",
        imagen: "/medios/pantalla_serigrafia.jpg"
    }
    , 
    
    {
        id:2,
        nombre:"Acondicionador", 
        precio: 250,
        categoria: "Quimicos",
        stock: 10,
        descripcion: "Modifican la viscosidad y cuerpo de las tintas, contribuyen en buena medida a acelerar o retardar el secado y en algunos casos, promover la adherencia.",
        imagen:"/medios/acondicionador_serigrafia.jpg"
    }
    ,

    {
        id:3,
        nombre:"Racleta", 
        precio: 150,
        categoria: "Herramientas",
        stock: 50,
        descripcion: "Marco de 50x60 cm con 150 hilos por cm lineal",
        imagen:"/medios/racleta_serigrafia.jpg"
    }
    ,

    {
        id:4,
        nombre:"Espatula", 
        precio: 60,
        categoria: "Herramientas",
        stock: 30,
        descripcion: "Marco de 50x60 cm con 150 hilos por cm lineal",
        imagen: "/medios/espatuta_serigrafia.jpg"
    }
    ,

    {
        id:5,
        nombre:"Bicromato", 
        precio: 90,
        categoria: "Químicos",
        stock: 40,
        descripcion: "El bicromato es un sensibilizador que se coloca en la emulsión de serigrafía.",
        imagen: "/medios/bicromato.webp"
    }
    ,

   
    {
        id: 6,
        nombre:"Aplicador de emulsión",
        precio: 120,
        categoria: "Herramientas",
        stock: 35,
        descripcion: "Marco de 50x60 cm con 150 hilos por cm lineal",
        imagen: "/medios/aplicador.webp"
    }
    ,

    {
        id: 7,
        nombre:"Emulsión de serigrafía", 
        precio: 280,
        categoria: "Químicos",
        stock: 25,
        descripcion: "Las emulsiones son un componente esencial en el proceso de serigrafía, y su principal función es facilitar la transferencia de un diseño a una pantalla serigráfica",
        imagen: "/medios/emulsion_serigrafia.jpg"
    }
    ,

    {
        id: 8,
        nombre:"Serisol", 
        precio: 220,
        categoria: "Químicos",
        stock: 10,
        descripcion: "Es una mezcla de detergentes alcalinos muy activos, auxiliar en el borrado de imágenes fantasmas que quedaron en la malla después de desenmulsionar",
        imagen: "/medios/serisol.webp"
    },  
    
];

export const getProducts = () => {
    return new Promise ( (res) => {
        setTimeout ( () => {
            res(productos);

        }, 2000);
    }

    );
};

export const getProductsByCategory = (category) => {
    return new Promise ((res) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.categoria === category
        );
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};