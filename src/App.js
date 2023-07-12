import './App.css';

// pages
import Home from './Pages/home';
import About from './Pages/about';

import { BrowserRouter , Routes, Route, Link, NavLink } from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
            <header>
              <nav>
                <h1>Hello</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">about</NavLink>
              </nav>
            </header>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path="about" element={<About />} />
              
            </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
