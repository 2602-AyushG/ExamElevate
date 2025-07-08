class ErrorHandler extends Error {
  constructor(statusCode, message='Something went wrong',errors=[],stack) {
    super(message); // parent creation is there
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.stack = stack;
    this.success=false;
  }
}

export default ErrorHandler;