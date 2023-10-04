import './App.css'
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    
    
    <div className="App">
    <Header />  
    <nav>
    <Link to={"/"} className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
    <Link to={"/about"} className={location.pathname === '/' ? 'active-link' : ''}>About</Link>
    <Link to={"/contact"} className={location.pathname === '/' ? 'active-link' : ''}>Contact</Link>
    </nav>
    <Outlet />
    
    </div>

    
  )
}

export default App
