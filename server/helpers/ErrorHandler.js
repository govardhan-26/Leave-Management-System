//Creating the custom error
const CreateError = (msg, status = 400)=>{
    const error = new Error(msg);
    error.status = status;
    return error;
};


//Not Found Error Handler
const NotFoundError = (req,res,next) =>{
    const error = CreateError(`Your requested resource is not found on the server`, 404);
    next(error);
};


//Deafault Error Handler
const DefaultErrorHandler = (err, req, res, next) => {
    const message = err.message ? err.message : "Server Error Occured";
    const status = err.status ? err.status : 500;
  
    res.status(status).json({
      message,
      stack: process.env.NODE_ENV === "development" ? err.stack : [],
    });
  
  };

  module.exports ={ CreateError,NotFoundError,DefaultErrorHandler} ;