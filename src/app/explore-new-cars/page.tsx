"use client";
import React, { useState, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Star, SlidersHorizontal, Search, MapPin, ChevronRight, Zap, Fuel, Gauge } from "lucide-react";

// Master 2026 New Car Fleet
const newCars = [
  { slug: "tata-punch", name: "Tata Punch", brand: "Tata", logo: "/images/brands/tata.jpg", price: "₹6.13 - ₹10.20 Lakh", type: "SUV", fuel: "Petrol/EV", rating: 4.5, img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600" },
  { slug: "hyundai-creta", name: "Hyundai Creta", brand: "Hyundai", logo: "/images/brands/hyundai.jpg", price: "₹11.00 - ₹20.15 Lakh", type: "SUV", fuel: "Petrol/Diesel", rating: 4.8, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" },
  { slug: "mahindra-scorpio-n", name: "Mahindra Scorpio-N", brand: "Mahindra", logo: "/images/brands/mahindra.jpg", price: "₹13.85 - ₹24.54 Lakh", type: "SUV", fuel: "Diesel/Petrol", rating: 4.8, img: "/images/cars/scorpio-n.jpg" },
  { slug: "maruti-suzuki-brezza", name: "Maruti Suzuki Brezza", brand: "Maruti Suzuki", logo: "/images/brands/maruti-suzuki.jpg", price: "₹8.26 - ₹14.14 Lakh", type: "SUV", fuel: "Petrol/CNG", rating: 4.4, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=600" },
  { slug: "kia-seltos", name: "Kia Seltos", brand: "Kia", logo: "/images/brands/kia.jpg", price: "₹10.99 - ₹20.35 Lakh", type: "SUV", fuel: "Petrol/Diesel", rating: 4.7, img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=600" },
  { slug: "tata-nexon", name: "Tata Nexon", brand: "Tata", logo: "/images/brands/tata.jpg", price: "₹8.15 - ₹15.80 Lakh", type: "SUV", fuel: "Petrol/Diesel/EV", rating: 4.6, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=600" },
  { slug: "toyota-hyryder", name: "Toyota Urban Cruiser Hyryder", brand: "Toyota", logo: "/images/brands/toyota.jpg", price: "₹11.14 - ₹20.19 Lakh", type: "SUV", fuel: "Hybrid/Petrol", rating: 4.5, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600" },
  { slug: "skoda-kylaq", name: "Skoda Kylaq", brand: "Skoda", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/skoda.jpg", price: "₹7.59 - ₹12.99 Lakh", type: "SUV", fuel: "Petrol", rating: 4.3, img: "https://images.unsplash.com/photo-1587652758178-5d259e87909a?auto=format&fit=crop&q=80&w=600" },
  { slug: "volkswagen-virtus", name: "Volkswagen Virtus", brand: "Volkswagen", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/volkswagen.jpg", price: "₹11.56 - ₹19.41 Lakh", type: "Sedan", fuel: "Petrol", rating: 4.7, img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600" },
  { slug: "mahindra-thar", name: "Mahindra Thar", brand: "Mahindra", logo: "/images/brands/mahindra.jpg", price: "₹11.35 - ₹17.60 Lakh", type: "SUV", fuel: "Diesel/Petrol", rating: 4.9, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600" },
  { slug: "honda-elevate", name: "Honda Elevate", brand: "Honda", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/honda.jpg", price: "₹11.64 - ₹16.43 Lakh", type: "SUV", fuel: "Petrol", rating: 4.5, img: "https://images.unsplash.com/photo-1526726533068-583a137d70bc?auto=format&fit=crop&q=80&w=600" },
  { slug: "mg-hector", name: "MG Hector", brand: "MG", logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mg.jpg", price: "₹13.99 - ₹22.15 Lakh", type: "SUV", fuel: "Petrol/Diesel", rating: 4.4, img: "https://images.unsplash.com/photo-1609527727670-34907937397b?auto=format&fit=crop&q=80&w=600" },
  { slug: "maruti-suzuki-swift", name: "Maruti Suzuki Swift", brand: "Maruti Suzuki", logo: "/images/brands/maruti-suzuki.jpg", price: "₹6.49 - ₹9.64 Lakh", type: "Hatchback", fuel: "Petrol", rating: 4.6, img: "https://images.unsplash.com/photo-1567818738222-77732f913d0c?auto=format&fit=crop&q=80&w=600" }
];

function NewCarsContent() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredCars = newCars.filter(car => {
    const matchesFilter = filter === "all" || car.type.toLowerCase() === filter.toLowerCase() || (filter === "ev" && car.fuel.includes("EV"));
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase()) || car.brand.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--surface-low)", minHeight: "100vh" }}>
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
          <h1 className="h1">Explore New Cars in India</h1>
          <p className="text-muted" style={{ marginTop: "0.5rem" }}>Found {filteredCars.length} models matching your preference for April 2026.</p>
        </div>

        {/* Filter Bar */}
        <div className="card" style={{ padding: "1.5rem", marginBottom: "3rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
           <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {["all", "SUV", "Sedan", "Hatchback", "EV"].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`btn ${filter === cat ? "btn-primary" : "btn-outline"}`}
                  style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}
                >
                  {cat}
                </button>
              ))}
           </div>
           <div style={{ position: "relative", flex: 1, maxWidth: "400px" }}>
              <Search size={18} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
              <input 
                type="text" 
                placeholder="Search by brand or model..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "100%", padding: "0.75rem 1rem 0.75rem 3rem", borderRadius: "10px", border: "1px solid var(--border)", backgroundColor: "var(--white)" }} 
              />
           </div>
        </div>

        {/* Results Grid */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
          {filteredCars.map((car) => (
            <div key={car.slug} className="card h-full" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
                 <img src={car.img} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                 <div style={{ position: "absolute", top: "1rem", left: "1rem", width: "40px", height: "40px", backgroundColor: "white", borderRadius: "8px", padding: "4px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)" }}>
                    <img src={car.logo} alt={car.brand} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                 </div>
              </div>
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                 <div>
                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: "900", color: "var(--primary)" }}>{car.type} • {car.fuel}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontWeight: "700", fontSize: "0.85rem", color: "#10b981" }}>
                         <Star size={12} fill="#10b981" /> {car.rating}
                      </span>
                   </div>
                   <h3 className="h3" style={{ fontSize: "1.2rem" }}>{car.name}</h3>
                   <p style={{ fontWeight: "800", color: "var(--secondary)", marginTop: "0.25rem", fontSize: "1rem" }}>{car.price}</p>
                 </div>
                 <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem" }}>
                    <Link href={`/car/${car.slug}`} className="btn btn-primary" style={{ flex: 1, textAlign: "center", fontSize: "0.85rem" }}>Dedicated Info</Link>
                    <button className="btn btn-outline" style={{ flex: 1, fontSize: "0.85rem" }}>Get Quotes</button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
           <div style={{ textAlign: "center", padding: "5rem 0" }}>
             <h3 className="h3 text-muted">No cars found matching "{search}"</h3>
             <button onClick={() => {setFilter("all"); setSearch("");}} className="btn btn-primary" style={{ marginTop: "1.5rem" }}>Reset Filters</button>
           </div>
        )}
      </div>
    </section>
  );
}

export default function ExploreNewCars() {
  return (
    <main>
      <Header />
      <Suspense fallback={<div className="container section-padding">Refining Master Fleet...</div>}>
         <NewCarsContent />
      </Suspense>
      <Footer />
    </main>
  );
}
