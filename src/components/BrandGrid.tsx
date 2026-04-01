"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BrandGrid.module.css";

const brands = [
  { name: "Maruti Suzuki", logo: "https://logo.clearbit.com/marutisuzuki.com" },
  { name: "Tata", logo: "https://logo.clearbit.com/tatamotors.com" },
  { name: "Mahindra", logo: "https://logo.clearbit.com/mahindra.com" },
  { name: "Hyundai", logo: "https://logo.clearbit.com/hyundai.com" },
  { name: "Toyota", logo: "https://logo.clearbit.com/toyota.com" },
  { name: "Kia", logo: "https://logo.clearbit.com/kia.com" },
  { name: "Skoda", logo: "https://logo.clearbit.com/skoda-auto.com" },
  { name: "BMW", logo: "https://logo.clearbit.com/bmw.com" },
  { name: "Renault", logo: "https://logo.clearbit.com/renault.com" },
  { name: "Volkswagen", logo: "https://logo.clearbit.com/volkswagen.com" },
  { name: "Mercedes-Benz", logo: "https://logo.clearbit.com/mercedes-benz.com" },
  { name: "MG", logo: "https://logo.clearbit.com/mgmotor.co.in" },
  { name: "Nissan", logo: "https://logo.clearbit.com/nissan-global.com" },
  { name: "Honda", logo: "https://logo.clearbit.com/honda.com" },
  { name: "Land Rover", logo: "https://logo.clearbit.com/landrover.com" },
  { name: "Audi", logo: "https://logo.clearbit.com/audi.com" },
  { name: "BYD", logo: "https://logo.clearbit.com/byd.com" },
  { name: "Vinfast", logo: "https://logo.clearbit.com/vinfastauto.us" },
  { name: "Citroen", logo: "https://logo.clearbit.com/citroen.com" },
  { name: "Jeep", logo: "https://logo.clearbit.com/jeep.com" },
  { name: "Porsche", logo: "https://logo.clearbit.com/porsche.com" },
  { name: "Volvo", logo: "https://logo.clearbit.com/volvocars.com" },
  { name: "Lexus", logo: "https://logo.clearbit.com/lexus.com" },
  { name: "Ferrari", logo: "https://logo.clearbit.com/ferrari.com" },
  { name: "Lamborghini", logo: "https://logo.clearbit.com/lamborghini.com" },
  { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
  { name: "Aston Martin", logo: "https://logo.clearbit.com/astonmartin.com" },
  { name: "Bentley", logo: "https://logo.clearbit.com/bentleymotors.com" },
  { name: "Rolls-Royce", logo: "https://logo.clearbit.com/rolls-roycemotors.com" },
  { name: "Maserati", logo: "https://logo.clearbit.com/maserati.com" }
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
