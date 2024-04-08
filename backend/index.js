     const express =require("express");
const path =require("path");
const app = express();
const mysql = require('mysql');
const bodyParser =require('body-parser');
const cors=require("cors");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '/public')));



//create connection
const conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'task'
    

});



//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log ('Mysql Connected...');
});

//route for signup page
app.post('/sign', (req, res) => {
    let email = req.body.email;
    
    // Check if the email already exists in the database
    let checkEmailQuery = "SELECT * FROM signup WHERE email = ?";
    conn.query(checkEmailQuery, email, (err, results) => {
        if(err){
            // Handle error if the query encounters an issue
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        } else {
            // If results.length > 0, it means email already exists
            if(results.length > 0){
                res.status(400).json({ status: 400, message: 'Email already exists' });
          
            } else {
                // Email does not exist, proceed to create user
                let data = {
                    username: req.body.username,
                    email: email,
                    phone: req.body.phone,
                    password: req.body.password
                };
                
                let insertQuery = "INSERT INTO signup SET ?";
                conn.query(insertQuery, data, (err, results) => {
                    if(err){
                        res.status(500).json({ status: 500, message: 'Failed to create account' });
                    
                    } else {
                        res.status(200).json({ status: 200, message: 'Account created' });
                    }
                });
            }
        }
    });
});


//route for login page
app.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let sql = "SELECT * FROM signup WHERE email = ? AND password = ?";
    let query = conn.query(sql, [email, password], (err, results) => {
        if(err){
            // Handle error if the query encounters an issue
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        } else {
            // If results.length === 0, it means email and password combination doesn't exist
            if(results.length === 0){
                res.status(401).json({ status: 401, message: 'Invalid email or password' });
            } else {
                // Email and password combination exists, user is authenticated
                res.status(200).json({ status: 200, message: 'Login successful' });
            }
        }
    });
});




  
app.listen(4200,()=>{
    console.log(`express server running on 4200`);
});
