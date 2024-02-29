const jwt = require('jsonwebtoken');

const DecodedToken = async (Token)=>{
     return await jwt.verify(Token, process.env.SECRET_KEY);
};
module.exports= DecodedToken;
