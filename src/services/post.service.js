const { BlogPost, PostCategory, Category, User } = require('../models');

const getAllPosts = async () => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });

    console.log(posts[0].dataValues);
    return posts;
  } catch (e) {
    console.log(e);
    return e;
  }
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