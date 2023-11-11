import '../Styles/home.css';
import '../Styles/content.css';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

function About() {

  return (
    <div className="About">
      <Header />
      <div className='Content'>
        <p className='contentPara'>
          <strong>About Alexis:Visualizing Medical Simulations</strong>
          <br />
          <br />
          Welcome to Alexis, where we're revolutionizing medical education and training through cutting-edge visualization technology. Our mission is to provide an immersive and interactive platform that enables healthcare professionals, students, and enthusiasts to explore and understand complex medical simulations tailored to individual body types.
          <br /><br />
          <strong>Our Vision</strong> <br /><br/>
          At Alexis, we believe that a deeper understanding of medical procedures and conditions starts with personalized visualization. Our vision is to empower learners of all levels with a dynamic tool that bridges the gap between theoretical knowledge and practical application.
          <br /> <br />
          <strong>How it Works</strong><br /><br/>
          <strong>personalized visualization</strong><br/>
          ALexis uses synthetic Data(for now) to analyze user-provided body measurements and medical history. This data is then utilized to generate customized medical simulations.<br/><br/>
          <strong>Our Commitment to Education</strong><br/><br/>
          At the heart of our project is a commitment to education and the advancement of healthcare knowledge. <br/><br/>
          <strong>Meet the Team</strong><br/>
          <strong>V. Charvy</strong><br/>
          <strong>A. Shree Balaji</strong><br/><br/>
          <strong>Contact Us</strong><br/><br/>
          We value your feedback and inquiries. Feel free to reach out to us through our <Link to="/contact" className='link'>Contact Page</Link> or send us an email at cs21b054@iittp.ac.in or cs21b008@iittp.ac.in . We're excited to hear from you!<br/><br/><br/>
          <Link to='https://github.com/CS21B008/Alexis' target='/blank' className='link'>DeepDive</Link>
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;