const express = require('express');
const app = express();
const port = process.env.PORT|| 2000;
app.use(express.json());//This is to accept the data in json format
app.use(express.urlencoded());//This is to decode the data send through the html form.
app.get('/',(req,res)=>{// to use get method
    res.send('Welcome to node js');
})


app.post('/postRequest',(req,res)=>{// to get the post response
    res.status(200).json({
        success : true,
        msg : req.body.msg
    })  
})



app.listen(port, ()=>console.log(`Your port is ${port}`));