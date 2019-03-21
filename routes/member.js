const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Welcome to the Member Only Page')
});


router.get('/signin', (req,res)=>{
    res.send('Please sign in with your Member credentials')
});

router.get('/contact/:name/:phonenum', (req,res)=>{
    res.send(`Thanks ${request.params.name}! We will contact you shortly at ${request.params.name}`)
});
