const express = require('express')
const Multer = require('multer')
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})
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
  deleteGallery,
  addreport,
  getreport,
  deleteReport
} = require('../controllers/galleryController')

const router = express.Router()

router.get('/gallery', getAllGallery)
router.get('/gallery/sort/order', getAllGallerySort)
router.get('/gallery/sort/lastupdate', getAllGalleryLast)
router.delete('/gallery/remove/:id', deleteGallery)
router.post('/gallery', addGallery)
router.get('/gallery/:id', getAccount)
router.put('/gallery/:id', updateAccount)
router.delete('/gallery/:id', deleteAccount)
router.post('/gallery/uploadimage', multer.single('img'), uploadImageGallery)

// Report Image
router.post('/report', addreport)
router.get('/report', getreport)
router.delete('/report/:id', deleteReport)

// download image
router.get('/download/all', getDownloadImages)
router.get('/download/:no', getDownloadImagesByNo)

module.exports = {
  routes: router
}
