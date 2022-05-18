const express = require("express");
const Multer = require("multer");
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
const {
  addGallery,
  getAllGallery,
  getAllGallerySort,
  getAllGalleryLast,
  getAccount,
  updateAccount,
  deleteAccount,
  uploadImageGallery,
  getDownloadImages,
  getDownloadImagesByNo,
} = require("../controllers/galleryController");

const router = express.Router();

router.get("/gallery", getAllGallery);
router.get("/gallery/sort/order", getAllGallerySort);
router.get("/gallery/sort/lastupdate", getAllGalleryLast);
router.post("/gallery", addGallery);
router.get("/gallery/:id", getAccount);
router.put("/gallery/:id", updateAccount);
router.delete("/gallery/:id", deleteAccount);
router.post("/gallery/uploadimage", multer.single("img"), uploadImageGallery);

// download image
router.get("/download/all", getDownloadImages);
router.get("/download/:no", getDownloadImagesByNo);

module.exports = {
  routes: router,
};
