const jwt = require('jsonwebtoken');

const CreateToken =  (payload) => {
  return  jwt.sign(payload, process.env.JWT_SECRETE_KEY, {
    expiresIn: "10 days",
  });
};

module.exports = CreateToken;
