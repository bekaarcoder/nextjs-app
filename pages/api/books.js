const data = require("../../data/books.json");

export default (req, res) => {
  res.statusCode = 200;
  res.json(data);
};
