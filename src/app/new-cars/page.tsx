import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewCars() {
  return (
    <main>
      <Header />
      <div className="section-padding" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="h1" style={{ color: "var(--secondary)", marginBottom: "1.5rem" }}>New Cars 2026</h1>
          <p className="text-muted" style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "0 auto" }}>
            Explore the latest launches, upcoming models, and on-road prices for all car brands in India.
          </p>
          <div style={{ marginTop: "3rem" }}>
            <button className="btn btn-primary" style={{ padding: "1rem 2.5rem" }}>View All Models</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
