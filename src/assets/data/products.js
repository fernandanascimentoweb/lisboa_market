import productImg01 from "../images/alccol2.webp";
import productImg02 from "../images/alcool1.png";

import productImg007 from "../images/arroz_pratofino.jpg";
import productImg07 from "../images/arroz_tiojoao.jpg";

import productImg21 from "../images/ling_calabresa.jpg";
import productImg23 from "../images/ling_toscana.webp";

import productImg26 from "../images/creme_colgate.webp";
import productImg27 from "../images/creme_sorriso.webp";
import productImg28 from "../images/elseve.webp";
import productImg29 from "../images/pantene.avif";
import productImg31 from "../images/sab_francis.png";
import productImg32 from "../images/seda.avif";

import productImg33 from "../images/leite_italac.webp";

import productImg37 from "../images/vassoura1.webp";
import productImg38 from "../images/vassoura2.webp";

import productImg43 from "../images/frango_bdj.webp";

import productImg050 from '../images/amac_downy.webp';
import productImg051 from '../images/assolan_aco.webp';
import productImg052 from '../images/bombril_aco.webp';
import productImg053 from '../images/cloro_influx2.jpg';
import productImg054 from '../images/lava_loucabarra.jpeg';
import productImg055 from '../images/lava_loucalimpol.jpg';
import productImg056 from '../images/lava_loucaodd.webp';
import productImg057 from '../images/lava_loucaype.jpeg';
import productImg058 from '../images/omo_16.webp';
import productImg059 from '../images/omo_800.webp';
import productImg060 from '../images/surf_16.webp';
import productImg061 from '../images/surf_800.webp';
// import productImg062 from '../images/tixan_16.webp';
// import productImg063 from '../images/tixan_800.webp';
// import productImg064 from '../images/sanitaria_barra1.webp'
// import productImg065 from '../images/sanitaria_barra2.webp';
// import productImg066 from '../images/sanitaria_influx1.jpg';
// import productImg067 from '../images/sanitaria_influx2.jpg';
// import productImg068 from '../images/sanitaria_superglobo1.jpeg';
// import productImg069 from '../images/sanitaria_superglobo2.jpg'
// import productImg070 from '../images/sanitaria_ype.png'
// import productImg071 from '../images/sanitaria_ype2.png';



const products = [
  
  //  limpeza
 
  {
    id: "01",
    productName: "Alcool Tupi 1L ",
    imgUrl: productImg01,
    category: "limpeza",
    price: 5.99,
    shortDesc:
      "Alcool tupi 1l , 70% , em gel .",
    description:
      "Alcool tupi 1l , 70% , em gel .",
    reviews: [
      {
        rating: 4.7,
        text: "O produto e de boa qualidade",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Alcool Virossas 500ml ",
    imgUrl: productImg02,
    category: "limpeza",
    price: 2.89,
    shortDesc:
      "Alccol virossas 500ml , 92% liquido",
    description:
      "Alccol virossas 500ml , 92% liquido",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "50",
    productName: "Amaciante Downy 500ml ",
    imgUrl: productImg050,
    category: "limpeza",
    price: 10.99,
    shortDesc:
      "Amaciante Downy 500ml",
    description:
      "Amaciante Downy 500ml",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },
  
  {
    id: "51",
    productName: "La aço Assolan und ",
    imgUrl: productImg051,
    category: "limpeza",
    price: 2.99,
    shortDesc:
      "Eponja de aço assolan",
    description:
      "Eponja de aço assolan",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "52",
    productName: "La aço Bombril und ",
    imgUrl: productImg052,
    category: "limpeza",
    price: 2.89,
    shortDesc:
      "Eponja de aço bombril",
    description:
      "Eponja de aço bombril",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "53",
    productName: "Cloro Influx 2l ",
    imgUrl: productImg053,
    category: "limpeza",
    price: 7.99,
    shortDesc:
      "Cloro influx 2l",
    description:
      "Cloro influx 2l",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "54",
    productName: "Lava louças barra 500ml ",
    imgUrl: productImg054,
    category: "limpeza",
    price: 3.29,
    shortDesc:
      "Lava louças barra 500ml unidade",
    description:
      "Lava louças barra 500ml unidade",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "55",
    productName: "Lava louças Limpol 500ml ",
    imgUrl: productImg055,
    category: "limpeza",
    price: 2.89,
    shortDesc:
      "Lava louças limpol 500ml",
    description:
      "Lava louças limpol 500ml",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "56",
    productName: "Lava louças ODD 500ml ",
    imgUrl: productImg056,
    category: "limpeza",
    price: 3.89,
    shortDesc:
      "Lava louças odd 500ml unidade",
    description:
      "Lava louças odd 500ml unidade",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "57",
    productName: "Lava louças Ype 500ml ",
    imgUrl: productImg057,
    category: "limpeza",
    price: 4.89,
    shortDesc:
      "Lava louças ype 500ml",
    description:
      "Lava louças ype 500ml",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "58",
    productName: "Sabão po Omo 1,6 kg ",
    imgUrl: productImg058,
    category: "limpeza",
    price: 18.99,
    shortDesc:
      "Sabão po Omo 1,6 kg",
    description:
      "Sabão po Omo 1,6 kg",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "59",
    productName: "Sabão po Omo 800g ",
    imgUrl: productImg059,
    category: "limpeza",
    price: 12.99,
    shortDesc:
      "Sabão po Omo 800g",
    description:
      "Sabão po Omo 800g",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "60",
    productName: "Sabão po Surf 1,6 kg ",
    imgUrl: productImg060,
    category: "limpeza",
    price: 12.89,
    shortDesc:
      "Sabão po Omo 1,6kg",
    description:
      "Sabão po Omo 1,6 kg",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

{
    id: "61",
    productName: "Sabão po Surf 800g ",
    imgUrl: productImg061,
    category: "limpeza",
    price: 9.89,
    shortDesc:
      "Sabão po surf 800g",
    description:
      "Sabão po surf 800g",
    reviews: [
      {
        rating: 4.8,
        text: "O produto e bom ",
      },
      {
        rating: 4.8,
        text: "E de boa qualidade.",
      },
    ],
    avgRating: 4.7,
  },

  

  // popular

  {
    id: "03",
    productName: "Alface unidade",
    imgUrl: "https://i.ibb.co/0pw7V0M3/alface.jpg",
    category: "popular",
    price: 1.73,
    shortDesc:
      "Alface unidade",
    description:
      "Aface verdinho",
    reviews: [
      {
        rating: 4.6,
        text: "O preço esta bem em conta.",
      },
      {
        rating: 4.9,
        text: "Quando comprei estava bem verdinho e grande",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Batata Lisa kg ",
    imgUrl: 'https://i.ibb.co/8DkYGJgK/batata-lisa.jpg',
    category: "popular",
    price: 5.79,
    shortDesc:
      "Batata inglesa lisa da serra",
    description:
      "Batata inglesa lisa da serra",
    reviews: [
      {
        rating: 4.8,
        text: "Preço bom.",
      },
      {
        rating: 4.8,
        text: "Qualidade boa da batata",
      },
    ],
    avgRating: 4.7,
  },

  //  hortifrutti

  {
    id: "05",
    productName: "Cebola kg",
    imgUrl: 'https://i.ibb.co/9mn0N0Rz/cebola.jpg',
    category: "hortifrutti",
    price: 2.59,
    shortDesc:
      "Cebola branca colhida da serra",
    description:
      "Cebola branca colhida da serra",
    reviews: [
      {
        rating: 4.6,
        text: "boa",
      },
      {
        rating: 4.9,
        text: "preço bom",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Alface unidade",
    imgUrl: "https://i.ibb.co/0pw7V0M3/alface.jpg",
    category: "hortifrutti",
    price: 1.73,
    shortDesc:
      "Alface unidade",
    description:
      "Aface verdinho",
    reviews: [
      {
        rating: 4.6,
        text: "O preço esta bem em conta.",
      },
      {
        rating: 4.9,
        text: "Quando comprei estava bem verdinho e grande",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Batata Lisa kg ",
    imgUrl: 'https://i.ibb.co/8DkYGJgK/batata-lisa.jpg',
    category: "hortifrutti",
    price: 5.79,
    shortDesc:
      "Batata inglesa lisa da serra",
    description:
      "Batata inglesa lisa da serra",
    reviews: [
      {
        rating: 4.8,
        text: "Preço bom.",
      },
      {
        rating: 4.8,
        text: "Qualidade boa da batata",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Tomate kg",
    imgUrl: 'https://i.ibb.co/Xxjdrq1b/tomate.webp',
    category: "hortifrutti",
    price: 3.79,
    shortDesc:
      "Tomate kg",
    description:
      "tomate selecionados",
    reviews: [
      {
        rating: 4.6,
        text: "Preco bom",
      },
      {
        rating: 4.9,
        text: "Preço bom",
      },
    ],
    avgRating: 4.7,
  },

// cereais

  {
    id: "07",
    productName: "Arroz Bco Prato Fino 5kg",
    imgUrl: productImg007,
    category: "cereais",
    price: 33.89,
    shortDesc:
      "Arroz prato fino 5kg",
    description:
      "Arroz prato fino 5kg",
    reviews: [
      {
        rating: 4.6,
        text: "arroz fica soltinho",
      },
      {
        rating: 4.9,
        text: "qualidade boa , preco bom ",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Arroz Bco Tio Joao 5kg",
    imgUrl: productImg07,
    category: "cereais",
    price: 34.89,
    shortDesc:
      "Arrooz tio joao 5kg",
    description:
      "Arroz bco tio joao 5kg",
    reviews: [
      {
        rating: 4.6,
        text: "preco bom",
      },
      {
        rating: 4.9,
      text: "Qualidade boa",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Feijao Preto combrasil 1kg",
    imgUrl: 'https://i.ibb.co/j9NJXxvz/feijao-combrasil.jpg',
    category: "cereais",
    price: 6.99,
    shortDesc:
      "Feijao preto combrasil 1kg",
    description:
      "Feijao preto combrasil 1kg",
    reviews: [
      {
        rating: 4.6,
        text: "Bom",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Feijao Preto Kicaldo 1kg",
    imgUrl: 'https://i.ibb.co/7J5Lfr7n/feijao-kicaldo.webp',
    category: "cereais",
    price: 8.99,
    shortDesc:
      "Feijao preto kicaldo 1kg",
    description:
      "Feijao preto kicaldo 1kg",
    reviews: [
      {
        rating: 4.6,
        text: "otima qualidade",
      },
      {
        rating: 4.9,
        text: "feijao muito bom",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "11",
    productName: "Farinha trigo Dona Benta 1kg",
    imgUrl: 'https://i.ibb.co/zg1hSvv/trigo-donabenta.jpg',
    category: "cereais",
    price: 3.99,
    shortDesc:
      "Farinha trigo Dona Benta 1kg",
    description:
      "Farinha trigo Dona Benta 1kg",
    reviews: [
      {
        rating: 4.6,
        text: "Boa",
      },
      {
        rating: 4.9,
        text: "bom ",
      },
    ],
    avgRating: 4.7,
  },

// melhores

  {
    id: "12",
    productName: "Cerveja Amstel 473ml",
    imgUrl: 'https://i.ibb.co/SD5Pk5W6/cerveja-amstel.webp',
    category: "melhores",
    price: 4.99,
    shortDesc:
      "Cerveja Amstel 473ml",
    description:
      "Cerveja Amstel 473ml",
    reviews: [
      {
        rating: 4.8,
        text: "cerveja boa , porem forte",
      },
      {
        rating: 4.9,
        text: "boa, preco bom",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Cerveja Brahma 473ml",
    imgUrl: 'https://i.ibb.co/676wvT93/cerveja-brahma.webp',
    category: "melhores",
    price: 3.79,
    shortDesc:
      "Cerveja Brahma 473ml",
    description:
      "Cerveja Brahma 473ml",
    reviews: [
      {
        rating: 4.6,
        text: "preco bom",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "14",
    productName: "Ref. coca-cola 2L",
    imgUrl: 'https://i.ibb.co/qL63Wc77/coca-2l.webp',
    category: "melhores",
    price: 7.99,
    shortDesc:
      "Ref. coca-cola 2L",
    description:
      "Ref. coca-cola 2L",
    reviews: [
      {
        rating: 4.8,
        text: "promocao boa , gostei",
      },
      {
        rating: 4.9,
        text: "comprei gelada , muito bom atendimento",
      },
    ],
    avgRating: 4.8,
  },

// bebidas

    {
    id: "12",
    productName: "Cerveja Amstel 473ml",
    imgUrl: 'https://i.ibb.co/SD5Pk5W6/cerveja-amstel.webp',
    category: "bebidas",
    price: 4.99,
    shortDesc:
      "Cerveja Amstel 473ml",
    description:
      "Cerveja Amstel 473ml",
    reviews: [
      {
        rating: 4.8,
        text: "cerveja boa , porem forte",
      },
      {
        rating: 4.9,
        text: "boa, preco bom",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Cerveja Brahma 473ml",
    imgUrl: 'https://i.ibb.co/676wvT93/cerveja-brahma.webp',
    category: "bebidas",
    price: 3.79,
    shortDesc:
      "Cerveja Brahma 473ml",
    description:
      "Cerveja Brahma 473ml",
    reviews: [
      {
        rating: 4.6,
        text: "preco bom",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "14",
    productName: "Ref. coca-cola 2L",
    imgUrl: 'https://i.ibb.co/qL63Wc77/coca-2l.webp',
    category: "bebidas",
    price: 7.99,
    shortDesc:
      "Ref. coca-cola 2L",
    description:
      "Ref. coca-cola 2L",
    reviews: [
      {
        rating: 4.8,
        text: "promocao boa , gostei",
      },
      {
        rating: 4.9,
        text: "comprei gelada , muito bom atendimento",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Ref. coca-cola 350ml",
    imgUrl: 'https://i.ibb.co/C5YpGY0V/coca-lata.webp',
    category: "bebidas",
    price: 5.99,
    shortDesc:
      "Ref. coca-cola 350ml",
    description:
      "Ref. coca-cola 350ml",
    reviews: [
      {
        rating: 4.8,
        text: "coca nao tem igual , muito boa",
      },
      {
        rating: 4.9,
        text: "estava super gelada.",
      },
    ],
    avgRating: 4.8,
  },

// laticinio

  {
    id: "16",
    productName: "Margarina Claybom 500g",
    imgUrl: 'https://i.ibb.co/PvdFdWYY/claybom.jpg',
    category: "laticinio",
    price: 4.99,
    shortDesc:
      "Margarina Claybom 500g",
    description:
      "Margarina Claybom 500g",
    reviews: [
      {
        rating: 4.8,
        text: "bom",
      },
      {
        rating: 4.9,
        text: "preco bom , precisa colocar no encarte novamente",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Queijo Mussarela kg",
    imgUrl: 'https://i.ibb.co/CpkL8KWz/mussarela.webp',
    category: "laticinio",
    price: 38.99,
    shortDesc:
      "Queijo Mussarela kg",
    description:
      "Queijo Mussarela kg",
    reviews: [
      {
        rating: 4.8,
        text: "bom",
      },
      {
        rating: 4.9,
        text: "boa qualidade.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
  productName: "Queijo minas kg",
    imgUrl: 'https://i.ibb.co/pjRGmVkV/queijo-mnas.jpg',
    category: "laticinio",
    price: 26.99,
    shortDesc:
      "Queijo minas kg",
    description:
      "Queijo minas kg",
    reviews: [
      {
        rating: 4.8,
        text: "qualidade boa",
      },
      {
        rating: 4.9,
        text: "gosto bom.",
      },
    ],
    avgRating: 4.8,
  },

// alta

  {
    id: "19",
    productName: "Coxa Sobrecoxa frango kg",
    imgUrl: 'https://i.ibb.co/j9NRm0Lm/coxa.webp',
    category: "alta",
    price: 7.99,
    shortDesc:
      "Coxa Sobrecoxa frango kg",
    description:
      "Coxa Sobrecoxa frango kg",
    reviews: [
      {
        rating: 4.8,
        text: "preco bom",
      },
      {
        rating: 4.9,
        text: "boa qualidade",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Linguça calabresa kg",
    imgUrl: productImg21,
    category: "alta",
    price: 29.99,
    shortDesc:
      "Linguça calabresa kg",
    description:
      "Linguça calabresa kg",
    reviews: [
      {
        rating: 4.8,
        text: "gosto bom",
      },
      {
        rating: 4.9,
        text: "qualidade boa",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Picanha kg",
    imgUrl:  'https://i.ibb.co/8nwtGY6j/picanha.jpg',
    category: "alta",
    price: 69.99,
    shortDesc:
      "Picanha kg",
    description:
      "Picanha kg",
    reviews: [
      {
        rating: 4.8,
        text: "preco bom ",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "22",
    productName: "Linguiça Toscana kg",
    imgUrl: productImg23,
    category: "alta",
    price: 13.99,
    shortDesc:
      "Linguiça Toscana kg",
    description:
      "Linguiça Toscana kg",
    reviews: [
      {
        rating: 4.8,
        text: "marca boa, vou levar mais",
      },
      {
        rating: 4.9,
        text: "boa",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "23",
    productName: "Pernil suino kg",
    imgUrl: 'https://i.ibb.co/tp2fpKZ9/pernil.webp',
    category: "alta",
    price: 19.89,
    shortDesc:
      "Pernil suino kg",
    description:
      "Pernil suino kg",
    reviews: [
      {
        rating: 4.8,
        text: "bom",
      },
      {
        rating: 4.9,
        text: "fresquinho , preco bom ",
      },
    ],
    avgRating: 4.8,
  },

  // perfumaria

  {
    id: "24",
    productName: "Creme dental Colgate",
    imgUrl: productImg26,
    category: "perfumaria",
    price: 5.69,
    shortDesc:
      "Creme dental Colgate",
    description:
      "Creme dental Colgate",
    reviews: [
      {
        rating: 4.8,
        text: "preco bom",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "25",
    productName: "Creme dental Sorriso",
    imgUrl: productImg27,
    category: "perfumaria",
    price: 4.39,
    shortDesc:
      "Creme dental Sorriso",
    description:
      "Creme dental Sorriso",
    reviews: [
      {
        rating: 4.8,
        text: "bom",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "26",
    productName: "Shampoo Elseve",
    imgUrl: productImg28,
    category: "perfumaria",
    price: 5.69,
    shortDesc:
      "Shampoo Elseve",
    description:
      "Shampoo Elseve",
    reviews: [
      {
        rating: 4.8,
        text: "bom gosto desse shampoo",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "27",
    productName: "Shampoo pantene",
    imgUrl: productImg29,
    category: "perfumaria",
    price: 8.99,
    shortDesc:
      "Shampoo pantene",
    description:
      "Shampoo pantene",
    reviews: [
      {
        rating: 4.8,
        text: "bom",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "28",
    productName: "Sabonete Dove",
    imgUrl: 'https://i.ibb.co/rTTB2Ch/sab-dove.webp',
    category: "perfumaria",
    price: 5.99,
    shortDesc:
      "Sabonete Dove",
    description:
      "Sabonete Dove",
    reviews: [
      {
        rating: 4.8,
        text: "bom , gosto muito dele",
      },
      {
        rating: 4.9,
        text: "bom.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "29",
    productName: "Sabonete Francis",
    imgUrl: productImg31,
    category: "perfumaria",
    price: 4.89,
    shortDesc:
      "Sabonete Francis",
    description:
      "Sabonete Francis",
    reviews: [
      {
        rating: 4.8,
        text: "bom.",
      },
      {
        rating: 4.9,
        text: "bom.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "30",
    productName: "Shampoo Seda",
    imgUrl: productImg32,
    category: "perfumaria",
    price: 11.99,
    shortDesc:
      "Shampoo Seda",
    description:
      "Shampoo Seda",
    reviews: [
      {
        rating: 4.8,
        text: "bom",
      },
      {
        rating: 4.9,
        text: "bom.",
      },
    ],
    avgRating: 4.8,
  },

// matinais

  {
    id: "31",
    productName: "Creme leite italac",
    imgUrl: productImg33,
    category: "matinais",
    price: 3.79,
    shortDesc:
      "Creme leite italac",
    description:
      "Creme leite italac",
    reviews: [
      {
        rating: 4.8,
        text: "bom.",
      },
      {
        rating: 4.9,
        text: "preco bom.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "32",
    productName: "Leite condensado moça tp 395g",
    imgUrl: 'https://i.ibb.co/1fZHQD0d/leite-moca.webp',
    category: "matinais",
    price: 8.69,
    shortDesc:
      "Leite condensado moça tp 395g",
    description:
      "Leite condensado moça tp 395g",
    reviews: [
      {
        rating: 4.8,
        text: "preco bom.",
      },
      {
        rating: 4.9,
        text: "bom.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "33",
    productName: "Leite condensado piracanjuba",
    imgUrl: 'https://i.ibb.co/KJHJyKg/leite-piracanjuba.jpg',
    category: "matinais",
    price: 4.89,
    shortDesc:
      "Leite condensado piracanjuba",
    description:
      "Leite condensado piracanjuba",
    reviews: [
      {
        rating: 4.8,
        text: "bom",
      },
      {
        rating: 4.9,
        text: "bom. adoro esse condensado",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "34",
    productName: "Achocolatado Nescau",
    imgUrl: 'https://i.ibb.co/jPDWZZFb/nescau.jpg',
    category: "matinais",
    price: 8.69,
    shortDesc:
      "Achocolatado Nescau",
    description:
      "Achocolatado Nescau",
    reviews: [
      {
        rating: 4.8,
        text: "bom.",
      },
      {
        rating: 4.9,
        text: "bom.",
      },
    ],
    avgRating: 4.8,
  },

// utilidades

  {
    id: "35",
    productName: "Vassoura 1 unidade",
    imgUrl: productImg37,
    category: "utilidades",
    price: 9.69,
    shortDesc:
      "Vassoura 1 unidade",
    description:
      "Vassoura 1 unidade",
    reviews: [
      {
        rating: 4.8,
        text: "qualidade boa",
      },
      {
        rating: 4.9,
        text: "boa.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "36",
    productName: "Vassoura 2 two unidade",
    imgUrl: productImg38,
    category: "utilidades",
    price: 7.99,
    shortDesc:
      "Vassoura 2 two unidade",
    description:
      "Vassoura 2 two unidade",
    reviews: [
      {
        rating: 4.8,
        text: "boa.",
      },
      {
        rating: 4.9,
        text: "boa qualidade.",
      },
    ],
    avgRating: 4.8,
  },

// conservas

  {
    id: "37",
    productName: "Oleo soja liza",
    imgUrl: 'https://i.ibb.co/LDYcxH02/oleo-liza.jpg',
    category: "conserva",
    price: 7.99,
    shortDesc:
      "Oleo soja liza",
    description:
      "Oleo soja liza",
    reviews: [
      {
        rating: 4.8,
        text: "preco bom",
      },
      {
        rating: 4.9,
        text: "preco bom",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "38",
    productName: "Oleo soja soya",
    imgUrl: 'https://i.ibb.co/DD3yYFF4/oleo-soya.webp',
    category: "conserva",
    price: 7.69,
    shortDesc:
      "Oleo soja soya",
    description:
      "Oleo soja soya",
    reviews: [
      {
        rating: 4.8,
        text: "bom.",
      },
      {
        rating: 4.9,
        text: "bom.",
      },
    ],
    avgRating: 4.8,
  },

// açougue

  {
    id: "39",
    productName: "Filet peito frango kg",
    imgUrl: 'https://i.ibb.co/4g9ZzL3k/file-frango.webp',
    category: "açougue",
    price: 19.99,
    shortDesc:
      "Filet peito frango kg",
    description:
      "Filet peito frango kg",
    reviews: [
      {
        rating: 4.8,
        text: "marca boa.",
      },
      {
        rating: 4.9,
        text: "preco bom .",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "23",
    productName: "Pernil suino kg",
    imgUrl: 'https://i.ibb.co/tp2fpKZ9/pernil.webp',
    category: "açougue",
    price: 19.89,
    shortDesc:
      "Pernil suino kg",
    description:
      "Pernil suino kg",
    reviews: [
      {
        rating: 4.8,
        text: "bom",
      },
      {
        rating: 4.9,
        text: "fresquinho , preco bom ",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "22",
    productName: "Linguiça Toscana kg",
    imgUrl: productImg23,
    category: "açougue",
    price: 13.99,
    shortDesc:
      "Linguiça Toscana kg",
    description:
      "Linguiça Toscana kg",
    reviews: [
      {
        rating: 4.8,
        text: "marca boa, vou levar mais",
      },
      {
        rating: 4.9,
        text: "boa",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Coxa Sobrecoxa frango kg",
    imgUrl: 'https://i.ibb.co/j9NRm0Lm/coxa.webp',
    category: "açougue",
    price: 7.99,
    shortDesc:
      "Coxa Sobrecoxa frango kg",
    description:
      "Coxa Sobrecoxa frango kg",
    reviews: [
      {
        rating: 4.8,
        text: "preco bom",
      },
      {
        rating: 4.9,
        text: "boa qualidade",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Linguça calabresa kg",
    imgUrl: productImg21,
    category: "açougue",
    price: 29.99,
    shortDesc:
      "Linguça calabresa kg",
    description:
      "Linguça calabresa kg",
    reviews: [
      {
        rating: 4.8,
        text: "gosto bom",
      },
      {
        rating: 4.9,
        text: "qualidade boa",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Picanha kg",
    imgUrl:  'https://i.ibb.co/8nwtGY6j/picanha.jpg',
    category: "açougue",
    price: 69.99,
    shortDesc:
      "Picanha kg",
    description:
      "Picanha kg",
    reviews: [
      {
        rating: 4.8,
        text: "preco bom ",
      },
      {
        rating: 4.9,
        text: "bom",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "40",
    productName: "Costela Bovina kg",
    imgUrl: 'https://i.ibb.co/Y4LTHYYk/costela.webp',
    category: "açougue",
    price: 23.99,
    shortDesc:
      "Costela Bovina kg",
    description:
      "Costela Bovina kg",
    reviews: [
      {
        rating: 4.8,
        text: "boa qualidade, da carne",
      },
      {
        rating: 4.9,
        text: "boa.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "41",
    productName: "Filet peito frango bdj",
    imgUrl: productImg43,
    category: "açougue",
    price: 28.79,
    shortDesc:
      "Filet peito frango bdj",
    description:
      "Filet peito frango bdj",
    reviews: [
      {
        rating: 4.8,
        text: "marca boa.",
      },
      {
        rating: 4.9,
        text: "qualidade aprovada.",
      },
    ],
    avgRating: 4.8,
  },

  // promoção

  {
    id: "42",
    productName: "Filet peito frango bdj",
    imgUrl: productImg43,
    category: "promocao",
    price: 28.79,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  //  novidade

  {
    id: "43",
    productName: "Filet peito frango bdj",
    imgUrl: productImg43,
    category: "novidade",
    price: 28.79,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "44",
    productName: "Filet peito frango bdj",
    imgUrl: productImg43,
    category: "novidade",
    price: 28.79,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "45",
    productName: "Filet peito frango bdj",
    imgUrl: productImg43,
    category: "novidade",
    price: 28.79,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "46",
    productName: "Filet peito frango bdj",
    imgUrl: productImg43,
    category: "novidade",
    price: 28.79,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

];

export default products;
