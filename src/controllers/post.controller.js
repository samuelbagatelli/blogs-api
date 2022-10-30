const { PostService } = require('../services');

const getAllPosts = async (_req, res) => {
  try {
    const posts = await PostService.getAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getPostsById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostService.getPostsById(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const createPost = async (req, res) => {
  try {
    const { userId } = req.user;
    const post = {
      ...req.body,
      userId,
    };

    const result = await PostService.createPost(post);

    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllPosts,
  getPostsById,
  createPost,
};