const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

const port = 5000;

app.listen(port,()=>{
    console.log("Server is running on",port);
})

app.get("/",(req,res)=>{
    const sql = "SELECT * from books";
    db.query(sql,(err,data)=>{
        if(err){
            return res.json("Error");
            console.log("Error")
        }
        else{
            return res.json(data);
            console.log("Success")

        }
    })
})





// const bookSet = [
//     {
//         "book_id": "1",
//         "name": "To Kill a Mockingbird",
//         "author": "Harper Lee",
//         "price": 18.99
//     },
//     {
//         "book_id": "2",
//         "name": "1984",
//         "author": "George Orwell",
//         "price": 15.99
//     },
//     {
//         "book_id": "3",
//         "name": "The Great Gatsby",
//         "author": "F. Scott Fitzgerald",
//         "price": 10.99
//     },
//     {
//         "book_id": "4",
//         "name": "The Catcher in the Rye",
//         "author": "J.D. Salinger",
//         "price": 12.99
//     },
//     {
//         "book_id": "5",
//         "name": "Pride and Prejudice",
//         "author": "Jane Austen",
//         "price": 14.99
//     },
//     {
//         "book_id": "6",
//         "name": "The Hobbit",
//         "author": "J.R.R. Tolkien",
//         "price": 16.99
//     },
//     {
//         "book_id": "7",
//         "name": "Moby Dick",
//         "author": "Herman Melville",
//         "price": 13.99
//     },
//     {
//         "book_id": "8",
//         "name": "War and Peace",
//         "author": "Leo Tolstoy",
//         "price": 19.99
//     },
//     {
//         "book_id": "9",
//         "name": "Crime and Punishment",
//         "author": "Fyodor Dostoevsky",
//         "price": 17.99
//     },
//     {
//         "book_id": "10",
//         "name": "The Odyssey",
//         "author": "Homer",
//         "price": 11.99
//     }
// ];


// console.log(bookSet)