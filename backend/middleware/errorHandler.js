const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not Found";
  }
  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  //   next();
};

const notFound = (req, res, next) => {
  const error = new Error(`Page Not Found - ${req.originalURL}`);
  res.status(400);
  next(error);
};

module.exports = {
  notFound,
  errorHandler,
};
