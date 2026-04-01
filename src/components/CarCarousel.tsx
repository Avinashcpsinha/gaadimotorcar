"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./CarCarousel.module.css";
import { Star, ChevronRight, Fuel, Gauge, Zap } from "lucide-react";

const carouselData = {
  trending: [
    { slug: "mahindra-scorpio-n", name: "Mahindra Scorpio-N", price: "₹13.85 - ₹24.54 Lakh", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600", type: "SUV", rating: 4.8 },
    { slug: "hyundai-creta", name: "Hyundai Creta", price: "₹11.00 - ₹20.15 Lakh", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600", type: "SUV", rating: 4.7 },
    { slug: "volkswagen-virtus", name: "Volkswagen Virtus", price: "₹11.56 - ₹19.41 Lakh", img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600", type: "Sedan", rating: 4.6 }
  ],
  popular: [
    { slug: "tata-nexon-ev", name: "Tata Nexon.ev", price: "₹14.49 - ₹19.49 Lakh", img: "https://images.unsplash.com/photo-1617788138017-80ad42243c59?auto=format&fit=crop&q=80&w=600", type: "EV", rating: 4.5 },
    { slug: "kia-seltos", name: "Kia Seltos", price: "₹10.90 - ₹20.35 Lakh", img: "https://images.unsplash.com/photo-1609527727670-34907937397b?auto=format&fit=crop&q=80&w=600", type: "SUV", rating: 4.7 },
    { slug: "maruti-grand-vitara", name: "Maruti Grand Vitara", price: "₹10.80 - ₹20.09 Lakh", img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=600", type: "SUV", rating: 4.4 }
  ],
  upcoming: [
    { slug: "volkswagen-taigun", name: "Volkswagen Taigun Facelift", price: "₹11.75 Lakh onwards", img: "https://images.unsplash.com/photo-1587652758178-5d259e87909a?auto=format&fit=crop&q=80&w=600", type: "SUV", rating: 4.6 },
    { slug: "toyota-ebella", name: "Toyota Urban Ebella EV", price: "₹16.00 Lakh onwards", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600", type: "EV", rating: 4.4 }
  ]
};

type Category = keyof typeof carouselData;

export default function CarCarousel() {
  const [activeTab, setActiveTab] = useState<Category>("trending");

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--surface)" }}>
      <div className="container">
        <div style={{ marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h2 className="h2">Featured Collections</h2>
            <p className="text-muted" style={{ marginTop: "0.5rem" }}>Handpicked selections based on real April 2026 market trends.</p>
          </div>
          <div className={styles.tabs}>
            {(Object.keys(carouselData) as Category[]).map((tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.carouselGrid}>
          {carouselData[activeTab].map((car) => (
            <div key={car.name} className={styles.carCard}>
              <div className={styles.imageBox}>
                <img src={car.img} alt={car.name} />
                <div className={styles.featuredBadge}>FEATURED</div>
              </div>
              <div className={styles.info}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span className={styles.type}>{car.type}</span>
                  <span className={styles.rating}><Star size={12} fill="#10b981" /> {car.rating}</span>
                </div>
                <h3 className={styles.name}>{car.name}</h3>
                <p className={styles.price}>{car.price}</p>
                <div className={styles.specs}>
                   <div className={styles.specItem}><Fuel size={14} /> <span>{car.type === "EV" ? "Electric" : "Petrol/Diesel"}</span></div>
                   <div className={styles.specItem}><Zap size={14} /> <span>Automatic</span></div>
                </div>
                <Link href={`/car/${car.slug}`} className="btn btn-outline" style={{ width: "100%", marginTop: "1rem", textAlign: "center", display: "block" }}>View Full Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
