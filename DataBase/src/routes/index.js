const { Router } = require("express");
const { validateModel } = require("../middleware");
const store = require("../database");
const { model } = require("mongoose");
// const { Characters, Films, Planets } = require("../database");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

/*
router.post("/:model", validateModel, async (req, res) => { 
    const { model } = req.params
    const { } = req.body
    const response = await store[model].insert()
})*/

module.exports = router;
