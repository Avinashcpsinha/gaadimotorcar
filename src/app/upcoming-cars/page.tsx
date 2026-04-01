"use client";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Calendar, Bell, ChevronRight } from "lucide-react";

export default function UpcomingCars() {
  const upcomingCars = [
    { name: "Volkswagen Taigun Facelift", expectedPrice: "₹11.50 - ₹19.00 Lakh", date: "April 9, 2026", status: "Confirming" },
    { name: "MG Majestor", expectedPrice: "₹40.00 - ₹45.00 Lakh", date: "April 2026", status: "Confirming" },
    { name: "Mahindra BE 07", expectedPrice: "₹25.00 - ₹30.00 Lakh", date: "July 2026", status: "Testing" },
    { name: "MG IM6 Luxury Sedan", expectedPrice: "₹60.00 - ₹70.00 Lakh", date: "August 2026", status: "Debut" },
    { name: "Tata Sierra EV", expectedPrice: "₹20.00 - ₹25.00 Lakh", date: "Mid-2026", status: "In Prototype" },
    { name: "Hyundai Ioniq 9", expectedPrice: "₹1.20 - ₹1.35 Crore", date: "Early 2027", status: "Global" }
  ];

  return (
    <main>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      
      <section className="section-padding" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "rgba(238,35,38,0.1)", borderRadius: "var(--radius-full)", color: "var(--primary)", marginBottom: "1.5rem" }}>
            <Calendar size={16} /> <span>LATEST AUTO LAUNCHES 2026</span>
          </div>
          <h1 className="h1" style={{ color: "var(--secondary)", fontSize: "3.5rem" }}>Upcoming Cars in India 2026</h1>
          <p className="text-muted" style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "1rem 0" }}>
            Stay ahead of the curve. Your definitive guide to every car launch scheduled in India across all price segments.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2.5rem" }}>
            {upcomingCars.map(car => (
              <div key={car.name} className="card" style={{ display: "flex", overflow: "hidden", padding: 0 }}>
                <div style={{ width: "160px", backgroundColor: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontStyle: "italic", textAlign: "center", padding: "1rem" }}>
                  SNEAK PEEK
                </div>
                <div style={{ flex: 1, padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: "800", fontSize: "0.75rem" }}>
                      <Clock size={14} /> <span>EXPECTED</span>
                    </div>
                    <span style={{ backgroundColor: "var(--surface)", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.75rem", fontWeight: "700", color: "var(--secondary)" }}>
                      {car.status}
                    </span>
                  </div>
                  <h3 className="h3">{car.name}</h3>
                  <div style={{ marginTop: "0.5rem" }}>
                    <p style={{ fontWeight: "800", fontSize: "1.1rem", color: "var(--secondary)" }}>{car.expectedPrice}</p>
                    <p className="text-muted" style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>Launch expected: <span style={{ fontWeight: "700", color: "var(--text-main)" }}>{car.date}</span></p>
                  </div>
                  <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                    <button className="btn btn-primary" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                       Notify Me <Bell size={16} />
                    </button>
                    <button className="btn btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ChevronRight size={18} />
                    </button>
                  </div>
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
