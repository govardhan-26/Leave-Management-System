const {Model,Schema} = require('mongoose');

const OtpSchema = new Schema(
    {
      OtpCode: {
        type: String,
        required: true,
      },
      OtpStatus: {
        type: Number,
        required: true,
        default: 0,
      },
      OtpCodeExpire: {
        type: Number,
        default: Date.now()+15*60*1000,
        required: true,
      },
      Email: {
        type: String,
        required: true,
        validate: {
            validator: function(v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: (prop) => `${prop.value} is an invalid email address`,
        },
        unique: true,
    },
    },
    { 
        timestamps: true,
    },
  );

  const Otp = Model("Otp",OtpSchema);
  module.exports = Otp;