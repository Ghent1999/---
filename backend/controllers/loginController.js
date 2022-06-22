const dotenv = require("dotenv");
dotenv.config();

const getLogin = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      return res.status(200).json({
        status: true,
      });
    }

    return res.status(401).json({
      status: false,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getLogin,
};
