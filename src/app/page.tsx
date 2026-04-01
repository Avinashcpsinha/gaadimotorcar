"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandGrid from "@/components/BrandGrid";
import CarCarousel from "@/components/CarCarousel";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, Star, Clock, Trophy, Tag, Zap, ShieldCheck, Heart, Newspaper, Bell } from "lucide-react";

export default function Home() {
  const sections = [
    { 
      slug: "trending",
      title: "Trending Cars this Month", 
      badge: "POPULAR",
      cars: [
        { slug: "mahindra-scorpio-n", name: "Mahindra Scorpio-N", price: "₹13.85 - ₹24.54 Lakh", type: "SUV", rating: 4.8, img: "/images/cars/scorpio-n.jpg" },
        { slug: "hyundai-creta", name: "Hyundai Creta Facelift", price: "₹11.00 - ₹20.15 Lakh", type: "SUV", rating: 4.7, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" },
        { slug: "volkswagen-virtus", name: "Volkswagen Virtus", price: "₹11.56 - ₹19.41 Lakh", type: "Sedan", rating: 4.6, img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600" },
        { slug: "tata-nexon-ev", name: "Tata Nexon.ev", price: "₹14.49 - ₹19.49 Lakh", type: "EV", rating: 4.5, img: "https://images.unsplash.com/photo-1617788138017-80ad42243c59?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    { 
      slug: "budget",
      title: "Best Cars Under ₹10 Lakhs", 
      badge: "BUDGET",
      cars: [
        { slug: "tata-punch", name: "Tata Punch", price: "₹6.13 - ₹10.20 Lakh", type: "SUV", rating: 4.5, img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600" },
        { slug: "hyundai-exter", name: "Hyundai Exter", price: "₹6.13 - ₹10.28 Lakh", type: "SUV", rating: 4.4, img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=600" },
        { slug: "maruti-suzuki-fronx", name: "Maruti Suzuki Fronx", price: "₹7.51 - ₹13.04 Lakh", type: "Compact", rating: 4.3, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=600" },
        { slug: "nissan-magnite", name: "Nissan Magnite", price: "₹6.00 - ₹11.11 Lakh", type: "SUV", rating: 4.2, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=600" }
      ]
    }
  ];

  const luxuryCars = [
    { slug: "mercedes-benz-cla-electric", name: "Mercedes-Benz CLA Electric", price: "₹55 - ₹59 Lakh", type: "EV", rating: 4.9, img: "https://images.unsplash.com/photo-1617788138017-80ad42243c59?auto=format&fit=crop&q=80&w=600" },
    { slug: "bmw-2-series", name: "BMW 2 Series Gran Coupe", price: "₹43 - ₹46 Lakh", type: "Sedan", rating: 4.7, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600" }
  ];

  const carTradeNews = [
    { title: "Mahindra XUV 3XO Global Premiere", date: "April 29, 2026", desc: "The official teaser reveals segment-first dual-pane sunroof.", category: "LAUNCHES" },
    { title: "Tata Altroz Racer Spotted Testing", date: "April 20, 2026", desc: "Leaked specs confirm 120HP Turbo-petrol engine with 6-speed MT.", category: "SPY SHOTS" },
    { title: "Kia EV6 Facelift Global Reveal", date: "May 2026", desc: "Expected to feature a massive 84kWh battery pack and faster charging.", category: "GLOBAL" }
  ];

  const latestOffers = [
    { title: "Maruti Jimny Thunder Edition", desc: "Save up to ₹1,50,000 on top Alpha variants.", color: "#ef4444" },
    { title: "Nexon EV Max Exchange Bonus", desc: "Special ₹50,000 bonus on 7.2kW charger bundles.", color: "#3b82f6" },
    { title: "Hyundai Venue High-Tech Promo", desc: "Complimentary ADAS package + ₹35,000 cash discount.", color: "#10b981" }
  ];

  return (
    <main>
      <Suspense fallback={null}><Header /></Suspense>
      <Suspense fallback={null}><Hero /></Suspense>
      
      {/* Real-World CarTrade News Feed */}
      <section className="section-padding" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
             <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Newspaper size={24} color="var(--primary)" />
                <h2 className="h2">Automotive News by CarTrade</h2>
             </div>
             <Link href="/news" className="text-muted" style={{ fontWeight: "700", display: "flex", gap: "0.5rem", alignItems: "center" }}>All News <ChevronRight size={14} /></Link>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
             {carTradeNews.map(news => (
               <div key={news.title} className="card h-full">
                  <span style={{ fontSize: "0.65rem", fontWeight: "900", color: "var(--primary)", background: "rgba(13,148,136,0.1)", padding: "0.25rem 0.5rem", borderRadius: "100px" }}>{news.category}</span>
                  <h3 className="h3" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>{news.title}</h3>
                  <p className="text-muted" style={{ fontSize: "0.85rem", marginTop: "0.75rem" }}>{news.desc}</p>
                  <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                     <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", gap: "0.25rem", alignItems: "center" }}><Clock size={12} /> {news.date}</span>
                     <Link href="#" style={{ color: "var(--primary)", fontWeight: "800", fontSize: "0.8rem" }}>READ MORE</Link>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Discovery Sections */}
      {sections.map((section, idx) => (
        <section key={section.title} className="section-padding" style={{ backgroundColor: idx % 2 === 0 ? "var(--white)" : "var(--surface-low)" }}>
          <div className="container">
            <div className="flex items-center justify-between" style={{ marginBottom: "2.5rem" }}>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: "900", color: "var(--primary)", letterSpacing: "1px", textTransform: "uppercase" }}>{section.badge}</span>
                <h2 className="h2">{section.title}</h2>
              </div>
              <Link href={`/discover/${section.slug}`} className="btn btn-outline" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
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

      <BrandGrid />

      {/* Real Offers & Discounts */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
             <h2 className="h2">Exclusive April 2026 Offers</h2>
             <span style={{ background: "#ef4444", color: "white", padding: "0.5rem 1rem", borderRadius: "10px", fontWeight: "900", fontSize: "0.75rem", display: "flex", gap: "0.5rem", alignItems: "center" }}><Zap size={14} fill="white" /> FLASH DEALS</span>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {latestOffers.map(offer => (
              <div key={offer.title} className="card h-full" style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", border: `2px dashed ${offer.color}40`, boxShadow: "none" }}>
                <div style={{ width: "60px", height: "60px", backgroundColor: `${offer.color}20`, color: offer.color, borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                   <Tag size={28} />
                </div>
                <div>
                   <h3 className="h3" style={{ fontSize: "1.25rem" }}>{offer.title}</h3>
                   <p className="text-muted" style={{ fontSize: "0.95rem", marginTop: "0.5rem", lineHeight: "1.6" }}>{offer.desc}</p>
                   <button style={{ background: "none", border: "none", padding: 0, marginTop: "1.5rem", color: offer.color, fontWeight: "900", fontSize: "0.85rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}>VIEW DEAL <ChevronRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Launches & Updates */}
      <section className="section-padding" style={{ backgroundColor: "#0f172a", color: "white", borderRadius: "0" }}>
        <div className="container">
           <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
              <div>
                 <span style={{ color: "#38bdf8", fontWeight: "900", fontSize: "0.85rem", letterSpacing: "2px" }}>MARKET UPDATES</span>
                 <h2 className="h2" style={{ color: "white", fontSize: "3rem", margin: "1rem 0" }}>Stay Ahead of the Curve</h2>
                 <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.8" }}>Sign up for our exclusive CarTrade-powered newsletter to get real-time price drops and early launch dates delivered to your inbox.</p>
                 <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem" }}>
                    <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: "1rem 1.5rem", borderRadius: "10px", border: "none", backgroundColor: "rgba(255,255,255,0.1)", color: "white" }} />
                    <button className="btn btn-primary" style={{ padding: "0 2rem" }}>JOIN</button>
                 </div>
              </div>
              <div className="grid" style={{ gap: "1.5rem" }}>
                 <div className="card" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                       <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981" }}></div>
                       <h4 style={{ fontWeight: "800", color: "white" }}>Mahindra XUV 3XO: 9 Days to Launch</h4>
                    </div>
                 </div>
                 <div className="card" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                       <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#3b82f6" }}></div>
                       <h4 style={{ fontWeight: "800", color: "white" }}>Tata Altroz Racer: Final Specs Confirmed</h4>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
