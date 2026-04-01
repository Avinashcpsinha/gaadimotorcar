"use client";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Reviews() {
  return (
    <main>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <div className="section-padding" style={{ minHeight: "60vh", background: "var(--surface-low)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="h2" style={{ marginBottom: "2rem" }}>Latest Reviews & In-Depth News</h1>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto 4rem" }}>
            Get expert insights, road test results, and breaking automotive news to help you choose the right drive.
          </p>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[1, 2, 3].map(i => (
              <div key={i} className="card" style={{ padding: "0 0 1.5rem" }}>
                <div style={{ background: "var(--border)", height: "200px", borderRadius: "12px 12px 0 0" }}></div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 className="h3" style={{ fontSize: "1.2rem", textAlign: "left" }}>The 2026 SUV Revolution: Best Flagships Tested</h3>
                  <p className="text-muted" style={{ fontSize: "0.9rem", textAlign: "left", margin: "1rem 0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis...</p>
                  <div style={{ textAlign: "left", color: "var(--primary)", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    Read Full Review
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
