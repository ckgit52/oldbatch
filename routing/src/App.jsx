import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Vanshu from "./pages/Vanshu";

function App() {


  return (
    <>

      <BrowserRouter>
        <div className='flex bg-blue-800 text-white p-4 gap-4 font-bold text-xl'>

          <Link to=''>Home</Link>
          <Link to="contact">Contact</Link>
          <Link to="about">About</Link>
          <Link to="/about/vanshu">Vanshu</Link>
        </div>
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/about/vanshu' element={<Vanshu />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App