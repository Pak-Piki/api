exports.myMiddleware = (req, res, next) => {
  req.model = `okeboskuh`;
  next();
};
