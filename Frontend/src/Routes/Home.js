import '../Styles/home.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function Home() {

  const [navId,setNavId] = useState(0);

  return (
    <div className="App">
      <Header 
        setNavId = {setNavId}
      />
      <Content 
        navId={navId}
      />
      <Footer/>
    </div>
  );
}

export default Home;