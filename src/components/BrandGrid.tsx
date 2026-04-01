"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BrandGrid.module.css";

const brands = [
  { name: "Maruti Suzuki", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80" },
  { name: "Tata", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80" },
  { name: "Mahindra", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80" },
  { name: "Hyundai", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80" },
  { name: "Toyota", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80" },
  { name: "Kia", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80" },
  { name: "Skoda", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=80" },
  { name: "BMW", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80" },
  { name: "Volkswagen", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=80" },
  { name: "Mercedes-Benz", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80" },
  { name: "MG", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80" },
  { name: "Audi", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80" },
  { name: "Tesla", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/73/brands/logos/tesla.jpg?v=1631163609705&q=80" }
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
