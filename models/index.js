const User = require('./User');
const Brand = require('./Brand');
const Style = require('./Style');
const Comment = require('./Comment');

Brand.hasMany(Style, {
  foreignKey: 'brand_id',
});

Style.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

Style.hasMany(Comment, {
  foreignKey: 'style_id',
})

Comment.belongsTo(Style, {
  foreignKey: 'style_id',
})
module.exports = { User, Brand, Style, Comment };
