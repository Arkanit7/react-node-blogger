const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

//mongoose and mongo sandbox routes
router.get("/blogs/all", blogController.blogsAll);

router.get("/blog/:id", blogController.blogGet);

router.post("/blogs/create", blogController.blogCreate);

router.delete("/blogs/delete/", blogController.blogDelete);

module.exports = router;
