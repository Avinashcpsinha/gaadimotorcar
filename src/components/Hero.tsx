"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Fuel, Gauge, Settings2, Sparkles, ChevronRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [activeType, setActiveType] = useState("new");
  
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
            
            <div className={styles.mainSearch}>
              <input type="text" placeholder="Type to select car name, e.g. Mahindra Scorpio-N" />
              <Search size={22} className={styles.searchIcon} />
            </div>
            
            <button className={styles.cityLink}>
              Select City <MapPin size={16} />
            </button>
          </div>
          
          <div className={styles.filterRow}>
            <button className={styles.filterPill}>
              <div className={styles.iconBox}><Landmark size={14} /></div>
              <span>Budget</span>
              <ChevronRight size={14} />
            </button>
            <button className={styles.filterPill}>
              <div className={styles.iconBox}><Gauge size={14} /></div>
              <span>Body Type</span>
              <ChevronRight size={14} />
            </button>
            <button className={styles.filterPill}>
              <div className={styles.iconBox}><Fuel size={14} /></div>
              <span>Fuel Type</span>
              <ChevronRight size={14} />
            </button>
            <button className={styles.filterPill}>
              <div className={styles.iconBox}><Settings2 size={14} /></div>
              <span>Transmission</span>
              <ChevronRight size={14} />
            </button>
            <button className={styles.filterPillAll}>
              <Sparkles size={14} />
              <span>All Filters</span>
            </button>
          </div>
          
          <div className={styles.quickLinks}>
            <span>Popular:</span>
            <a href="#">SUV under 15L</a>
            <a href="#">Best Electric Cars</a>
            <a href="#">Best Safety Rated SUV</a>
            <a href="#">7 Seater Cars</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-using Landmark from earlier or generic icon if not available
function Landmark({ size }: { size: number }) {
  return <span style={{ fontSize: size }}>₹</span>;
}
