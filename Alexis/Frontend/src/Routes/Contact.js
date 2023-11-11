import '../Styles/home.css';
import '../Styles/content.css';
import Footer from './Footer';
import Header from './Header';

function Contact() {

  return (
    <div className="Contact">
      <Header />
      <div className='Content'>
        <pre className='contactPara'>
          <strong>Contact us for any query</strong><br/><br/>
          <strong>Email ids: </strong>cs21b008@iittp.ac.in<br/>           cs21b054@iittp.ac.in<br/><br/>
          <strong>Contribute to the project</strong><br/>
          <a href="https://github.com/CS21B008/Alexis" className='GitLink' target='/blank'>
            https://github.com/CS21B008/Alexis
          </a><br/><br/>
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;