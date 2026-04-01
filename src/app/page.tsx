import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandGrid from "@/components/BrandGrid";
import CarCarousel from "@/components/CarCarousel";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, Star, Clock, Trophy } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      {/* Search by Body Type - New Dense Section */}
      <section className="section-padding">
        <div className="container">
          <div className="flex items-center justify-between" style={{ marginBottom: "2.5rem" }}>
            <h2 className="h2">Search by Body Type</h2>
            <a href="#" style={{ color: "var(--primary)", fontWeight: "700" }}>View All Types</a>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "1.5rem" }}>
            {[
              { name: "SUV", icon: "🚙" },
              { name: "Sedan", icon: "🚗" },
              { name: "Hatchback", icon: "🏎️" },
              { name: "MUV", icon: "🚐" },
              { name: "Luxury", icon: "💎" },
              { name: "Electric", icon: "⚡" }
            ].map(type => (
              <div key={type.name} className="card btn-outline" style={{
                padding: "2rem 1rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                cursor: "pointer"
              }}>
                <span style={{ fontSize: "2.5rem" }}>{type.icon}</span>
                <span style={{ fontWeight: "700", fontSize: "1.1rem" }}>{type.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandGrid />
      <CarCarousel />
      
      {/* Latest Automotive News - New Dense Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-low)" }}>
        <div className="container">
          <div className="flex items-center justify-between" style={{ marginBottom: "2.5rem" }}>
            <h2 className="h2">Auto News & Reviews</h2>
            <button className="btn btn-primary">View All News</button>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Upcoming SUVs in India 2026", date: "2 hours ago", type: "NEWS", color: "#3b82f6" },
              { title: "Mahindra Scorpio-N vs XUV700: Best Pick?", date: "5 hours ago", type: "COMPARISON", color: "#ef4444" },
              { title: "Electric Vehicles crossing 1L sales mark", date: "1 day ago", type: "INDUSTRY", color: "#10b981" }
            ].map(news => (
              <div key={news.title} className="card" style={{ display: "flex", overflow: "hidden" }}>
                <div style={{ width: "120px", height: "160px", backgroundColor: "var(--border)" }}></div>
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span style={{ color: news.color, fontSize: "0.7rem", fontWeight: "800", letterSpacing: "1px" }}>{news.type}</span>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", lineHeight: "1.4" }}>{news.title}</h3>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                    <Clock size={14} /> <span>{news.date}</span>
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
