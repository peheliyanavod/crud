import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateBook() {
  const [name,setName] = useState('');
  const [author,setAuthor] = useState('');
  const [price,setPrice] = useState('');
  const {bookID} = useParams();
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    axios.put(`http://localhost:5000/update/${bookID}`, { name, author, price }).then(res=>{

      console.log(res);
      navigate('/');
    })
  }
  return (
    <div>
        <h2 className='title'>Add New Book</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type='text' placeholder='Enter the name' onChange={e=>setName(e.target.value)} />
        <br/>
        <label htmlFor="author">Author</label>
        <input type='text' placeholder='Enter the author' onChange={e=>setAuthor(e.target.value)}/>
        <br/>
        <label htmlFor="price">Price</label>
        <input type='text' placeholder='Enter the price' onChange={e=>setPrice(e.target.value)}/>
        <br/>
        <button className='btn-s' onClick={handleSubmit}>Update</button>
      </form>
    </div>
  )
}
