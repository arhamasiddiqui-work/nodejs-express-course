const MiddleWare = (req, res, next) => {
  const { user } = req.query;
  if (user === "Arhama") {
    req.user = { name: "Arhama", id: 2 };
    next();
  }
  else{
    res.status(401).send('Unauthorized')
  }
};

module.exports = MiddleWare;
