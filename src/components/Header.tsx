"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, User, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [city, setCity] = useState("Select City");
  const [showModal, setShowModal] = useState(false);
  
  const cities = ["New Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai"];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            GAADI<span>MOTOR</span>CAR
          </Link>
          <nav className={styles.nav}>
            <Link href="/new-cars">New Cars</Link>
            <Link href="/used-cars">Used Cars</Link>
            <Link href="/reviews">Reviews & News</Link>
          </nav>
        </div>
        
        <div className={styles.right}>
          <button className={styles.location} onClick={() => setShowModal(true)}>
            <MapPin size={18} />
            <span>{city}</span>
          </button>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search Cars..." />
            <Search size={18} />
          </div>
          <button className={styles.profileBtn}>
            <User size={20} />
            <span>Login / Register</span>
          </button>
          <button className={styles.mobileMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Select your city</h3>
              <button onClick={() => setShowModal(false)}><X size={20} /></button>
            </div>
            <div className={styles.cityGrid}>
              {cities.map(c => (
                <button 
                  key={c} 
                  className={styles.cityBtn}
                  onClick={() => { setCity(c); setShowModal(false); }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
