const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://usone:usone@ictak.ardgz.mongodb.net/ictak?retryWrites=true&w=majority');
const Schema =mongoose.Schema;
var BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    imageUrl:String
});
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;
