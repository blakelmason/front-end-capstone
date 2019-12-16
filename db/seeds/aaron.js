// const Product = require('./index.js');
// const Products = Product.Product;
require('../index.js')
const Product2 = require('../models/Product2')
const mongoose = require('mongoose')

const images = [
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/bekant-desk__0736386_PE740515_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ekedalen-bar-table-brown__0657862_PE709998_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ekedalen-extendable-table__0736965_PE740829_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/gamleby-gateleg-table-light-antique-stain-grey__0737081_PE740873_S5.jpeg',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ingatorp-extendable-table-black__0737090_PE740880_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ingatorp-extendable-table__0623225_PE691010_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ingatorp-extendable-table__0737091_PE740881_S5.jpeg',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/laneberg-extendable-table-white__0722925_PE733775_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/lerhamn-table-and-4-chairs__0247205_PE386033_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/lerhamn-table__0238239_PE377693_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/lisabo-table-ash-veneer__0737105_PE740883_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/markerad-rug-low-pile-white-black__0684967_PE721294_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/markerad-table__0733212_PE739320_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/moeckelby-table-oak__0737107_PE740885_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/norden-extendable-table-birch__0737111_PE740889_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/moerbylanga-table__0737109_PE740887_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/nordviken-extendable-table__0714215_PE729969_S5.jpeg',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/oevraryd-janinge-table-and-4-chairs-white-bamboo-white__0445262_PE595660_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/skogsta-dining-table-acacia__0546603_PE656255_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/slaehult-table__0737357_PE741014_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/tingby-table-white__0737124_PE740897_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/torsby-table-chrome-plated-high-gloss-white__0737361_PE741017_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ypperlig-bench-beech__0505369_PE633890_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ypperlig-chair-with-armrests-in-outdoor-green__0505332_PE633865_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ypperlig-nilsove-table-and-4-chairs__0720682_PE732748_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ypperlig-stool-beech__0505275_PE633814_S5.webp',
  'https://aaronikeafec.s3.us-east-2.amazonaws.com/ypperlig-table__0737127_PE740896_S5.webp'
]
const productname = [
  'YPPERLIG',
  'TINGBY',
  'MORBYLANGA',
  'EKEDALEN',
  'MARKERAD',
  'GAMLEBY',
  'TORSBY',
  'KEJSARKRONA',
  'YPPERLIGGY',
  'BEKANT',
  'LISABO',
  'BENCH',
  'NILSOVE',
  'YPPERLIG',
  'EKEDALENA',
  'MOCKLEBY'
]
const adj = [
  'RED',
  'BLUE',
  'GREEN',
  'MATTE',
  'SHINY',
  'RARE',
  'COMMON',
  'UNCOMMON',
  'HIGH',
  'LOW',
  'FIRE',
  'WATER',
  'GRASS',
  'ELECTRIC',
  'GHOST',
  'PSYCHIC',
  'FIGHTING',
  'BUG',
  'FAIRY',
  'STEEL',
  'POISON',
  'FLYING',
  'DRAGON',
  'NORMAL',
  'DARK',
  'ROCK'
]
const typesize = [
  "10'x12'x5'",
  "9'x14'x6'",
  "15'x12'x6'",
  "18'x13'x5'",
  "5'x6'x4'",
  "9'x8'x3'",
  "10'x6'x3'",
  "12'x12'x5'",
  "9'x4'x5'",
  "7'x4'x4'",
  "14'x5'x6'"
]
const description = [
  'goes well with garden',
  'comfortable',
  'lol why are  you even looking at this',
  'table/chair piece',
  'you will like this',
  'you can afford this',
  `don't let the price stop you`,
  'lmao I have one at home',
  'this might not be a good idea',
  'this a good idea',
  'look for a matching set',
  'mm this is cute',
  'summer vibes',
  'will you use this lol',
  `you probably won't ever use this`,
  'wait lol what??',
  'this is nice',
  'niiiiice',
  `this ain't a bad idea`,
  'this goes haaaaard'
]
const price = [
  299.99,
  199.99,
  200.0,
  799.99,
  79.99,
  399.99,
  575.0,
  275.99,
  799.99,
  150.0,
  675.99,
  255.99,
  400.0,
  300.0,
  99.99
]
const ratings = [
  2.1,
  2.2,
  2.5,
  2.7,
  3.6,
  3.1,
  3.5,
  3.8,
  4.4,
  4,
  2,
  4.5,
  4.6,
  4.9
]
const numberRatings = [
  23,
  43,
  12,
  32,
  67,
  47,
  39,
  18,
  21,
  37,
  48,
  26,
  53,
  28,
  26,
  19,
  16,
  36,
  41
]

const data = []

const createProducts = () => {
  for (var i = 0; i < 50; i++) {
    data.push({
      itemimage: images[Math.floor(Math.random() * images.length)],
      itemname:
        adj[Math.floor(Math.random() * adj.length)] +
        ' ' +
        productname[Math.floor(Math.random() * productname.length)],
      typesize: typesize[Math.floor(Math.random() * typesize.length)],
      description: description[Math.floor(Math.random() * description.length)],
      price: price[Math.floor(Math.random() * price.length)],
      rating: ratings[Math.floor(Math.random() * ratings.length)],
      numberRatings:
        numberRatings[Math.floor(Math.random() * numberRatings.length)]
    })
  }
}

const seedDatabase = products => {
  Product2.insertMany(products, (err, results) => {
    if (err) console.error(err)
    else mongoose.connection.close()
  })
}

createProducts()
seedDatabase(data)
