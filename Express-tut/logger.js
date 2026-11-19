export const middleware = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  const authorized = req.user ? true : false;
  console.log(method, url, time, authorized);
  console.log(authorized);
  next(); // pass onto our next methods.....
};

// module.exports=logger
