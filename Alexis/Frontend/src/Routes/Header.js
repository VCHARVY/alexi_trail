import { Link } from 'react-router-dom';
import '../Styles/header.css';
import { useAuth } from './Authcontext';

function clickHandler(){
  const Hamburger = document.querySelector('.Hamburger');
  const nav = document.querySelector('.nav-header');
  Hamburger.classList.toggle('active');
  nav.classList.toggle('active');
}

function Header(){
  const { isLoggedIn } = useAuth(); 
  const {isMedicalProfessional}=useAuth(); 
    return(
      <header className="App-header">
        <div className='Hamburger' onClick={() => {
          clickHandler();
        }}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <div className='nav-header'>
          <div className="Home-header">
              <Link className="headerLink" to="/">HOME</Link>
          </div>
          <div className='About-header'>
              <Link className="headerLink" to="/about">ABOUT</Link>
          </div>
          {isMedicalProfessional &&
          <div className='editDB-header'>
              <Link className="headerLink" to="/editDB">EDIT DATA</Link>
          </div>
          }
          <div className='Contact-header'>
              <Link className="headerLink" to="/contact">CONTACT</Link>
          </div>
          {!isLoggedIn &&
          <div className='Login-header'>
              <Link className="headerLink" to="/login">LOGIN</Link>
          </div>
          }
          {!isLoggedIn &&
          <div className='Signup-header'>
              <Link className="headerLink" to="/Signup">SIGNUP</Link>
          </div>
          }
         
          {isLoggedIn &&
          <div>
            <Link className="headerLink" to="/simulate">SIMULATE</Link>
          </div>
          }
          {isLoggedIn &&
            <div className='Logout-header'>
              <Link className="headerLink" to="/logout">LOGOUT</Link>
          </div>
          }
          
        </div>
        <div className='Logo-header'>
          <p className='Logo-para'>ALEXIS</p>
        </div>
      </header>
    );
}

export default Header