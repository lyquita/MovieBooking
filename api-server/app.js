const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require('./config/database');
const User = require('./models/user')

// dotenv setting
dotenv.config();


// multiple routes
app.use('/auth', require('./routes/auth'))

// test db 
db.authenticate()
.then(()=> console.log('**********DB connected'))
.catch((err)=> console.log('!!!!!!!!!Database error' + err))

//sync model
db.sync({alter:true})


app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(process.env.PORT, ()=>{
    console.log(`example app listening on port ${process.env.PORT}`)
} )