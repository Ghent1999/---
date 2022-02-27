const express = require("express");
const {
  addImage,
  getAllAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/loginController");

const router = express.Router();

router.post("/image", addImage);
router.get("/login", getAllAccount);
router.get("/login/:id", getAccount);
router.put("/login/:id", updateAccount);
router.delete("/login/:id", deleteAccount);

module.exports = {
  routes: router,
};
