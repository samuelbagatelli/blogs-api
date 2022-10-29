const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await CategoryService.createCategory({ name });

  return res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await CategoryService.getAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};