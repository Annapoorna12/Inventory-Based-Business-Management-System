import logo from '../assets/logo white.png';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
// import './App.css';
// import Login from './components/login'

function Header() {
  // const userLogin = useSelector(state => state.userLogin);
  // const { userInfo } = userLogin;
  // const dispatch = useDispatch();

  // const logoutHandler = () => {
  //   dispatch(logout());
  // };

  return (
    <> 
    <div className='homepage'>
    <nav className='navbar'>
    <img src={logo} alt="logo" style={{height: '150px',
  width: '135px', marginLeft: '25px', marginTop: '0.5px'}} />
    <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to=''>About </Link>
        <Link to=''>Contact</Link>
        {/* {userInfo ? (
            <Link to=''>Cart </Link>
            <Link to=''><Logout></Logout></Link>
        ) : ( */}
        <Link to='/Login'> Login</Link>
        <Link to='/Signup'>Signup</Link>
        {/* )} */}
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

export default Header;