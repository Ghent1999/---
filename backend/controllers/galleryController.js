const firebase = require('../db')
const Gallery = require('../models/gallery')
const firestore = firebase.firestore()
const storage = require('../storage')
const bucket = storage.bucket()
const fs = require('fs'),
  http = require('http'),
  https = require('https')
const Stream = require('stream').Transform
const zip = require('express-zip')

const getAllGallery = async (req, res, next) => {
  try {
    const account = await firestore.collection('gallery')
    const data = await account.get()
    const dataCowArray = []
    if (data.empty) {
      res.status(404).send('ไม่พบข้อมูลใด')
    } else {
      data.forEach(doc => {
        const account = new Gallery(
          doc.id,
          doc.data().no,
          doc.data().create_at,
          doc.data().full_name,
          doc.data().image,
          doc.data().tel,
          doc.data().type,
          doc.data().breed
        )
        dataCowArray.push(account)
      })
      res.status(200).send({ data: dataCowArray })
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const uploadImageGallery = async (req, res, next) => {
  const folder = 'profile'
  const filename = `${folder}/${Date.now()}`
  const fileupload = bucket.file(filename)
  const file = bucket.file(`profile/${filename.split('/')[1]}`)
  const link =
    'https://firebasestorage.googleapis.com/v0' +
    file.parent.baseUrl +
    '/' +
    file.parent.name +
    file.baseUrl +
    '/profile' +
    '%2F' +
    filename.split('/')[1] +
    '?alt=media'
  const blobStream = fileupload.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
      nane: filename
    }
  })

  blobStream.on('error', err => {
    return res.status(405).json(err)
  })

  blobStream.on('finish', () => {
    return res.status(200).send({ link: link })
  })

  blobStream.end(req.file.buffer)
}

const getAllGallerySort = async (req, res, next) => {
  try {
    const account = await firestore.collection('gallery')
    const data = await account.orderBy('no', 'desc').get()
    const dataCowArray = []
    if (data.empty) {
      res.status(200).send({
        id: '',
        no: 0,
        create_at: '',
        full_name: '',
        image: '',
        tel: '',
        type: '',
        breed: ''
      })
    } else {
      data.forEach(doc => {
        const account = new Gallery(
          doc.id,
          doc.data().no,
          doc.data().create_at,
          doc.data().full_name,
          doc.data().image,
          doc.data().tel,
          doc.data().type,
          doc.data().breed
        )
        dataCowArray.push(account)
      })
      res.status(200).send({ data: dataCowArray })
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getAllGalleryLast = async (req, res, next) => {
  try {
    const account = await firestore.collection('gallery')
    const data = await account
      .orderBy('no', 'desc')
      .limit(1)
      .get()
    const dataCowArray = []
    if (data.empty) {
      res.status(200).send({
        id: '',
        no: 0,
        create_at: '',
        full_name: '',
        image: '',
        tel: '',
        type: '',
        breed: ''
      })
    } else {
      data.forEach(doc => {
        const account = new Gallery(
          doc.id,
          doc.data().no,
          doc.data().create_at,
          doc.data().full_name,
          doc.data().image,
          doc.data().tel,
          doc.data().type,
          doc.data().breed
        )
        dataCowArray.push(account)
      })
      res.status(200).send(dataCowArray)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const deleteGallery = async (req, res, next) => {
  try {
    const id = req.params.id
    await firestore
      .collection('gallery')
      .doc(id)
      .delete()
    res.send('ลบสำเร็จ')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const addGallery = async (req, res, next) => {
  try {
    const data = req.body
    await firestore
      .collection('gallery')
      .doc()
      .set(data)
    res.status(200).send(true)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getAccount = async (req, res, next) => {
  try {
    const id = req.params.id
    const Account = await firestore.collection('login').doc(id)
    const data = await Account.get()
    if (!data.exists) {
      res.status(404).send('หาไม่เจอ')
    } else {
      res.send(data.data())
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const updateAccount = async (req, res, next) => {
  try {
    const id = req.params.id
    const data = req.body
    const Account = await firestore.collection('login').doc(id)
    await Account.update(data)
    res.send('แก้ไขข้อมูลแล้ว')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const deleteAccount = async (req, res, next) => {
  try {
    const id = req.params.id
    await firestore
      .collection('login')
      .doc(id)
      .delete()
    res.send('ลบสำเร็จ')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

var downloadImageFromURL = (url, filename, callback) => {
  var client = http
  if (url.toString().indexOf('https') === 0) {
    client = https
  }

  client
    .request(url, function (response) {
      var data = new Stream()

      response.on('data', function (chunk) {
        data.push(chunk)
      })

      response.on('end', function () {
        fs.writeFileSync(filename, data.read())
      })
    })
    .end()
  callback()
}

const getDownloadImages = async (req, res, next) => {
  try {
    const data = await firestore.collection('gallery').get()
    const dataCowArray = []
    data.forEach(doc => {
      downloadImageFromURL(doc.data().image, `./file/${doc.id}.jpg`, function (
        err
      ) {
        if (err) {
          console.log(err)
        } else {
          dataCowArray.push({
            path: `./file/${doc.id}.jpg`,
            name: `${doc.id}.jpg`
          })
        }
      })
    })

    return res.zip(dataCowArray, 'images.zip')
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

const getDownloadImagesByNo = async (req, res, next) => {
  try {
    const no = req.params.no
    const data = await firestore
      .collection('gallery')
      .where('no', '==', Number(no))
    const response = await data.get()
    downloadImageFromURL(
      response.docs[0].data().image,
      `./file/${response.docs[0].id}.jpg`,
      function (err) {
        if (err) {
          console.log(err)
        } else {
          return res.download(`./file/${response.docs[0].id}.jpg`)
        }
      }
    )
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

const addreport = async (req, res, next) => {
  try {
    const data = req.body
    await firestore
      .collection('report')
      .doc()
      .set(data)
    res.status(200).send(true)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getreport = async (req, res, next) => {
  try {
    const gallery = await firestore.collection('report')
    const data = await gallery.get()
    const dataCowArray = []
    if (data.empty) {
      res.status(404).send('ไม่พบข้อมูลใด')
    } else {
      data.forEach(doc => {
        const report = {
          token: doc.id,
          no: doc.data().no,
          create_at: doc.data().create_at,
          full_name: doc.data().full_name,
          image: doc.data().image,
          tel: doc.data().tel,
          type: doc.data().type,
          breed: doc.data().breed,
          token_gallery: doc.data().token_gallery
        }
        dataCowArray.push(report)
      })
      res.status(200).send({ data: dataCowArray })
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const deleteReport = async (req, res, next) => {
  try {
    const id = req.params.id
    await firestore
      .collection('report')
      .doc(id)
      .delete()
    res.send('ลบสำเร็จ')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
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
}
