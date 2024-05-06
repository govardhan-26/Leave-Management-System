const jwt = require('jsonwebtoken');

const DecodedToken = async (Token)=>{
     const a =  await jwt.verify(Token, process.env.JWT_SECRETE_KEY);
     return a;
};
module.exports= DecodedToken;
