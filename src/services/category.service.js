const { Category } = require('../models');

const createCategory = async (name) => {
  const result = await Category.create(name);

  return result;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};