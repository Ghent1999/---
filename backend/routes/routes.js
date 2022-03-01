const express = require("express");
const {
  addImage,
  getAllAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/galleryController");

const router = express.Router();

router.get("/gallery", getAllAccount);
router.get("/gallery/:id", getAccount);
router.post("/gallery", addImage);
router.put("/gallery/:id", updateAccount);
router.delete("/gallery/:id", deleteAccount);

module.exports = {
  routes: router,
};
