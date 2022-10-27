const { PostService } = require('../services');

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
  createPost,
};