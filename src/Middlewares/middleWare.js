const jwt = require("jsonwebtoken");

const authentication = async function (req, res, next) {
    try {
      let token = req.headers["x-api-key"] || req.headers["x-Api-key"];
      if (!token)
        return res
          .status(400)
          .send({ status: false, msg: "Token must be present" });
  
      jwt.verify(token, "project3", (error, response) => {
        if (error)
          return res.status(401).send({ status: false, msg: "Token is invalid" });
        next();
      });
    } catch (err) {
      return res.status(500).send({ status: false, msg: err.message });
    }
  };

  module.exports={authentication}