import image1 from "../assets/img/elegancia-color-ropa-ropa-ropa_1203-6544-removebg-preview.png";
import image2 from "../assets/img/buso-azul-fotor-bg-remover-202406304511.png";
import image3 from "../assets/img/sudadera-capucha-blanca-blanco-aislada-sobre-fondo-blanco_144962-17708-fotor-bg-remover-2024070845843.png";
import image4 from "../assets/img/sudadera-capucha-negra-blanco-hombre-sudadera-capucha-manga-larga-hombre-maqueta-capucha_795881-1220-fotor-bg-remover-2024070845425.png";
import image5 from "../assets/img/zapatos-correr-1-fotor-bg-remover-2024063045531.png";
import image6 from "../assets/img/zapatillas-negras-sobre-fondo-blanco-vista-lateral-aislada_1102944-726-fotor-bg-remover-202407085844.png";
import image7 from "../assets/img/botas-hombre-sobre-fondo-blanco_1102944-485-fotor-bg-remover-2024070851332.png";
import image8 from "../assets/img/zapatos-correr-o-zapatillas-deporte-sobre-fondo-transparente_84443-1684-fotor-bg-remover-2024070852719.png";
import image9 from "../assets/img/pantalones-carga-hombres-fondo-transparente-aislado_191095-17060-fotor-bg-remover-2024063045359.png";
import image10 from "../assets/img/vaqueros-azules-aislados-sobre-fondo-transparente_191095-17283-fotor-bg-remover-2024063045440.png";
import image11 from "../assets/img/pantalones-clasicos-fondo-blanco_153608-44653-fotor-bg-remover-2024070853236.png";

export const product = [
  {
    title: "Producto 1",
    imageUrl: image1,
    nombre: "Campera Rosada",
    category: "Abrigo",
    price: 20399,
    descripcion: "Campera terciopelo rosa mujer sin capucha",
    stock: 10,
  },
  {
    title: "Producto 2",
    imageUrl: image2,
    nombre: "Buzo Azul",
    category: "Abrigo",
    price: 12999,
    descripcion:
      "Buzo canguro oversize azul liso de algodon premiun 100% frizado unisex",
    stock: 10,
  },
  {
    title: "Producto 3",
    imageUrl: image3,
    nombre: "Buzo Blanco",
    category: "Abrigo",
    price: 15565,
    descripcion:
      "Buzo blanco sin bolsillos liso de algodon premiun 100% frizado unisex",
    stock: 10,
  },
  {
    title: "Producto 4",
    imageUrl: image4,
    nombre: "Buzo Negro",
    category: "Abrigo",
    price: 13999,
    descripcion:
      "Buzo negro con bolsillos liso de algodon premiun 100% frizado unisex",
    stock: 10,
  },
  {
    title: "Producto 5",
    imageUrl: image5,
    nombre: "Zapatillas Deportivas",
    category: "Zapatillas",
    price: 24835,
    descripcion: "Zapatillas deportivas running comodas y antideslizante",
    stock: 10,
  },
  {
    title: "Producto 6",
    imageUrl: image6,
    nombre: "Zapatillas Urban",
    category: "Zapatillas",
    price: 25999,
    descripcion: "Zapatillas urbanas negras de vestir unisex",
    stock: 10,
  },
  {
    title: "Producto 7",
    imageUrl: image7,
    nombre: "Borcegos",
    category: "Zapatillas",
    price: 30266,
    descripcion: "Borcegos Nobuk de hombre caña alta acordonados",
    stock: 10,
  },
  {
    title: "Producto 8",
    imageUrl: image8,
    nombre: "Zapatillas Deportivas",
    category: "Zapatillas",
    price: 10566,
    descripcion:
      "Zapatillas deportivas negras running comodas y antideslizante",
    stock: 10,
  },
  {
    title: "Producto 9",
    imageUrl: image9,
    nombre: "Pantalon Cargo",
    category: "Pantalones",
    price: 19999,
    descripcion: "Pantalon cargo de vestir rectos color marron",
    stock: 10,
  },
  {
    title: "Producto 10",
    imageUrl: image10,
    nombre: "Pantalones Cargo",
    category: "Pantalones",
    price: 16263,
    descripcion:
      "Pantalones cargo rompe viento, regulable de cintura como de puños, unico color",
    stock: 10,
  },
  {
    title: "Producto 11",
    imageUrl: image11,
    nombre: "Jeans Blancos",
    category: "Pantalones",
    price: 16263,
    descripcion: "Jeans mom blancos tiro alto",
    stock: 10,
  },
];

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 2000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    const productosFiltrados = product.filter(
      (prod) => prod.category.toLowerCase() === category.toLowerCase()
    );
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const productoFiltrado = product.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      resolve(productoFiltrado);
    }, 2000);
  });
};
