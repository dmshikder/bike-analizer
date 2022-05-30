import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
   <Header></Header>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      
      
      </Routes>
    </div>
  );
}

export default App;
