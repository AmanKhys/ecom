var express = require('express');
var router = express.Router();

  let products = [
    {
      name: "iphone 11",
      description: "this is an expensive phone",
      category: "mobile",
      image: "/images/iphone11.jpg"
    },
    {
      name: "iphone 12",
      description: "this is an expensive phone",
      category: "mobile",
      image: "/images/iphone12.jpg"
    },
    {
      name: "iphone 13",
      description: "this is an expensive phone",
      category: "mobile",
      image: "/images/iphone13.jpg"
    },
    {
      name: "iphone 14",
      description: "this is an expensive phone",
      category: "mobile",
      image: "/images/iphone14.jpg"
    },
  ]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/view-products', {admin: true, products})
});

router.get('/add-products', function(req, res, next) {
  res.render('admin/add-products', {admin: true, products})
});

router.post('/admin/add-products', (res, req) => {
  console.log(res.body)
})
module.exports = router;
