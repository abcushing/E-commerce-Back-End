const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll({
    include: [Product],
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.json(error);
    });
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [Product],
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.json(error);
    });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((tag) => {
      console.log(tag);
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  // create a new tag
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      console.log("what the", tag);
      res.json(tag);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.json(error);
    });
  // delete on tag by its `id` value
});

module.exports = router;
