const express = require('express');
const mysql = require('mysql');
var url = require('url');
const cors = require('cors');
const cookieParser = require('cookie-parser');//parses the cookie as a signed cookie(sign in)
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');//For encrypt the original password
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:3000'],//allowing session
    methods: ['GET','POST'],//methods will gonna be used
    credentials: true//Allowing the cookie

}) );
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(session({
    key: 'userid',
    secret: 'secret',
    resave: false,
    saveUninitialized : false,
    cookie:{
        expires: 60*60*24,
    },
}));

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'testold'
});

app.post('/register', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    bcrypt.hash(password,saltRounds,(err,hash)=>{
        if(err)
        {
            console.log(err);
        }
        db.query('INSERT INTO users (username,email,password,org_password) values(?,?,?,?)',[username,email,hash,password],(err,result)=>{
            console.log(err);
    });
    })
 });

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './images/')     // './images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});

app.post("/addmovie", upload.single('file'), (req, res) => {
    // const moviename  = JSON.parse(req.body);
// console.log('hello');
    const moviename = req.body.moviename;
    const quality = req.body.quality;
    const rating = req.body.rating;
    const genre = req.body.genre;
    const language = req.body.language;
    const year = req.body.year;
    console.log(moviename);
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc =  req.file.filename

        var insertData = "INSERT INTO movie_list (moviename,quality,rating,genre,language,year,image) values(?,?,?,?,?,?,?)"
        db.query(insertData, [moviename,quality,rating,genre,language,year,imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })
    }
});



 app.get('/login',(req,res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user :req.session.user})
    }
    else{
        res.send({loggedIn: false});
    }
 })
app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ?',username,(err,result)=>{
            if(err)
            {
                res.send({err:err});
                // console.log("err...>")
            }
           if(result.length>0)//if data get by the username
            {

                bcrypt.compare(password,result[0].password,(error,response)=>{
                    if(response)
                    {
                        // app.post('/login',(req,res)=>{
                        req.session.user =  result;
                        console.log(req.session.user);      
                        res.send(result);
                    // });
                    }else
                    {
                res.send({message:'Wrong username/password combination!'});
                    }
                })//Check the input password is bases on the hashed password.
            }
            else{
                res.send({message:'Username Does not exist'});

            }
            
    });
});
app.listen(3001,()=>{
    console.log('server is runningu');   
});