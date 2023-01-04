//import modules

import express from 'express'
import { merTypes } from './data/mermaids-data.js'

//create express app

const app = express()

//configure the app - app.set(__ , __)

app.set('view engine', 'ejs')

//mount middleware - app.use

//mount routes

app.get('/', function(req, res) {
  res.redirect('/mermaids')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/mermaids', function(req, res) {
  res.render('mermaids/index', {
    myMerList: merTypes
  })
})

//tell app listen on port 3000

app.listen(3001, function() {
  console.log('I am listening to port 3001!')
})