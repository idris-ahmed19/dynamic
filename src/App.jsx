import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Resume from "./components/pages/resume";
import Portfolio from './components/pages/portfolio';

function App(){
  return(
    <>
      <BrowserRouter basename='/dynamic'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
