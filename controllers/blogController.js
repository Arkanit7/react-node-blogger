const Blog = require("../models/blog");

const blogsAll = (_req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => res.send(result))
    .catch((_err) => {
      console.log(error);
      res.status(404).send(error);
    });
};

const blogGet = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
};

const blogCreate = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};

const blogDelete = (req, res) => {
  const _id = req.body._id;
  Blog.findByIdAndDelete(_id)
    .then((result) => res.send(result))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};

module.exports = { blogsAll, blogGet, blogCreate, blogDelete };
