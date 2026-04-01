"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BrandGrid.module.css";

const brands = [
  { name: "Maruti Suzuki", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti-suzuki.jpg" },
  { name: "Tata", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg" },
  { name: "Mahindra", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg" },
  { name: "Hyundai", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg" },
  { name: "Toyota", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg" },
  { name: "Kia", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/kia.jpg" },
  { name: "Skoda", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/skoda.jpg" },
  { name: "BMW", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/bmw.jpg" },
  { name: "Volkswagen", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/volkswagen.jpg" },
  { name: "Mercedes-Benz", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mercedes-benz.jpg" },
  { name: "MG", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mg.jpg" },
  { name: "Audi", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/audi.jpg" },
  { name: "Tesla", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tesla.jpg" }
];

export default function BrandGrid() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
      <div className="container">
        <div className="flex items-center justify-between" style={{ marginBottom: "2.5rem" }}>
          <h2 className="h2">All Brands</h2>
          <Link href="/explore-new-cars" style={{ color: "var(--primary)", fontWeight: "700" }}>View All Brands</Link>
        </div>
        
        <div className={styles.grid}>
          {brands.map((brand) => (
            <Link 
              href={`/search?q=${brand.name}`} 
              key={brand.name} 
              className={styles.brandCard}
            >
              <div className={styles.logoWrapper}>
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className={styles.logo}
                  onError={(e) => {
                    // Fallback to text if logo fails
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add(styles.fallback);
                  }}
                />
                <span className={styles.fallbackText}>{brand.name.charAt(0)}</span>
              </div>
              <span className={styles.brandName}>{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
