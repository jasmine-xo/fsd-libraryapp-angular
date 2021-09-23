const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://usone:usone@ictak.ardgz.mongodb.net/ictak?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthSchema=new Schema({
    name:String,
    nationality:String,
    genre:String,
    imageUrl:String
    
   

});

var Authdata = mongoose.model('authdata',AuthSchema);

module.exports=Authdata;