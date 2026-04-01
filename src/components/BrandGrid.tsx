"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BrandGrid.module.css";

const brands = [
  { name: "Maruti Suzuki", slug: "maruti-suzuki", logo: "/images/brands/maruti-suzuki.jpg" },
  { name: "Tata", slug: "tata", logo: "/images/brands/tata.jpg" },
  { name: "Mahindra", slug: "mahindra", logo: "/images/brands/mahindra.jpg" },
  { name: "Hyundai", slug: "hyundai", logo: "/images/brands/hyundai.jpg" },
  { name: "Toyota", slug: "toyota", logo: "/images/brands/toyota.jpg" },
  { name: "Kia", slug: "kia", logo: "/images/brands/kia.jpg" },
  { name: "BMW", slug: "bmw", logo: "/images/brands/bmw.jpg" },
  { name: "Volkswagen", slug: "volkswagen", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/volkswagen.jpg" },
  { name: "Mercedes-Benz", slug: "mercedes-benz", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mercedes-benz.jpg" },
  { name: "Audi", slug: "audi", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/audi.jpg" },
  { name: "Tesla", slug: "tesla", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tesla.jpg" }
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
              href={`/brand/${brand.slug}`} 
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
