import React,{ useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function BookList() {
    
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000').then((res)=>{
            setBooks(res.data);
            console.log(books)
        }).catch((err)=>{
            console.log(err);
        })
      });


      const handleDelete= async (bookID) =>{
        try{
            await axios.delete('http://localhost:5000/delete/'+bookID);
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
      }

  return (
    <div>
        <h2>Books Information System</h2>
        <button><Link to="/add" style={{textDecoration:'none'}}>Add</Link></button>       
        <table>
            <thead>
                <tr>
                    <th>Book ID</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>

            
            <tbody>
            {books.map(book => (
                
                <tr key={book.bookID}>
                    <td>{book.bookID}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>
                    <button><Link to={`/update/${book.bookID}`} style={{textDecoration:'none'}}>Update</Link></button>       
                    <button onClick={ e => handleDelete(book.bookID)}>Delete</button>       
                    </td>
                </tr>
            )
            )}
            
                
            </tbody>
            
            
            
        </table>
    </div>
  )
}
