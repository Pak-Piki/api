exports.getUser = (req, res, next) => {
  res.send({
    messege: 'this is api response user',
    name: 'Riky',
    username: 'piki',
  });
};
