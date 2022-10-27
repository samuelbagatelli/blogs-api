const { PostService } = require('../services');

const validatePostFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || categoryIds.length <= 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const validateCategoryId = async (req, res, next) => {
  try {
    const { categoryIds } = req.body;

    const result = await PostService.getByCategoryId(categoryIds);

    console.log(result);

    const validation = result.some((element) => element === null);

    if (validation) { 
      return res.status(400).json({ message: 'one or more "categoryIds" not found' }); 
    }
  } catch (error) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = {
  validatePostFields,
  validateCategoryId,
};