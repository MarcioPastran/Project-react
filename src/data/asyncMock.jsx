export const product = [
  {
    id: 1,
    title: "Ptoducto 1",
    imageUrl:
      "https://img.freepik.com/foto-gratis/elegancia-color-ropa-ropa-ropa_1203-6544.jpg?t=st=1719875671~exp=1719879271~hmac=6ff1dcf3e0192fa896e8b51f4f5f0b668dd83c91c44288b25676042346ec4f2b&w=740",
    nombre: "Campera Rosada",
    category: "coat",
    price: 20.399,
    descripcion: "Campera rosada de terciopelo",
    stock: 10,
  },
  {
    id: 2,
    title: "Ptoducto 2",
    imageUrl:
      "https://img.freepik.com/fotos-premium/sudadera-capucha-blanca-blanco-aislada-sobre-fondo-blanco_144962-17708.jpg?w=740",
    nombre: "Buzo Blanco",
    category: "coat",
    price: 12.999,
    descripcion: "buzo blanco sin bolsillos",
    stock: 10,
  },
  {
    id: 3,
    title: "Ptoducto 3",
    imageUrl:
      "https://img.freepik.com/fotos-premium/mockup-aislado-capucha-blanco-rojo-generado-ia_206846-3095.jpg?w=740",
    nombre: "Buzo Bordo",
    category: "coat",
    price: 15.565,
    descripcion: "Buzo bordo con bolsillos",
    stock: 10,
  },
  {
    id: 4,
    title: "Ptoducto 4",
    imageUrl:
      "https://img.freepik.com/fotos-premium/sudadera-capucha-negra-blanco-hombre-sudadera-capucha-manga-larga-hombre-maqueta-capucha_795881-1220.jpg?w=740",
    nombre: "Buzo Negro",
    category: "coat",
    price: 13.999,
    descripcion: "Buzo negro con bolsillos",
    stock: 10,
  },
  {
    id: 5,
    title: "Ptoducto 5",
    imageUrl:
      "https://img.freepik.com/fotos-premium/zapatos-correr-aislados-sobre-fondo-blanco_1102944-3562.jpg?w=740",
    nombre: "Zapatillas Deportivas",
    category: "feet",
    price: 24.835,
    descripcion: "Zapatillas deportivas para correr",
    stock: 10,
  },
  {
    id: 6,
    title: "Ptoducto 6",
    imageUrl:
      "https://img.freepik.com/fotos-premium/zapatillas-negras-sobre-fondo-blanco-vista-lateral-aislada_1102944-726.jpg?w=740",
    nombre: "Zapatillas Urban",
    category: "feet",
    price: 25.999,
    descripcion: "Zapatillas urbanas negras",
    stock: 10,
  },
  {
    id: 7,
    title: "Ptoducto 7",
    imageUrl:
      "https://img.freepik.com/fotos-premium/botas-hombre-sobre-fondo-blanco_1102944-485.jpg?w=740",
    nombre: "Borcegos",
    category: "feet",
    price: 30.266,
    descripcion: "Borcegos Nobuk",
    stock: 10,
  },
  {
    id: 8,
    title: "Ptoducto 8",
    imageUrl:
      "https://img.freepik.com/foto-gratis/ropa-blanca-elegancia-moderna_1203-6524.jpg?t=st=1719876702~exp=1719880302~hmac=b3244db66e0d2bc8be59a8f5f1c1449f0b1706cf8aeb33ca0646caab358e5c58&w=740",
    nombre: "Pants sporty",
    category: "trousers",
    price: 10.566,
    descripcion: "chaqueta purpura de cuero sintetico",
    stock: 10,
  },
  {
    id: 9,
    title: "Ptoducto 9",
    imageUrl:
      "https://img.freepik.com/fotos-premium/nuevos-pantalones-piernas-anchas-aislados-sobre-fondo-blanco_94628-23572.jpg?w=826",
    nombre: "Pantalon de Vestir",
    category: "trousers",
    price: 19.999,
    descripcion: "Pantalon de vestir rectos color marron",
    stock: 10,
  },
  {
    id: 10,
    title: "Ptoducto 10",
    imageUrl:
      "https://img.freepik.com/fotos-premium/par-vaqueros-boton-cremallera_1025556-52173.jpg?w=740",
    nombre: "Jeans Azules",
    category: "trousers",
    price: 16.263,
    descripcion: "Jeans azules wide leg",
    stock: 10,
  },
  {
    id: 11,
    title: "Ptoducto 11",
    imageUrl:
      "https://img.freepik.com/fotos-premium/pantalones-clasicos-fondo-blanco_153608-44653.jpg?w=740",
    nombre: "Jeans Blancos",
    category: "trousers",
    price: 16.263,
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
      (prod) => prod.category === category
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
