import React, { useState, useRef } from "react";

const OTPInput = ({ length = 6, onChange }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const inputRefs = Array(length)
    .fill(0)
    .map((_, i) => useRef(null));

  const handleChange = (index, value) => {
    if (!isNaN(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < length - 1 && value !== "") {
        inputRefs[index + 1].current.focus();
      }
      onChange(newOTP.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const newOTP = [...otp];
      newOTP[index - 1] = "";
      setOTP(newOTP);
      inputRefs[index - 1].current.focus();
      onChange(newOTP.join(""));
    }
  };

  return (
    <div className="border border-black w-[400px] h-[150px] rounded-md flex flex-col items-center justify-center">
      <div>
        {otp.map((digit, index) => (
          <input
          className="rounded-md"
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={inputRefs[index]}
            style={{ width: "40px", marginRight: "5px", textAlign: "center" }}
          />
        ))}
      </div>
      <div className='border border-black w-[50%] flex items-center justify-center rounded-md h-[40px] bg-blue-400 mt-5'>
                    Submit
                </div>
    </div>
  );
};

export default OTPInput;
