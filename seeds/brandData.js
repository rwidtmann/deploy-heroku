const { Brand } = require('../models');

const brandData = [
  {
    brand_name: 'Nike',
    filename: '03-nike.png',
  },
  {
    brand_name: 'Jordan',
    filename: '02-jordan.png',
  },
  {
    brand_name: 'Adidas',
    filename: '01-adidas.png',
  },
  {
    brand_name: 'New Balance',
    filename: '04-new-balance.png',
  },
];

const seedBrand = () => Brand.bulkCreate(brandData);

module.exports = seedBrand;
