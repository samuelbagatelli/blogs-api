const { BlogPost, PostCategory, Category, User } = require('../models');

const treatAllPosts = async (posts) => {
  const promises = posts.map(async ({ dataValues }) => {
    const user = await User.findByPk(dataValues.userId);

    const postsCategories = await PostCategory.findAll({ where: { postId: dataValues.id } });

    const newPromisses = postsCategories.map(async (element) => {
      const category = await Category.findByPk(element.dataValues.categoryId);

      return category.dataValues;
    });

    const response = await Promise.all(newPromisses);

    const { password, ...userObj } = user.dataValues;

    const result = {
      ...dataValues,
      user: userObj,
      categories: response,
    };
    return result;
  });

  const users = await Promise.all(promises);

  return users;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll();

  return treatAllPosts(posts);
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
  getByCategoryId,
  createPost,
};