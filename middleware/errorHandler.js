const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ?? 500;
  if (statusCode === constants.NOT_FOUND) {
    res.json({
      title: "Not found",
      message: err.message,
      stackTrace: err.stack, // Make this show only on dev env
    });
  }
  if (statusCode === constants.VALIDATION_ERR) {
    res.json({
      title: "Validation Failed",
      message: err.message,
      stackTrace: err.stack, // Make this show only on dev env
    });
  }
  if (statusCode === constants.FORBIDDEN) {
    res.json({
      title: "Forbidden",
      message: err.message,
      stackTrace: err.stack, // Make this show only on dev env
    });
  }
  if (statusCode === constants.UNAUTHORIZED) {
    res.json({
      title: "Unauthorized",
      message: err.message,
      stackTrace: err.stack, // Make this show only on dev env
    });
  }
  if (statusCode === constants.SERVER_ERROR) {
    res.json({
      title: "Server Error",
      message: err.message,
      stackTrace: err.stack, // Make this show only on dev env
    });
  }
};

module.exports = errorHandler;
