import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UsedCars() {
  return (
    <main>
      <Header />
      <div className="section-padding" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--white)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="h1" style={{ color: "var(--secondary)", marginBottom: "1.5rem" }}>Used Cars in India</h1>
          <p className="text-muted" style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "0 auto" }}>
            Buy and sell certified pre-owned cars at the best prices. Your journey to a perfect second-hand drive starts here.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
