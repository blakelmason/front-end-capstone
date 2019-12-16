// const hundredData = [{
//     "name": "YPPERLIG",
//     "shortDesc": "Table, ash, 78 3/4x35 3/8 \"",
//     "price": 229.00,
//     "rating": 4.7,
//     "reviewNum": 24,
//     "midDesc": "YPPERLIG table is a modern version of the traditional Scandinavian plank table. It has a stable metal underframe and 3 planks which comes in a flat-pack, making it easier to bring home.",
//     "imageSrc": ["https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0737127_PE740896_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0505507_PE633922_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0505509_PE633923_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592759_PH146015_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592760_PH146029_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0592862_PH146027_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0593819_PH146986_S5.JPG?f=xxxl",
//         "https://www.ikea.com/us/en/images/products/ypperlig-table-ash__0593824_PH146021_S5.JPG?f=xxxl"]
// }];
const Image = require('../models/Image')
require('../index')
const mongoose = require('mongoose')

const name = [
  'NORDVIKEN',
  'NORDEN',
  'NORDVIKEN',
  'KEJSARKRONA',
  'LANEBERG',
  'INGATORP',
  'MORBYLANGA',
  'EKOLN',
  'HEMNES',
  'NORRAKER'
]
const shortDesc = [
  'Table, ash, 78 3/4x35 3/8 "',
  'Extendable table, birch, 61/82 5/8x35 3/8 "',
  'Extendable table, white, 51 1/8/74 3/4x31 1/2 "',
  'Table, chrome plated, high gloss white, 53 1/8x33 1/2 "',
  'Dining table, oak, white, 63x31 1/2 "',
  'Table, oak veneer brown stained, 55x33 "'
]
const midDesc = [
  'The oak top layer enhances the plank feeling and details like the floating table top and dovetail joints give the table a crafted look. A table full of character and plenty of room for family and friends.',
  'This spacious, wood dining table has a traditional feel and will soon become a natural gathering place in your home. The sturdy construction and smooth extension mechanism make it a long-lasting favorite.',
  'The simple design of this dining table will blend seamlessly into your dining area. And the smooth and simple extension lets you extend your dinner invitation without worrying about fitting everyone in.',
  'A durable dining table that makes it easy to have big dinners. A single person can extend the table and there’s plenty of room for chairs since the legs are always located at the corners of the table.',
  'It’s easy to extend when guests arrive – the legs of the table stay in the corner so everyone sits comfortably. A traditional look with details like turned legs give it that little extra.',
  'Everyone faces each other around a round table and you can make room for socializing by simply adding a leaf. A traditional look with details like the turned leg gives it that little extra.'
]

const coverImg = [
  'https://i.ibb.co/jDsX2Sm/0.png',
  'https://i.ibb.co/hL0jCJz/2.png',
  'https://i.ibb.co/6ntjBrR/3.png',
  'https://i.ibb.co/nn1sNfF/4.jpg',
  'https://i.ibb.co/rwYMQyg/5.jpg',
  'https://i.ibb.co/PcDKPMS/6.png',
  'https://i.ibb.co/t3WnQ4f/7.png',
  'https://i.ibb.co/TPYtX50/8.png',
  'https://i.ibb.co/cDbgvCz/9.png',
  'https://i.ibb.co/0YPLTDN/10.png',
  'https://i.ibb.co/0s8W1tW/11.png',
  'https://i.ibb.co/wS0JLn0/12.png',
  'https://i.ibb.co/n6nTxPd/13.png',
  'https://i.ibb.co/C704bNg/14.png',
  'https://i.ibb.co/nMNrLxx/1.png',
  'https://i.ibb.co/cTSQPB7/16.png',
  'https://i.ibb.co/WKYX6tk/15.jpg',
  'https://i.ibb.co/4fcQpPx/17.png',
  'https://i.ibb.co/s2GKqfq/18.png',
  'https://i.ibb.co/q0YgG3V/19.png',
  'https://i.ibb.co/h8VnJdV/21.png'
]

const otherImg = [
  'https://i.ibb.co/bgkCV4N/barkarby-extendable-table-0811396-PE771640-S5.png',
  'https://i.ibb.co/C1q181P/barkarby-extendable-table-0811395-PE771641-S5.png',
  'https://i.ibb.co/Wkh32q8/bjursta-extendable-table-0208534-PE243941-S5.png',
  'https://i.ibb.co/4SXHpdK/bjursta-extendable-table-0443681-PE594459-S5.png',
  'https://i.ibb.co/WvyW4nK/bjursta-extendable-table-0444423-PE594964-S5.png',
  'https://i.ibb.co/qr7F0Ss/bjursta-extendable-table-0449376-PE598815-S5.png',
  'https://i.ibb.co/nmRzSzb/bjursta-extendable-table-0450189-PE599525-S5.png',
  'https://i.ibb.co/TB18ys6/ingatorp-extendable-table-0443679-PE594458-S5.png',
  'https://i.ibb.co/bFRhzX3/ingatorp-extendable-table-0574515-PE668361-S5.png',
  'https://i.ibb.co/gFmp1b8/ingatorp-extendable-table-0577866-PH137860-S5.png',
  'https://i.ibb.co/WsBBP2z/ingatorp-extendable-table-0623223-PE691012-S5.png',
  'https://i.ibb.co/sq25wbR/ingatorp-extendable-table-0623224-PE691011-S5.png',
  'https://i.ibb.co/mJm01hK/ingatorp-extendable-table-0672379-PE716643-S5.png',
  'https://i.ibb.co/LnzDRkx/ingatorp-extendable-table-0679684-PH155032-S5.png',
  'https://i.ibb.co/kxS500n/ingatorp-extendable-table-black-0444439-PE594981-S5.png',
  'https://i.ibb.co/SP1Xd36/ingatorp-extendable-table-black-0443665-PE594442-S5.png',
  'https://i.ibb.co/Y7FwskX/ingatorp-extendable-table-black-0577868-PH135647-S5.png',
  'https://i.ibb.co/1sJVNbH/ingatorp-extendable-table-black-0679697-PH154166-S5.png',
  'https://i.ibb.co/wzN1RcL/ingatorp-extendable-table-white-0208605-PE307166-S5.jpg',
  'https://i.ibb.co/CW02J4b/ingatorp-extendable-table-white-0208606-PE323885-S5.png',
  'https://i.ibb.co/D9nWv6g/ingatorp-extendable-table-white-0251739-PE390540-S5.jpg',
  'https://i.ibb.co/jVRzg11/ingatorp-extendable-table-white-0443671-PE594448-S5.jpg',
  'https://i.ibb.co/gtxQXPS/ingatorp-extendable-table-white-0679702-PH146985-S5.jpg',
  'https://i.ibb.co/48j6PBH/laneberg-extendable-table-brown-0722956-PE733788-S5.png',
  'https://i.ibb.co/GvG3Jxj/laneberg-extendable-table-brown-0722957-PE733787-S5.jpg',
  'https://i.ibb.co/dJBVXV5/laneberg-extendable-table-brown-0722959-PE733789-S5.jpg',
  'https://i.ibb.co/cXfVv1W/laneberg-extendable-table-brown-0744790-PE743402-S5.jpg',
  'https://i.ibb.co/C0n4s8y/laneberg-extendable-table-brown-0744791-PE743403-S5.jpg',
  'https://i.ibb.co/vYwKfTh/laneberg-extendable-table-white-0722955-PE733779-S5.png',
  'https://i.ibb.co/xSJDHqv/laneberg-extendable-table-white-0744787-PE743399-S5.png',
  'https://i.ibb.co/ZgVrDrw/laneberg-extendable-table-white-0744788-PE743400-S5.png',
  'https://i.ibb.co/wY349Qn/laneberg-extendable-table-white-0798297-PH161521-S5.jpg',
  'https://i.ibb.co/B4jwWfC/moerbylanga-table-0364529-PE548336-S5.png',
  'https://i.ibb.co/XWQ5pc7/moerbylanga-table-0631751-PE695178-S5.png',
  'https://i.ibb.co/FqPdBc3/moerbylanga-table-0631802-PE695213-S5.png',
  'https://i.ibb.co/zXgWPSH/moerbylanga-table-0665850-PE713256-S5.png',
  'https://i.ibb.co/4PMVDsT/moerbylanga-table-0665852-PE713258-S5.png',
  'https://i.ibb.co/CPkcp2x/moerbylanga-table-0719382-PE732030-S5.png',
  'https://i.ibb.co/BV38DBN/moerbylanga-table-0719383-PE732031-S5.jpg',
  'https://i.ibb.co/X3bCVPR/norden-extendable-table-birch-0209008-PE224204-S5.jpg',
  'https://i.ibb.co/LJ3hXBN/norden-extendable-table-birch-0443668-PE594446-S5.jpg',
  'https://i.ibb.co/YBg6PT1/norden-extendable-table-birch-0444416-PE594953-S5.jpg',
  'https://i.ibb.co/L6CzfTJ/norden-extendable-table-birch-0723099-PH129213-S5.jpg',
  'https://i.ibb.co/JxRx8mD/norden-extendable-table-birch-0723101-PE371728-S5.jpg',
  'https://i.ibb.co/TBzc4ZK/norden-gateleg-table-0441747-PE593532-S5.jpg',
  'https://i.ibb.co/W0nn7Tk/norden-gateleg-table-0445724-PE596025-S5.jpg',
  'https://i.ibb.co/bs5qYLM/norden-gateleg-table-0672529-PE716747-S5.jpg',
  'https://i.ibb.co/KmJvKKt/norden-gateleg-table-0745748-PH153248-S5.png',
  'https://i.ibb.co/7CHKzqW/norden-gateleg-table-0745749-PH153249-S5.jpg',
  'https://i.ibb.co/3Mv7mdz/norden-gateleg-table-white-0311547-PE370495-S5.png',
  'https://i.ibb.co/JsWySL9/norden-gateleg-table-white-0445726-PE596028-S5.png',
  'https://i.ibb.co/d4dNbC6/norden-gateleg-table-white-0441748-PE593533-S5.png',
  'https://i.ibb.co/n6V2HyZ/norden-gateleg-table-white-0744771-PE743390-S5.png',
  'https://i.ibb.co/gg77tYD/norden-gateleg-table-white-0744772-PE743391-S5.png',
  'https://i.ibb.co/XsXmfyd/norden-gateleg-table-white-0745735-PH149800-S5.png',
  'https://i.ibb.co/tsbPQN2/norden-gateleg-table-white-0745737-PH144379-S5.png',
  'https://i.ibb.co/r7Xzkwr/nordviken-drop-leaf-table-0797430-PE766874-S5.png',
  'https://i.ibb.co/0FWCTWW/nordviken-drop-leaf-table-0747563-PE744585-S5.png',
  'https://i.ibb.co/Cstn4vp/nordviken-extendable-table-black-0744797-PE743408-S5.jpg',
  'https://i.ibb.co/NtNDrcX/nordviken-extendable-table-black-0744798-PE743409-S5.jpg',
  'https://i.ibb.co/MSpTwDh/nordviken-extendable-table-black-0797433-PH163608-S5.jpg',
  'https://i.ibb.co/HPrpRfk/nordviken-extendable-table-black-0797434-PH163607-S5.jpg',
  'https://i.ibb.co/41p80yQ/stuva-bench-0471607-PE613546-S5.png'
]

const createProduct = () => {
  let product = {}
  let ImgSrc = []

  ImgSrc.push(coverImg[Math.floor(Math.random() * coverImg.length)])

  for (var i = 0; i < 5; i++) {
    ImgSrc.push(otherImg[Math.floor(Math.random() * otherImg.length)])
  }

  product.name = name[Math.floor(Math.random() * name.length)]
  product.shortDesc = shortDesc[Math.floor(Math.random() * shortDesc.length)]
  product.price = Math.floor(Math.random() * 900 + 100)
  product.rating = Math.floor(Math.random() * 4 + 1) + Math.random()
  product.reviewNum = Math.floor(Math.random() * 500)
  product.midDesc = midDesc[Math.floor(Math.random() * midDesc.length)]
  product.imageSrc = ImgSrc

  return product
}

const createData = () => {
  const data = []
  for (var i = 0; i < 100; i++) {
    data.push(createProduct())
  }

  return data
}

const insertData = product => {
  Image.insertMany(product, (err, results) => {
    if (err) console.error(err)
    else mongoose.connection.close()
  })
}

var seedData = createData()

insertData(seedData)
