const express=require('express')
const dotenv=require('dotenv').config;
const port=process.env.PORT || 5000;
const bodyParser = require('body-parser')
const app=express();
const path=require('path');



//enable body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// sta3mel had lfichier mnin tbda route /openai
app.use('/openai',require('./Routes/OpenAiRoute'))
//set static folder
app.use(express.static(path.join(__dirname,'public')))

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });
app.listen(port,()=> console.log(`Server started on port ${port}`))