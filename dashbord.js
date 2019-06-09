var express = require('express')

var router = express.Router()
var UserDb = require('./models/users')



// router.param('id',(req,res,next,value)=>
// {
//     console.log('get ',value)
//     next()
// }

// )

// router.param('id',(req,res,next,value)=>
// {
//    // let id  =eq.params.id
//     //find on db and retrun db  and replaace   '' req.params ''

//     console.log('get ',req.params)
//     req.params={
//         id:'1',
//         name:'amin',
//         lname:'drh'
//     }
//     next()
// }

// )

// router.get('/dash',(req,res)=>{
//    // console.log('reg',req)
//     res.send('succes!')
// })



// router.get('/video/:id/',(req,res)=>{
//   //  console.log('reg',req)
   
//    // res.json(req.params)
//     res.send(req.params)
// })


router.post('/register',(req,res)=>{

    
  

console.log(req.body)
   

   //find user
   UserDb.findOne({name:req.body.name}, function (err, user) {
    // docs.forEach
    if(err) throw err

    if(!user)
    {
                //insert  on Db schima
            var prUser = new UserDb({
                name:req.body.name,
                lname:req.body.lname,
                create_at:''
            })


            //    //save on Db
            prUser.save((err)=>{
                if(err) throw err
         

            res.json({message:'success'})
            })

    }
    else
    {
        res.status(404).json({message:'it is registered'})
    }
  });


  





 })

 router.post('/login',(req,res)=>{

    
  

    console.log(req.body)
       
    
       //find user
       UserDb.findOne({name:req.body.name}, function (err, user) {
        // docs.forEach
        if(err) throw err
    
        if(user)
        {
            res.status(202).json({message:'token'})
        }
        else
        {
            res.status(404).json({message:'Not Found'})
        }
      });
    
    
      
    
    
    
    
    
     })
    
 

module.exports = router