const { BlogPost, PostCategory, Category, User } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

const getPostsById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return post;
};

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
  getAllPosts,
  getPostsById,
  getByCategoryId,
  createPost,
};