var mongooes = require('mongoose')

var userSchima = mongooes.Schema({
    name:String,
    lname:{type:String,require:true}
  
})




var prUser =mongooes.model('prUser',userSchima)

module.exports=prUser