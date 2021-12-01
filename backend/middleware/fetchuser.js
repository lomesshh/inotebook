var jwt = require("jsonwebtoken");
const JWT_SECRET = "inotebook";

const fetchuser = (req, res, next) => {
  //cheking authToken
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({
      error: "Please verify with valid Token",
    });
  }

  try {
    //matching authToken
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({
      error: "Please verify with valid Token",
    });
  }
};

module.exports = fetchuser;
