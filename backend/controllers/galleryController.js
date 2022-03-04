const firebase = require("../db");
const Gallery = require("../models/gallery");
const rateLimit = require("express-rate-limit");
const firestore = firebase.firestore();
const storage = require("../storage");
const bucket = storage.bucket();

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
          doc.data().no,
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

const uploadImageGallery = async (req, res, next) => {
  const folder = "profile";
  const filename = `${folder}/${Date.now()}`;
  const fileupload = bucket.file(filename);
  const file = bucket.file(`profile/${filename.split("/")[1]}`);
  const link =
    "https://firebasestorage.googleapis.com/v0" +
    file.parent.baseUrl +
    "/" +
    file.parent.name +
    file.baseUrl +
    "/profile" +
    "%2F" +
    filename.split("/")[1] +
    "?alt=media";
  const blobStream = fileupload.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
      nane: filename,
    },
  });

  blobStream.on("error", (err) => {
    return res.status(405).json(err);
  });

  blobStream.on("finish", () => {
    return res.status(200).send({ link: link });
  });

  blobStream.end(req.file.buffer);
};

const getAllGallerySort = async (req, res, next) => {
  try {
    const account = await firestore.collection("gallery");
    const data = await account.orderBy("no", "desc").get();
    const dataCowArray = [];
    if (data.empty) {
      res.status(200).send({
        id: "",
        no: 0,
        create_at: "",
        full_name: "",
        image: "",
        tel: "",
        type: "",
      });
    } else {
      data.forEach((doc) => {
        const account = new Gallery(
          doc.id,
          doc.data().no,
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

const getAllGalleryLast = async (req, res, next) => {
  try {
    const account = await firestore.collection("gallery");
    const data = await account.orderBy("no", "desc").limit(1).get();
    const dataCowArray = [];
    if (data.empty) {
      res.status(200).send({
        id: "",
        no: 0,
        create_at: "",
        full_name: "",
        image: "",
        tel: "",
        type: "",
      });
    } else {
      data.forEach((doc) => {
        const account = new Gallery(
          doc.id,
          doc.data().no,
          doc.data().create_at,
          doc.data().full_name,
          doc.data().image,
          doc.data().tel,
          doc.data().type
        );
        dataCowArray.push(account);
      });
      res.status(200).send(dataCowArray);
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
  getAllGalleryLast,
  getAccount,
  updateAccount,
  deleteAccount,
  uploadImageGallery,
};
