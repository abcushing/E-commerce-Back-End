const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.json(error);
    });
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Product],
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.json(error);
    });
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  Category.create(req.body)
    .then((category) => {
      console.log(category);
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  // create a new category
});

router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      console.log("what the", category);
      res.json(category);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.json(error);
    });
  // delete a category by its `id` value
});

module.exports = router;
