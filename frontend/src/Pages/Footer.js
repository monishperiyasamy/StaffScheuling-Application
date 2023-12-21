import React from 'react'
import'../Assets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>

        
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
        
         
           
            <p className='terms-cond'>
            <Link to ="/terms"> 
                Terms and Conditions</Link>
                </p>
           
        
         
        </div>
        <div className="footer-column">
         
          <ul className="footer-list-quick">
            <li className="footer-list-item">
            </li>
            <li className="footer-list-item">
            
            Contact us
           
            </li>
            <li className="footer-list-item"><Link to ="/faq">
          FAQ
          </Link>
            </li>
            <li className="footer-list-item">
              
              <Link to ="/privacypolicy">Privacy Policy</Link>  
            
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Connect with Us :</h4>
          <ul className="social-icons">
            <li className="social-icons-item">
              
               <Link to ="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook} /></Link>
           
            </li>
            <li className="social-icons-item">
              
               <Link to ="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram} /></Link>
     
            </li>
            
            <li className="social-icons-item">
            
             
            <Link to ="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></Link>
           
            </li>
            <li className="social-icons-item">
            
            <Link to ="https://github.com/monishperiyasamy"><FontAwesomeIcon icon={faGithub} /></Link>
           
            </li>
          </ul>
        </div>
      </div>
  
    </footer>

    </div>
  )
}

export default Footer
