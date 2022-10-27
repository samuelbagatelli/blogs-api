const { BlogPost, PostCategory, Category } = require('../models');

const getByCategoryId = async (ids) => {
  const promises = ids.map(async (element) => {
    const { type } = await Category.findByPk(element);

    return type;
  });

  const validation = await Promise.all(promises);

  return validation;
};

const createPost = async (newPost) => {
  const post = await BlogPost.create(newPost);

  const { categoryIds } = newPost;

  categoryIds.forEach(async (element) => {
    await PostCategory.create({ postId: post.id, categoryId: element });
  });

  return post;
};

module.exports = {
  getByCategoryId,
  createPost,
};