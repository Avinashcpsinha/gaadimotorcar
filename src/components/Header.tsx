"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, User, Menu, X, ChevronDown, Landmark, Battery, Zap, Timer, HelpCircle } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [city, setCity] = useState("Select City");
  const [showCityModal, setShowCityModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const cities = ["New Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            GAADI<span>MOTOR</span>CAR
          </Link>
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <Link href="/new-cars">NEW CARS <ChevronDown size={14} /></Link>
              <div className={styles.dropdown}>
                <div className={styles.dropdownInner}>
                  <div className={styles.dropdownCol}>
                    <p className={styles.colTitle}>Popular</p>
                    <Link href="/new-cars">Explore New Cars</Link>
                    <Link href="/new-cars">Electric Cars</Link>
                    <Link href="/new-cars">Upcoming Cars</Link>
                    <Link href="/new-cars">New Launches</Link>
                  </div>
                  <div className={styles.dropdownCol}>
                    <p className={styles.colTitle}>Tools</p>
                    <Link href="/new-cars">Compare Cars</Link>
                    <Link href="/new-cars">Find Dealers</Link>
                    <Link href="/new-cars">Offers & Discounts</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.navItem}>
              <Link href="/used-cars">USED CARS <ChevronDown size={14} /></Link>
              <div className={styles.dropdown}>
                <div className={styles.dropdownInner}>
                  <div className={styles.dropdownCol}>
                    <p className={styles.colTitle}>Buy Used</p>
                    <Link href="/used-cars">Buy Used Cars</Link>
                    <Link href="/used-cars">Cars in Your City</Link>
                    <Link href="/used-cars">Certified Cars</Link>
                  </div>
                  <div className={styles.dropdownCol}>
                    <p className={styles.colTitle}>Sell</p>
                    <Link href="/used-cars">Sell My Car</Link>
                    <Link href="/used-cars">Car Valuation</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.navItem}>
              <Link href="/news">NEWS & REVIEWS <ChevronDown size={14} /></Link>
              <div className={styles.dropdown}>
                <div className={styles.dropdownInner}>
                  <div className={styles.dropdownCol}>
                    <Link href="/reviews">Latest News</Link>
                    <Link href="/reviews">Expert Reviews</Link>
                    <Link href="/reviews">User Reviews</Link>
                    <Link href="/reviews">Tips & Advice</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <div className={styles.right}>
          <button className={styles.location} onClick={() => setShowCityModal(true)}>
            <MapPin size={18} />
            <span>{city}</span>
          </button>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search Cars..." />
            <Search size={18} />
          </div>
          <button className={styles.profileBtn} onClick={() => setShowLoginModal(true)}>
            <User size={20} />
            <span>Login / Register</span>
          </button>
          <button className={styles.mobileMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* City Modal */}
      {showCityModal && (
        <div className={styles.modalOverlay} onClick={() => setShowCityModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Select your city</h3>
              <button onClick={() => setShowCityModal(false)}><X size={20} /></button>
            </div>
            <div className={styles.cityGrid}>
              {cities.map(c => (
                <button 
                  key={c} 
                  className={styles.cityBtn}
                  onClick={() => { setCity(c); setShowCityModal(false); }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className={styles.modalOverlay} onClick={() => setShowLoginModal(false)}>
          <div className={styles.loginModal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowLoginModal(false)}><X size={20} /></button>
            <div className={styles.loginContent}>
              <div className={styles.loginLeft}>
                <h3>Login or Register</h3>
                <p>For a better experience, manage your shortlisted cars, and get personalized recommendations.</p>
                <div className={styles.loginFeatures}>
                  <div><Landmark size={18} /> <span>Save your favorite cars</span></div>
                  <div><Battery size={18} /> <span>Personalized deals</span></div>
                  <div><Timer size={18} /> <span>Track your valuation</span></div>
                </div>
              </div>
              <div className={styles.loginRight}>
                <div className={styles.formGroup}>
                  <label>Mobile Number / Email</label>
                  <input type="text" placeholder="Enter here" />
                </div>
                <button className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>Continue</button>
                <p className={styles.or}>OR</p>
                <button className="btn btn-outline" style={{ width: "100%" }}>Login with Google</button>
                <p className={styles.terms}>By continuing, you agree to our Terms and Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
