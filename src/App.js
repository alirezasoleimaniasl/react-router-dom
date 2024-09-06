import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import BookList from './BookList';
import Book from './Book';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/book" element = {<BookList/>} />
          <Route path = "/book/:id" element = {<Book/>} />
          <Route path = "*" element = {<NotFound/>} />
          </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
