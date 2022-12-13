const sequelize = require('../config/connection');
const seedBrand = require('./brandData');
const seedStyle = require('./styleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBrand();

  await seedStyle();

  process.exit(0);
};

seedAll();
