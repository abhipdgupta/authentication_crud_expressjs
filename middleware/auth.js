const { getUser } = require("../userInfo");

const loginRestriction = (req, res, next) => {
  //   console.log(req)
  const userSessionID = req.cookies?.sessionID;

  if (!userSessionID) return res.redirect("/login");

  const user = getUser(userSessionID);

  if (!user) return res.render("/login");

  req.user = user;

  next();
};
const authCheck = (req, res, next) => {
  const userSessionID = req.cookies?.sessionID;

  const user = getUser(userSessionID);

  req.user = user;

  next();
};

module.exports = {
  loginRestriction,
  authCheck,
  
};
