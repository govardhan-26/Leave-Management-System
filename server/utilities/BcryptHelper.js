const bcrypt = require('bcrypt');
const HashPassword = async (Password)=>{
       const salt = await bcrypt.genSalt(10);
       return await bcrypt.hash(Password,salt);
};

const  VerifyPassword = async (Password,hashPassword)=>{
       return await bcrypt.compare(Password,hashPassword);
};


module.exports = {
       HashPassword,
       VerifyPassword,
};