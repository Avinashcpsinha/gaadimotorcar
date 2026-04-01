import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandGrid from "@/components/BrandGrid";
import CarCarousel from "@/components/CarCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BrandGrid />
      <CarCarousel />
      
      {/* Search by Budget Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="h2" style={{ marginBottom: "2.5rem" }}>Find Cars by Budget</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1.5rem"
          }}>
            {["Under 5 Lakh", "5 - 10 Lakh", "10 - 20 Lakh", "20 - 50 Lakh", "Over 50 Lakh", "Luxury Cars"].map(budget => (
              <div key={budget} className="card btn-outline" style={{
                padding: "2rem",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "1.1rem",
                cursor: "pointer"
              }}>
                {budget}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
