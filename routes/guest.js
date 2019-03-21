const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Welcome to the Guest Support Page')
});


router.get('/register', (req,res)=>{
    res.send('Thank you wanting to register for this site!')
});

router.get('/contact/:phonenum', (req,res)=>{
    res.send(`We will contact you shortly at ${request.params.phonenum} Guest`)
});
