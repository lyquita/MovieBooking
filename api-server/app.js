const express = require('express');
const app = express();
const dotenv = require('dotenv');

// dotenv setting
dotenv.config();


// multiple routes
app.use('/auth', require('./routes/auth'))


app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(process.env.PORT, ()=>{
    console.log(`example app listening on port ${process.env.PORT}`)
} )