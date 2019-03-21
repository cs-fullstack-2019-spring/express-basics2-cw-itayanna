const express = require('express');
const app = express();


app.listen(8000, ()=>{
    console.log('listening to poor 8000')
});

const member = require('./routes/member.js');
const guest = require('./routes/guest.js');


app.use('/member', member);
app.use('/guest', guest);