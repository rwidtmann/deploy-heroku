const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Style extends Model {}

Style.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'brand',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'style',
  }
);

module.exports = Style;
