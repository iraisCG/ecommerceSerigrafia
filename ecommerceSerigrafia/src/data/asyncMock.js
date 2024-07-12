

export const productos = [

    {
        id:1,
        nombre:"Pantalla de serigrafía", 
        precio: 230,
        categoria: "Pantallas",
        stock: 10,
        descripcion: "Un marco para serigrafía de 50x60 cm con 150 hilos por cm lineal es una herramienta ideal para obtener impresiones detalladas y precisas. Fabricado con materiales duraderos como madera o aluminio, este marco asegura una tensión uniforme de la malla de poliéster, permitiendo una transferencia nítida de diseños complejos sobre textiles, papel y otros materiales. Perfecto para profesionales y aficionados de la serigrafía, este marco ofrece una combinación óptima de tamaño y densidad de malla para resultados de alta calidad en cada uso.",
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
        descripcion: "La racleta de serigrafía es una herramienta esencial para cualquier taller de serigrafía. Diseñada para ofrecer un rendimiento superior y una durabilidad excepcional, esta racleta es perfecta tanto para profesionales como para aficionados.",
        imagen:"/medios/racleta_serigrafia.jpg"
    }
    ,

    {
        id:4,
        nombre:"Espatula", 
        precio: 60,
        categoria: "Herramientas",
        stock: 30,
        descripcion: "La espátula de serigrafía es una herramienta imprescindible para cualquier serígrafo. Diseñada para ofrecer precisión y facilidad de uso, nuestra espátula facilita la aplicación y manipulación de tinta en el proceso de serigrafía. Es ideal tanto para profesionales como para aficionados que buscan resultados de alta calidad.",
        imagen: "/medios/espatuta_serigrafia.jpg"
    }
    ,

    {
        id:5,
        nombre:"Bicromato", 
        precio: 90,
        categoria: "Químicos",
        stock: 40,
        descripcion: "El bicromato es un sensibilizador esencial utilizado en el proceso de serigrafía para preparar la emulsión fotosensible. Este compuesto químico permite que la emulsión se endurezca al exponerse a la luz UV, creando una plantilla duradera y precisa para la impresión. Ideal tanto para serigrafistas profesionales como para aficionados que buscan resultados de alta calidad.",
        imagen: "/medios/bicromato.webp"
    }
    ,

   
    {
        id: 6,
        nombre:"Aplicador de emulsión",
        precio: 120,
        categoria: "Herramientas",
        stock: 35,
        descripcion: "El aplicador de emulsión es una herramienta esencial para cualquier taller de serigrafía. Diseñado para aplicar emulsión de manera uniforme y precisa en la pantalla de serigrafía, este aplicador garantiza resultados profesionales en cada proyecto. Ideal tanto para profesionales como para aficionados que buscan calidad y eficiencia en su trabajo de serigrafía.",
        imagen: "/medios/aplicador.webp"
    }
    ,

    {
        id: 7,
        nombre:"Emulsión de serigrafía", 
        precio: 280,
        categoria: "Químicos",
        stock: 25,
        descripcion: "La emulsión de serigrafía es un componente clave para la creación de pantallas serigráficas precisas y duraderas. Nuestra emulsión de alta calidad está formulada para proporcionar una excelente definición de imagen y durabilidad, asegurando resultados profesionales en cada impresión. Ideal para serigrafistas profesionales y aficionados que buscan consistencia y rendimiento superior.",
        imagen: "/medios/emulsion_serigrafia.jpg"
    }
    ,

    {
        id: 8,
        nombre:"Serisol", 
        precio: 220,
        categoria: "Químicos",
        stock: 10,
        descripcion: "Serisol es un solvente de limpieza especialmente formulado para la industria de la serigrafía. Diseñado para remover eficazmente tintas, emulsiones y residuos de las pantallas de serigrafía, Serisol asegura que tus herramientas estén limpias y listas para su próximo uso. Es ideal tanto para serigrafistas profesionales como para aficionados que buscan mantener la calidad y durabilidad de sus equipos.",
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

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = productos.find ((prod) => prod.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        },2000);
    });
};