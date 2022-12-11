// add category models
const Category = require("./Category");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

// add category keys
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

// add module exports
module.exports = {
  Category,
  Product,
  ProductTag,
  Tag,
};
