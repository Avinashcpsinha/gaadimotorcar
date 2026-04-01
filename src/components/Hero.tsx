"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, MapPin, Fuel, Gauge, Settings2, Sparkles, ChevronRight, X } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const router = useRouter();
  const [activeType, setActiveType] = useState("new");
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("Select City");
  const [showCityModal, setShowCityModal] = useState(false);
  
  const cities = ["New Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"];

  useEffect(() => {
    const savedCity = localStorage.getItem("userCity");
    if (savedCity) setCity(savedCity);
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    localStorage.setItem("userCity", selectedCity);
    setShowCityModal(false);
    // Reload or shared state is better, but this simple way works for now
    window.location.reload(); 
  };

  return (
    <section className={styles.hero}>
      <div className={styles.imageOverlay}>
        <Image
          src="/images/hero.png"
          alt="Premium Luxury SUV"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.gradient}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h1 className="h1">Find Your Right Car</h1>
          <p>India's most trusted car discovery and comparison platform.</p>
        </div>
        
        <div className={styles.searchCard}>
          <div className={styles.topRow}>
            <div className={styles.toggle}>
              <button 
                className={`${styles.toggleBtn} ${activeType === "new" ? styles.active : ""}`}
                onClick={() => setActiveType("new")}
              >
                New
              </button>
              <button 
                className={`${styles.toggleBtn} ${activeType === "used" ? styles.active : ""}`}
                onClick={() => setActiveType("used")}
              >
                Used
              </button>
            </div>
            
            <form className={styles.mainSearch} onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Type to select car name, e.g. Mahindra Scorpio-N" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={22} className={styles.searchIcon} onClick={() => handleSearch()} style={{ cursor: "pointer" }} />
            </form>
            
            <button className={styles.cityLink} onClick={() => setShowCityModal(true)}>
              {city} <MapPin size={16} />
            </button>
          </div>
          
          <div className={styles.filterRow}>
            <button className={styles.filterPill} onClick={() => router.push("/search?q=budget")}>
              <div className={styles.iconBox}>₹</div>
              <span>Budget</span>
              <ChevronRight size={14} />
            </button>
            <button className={styles.filterPill} onClick={() => router.push("/search?q=body type")}>
              <div className={styles.iconBox}><Gauge size={14} /></div>
              <span>Body Type</span>
              <ChevronRight size={14} />
            </button>
            <button className={styles.filterPill} onClick={() => router.push("/search?q=fuel type")}>
              <div className={styles.iconBox}><Fuel size={14} /></div>
              <span>Fuel Type</span>
              <ChevronRight size={14} />
            </button>
            <button className={styles.filterPill} onClick={() => router.push("/search?q=transmission")}>
              <div className={styles.iconBox}><Settings2 size={14} /></div>
              <span>Transmission</span>
              <ChevronRight size={14} />
            </button>
            <button className={styles.filterPillAll} onClick={() => router.push("/search?q=all filters")}>
              <Sparkles size={14} />
              <span>All Filters</span>
            </button>
          </div>
          
          <div className={styles.quickLinks}>
            <span>Popular:</span>
            <a href="/search?q=suv under 15l">SUV under 15L</a>
            <a href="/search?q=best electric cars">Best Electric Cars</a>
            <a href="/search?q=best safety rated suv">Best Safety Rated SUV</a>
            <a href="/search?q=7 seater cars">7 Seater Cars</a>
          </div>
        </div>
      </div>

      {showCityModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", zIndex: 10000,
          display: "flex", alignItems: "center", justifyContent: "center"
        }} onClick={() => setShowCityModal(false)}>
          <div style={{
            background: "var(--white)", padding: "2rem", borderRadius: "1rem",
            width: "90%", maxWidth: "500px"
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <h3 style={{ color: "var(--secondary)", fontWeight: "700" }}>Select your city</h3>
              <button onClick={() => setShowCityModal(false)}><X size={20} /></button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
              {cities.map(c => (
                <button key={c} style={{
                  padding: "0.75rem", border: "1px solid var(--border)",
                  borderRadius: "0.5rem", fontWeight: "600",
                  textAlign: "left"
                }} onClick={() => handleCitySelect(c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
