import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdateBook from './components/UpdateBook';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookList/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/update/:bookID' element={<UpdateBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
