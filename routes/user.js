var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "iphone 11",
      description: "this is an expensive phone",
      image: "/images/iphone11.jpg"
    },
    {
      name: "iphone 12",
      description: "this is an expensive phone",
      image: "/images/iphone12.jpg"
    },
    {
      name: "iphone 13",
      description: "this is an expensive phone",
      image: "/images/iphone13.jpg"
    },
    {
      name: "iphone 14",
      description: "this is an expensive phone",
      image: "/images/iphone14.jpg"
    },
  ]
  res.render('index', { title: 'Express', products, admin: false});
});

module.exports = router;
