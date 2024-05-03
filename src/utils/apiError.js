class ApiError extends Error {
  constructor(
    statusCode,
    messages = "Somthing went Wrong",
    errors = [],
    stack = ""
  ) {
    super(statusCode);
    this.message = messages;
    this.errors = errors;
    this.data = null;
    this.statusCode = statusCode;
    this.succes = false;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
