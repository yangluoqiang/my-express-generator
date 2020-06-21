var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/photo-manager',{ useNewUrlParser: true,useUnifiedTopology: true});
// var userSchema=new mongoose.Schema({
//   username:String,
//   password:String
// })
// user数据表，mongoose会在自动传入的表名后加s
// user=>users
// var u=mongoose.model('user',userSchema)
//链接数据库模块
module.exports=mongoose