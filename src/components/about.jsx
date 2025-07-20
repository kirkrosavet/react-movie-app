import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
function About() {
    return (
     <>
        <div className="about">
            <h1>About Us</h1>   
            <p>Welcome to our movie app! We are passionate about bringing you the latest and greatest in the world of cinema. Our team is dedicated to providing you with a seamless experience, from browsing movies to finding your favorites.</p>
            <p>Whether you're a fan of action, drama, comedy, or any other genre    
               , we have something for everyone. Our extensive collection includes both classic films and the latest releases, ensuring that you never run out of options.</p>
            <p>We believe in the power of storytelling and the magic of movies to inspire,
               entertain, and connect people. Our goal is to create a platform where movie lovers can come together to share their passion and discover new films.</p>
            <p>Thank you for choosing our movie app. We hope you enjoy exploring our collection and finding your next favorite film!</p>
        </div>
        <div className="careers">
            <h2>Careers</h2>
            <p>We are always looking for talented individuals to join our team. If you are passionate about movies and technology, we would love to hear from you!</p>
            <p>Check out our careers page for current job openings and opportunities to work with us.</p>   

        </div>
        <div className="help-center">
            <h2>Help Center</h2>
            <p>If you have any questions or need assistance, our help center is here to support you. 
               You can find answers to frequently asked questions, troubleshooting tips, and contact information for our support team.</p>
            <p>We are committed to providing you with the best possible experience and are here to help you every step of the way.</p>
            <a href="https://wa.me/233503359334" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                      <FaWhatsapp />
                    </a>
        </div>
        <div className="contact">
            <h2>Contact Us</h2>
            <p>If you have any inquiries or feedback, please feel free to reach out to us. 
               You can contact us via email at "majestyreignsak47@gmail.com"  or through our social media channels. We value your input and are always here to listen.<a href="https://wa.me/233503359334" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                         <FaWhatsapp />
                       </a>
               </p>  
            <p>Thank you for being a part of our movie app community. We look forward to hearing from you!</p>
        </div>
        <div className="privacy-policy">
            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. We are committed to protecting your personal information and ensuring that it is used responsibly.</p>
            <p>Please read our privacy policy to understand how we collect, use, and protect your data while using our movie app.</p>
            <p>If you have any questions or concerns about our privacy practices, please contact us.</p>    

        </div>
        <div className="terms-of-service">
            <h2>Terms of Service</h2>
            <p>By using our movie app, you agree to our terms of service. These terms outline the rules and guidelines for using our platform, including your rights and responsibilities.</p>
            <p>Please read our terms of service carefully before using our app. If you have any questions or need clarification, feel free to reach out to us.</p>
        </div>
        <div className="feedback">
            <h2>Feedback</h2>
            <p>We value your feedback and suggestions. If you have any ideas for improving our movie app or features you would like to see, please let us know.</p>
            <p>Your input helps us enhance the user experience and make our app even better for movie lovers like you.</p>
            <p>Thank you for taking the time to share your thoughts with us!</p>
        </div>
     </>
    )
}

export default About;