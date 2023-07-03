const express=require('express')
const dotenv=require('dotenv').config;
const port=process.env.PORT || 5000;
const app=express();

// sta3mel had lfichier mnin tbda route /openai

app.use('/openai',require('./Routes/OpenAiRoute'))

app.listen(port,()=> console.log(`Server started on port ${port}`))