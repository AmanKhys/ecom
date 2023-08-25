var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "iphone 11",
      description: "this is an expensive phone",
      image: "/images/vivo.jpeg"
    },
    {
      name: "iphone 12",
      description: "this is an expensive phone",
      image: "/images/vivo.jpeg"
    },
    {
      name: "iphone 13",
      description: "this is an expensive phone",
      image: "/images/vivo.jpeg"
    },
    {
      name: "iphone 14",
      description: "this is an expensive phone",
      image: "/images/vivo.jpeg"
    },
  ]
  res.render('index', { title: 'Express', products, admin: false});
});

module.exports = router;
