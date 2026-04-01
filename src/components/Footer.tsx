import styles from "./Footer.module.css";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <h3 className={styles.logo}>Gaadi<span>Motor</span>Car</h3>
          <p>The most trusted place for buying and selling cars in India. Discover your drive today.</p>
          <div className={styles.socials}>
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Youtube size={20} />
          </div>
        </div>
        
        <div className={styles.linksCol}>
          <h4>Overview</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        
        <div className={styles.linksCol}>
          <h4>Shop</h4>
          <a href="#">New Cars</a>
          <a href="#">Used Cars</a>
          <a href="#">Electric Cars</a>
          <a href="#">Compare Cars</a>
        </div>
        
        <div className={styles.contactCol}>
          <h4>Get in Touch</h4>
          <p><Mail size={16} /> support@gaadimotorcar.com</p>
          <p><Phone size={16} /> +91 1800 200 4000</p>
          <div className={styles.newsletter}>
            <input type="email" placeholder="Newsletter" />
            <button className="btn btn-primary">Join</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 GaadiMotorCar Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
