"use client";
import React, { Suspense, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Star, ShieldCheck, Zap, Fuel, Gauge, Settings2, 
  MapPin, Calendar, Clock, ArrowRight, CheckCircle2,
  ChevronRight, Info, Heart, Share2, Award
} from "lucide-react";

// Extensive Car Data Library
const carDetails: Record<string, any> = {
  "mahindra-scorpio-n": {
    name: "Mahindra Scorpio-N",
    price: "₹13.85 - ₹24.54 Lakh",
    tagline: "The Big Daddy of SUVs",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200",
    rating: 4.8,
    reviews: "12,450",
    badges: ["5-Star Safety", "4x4 Available", "Best Seller"],
    specs: {
      engine: "2.0L mStallion Turbo Petrol / 2.2L mHawk Diesel",
      power: "130 - 200 bhp",
      torque: "300 - 400 Nm",
      mileage: "14 - 16 kmpl",
      transmission: "6-Speed Manual / 6-Speed Automatic",
      fuel: "Petrol / Diesel",
      safety: "5-Star GNCAP",
      seating: "6 / 7 Seater"
    },
    colors: ["Everest White", "Napoli Black", "Red Rage", "Dazzling Silver", "Deep Forest"],
    variants: [
      { name: "Z2", price: "₹13.85 Lakh", features: "Touchscreen, Power Windows" },
      { name: "Z4", price: "₹15.24 Lakh", features: "Cruise Control, ESC" },
      { name: "Z8", price: "₹20.45 Lakh", features: "Leatherette, AdrenoX" },
      { name: "Z8L", price: "₹24.54 Lakh", features: "Sony Audio, 4xPLus" }
    ]
  },
  "hyundai-creta": {
    name: "Hyundai Creta",
    price: "₹11.00 - ₹20.15 Lakh",
    tagline: "The Ultimate SUV",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200",
    rating: 4.7,
    reviews: "15,800",
    badges: ["Feature Rich", "Panoramic Sunroof", "Tech Leader"],
    specs: {
      engine: "1.5L Petrol / 1.5L Diesel / 1.5L Turbo Petrol",
      power: "113 - 158 bhp",
      torque: "144 - 253 Nm",
      mileage: "17 - 21 kmpl",
      transmission: "6-MT, IVT, 7-DCT",
      fuel: "Petrol / Diesel",
      safety: "Advanced ADAS",
      seating: "5 Seater"
    },
    colors: ["Atlas White", "Abyss Black", "Ranger Khaki", "Fiery Red", "Titan Grey"],
    variants: [
      { name: "E", price: "₹11.00 Lakh", features: "6 Airbags, ABS" },
      { name: "EX", price: "₹12.21 Lakh", features: "8-inch Infotainment" },
      { name: "S(O)", price: "₹14.32 Lakh", features: "Panoramic Sunroof" },
      { name: "SX Tech", price: "₹15.95 Lakh", features: "ADAS Level 2" },
      { name: "SX(O)", price: "₹20.15 Lakh", features: "Bose Sound, Ventilated Seats" }
    ]
  },
  "tata-nexon-ev": {
    name: "Tata Nexon.ev",
    price: "₹14.49 - ₹19.49 Lakh",
    tagline: "Lead the Charge",
    img: "https://images.unsplash.com/photo-1617788138017-80ad42243c59?auto=format&fit=crop&q=80&w=1200",
    rating: 4.5,
    reviews: "8,900",
    badges: ["Zero Emission", "Fast Charge", "India's #1 EV"],
    specs: {
      engine: "Permanent Magnet Synchronous Motor",
      power: "127 - 142 hp",
      torque: "215 Nm",
      range: "325 / 465 km",
      battery: "30 kWh / 45 kWh",
      transmission: "Single Speed Automatic",
      fuel: "Electric",
      safety: "5-Star BNCAP",
      seating: "5 Seater"
    },
    colors: ["Intense Teal", "Pristine White", "Empowered Oxide", "Daytona Grey"],
    variants: [
      { name: "Creative+", price: "₹14.49 Lakh", features: "30kWh Battery" },
      { name: "Fearless", price: "₹15.99 Lakh", features: "3.3kW Charger" },
      { name: "Empowered+", price: "₹19.49 Lakh", features: "45kWh Battery, Arcade.ev" }
    ]
  }
};

function CarDetailsContent() {
  const params = useParams();
  const slug = params.slug as string;
  const car = carDetails[slug] || {
    name: slug.replace(/-/g, " ").toUpperCase(),
    price: "₹ Price on Request",
    tagline: "Premium Automotive Excellence",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
    rating: 4.5,
    reviews: "1,200",
    badges: ["Verified Dealer", "Coming Soon"],
    specs: {
      engine: "Advanced Performance Engine",
      power: "150+ bhp",
      torque: "250+ Nm",
      mileage: "15-20 kmpl",
      transmission: "Automatic / Manual",
      fuel: "Hybrid / Petrol",
      safety: "Advanced Safety Suite",
      seating: "5 - 7 Seater"
    }
  };

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      {/* Car Hero Section */}
      <section style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ padding: "3rem 0" }}>
           <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "flex-start" }}>
              {/* Image Gallery Column */}
              <div style={{ flex: 1.5, minWidth: "400px" }}>
                 <div style={{ 
                    borderRadius: "2rem", 
                    overflow: "hidden", 
                    aspectRatio: "16/9", 
                    backgroundColor: "var(--border)",
                    boxShadow: "var(--shadow-xl)"
                 }}>
                    <img src={car.img} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                 </div>
                 <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                    {[1, 2, 3].map(i => (
                       <div key={i} style={{ flex: 1, borderRadius: "1rem", overflow: "hidden", aspectRatio: "16/9", backgroundColor: "var(--surface)", cursor: "pointer" }}>
                          <img src={car.img} alt="thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
                       </div>
                    ))}
                 </div>
              </div>

              {/* Quick Summary Column */}
              <div style={{ flex: 1, minWidth: "300px" }}>
                 <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
                    {car.badges?.map((b: string) => (
                       <span key={b} style={{ padding: "0.25rem 0.75rem", background: "#f0f7f9", color: "#008296", borderRadius: "var(--radius-full)", fontSize: "0.7rem", fontWeight: "800" }}>{b}</span>
                    ))}
                 </div>
                 <h1 className="h1" style={{ fontSize: "3rem", color: "var(--secondary)" }}>{car.name}</h1>
                 <p className="h3" style={{ color: "var(--primary)", marginTop: "0.5rem" }}>{car.price} <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "500" }}>(Ex-Showroom)</span></p>
                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
                    <Star size={18} fill="#EAB308" color="#EAB308" />
                    <strong style={{ fontSize: "1.2rem" }}>{car.rating}</strong>
                    <span className="text-muted">({car.reviews} Reviews)</span>
                 </div>

                 <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <button className="btn btn-primary" style={{ width: "100%", height: "56px", fontSize: "1.1rem" }}>Check On-Road Price</button>
                    <div style={{ display: "flex", gap: "1rem" }}>
                       <button className="btn btn-outline" style={{ flex: 1 }}>Get Exchange Offer</button>
                       <button className="btn btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Heart size={20} /></button>
                       <button className="btn btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Share2 size={20} /></button>
                    </div>
                 </div>

                 <div style={{ marginTop: "2rem", padding: "1.5rem", backgroundColor: "var(--surface)", borderRadius: "1.5rem", border: "1px solid var(--border)" }}>
                    <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "700", color: "var(--secondary)" }}>
                       <Clock size={16} /> <span>Waiting Period: 2 - 4 Weeks</span>
                    </p>
                    <p className="text-muted" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>Based on the data for {car.name} in selected city.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Tabs / Detailed Specs */}
      <section className="section-padding">
         <div className="container">
            <div style={{ display: "flex", gap: "2rem", borderBottom: "1px solid var(--border)", marginBottom: "3rem" }}>
               {["Overview", "Specifications", "Variants", "Safety", "Features"].map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    style={{ 
                      padding: "1rem 0", 
                      background: "none", 
                      border: "none", 
                      cursor: "pointer",
                      fontSize: "1rem",
                      fontWeight: "700",
                      color: activeTab === tab.toLowerCase() ? "var(--primary)" : "var(--text-muted)",
                      borderBottom: activeTab === tab.toLowerCase() ? "3px solid var(--primary)" : "none",
                      transition: "all 0.2s"
                    }}
                  >
                    {tab}
                  </button>
               ))}
            </div>

            {activeTab === "overview" && (
               <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                 {Object.entries(car.specs).map(([label, value]: [string, any]) => (
                    <div key={label} className="card" style={{ display: "flex", gap: "1.5rem", padding: "1.5rem" }}>
                       <div style={{ width: "40px", height: "40px", backgroundColor: "#f0f7f9", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#008296" }}>
                          {label === "engine" && <Settings2 size={20} />}
                          {label === "power" && <Gauge size={20} />}
                          {label === "mileage" && <Fuel size={20} />}
                          {label === "safety" && <ShieldCheck size={20} />}
                          {!["engine", "power", "mileage", "safety"].includes(label) && <Award size={20} />}
                       </div>
                       <div>
                          <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--text-muted)", textTransform: "uppercase" }}>{label}</p>
                          <p style={{ fontWeight: "700", color: "var(--secondary)", fontSize: "1.05rem" }}>{value}</p>
                       </div>
                    </div>
                 ))}
               </div>
            )}

            {activeTab === "variants" && car.variants && (
               <div style={{ backgroundColor: "var(--white)", border: "1px solid var(--border)", borderRadius: "1.5rem" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                     <thead>
                        <tr style={{ background: "var(--surface)" }}>
                           <th style={{ padding: "1.5rem", textAlign: "left" }}>Variant</th>
                           <th style={{ padding: "1.5rem", textAlign: "left" }}>Key Features</th>
                           <th style={{ padding: "1.5rem", textAlign: "right" }}>Ex-Showroom Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        {car.variants.map((v: any) => (
                           <tr key={v.name} style={{ borderBottom: "1px solid var(--border)" }}>
                              <td style={{ padding: "1.5rem", fontWeight: "700" }}>{v.name}</td>
                              <td style={{ padding: "1.5rem", color: "var(--text-muted)" }}>{v.features}</td>
                              <td style={{ padding: "1.5rem", textAlign: "right", fontWeight: "800" }}>{v.price}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </section>
    </div>
  );
}

export default function CarDetailPage() {
  return (
    <main>
      <Header />
      <Suspense fallback={<div>Loading Car Details...</div>}>
         <CarDetailsContent />
      </Suspense>
      <Footer />
    </main>
  );
}
