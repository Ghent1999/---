
const firebase = require("../db");
const Gallery = require("../models/gallery");
const rateLimit = require('express-rate-limit')
const firestore = firebase.firestore();

const getAllGallery = async (req, res, next) => {
  try {
    const account = await firestore.collection("gallery");
    const data = await account.get();
    const dataCowArray = [];
    if (data.empty) {
      res.status(404).send("ไม่พบข้อมูลใด");
    } else {
      data.forEach((doc) => {
        const account = new Gallery(
          doc.id,
          doc.data().create_at,
          doc.data().full_name,
          doc.data().image,
          doc.data().tel,
          doc.data().type
        );
        dataCowArray.push(account);
      });
      res.status(200).send({ data: dataCowArray });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const getAllGallerySort = async (req, res, next) => {
  try {
    const account = await firestore.collection("gallery");
    const data = await account.orderBy("no", "desc").get();
    const dataCowArray = [];
    if (data.empty) {
      res.status(404).send("ไม่พบข้อมูลใด");
    } else {
      data.forEach((doc) => {
        const account = new Gallery(
          doc.id,
          doc.data().create_at,
          doc.data().full_name,
          doc.data().image,
          doc.data().tel,
          doc.data().type
        );
        dataCowArray.push(account);
      });
      res.status(200).send({ data: dataCowArray });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addGallery = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("gallery").doc().set(data);
    res.status(200).send(true);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Account = await firestore.collection("login").doc(id);
    const data = await Account.get();
    if (!data.exists) {
      res.status(404).send("หาไม่เจอ");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const Account = await firestore.collection("login").doc(id);
    await Account.update(data);
    res.send("แก้ไขข้อมูลแล้ว");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("login").doc(id).delete();
    res.send("ลบสำเร็จ");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addGallery,
  getAllGallery,
  getAllGallerySort,
  getAccount,
  updateAccount,
  deleteAccount,
};
