const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movies.controller");

router.get("/get", MovieController.movieAll);
router.post("/create", MovieController.movieCreate);
router.put("/update/:id", MovieController.movieUpdate);
router.delete("/delete/:id", MovieController.movieDelete);

module.exports = router;