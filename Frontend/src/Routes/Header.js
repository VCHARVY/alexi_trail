import '../Styles/header.css';

function Header({ setNavId }){
    return(
      <header className="App-header">
        <div className='nav-header'>
          <div className="Home-header">
            <button onClick={() => setNavId(0)}>
              <span>HOME</span>
            </button>
          </div>
          <div className='About-header'>
            <button onClick={() => setNavId(1)}>
              ABOUT
            </button>
          </div>
          <div className='Contact-header'>
            <button onClick={() => setNavId(2)}>
              CONTACT
            </button>
          </div>
          <div className='Login-header'>
            <button onClick={() => setNavId(3)}>
              LOGIN/SIGNUP
            </button>
          </div>
        </div>
        <div className='Logo-header'>
          <p className='Logo-para'>ALEXIS</p>
        </div>
      </header>
    );
}

export default Header