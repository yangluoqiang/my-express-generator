var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 显示所有用户数据
var user=require('../models/user')
router.get('/list', function(req, res, next) {
  // res.json({username:'zhangsan'});
  user.find({},function(err,data){
    res.json(data);
  })
});

module.exports = router;
