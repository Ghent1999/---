const express = require("express");
const {
  addGallery,
  getAllGallery,
  getAllGallerySort,
  getAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/galleryController");

const router = express.Router();

router.get("/gallery", getAllGallery);
router.get("/gallery/sort/order", getAllGallerySort);
router.post("/gallery", addGallery);
router.get("/gallery/:id", getAccount);
router.put("/gallery/:id", updateAccount);
router.delete("/gallery/:id", deleteAccount);

module.exports = {
  routes: router,
};
