import '../Styles/footer.css';
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'

function Footer () {
    return(
        <div className='footer'>
            <p>Get in touch with us</p>
            <div className='footer-socialmedia'>
                <a href='https://www.facebook.com/' target='/blank'>
                    <BsFacebook />
                </a>
                <a href='https://www.instagram.com/' target='/blank'>
                    <BsInstagram />
                </a>
                <a href='https://www.twitter.com/' target='/blank'>
                    <FaXTwitter />
                </a>
            </div>
        </div>
    );
}

export default Footer