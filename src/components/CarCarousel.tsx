"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, MapPin, ArrowRight } from "lucide-react";
import styles from "./CarCarousel.module.css";

const featuredCars = [
  { id: 1, name: "Premium SUV Pro", brand: "Tata", price: "18.50 - 24.20 Lakh", rating: 4.8, type: "SUV", image: "/images/suv.png" },
  { id: 2, name: "Executive Sedan X", brand: "Hyundai", price: "15.70 - 19.90 Lakh", rating: 4.6, type: "Sedan", image: "/images/sedan.png" },
  { id: 3, name: "Urban Hatch Neo", brand: "Maruti", price: "6.40 - 9.20 Lakh", rating: 4.4, type: "Hatchback", image: "/images/suv.png" }, // Using SUV as placeholder
  { id: 4, name: "Elite SUV Prime", brand: "Kia", price: "22.30 - 28.50 Lakh", rating: 4.9, type: "SUV", image: "/images/suv.png" },
];

const categories = ["SUV", "Sedan", "Hatchback", "Electric"];

export default function CarCarousel() {
  const [activeTab, setActiveTab] = useState("SUV");
  
  const filteredCars = featuredCars.filter(car => car.type === activeTab || activeTab === "Electric"); // Simplified

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--surface-low)" }}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2">Most Searched Cars</h2>
          <div className={styles.tabs}>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className={styles.carouselGrid}>
          {filteredCars.map((car) => (
            <div key={car.id} className={styles.carCard}>
              <div className={styles.imageWrapper}>
                <Image src={car.image} alt={car.name} fill className={styles.carImage} />
                <div className={styles.ratingBadge}>
                  <Star size={14} fill="currentColor" />
                  <span>{car.rating}</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.carName}>{car.brand} {car.name}</h3>
                <p className={styles.price}>{car.price}</p>
                <p className={styles.location}>
                  <MapPin size={14} />
                  Avg. Ex-Showroom Price
                </p>
                <div className={styles.footer}>
                  <button className="btn btn-outline" style={{ flex: 1, fontSize: "0.85rem" }}>
                    View Offers
                  </button>
                  <button className="btn btn-primary" style={{ padding: "0.5rem" }}>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
