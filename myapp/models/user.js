var mongoose = require("../db");
// 创建关联的数据库模型

var userSchema=new mongoose.Schema({
    username:String,
    password:String
})
var u=mongoose.model('user',userSchema)
module.exports=u;