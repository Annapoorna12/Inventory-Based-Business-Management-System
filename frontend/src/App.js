import logo from './assets/logo2-re.png';
import {Link} from 'react-router-dom';
import './App.css';
// import Login from './components/login'

function App() {
  return (
    <> 
    <div className='homepage'>
    <nav className='navbar'>
    <img src={logo} alt="logo" />
    <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/Login'> Login</Link>
        <Link to='/Signup'>Signup</Link>
        <Link to=''>About </Link>
        <Link to=''>Contact</Link>
    </div>
    </nav>
    <div className='intro'>
        <p>
        Crafting Tomorrow with Today's Finest Bricks
        </p>
    </div>
    
</div>
</>
  );
}

export default App;
