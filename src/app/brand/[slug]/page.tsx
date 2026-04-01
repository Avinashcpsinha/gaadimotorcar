"use client";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Star, ChevronRight, Fuel, Gauge, Zap } from "lucide-react";

// Extensive Car Data Library for Filtration
const carLibrary = [
   { slug: "mahindra-scorpio-n", brand: "mahindra", name: "Mahindra Scorpio-N", price: "₹13.85 - ₹24.54 Lakh", type: "SUV", rating: 4.8, img: "/images/cars/scorpio-n.jpg" },
   { slug: "mahindra-xuv700", brand: "mahindra", name: "Mahindra XUV700", price: "₹13.99 - ₹26.99 Lakh", type: "SUV", rating: 4.9, img: "https://images.unsplash.com/photo-1526726533068-583a137d70bc?auto=format&fit=crop&q=80&w=600" },
   { slug: "hyundai-creta", brand: "hyundai", name: "Hyundai Creta", price: "₹11.00 - ₹20.15 Lakh", type: "SUV", rating: 4.7, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" },
   { slug: "hyundai-exter", brand: "hyundai", name: "Hyundai Exter", price: "₹6.13 - ₹10.28 Lakh", type: "SUV", rating: 4.4, img: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbac0?auto=format&fit=crop&q=80&w=600" },
   { slug: "tata-nexon-ev", brand: "tata", name: "Tata Nexon.ev", price: "₹14.49 - ₹19.49 Lakh", type: "EV", rating: 4.5, img: "https://images.unsplash.com/photo-1617788138017-80ad42243c59?auto=format&fit=crop&q=80&w=600" },
   { slug: "tata-punch", brand: "tata", name: "Tata Punch", price: "₹6.13 - ₹10.20 Lakh", type: "SUV", rating: 4.5, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600" },
   { slug: "tata-safari", brand: "tata", name: "Tata Safari", price: "₹16.19 - ₹27.34 Lakh", type: "SUV", rating: 4.7, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600" },
   { slug: "volkswagen-virtus", brand: "volkswagen", name: "Volkswagen Virtus", price: "₹11.56 - ₹19.41 Lakh", type: "Sedan", rating: 4.6, img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600" },
   { slug: "volkswagen-taigun", brand: "volkswagen", name: "Volkswagen Taigun", price: "₹11.70 - ₹20.00 Lakh", type: "SUV", rating: 4.6, img: "https://images.unsplash.com/photo-1587652758178-5d259e87909a?auto=format&fit=crop&q=80&w=600" },
   { slug: "maruti-suzuki-fronx", brand: "maruti-suzuki", name: "Maruti Suzuki Fronx", price: "₹7.51 - ₹13.04 Lakh", type: "Compact", rating: 4.3, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=600" },
   { slug: "maruti-grand-vitara", brand: "maruti-suzuki", name: "Maruti Grand Vitara", price: "₹10.80 - ₹20.09 Lakh", type: "SUV", rating: 4.4, img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=600" },
   { slug: "kia-seltos", brand: "kia", name: "Kia Seltos", price: "₹10.90 - ₹20.35 Lakh", type: "SUV", rating: 4.7, img: "https://images.unsplash.com/photo-1609527727670-34907937397b?auto=format&fit=crop&q=80&w=600" },
   { slug: "toyota-innova-hycross", brand: "toyota", name: "Toyota Innova Hycross", price: "₹19.77 - ₹30.98 Lakh", type: "MPV", rating: 4.8, img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600" }
];

function BrandPageContent() {
  const params = useParams();
  const slug = (params.slug as string).toLowerCase();
  
  const brandCars = carLibrary.filter(car => car.brand === slug);
  const brandName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");

  return (
    <div className="section-padding">
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
           <h1 className="h1" style={{ textTransform: "capitalize" }}>Explore {brandName} Cars</h1>
           <p className="text-muted" style={{ marginTop: "0.5rem" }}>Found {brandCars.length} models for {brandName} in India.</p>
        </div>

        {brandCars.length > 0 ? (
           <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
              {brandCars.map((car) => (
                 <div key={car.slug} className="card h-full" style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ aspectRatio: "16/9", overflow: "hidden", backgroundColor: "var(--surface)" }}>
                       <img src={car.img} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                       <div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                             <span style={{ fontSize: "0.7rem", fontWeight: "800", color: "var(--primary)" }}>{car.type}</span>
                             <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontWeight: "700", fontSize: "0.85rem", color: "#10b981" }}>
                                <Star size={12} fill="#10b981" /> {car.rating}
                             </span>
                          </div>
                          <h3 className="h3" style={{ fontSize: "1.1rem" }}>{car.name}</h3>
                          <p style={{ fontWeight: "800", color: "var(--secondary)", marginTop: "0.25rem" }}>{car.price}</p>
                       </div>
                       <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem" }}>
                          <Link href={`/car/${car.slug}`} className="btn btn-primary" style={{ flex: 1, textAlign: "center", fontSize: "0.8rem", padding: "0.75rem" }}>Details</Link>
                          <button className="btn btn-outline" style={{ flex: 1, fontSize: "0.8rem", padding: "0.75rem" }}>On-Road Price</button>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        ) : (
           <div style={{ padding: "5rem 0", textAlign: "center", backgroundColor: "var(--surface)", borderRadius: "2rem" }}>
              <h2 className="h2" style={{ color: "var(--text-muted)" }}>Coming Soon</h2>
              <p className="text-muted" style={{ marginTop: "0.5rem" }}>We are populating the latest {brandName} catalog for you.</p>
              <Link href="/" className="btn btn-primary" style={{ marginTop: "2rem" }}>Back to Homepage</Link>
           </div>
        )}
      </div>
    </div>
  );
}

export default function BrandDetailsPage() {
  return (
    <main>
      <Header />
      <Suspense fallback={<div>Loading Brand Catalog...</div>}>
         <BrandPageContent />
      </Suspense>
      <Footer />
    </main>
  );
}
