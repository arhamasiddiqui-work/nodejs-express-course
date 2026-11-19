//  A controller is a route handler or group of handlers that manages requests for specific endpoints
export const singleHandler = (req, res) => {
  res.send("Request handled with a single handler function!");
};
export const shfMiddleware = (req, res) => {
  res.status(404).send("Error Page not found");
};
