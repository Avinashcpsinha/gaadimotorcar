"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, Star, Tag, Landmark } from "lucide-react";

export default function ExploreNewCars() {
  const categories = [
    { name: "SUVs", count: "125 Models", icon: "🚙" },
    { name: "Sedans", count: "85 Models", icon: "🚗" },
    { name: "Hatchbacks", count: "70 Models", icon: "🏎️" },
    { name: "Luxury", count: "45 Models", icon: "💎" },
    { name: "Electric", count: "32 Models", icon: "⚡" }
  ];

  const brands = ["Tata", "Mahindra", "Hyundai", "Maruti Suzuki", "Toyota", "Kia", "MG", "Volkswagen", "Skoda", "Mercedes-Benz", "BMW", "Audi"];

  return (
    <main>
      <Header />
      
      <section className="section-padding" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <h1 className="h1" style={{ color: "var(--secondary)", fontSize: "4rem" }}>Explore New Cars in India</h1>
          <p className="text-muted" style={{ fontSize: "1.25rem", maxWidth: "800px", marginTop: "1rem" }}>
            Browse through every car currently on sale in the Indian market. Filter by brands, body types, or prices.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div style={{ marginBottom: "4rem" }}>
            <h2 className="h2" style={{ marginBottom: "2rem" }}>Shop by Category</h2>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {categories.map(cat => (
                <div key={cat.name} className="card btn-outline" style={{ padding: "2rem 1rem", textAlign: "center", cursor: "pointer" }}>
                  <span style={{ fontSize: "2.5rem", marginBottom: "1rem", display: "block" }}>{cat.icon}</span>
                  <h3 className="h3" style={{ fontSize: "1.2rem" }}>{cat.name}</h3>
                  <p className="text-muted" style={{ fontSize: "0.85rem" }}>{cat.count}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "4rem" }}>
            <h2 className="h2" style={{ marginBottom: "2rem" }}>Popular Brands</h2>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
              {brands.map(brand => (
                <div key={brand} className="card" style={{ padding: "1.25rem", textAlign: "center", fontWeight: "700", cursor: "pointer", border: "1px solid var(--border)" }}>
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: "var(--surface-low)", borderRadius: "var(--radius-xl)", padding: "3rem" }}>
            <div className="flex items-center justify-between" style={{ marginBottom: "2rem" }}>
              <h2 className="h2">Browse by Budget</h2>
              <a href="#" style={{ color: "var(--primary)", fontWeight: "700" }}>View All Price Points <ArrowRight size={16} /></a>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {["Under 5 Lakh", "5 - 10 Lakh", "10 - 15 Lakh", "15 - 20 Lakh", "20 - 40 Lakh", "40 - 70 Lakh", "70 Lakh - 1 Cr", "1 Cr Plus"].map(price => (
                <button key={price} className="btn btn-outline" style={{ padding: "1rem", backgroundColor: "var(--white)", fontWeight: "700" }}>
                  {price}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
