import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdateBook from './components/UpdateBook';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Welcome from './pages/Welcome';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<BookList/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/update/:bookID' element={<UpdateBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
