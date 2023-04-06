exports.helloWorld = (req, res, next) => {
  res.send('<h1>Hello anda semua</h1>');
};

exports.helloBoskuh = (req, res, next) => {
  console.log('ini request :>>', req.query);
  res.send({
    response: req.model,
  });
};
