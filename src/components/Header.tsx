"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, MapPin, User, Menu, X, ChevronDown, Landmark, Battery, Zap, Timer, HelpCircle } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [city, setCity] = useState("Select City");
  const [showCityModal, setShowCityModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const cities = ["New Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"];

  // Sync city with localStorage for persistence across pages
  useEffect(() => {
    const savedCity = localStorage.getItem("userCity");
    if (savedCity) setCity(savedCity);
  }, []);

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    localStorage.setItem("userCity", selectedCity);
    setShowCityModal(false);
    // Refresh for any city-specific content
    router.refresh();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            GAADI<span>MOTOR</span>CAR
          </Link>
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <Link href="/explore-new-cars">NEW CARS <ChevronDown size={14} /></Link>
              <div className={styles.dropdown}>
                <div className={styles.dropdownInner}>
                  <div className={styles.dropdownCol}>
                    <p className={styles.colTitle}>Popular</p>
                    <Link href="/explore-new-cars">Explore New Cars</Link>
                    <Link href="/electric-cars">Electric Cars</Link>
                    <Link href="/upcoming-cars">Upcoming Cars</Link>
                    <Link href="/search?q=new launches">New Launches</Link>
                  </div>
                  <div className={styles.dropdownCol}>
                    <p className={styles.colTitle}>Tools</p>
                    <Link href="/compare-cars">Compare Cars</Link>
                    <Link href="/search?q=dealers">Find Dealers</Link>
                    <Link href="/offers">Offers & Discounts</Link>
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
                    <Link href="/search?q=used cars">Cars in Your City</Link>
                    <Link href="/search?q=certified cars">Certified Cars</Link>
                  </div>
                  <div className={styles.dropdownCol}>
                    <p className={styles.colTitle}>Sell</p>
                    <Link href="/used-cars">Sell My Car</Link>
                    <Link href="/search?q=valuation">Car Valuation</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.navItem}>
              <Link href="/reviews">NEWS & REVIEWS <ChevronDown size={14} /></Link>
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
          <form className={styles.searchBar} onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search Cars..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" style={{ background: "none", border: "none", cursor: "pointer" }}>
              <Search size={18} />
            </button>
          </form>
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
                  onClick={() => handleCitySelect(c)}
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
