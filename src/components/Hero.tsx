import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
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
          <h1 className="h1">Elevating Every Drive</h1>
          <p>Find the car that speaks to your soul. From luxury flagships to nimble hatchbacks, start your journey here.</p>
        </div>
        
        <div className={styles.searchCard}>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.active}`}>New Cars</button>
            <button className={styles.tab}>Used Cars</button>
            <button className={styles.tab}>Sell Car</button>
          </div>
          
          <div className={styles.searchFields}>
            <div className={styles.field}>
              <label>Body Type</label>
              <select defaultValue="">
                <option value="" disabled>All Types</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="electric">EV</option>
              </select>
            </div>
            
            <div className={styles.field}>
              <label>Budget</label>
              <select defaultValue="">
                <option value="" disabled>Select Budget</option>
                <option value="5-10">5L - 10L</option>
                <option value="10-20">10L - 20L</option>
                <option value="20-50">20L - 50L</option>
                <option value="50+">50L+</option>
              </select>
            </div>
            
            <div className={styles.field}>
              <label>Brand</label>
              <select defaultValue="">
                <option value="" disabled>All Brands</option>
                <option value="tata">Tata</option>
                <option value="hyundai">Hyundai</option>
                <option value="maruti">Maruti Suzuki</option>
                <option value="kia">Kia</option>
                <option value="toyota">Toyota</option>
              </select>
            </div>
            
            <button className={styles.searchBtn}>
              <Search size={22} />
              <span>Find Your Car</span>
            </button>
          </div>
          
          <div className={styles.quickLinks}>
            <span>Popular:</span>
            <a href="#">SUV under 15L</a>
            <a href="#">Best EVs 2026</a>
            <a href="#">7 Seater Cars</a>
          </div>
        </div>
      </div>
    </section>
  );
}
