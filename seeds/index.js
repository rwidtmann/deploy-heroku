const sequelize = require('../config/connection');
const seedBrand = require('./BrandData');
const seedStyle = require('./StyleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBrand();

  await seedStyle();

  process.exit(0);
};

seedAll();
