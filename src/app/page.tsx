"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandGrid from "@/components/BrandGrid";
import CarCarousel from "@/components/CarCarousel";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, Star, Clock, Trophy, Tag, Zap, ShieldCheck, Heart } from "lucide-react";

export default function Home() {
  const sections = [
    { 
      title: "Trending Cars this Month", 
      badge: "POPULAR",
      cars: [
        { slug: "mahindra-scorpio-n", name: "Mahindra Scorpio-N", price: "₹13.85 - ₹24.54 Lakh", type: "SUV", rating: 4.8, img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-4.png?isig=0&q=80" },
        { slug: "hyundai-creta", name: "Hyundai Creta Facelift", price: "₹11.00 - ₹20.15 Lakh", type: "SUV", rating: 4.7, img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-6.png?isig=0&q=80" },
        { slug: "volkswagen-virtus", name: "Volkswagen Virtus", price: "₹11.56 - ₹19.41 Lakh", type: "Sedan", rating: 4.6, img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-11.png?isig=0&q=80" },
        { slug: "tata-nexon-ev", name: "Tata Nexon.ev", price: "₹14.49 - ₹19.49 Lakh", type: "EV", rating: 4.5, img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-80.png?isig=0&q=80" }
      ]
    },
    { 
      title: "Best Cars Under ₹10 Lakhs", 
      badge: "BUDGET",
      cars: [
        { slug: "tata-punch", name: "Tata Punch", price: "₹6.13 - ₹10.20 Lakh", type: "SUV", rating: 4.5, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600" },
        { slug: "hyundai-exter", name: "Hyundai Exter", price: "₹6.13 - ₹10.28 Lakh", type: "SUV", rating: 4.4, img: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbac0?auto=format&fit=crop&q=80&w=600" },
        { slug: "maruti-suzuki-fronx", name: "Maruti Suzuki Fronx", price: "₹7.51 - ₹13.04 Lakh", type: "Compact", rating: 4.3, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=600" },
        { slug: "nissan-magnite", name: "Nissan Magnite", price: "₹6.00 - ₹11.11 Lakh", type: "SUV", rating: 4.2, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    { 
      title: "Best Cars Between ₹10 - ₹20 Lakhs", 
      badge: "MODERN",
      cars: [
        { slug: "kia-seltos", name: "Kia Seltos", price: "₹10.90 - ₹20.35 Lakh", type: "SUV", rating: 4.7, img: "https://images.unsplash.com/photo-1609527727670-34907937397b?auto=format&fit=crop&q=80&w=600" },
        { slug: "mahindra-scorpio-n", name: "Mahindra Scorpio-N", price: "₹13.85 - ₹24.54 Lakh", type: "SUV", rating: 4.8, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600" },
        { slug: "volkswagen-taigun", name: "Volkswagen Taigun", price: "₹11.70 - ₹20.00 Lakh", type: "SUV", rating: 4.6, img: "https://images.unsplash.com/photo-1587652758178-5d259e87909a?auto=format&fit=crop&q=80&w=600" },
        { slug: "maruti-grand-vitara", name: "Maruti Grand Vitara", price: "₹10.80 - ₹20.09 Lakh", type: "SUV", rating: 4.4, img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    { 
      title: "Best Cars Between ₹20 - ₹30 Lakhs", 
      badge: "PREMIUM",
      cars: [
        { slug: "mahindra-xuv700", name: "Mahindra XUV700", price: "₹13.99 - ₹26.99 Lakh", type: "SUV", rating: 4.9, img: "https://images.unsplash.com/photo-1526726533068-583a137d70bc?auto=format&fit=crop&q=80&w=600" },
        { slug: "tata-safari", name: "Tata Safari", price: "₹16.19 - ₹27.34 Lakh", type: "SUV", rating: 4.7, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600" },
        { slug: "toyota-innova-hycross", name: "Toyota Innova Hycross", price: "₹19.77 - ₹30.98 Lakh", type: "MPV", rating: 4.8, img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600" },
        { slug: "jeep-compass", name: "Jeep Compass", price: "₹20.69 - ₹32.41 Lakh", type: "SUV", rating: 4.5, img: "https://images.unsplash.com/photo-1539101105224-44ac053097ce?auto=format&fit=crop&q=80&w=600" }
      ]
    }
  ];

  const luxuryCars = [
    { slug: "mercedes-benz-cla-electric", name: "Mercedes-Benz CLA Electric", price: "₹55 - ₹59 Lakh", type: "EV", rating: 4.9, img: "https://images.unsplash.com/photo-1617788138017-80ad42243c59?auto=format&fit=crop&q=80&w=600" },
    { slug: "bmw-2-series", name: "BMW 2 Series Gran Coupe", price: "₹43 - ₹46 Lakh", type: "Sedan", rating: 4.7, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600" },
    { slug: "audi-a4", name: "Audi A4", price: "₹46 - ₹54 Lakh", type: "Sedan", rating: 4.6, img: "https://images.unsplash.com/photo-1606148664006-0e5414300487?auto=format&fit=crop&q=80&w=600" },
    { slug: "land-rover-velar", name: "Land Rover RR Velar", price: "₹94 Lakh+", type: "SUV", rating: 4.8, img: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=600" }
  ];

  const offers = [
    { title: "April 2026 Cash Discounts", desc: "Save up to ₹1,50,000 on Maruti Suzuki Arena models.", color: "#ef4444" },
    { title: "Exchange Bonuses", desc: "Get an additional ₹50,000 value when you trade your old car.", color: "#3b82f6" },
    { title: "EV Battery Warranty Expansion", desc: "Zero downpayment and expanded 10-year battery covers.", color: "#10b981" }
  ];

  const upcomingCars = [
    { title: "VW Taigun Facelift", date: "April 09, 2026", status: "Confirming" },
    { title: "Toyota Urban EBella EV", date: "April 2026", status: "Confirming" },
    { title: "Tata Sierra EV", date: "Mid 2026", status: "Testing" }
  ];

  return (
    <main>
      <Suspense fallback={null}><Header /></Suspense>
      <Suspense fallback={null}><Hero /></Suspense>
      
      {/* Dynamic Price Guided Sections */}
      {sections.map((section, idx) => (
        <section key={section.title} className="section-padding" style={{ backgroundColor: idx % 2 === 0 ? "var(--white)" : "var(--surface-low)" }}>
          <div className="container">
            <div className="flex items-center justify-between" style={{ marginBottom: "2.5rem" }}>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: "900", color: "var(--primary)", letterSpacing: "1px", textTransform: "uppercase" }}>{section.badge}</span>
                <h2 className="h2">{section.title}</h2>
              </div>
              <Link href={`/search?q=${section.title}`} className="btn btn-outline" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                View All <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {section.cars.map(car => (
                <div key={car.name} className="card h-full" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                   <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
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
                         <button className="btn btn-outline" style={{ flex: 1, fontSize: "0.8rem", padding: "0.75rem" }}>Price</button>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Brand Grid Section */}
      <BrandGrid />

      {/* Luxury Vault - Deep Section */}
      <section className="section-padding" style={{ backgroundColor: "#0f172a", color: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "900", color: "#f59e0b", letterSpacing: "2px" }}>ELITE PERFORMANCE</span>
            <h2 className="h2" style={{ color: "var(--white)", fontSize: "3rem", marginTop: "0.5rem" }}>The Luxury Vault</h2>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {luxuryCars.map(car => (
              <div key={car.name} className="card" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "0", overflow: "hidden" }}>
                <div style={{ height: "180px" }}>
                   <img src={car.img} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 className="h3" style={{ color: "var(--white)", fontSize: "1.25rem" }}>{car.name}</h3>
                  <p style={{ color: "#f59e0b", fontWeight: "800", marginTop: "0.5rem" }}>{car.price}</p>
                  <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                    <Link href={`/car/${car.slug}`} style={{ color: "var(--white)", fontWeight: "800", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>VIEW DETAILS <ChevronRight size={14} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Offers Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="h2" style={{ marginBottom: "2.5rem" }}>Best Offers & Deals</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {offers.map(offer => (
              <div key={offer.title} className="card" style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", border: `1px solid ${offer.color}40` }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: `${offer.color}20`, color: offer.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <Tag size={20} />
                </div>
                <div>
                   <h3 className="h3" style={{ fontSize: "1.1rem" }}>{offer.title}</h3>
                   <p className="text-muted" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>{offer.desc}</p>
                   <button style={{ background: "none", border: "none", padding: 0, marginTop: "1rem", color: offer.color, fontWeight: "800", fontSize: "0.85rem", cursor: "pointer" }}>VIEW DEAL <ChevronRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Cars - Homepage Widget */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-low)" }}>
         <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
           <div style={{ flex: 1, minWidth: "300px" }}>
              <h2 className="h2">Upcoming Car Launches</h2>
              <p className="text-muted" style={{ marginTop: "1rem" }}>Be the first to own the latest technology. Zero compromise driving awaits.</p>
              <Link href="/upcoming-cars" className="btn btn-primary" style={{ marginTop: "2rem", display: "inline-flex" }}>View Launch Calendar</Link>
           </div>
           <div style={{ flex: 1.5, minWidth: "400px" }}>
              <div className="grid" style={{ gridTemplateColumns: "1fr", gap: "1rem" }}>
                {upcomingCars.map(car => (
                  <div key={car.title} className="card-sm" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", backgroundColor: "var(--white)", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
                    <div>
                      <h4 style={{ fontWeight: "800", fontSize: "1rem" }}>{car.title}</h4>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{car.date}</p>
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "900", color: "var(--primary)" }}>{car.status}</span>
                  </div>
                ))}
              </div>
           </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
