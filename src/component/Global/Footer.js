// import React from 'react'


// export default function Footer() {
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   )
// }



import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTshirt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-light text-center text-md-start mt-auto border-top pt-4">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5>חנות בגדי ילדים</h5>
            <p>הסטייל הקטן ביותר לגדולים שבדרך</p>
           <p><FaMapMarkerAlt className="me-2" /> רחוב האופנה 10, תל אביב</p>
          </Col>

          <Col md={3} className="mb-4">
            <h6>צור קשר</h6>
            <p><FaPhone className="me-2" /> 03-1234567</p>
            <p><FaEnvelope className="me-2" /> info@kids-shop.co.il</p>
            <p><FaWhatsapp className="me-2" /> 050-9876543</p>
          </Col>

          <Col md={3} className="mb-4">
            <h6>מידע</h6>
            <ul className="list-unstyled">
              <li><a href="#branches" className="text-dark text-decoration-none">הסניפים שלנו</a></li>
              <li><a href="#return-policy" className="text-dark text-decoration-none">מדיניות החזרות</a></li>
              <li><a href="#shipping" className="text-dark text-decoration-none">משלוחים</a></li>
              <li><a href="#faq" className="text-dark text-decoration-none">שאלות נפוצות</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6>עקבו אחרינו</h6>
            <a href="#" className="me-3 text-dark"><FaFacebook size={24} /></a>
            <a href="#" className="me-3 text-dark"><FaInstagram size={24} /></a>
          </Col>
        </Row>

        <div className="text-center p-3 border-top mt-3">
          © {new Date().getFullYear()} כל הזכויות שמורות לחנות בגדי ילדים
        </div>
      </Container>
    </footer>
  );
};

export default Footer;