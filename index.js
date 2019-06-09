var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var mongooes = require('mongoose')


///////////////////////////////////////////////////////////////
mongooes.connect('mongodb://localhost/amin',{ useNewUrlParser: true })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



//////////////////////////////////////

var dash = require('./dashbord')

app.use('/',dash)



// app.post('',(req,res)=>
// res.json()
// )

app.listen(3000,()=>console.log('connect To port 3000'))


