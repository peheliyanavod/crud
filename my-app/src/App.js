import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookList/>}/>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/update/:bookID' element={<UpdateBook/>}/>
          <Route path='/delete' element={<DeleteBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
