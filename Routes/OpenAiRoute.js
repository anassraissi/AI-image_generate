const express=require('express');
const dotenv=require('dotenv').config;

const Route=express.Router();
const {generateImage}=require('../Controllers/OpenAiController');

Route.post('/generateimage', generateImage)

module.exports=Route;