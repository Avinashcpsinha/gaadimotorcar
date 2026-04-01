"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Battery, Zap, Timer, Leaf, ChevronRight, Star } from "lucide-react";

export default function ElectricCars() {
  const electricCars = [
    { name: "Mercedes-Benz CLA Electric", price: "₹55 - ₹59 Lakh", range: "600 km", battery: "89 kWh", launch: "April 24, 2026" },
    { name: "Toyota Urban Cruiser Ebella EV", price: "₹16 - ₹23 Lakh", range: "450 km", battery: "61 kWh", launch: "April 2026" },
    { name: "Tata Sierra EV", price: "₹20 - ₹25 Lakh", range: "500 km", battery: "70 kWh", launch: "Mid-2026" },
    { name: "Mahindra BE 07", price: "₹25 Lakh+", range: "450 km", battery: "61 kWh", launch: "July 2026" },
    { name: "Tata Tiago EV Facelift", price: "₹8.5 - ₹12 Lakh", range: "315 km", battery: "24 kWh", launch: "Sept 2026" },
    { name: "Skoda Enyaq iV", price: "₹35 - ₹40 Lakh", range: "510 km", battery: "77 kWh", launch: "Late 2026" }
  ];

  return (
    <main>
      <Header />
      
      {/* Premium Hero Section for Electric Cars */}
      <section className="section-padding" style={{ 
        background: "linear-gradient(225deg, #1e293b 0%, #0f172a 100%)", 
        color: "var(--white)",
        textAlign: "center"
      }}>
        <div className="container">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "rgba(0,130,150,0.2)", borderRadius: "var(--radius-full)", color: "#2dd4bf", marginBottom: "1.5rem" }}>
            <Zap size={16} /> <span>THE FUTURE IS ELECTRIC</span>
          </div>
          <h1 className="h1" style={{ fontSize: "4rem", marginBottom: "1rem" }}>Electric Cars in India 2026</h1>
          <p style={{ opacity: 0.8, fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto" }}>
            Discover the most anticipated emission-free drives. Advanced technology, zero emissions, and incredible range.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <div style={{ color: "var(--primary)", marginBottom: "1rem" }}><Leaf size={40} /></div>
              <h3 className="h3">Zero Emissions</h3>
              <p className="text-muted">Save the planet without compromising on luxury.</p>
            </div>
            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <div style={{ color: "var(--primary)", marginBottom: "1rem" }}><Battery size={40} /></div>
              <h3 className="h3">Advanced Range</h3>
              <p className="text-muted">Up to 600km on a single charge with next-gen batteries.</p>
            </div>
            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <div style={{ color: "var(--primary)", marginBottom: "1rem" }}><Zap size={40} /></div>
              <h3 className="h3">Fast Charging</h3>
              <p className="text-muted">Charge from 10% to 80% in just 18 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: "3rem" }}>Trending Electronic Vehicles</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {electricCars.map(car => (
              <div key={car.name} className="card" style={{ padding: "0" }}>
                <div style={{ height: "220px", backgroundColor: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  CAR PHOTO
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <h3 className="h3" style={{ fontSize: "1.25rem" }}>{car.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontWeight: "700", color: "#10b981" }}>
                      <Star size={14} fill="#10b981" /> 4.7
                    </div>
                  </div>
                  <p style={{ fontWeight: "800", color: "var(--primary)", fontSize: "1.1rem" }}>{car.price}</p>
                  
                  <div style={{ display: "flex", gap: "1rem", margin: "1.5rem 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1rem 0" }}>
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--text-muted)", textTransform: "uppercase" }}>Range</p>
                      <p style={{ fontWeight: "700" }}>{car.range}</p>
                    </div>
                    <div style={{ flex: 1, textAlign: "center", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
                      <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--text-muted)", textTransform: "uppercase" }}>Battery</p>
                      <p style={{ fontWeight: "700" }}>{car.battery}</p>
                    </div>
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--text-muted)", textTransform: "uppercase" }}>Launch</p>
                      <p style={{ fontWeight: "700" }}>{car.launch}</p>
                    </div>
                  </div>

                  <button className="btn btn-primary" style={{ width: "100%" }}>View More Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
