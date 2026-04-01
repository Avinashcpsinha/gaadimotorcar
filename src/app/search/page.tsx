"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, ChevronRight, Search as SearchIcon } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  // High-fidelity car data gathered from internet search
  const carData = [
    { name: "Volkswagen Taigun Facelift", price: "₹11.75 - ₹20.00 Lakh", date: "April 9, 2026", rating: 4.5, type: "SUV" },
    { name: "Mercedes-Benz CLA Electric", price: "₹55.00 - ₹59.00 Lakh", date: "April 24, 2026", rating: 4.8, type: "Sedan" },
    { name: "Toyota Urban Cruiser Ebella EV", price: "₹16.00 - ₹23.00 Lakh", date: "April 2026", rating: 4.4, type: "SUV" },
    { name: "MG Majestor", price: "₹40.00 - ₹45.00 Lakh", date: "April 2026", rating: 4.2, type: "SUV" },
    { name: "Tata Sierra EV", price: "₹20.00 - ₹25.00 Lakh", date: "Mid-2026", rating: 4.6, type: "SUV" },
    { name: "Mahindra BE 07", price: "₹25.00 - ₹30.00 Lakh", date: "July 2026", rating: 4.5, type: "SUV" },
    { name: "Tata Tiago EV Facelift", price: "₹8.50 - ₹12.00 Lakh", date: "Sept 2026", rating: 4.3, type: "Hatchback" },
    { name: "Honda City Hybrid", price: "₹18.80 - ₹20.50 Lakh", date: "Published", rating: 4.6, type: "Sedan" }
  ];

  const results = q 
    ? carData.filter(car => car.name.toLowerCase().includes(q.toLowerCase()) || car.type.toLowerCase().includes(q.toLowerCase()))
    : carData;

  return (
    <div className="section-padding" style={{ backgroundColor: "var(--surface-low)", minHeight: "80vh" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
          <h1 className="h2" style={{ color: "var(--secondary)" }}>
            {q ? `Search results for "${q}"` : "Explore All Cars"}
          </h1>
          <div style={{ display: "flex", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
            <strong>{results.length}</strong> cars found
          </div>
        </div>
        
        {results.length > 0 ? (
          <div className="grid" style={{ gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            {results.map(car => (
              <div key={car.name} className="card" style={{ display: "flex", overflow: "hidden", padding: 0 }}>
                <div style={{ 
                  width: "280px", 
                  height: "AUTO", 
                  minHeight: "180px",
                  backgroundColor: "var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  fontSize: "0.8rem"
                }}>
                  PHOTO COMING SOON
                </div>
                <div style={{ flex: 1, padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--primary)", letterSpacing: "1px" }}>{car.type}</span>
                    <h3 className="h3" style={{ fontSize: "1.5rem" }}>{car.name}</h3>
                    <div style={{ display: "flex", gap: "1.5rem", margin: "0.25rem 0" }}>
                      <span style={{ fontWeight: "800", fontSize: "1.1rem", color: "var(--secondary)" }}>{car.price}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                        <Star size={16} style={{ color: "#EAB308", fill: "#EAB308" }} /> {car.rating} (1,240 Reviews)
                      </span>
                    </div>
                    <p className="text-muted" style={{ fontSize: "0.95rem" }}>Expected Launch: <span style={{ color: "var(--secondary)", fontWeight: "600" }}>{car.date}</span></p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <button className="btn btn-primary">Check On-Road Price</button>
                    <button className="btn btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      View Details <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "6rem 0" }}>
            <div style={{ marginBottom: "1.5rem" }}><SearchIcon size={64} style={{ color: "var(--border)" }} /></div>
            <h2 className="h3" style={{ color: "var(--text-main)" }}>No results found for "{q}"</h2>
            <p className="text-muted" style={{ marginTop: "1rem" }}>Try searching for "SUV", "Electric", or "Mercedes-Benz".</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading Search...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Filtering Cars...</div>}>
        <SearchContent />
      </Suspense>
      <Footer />
    </main>
  );
}
