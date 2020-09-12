const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host : 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'spotify'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected to DB');
})

const app = express();

app.listen('3000', ()=> {
    console.log("Listening to port 3000...")
} )