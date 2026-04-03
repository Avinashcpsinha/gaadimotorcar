import type { Metadata } from "next";
import LeadForm from "./LeadForm";
import Image from "next/image";
import { ShieldCheck, Calendar, Trophy, Zap } from "lucide-react";
import styles from "./jlr.module.css";

export const metadata: Metadata = {
  title: "Jaguar Land Rover | Experience Luxury",
  description: "Register your interest for the latest Range Rover and Jaguar models. Personalized drive experiences and exclusive offers available.",
};

export default function JLRLeadsPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Premium Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          JAGUAR <span className={styles.spacer}>|</span> LAND ROVER
        </div>
        <div className={styles.label} style={{ display: "none", alignItems: "center", gap: "2rem" }}>
          <span style={{ display: "inline-block" }}>Explore Models</span>
          <span style={{ display: "inline-block" }}>Experiences</span>
        </div>
      </header>

      <main className={styles.main}>
        {/* Background Overlay */}
        <div className={styles.backgroundContainer}>
          <Image
            src="/images/jlr-landing.png"
            alt="Range Rover"
            fill
            className={styles.backgroundImage}
            priority
          />
          <div className={styles.overlay}></div>
          <div className={styles.sideOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          {/* Content side */}
          <div className={styles.textContent}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span className={styles.badge}>Exclusive Invitation</span>
              <h1 className={styles.title}>
                Refined Luxury. <br />
                <span className={styles.titleMuted}>Unmatched Power.</span>
              </h1>
              <p className={styles.description}>
                Step into a world where performance meets prestige. Join the elite who command the road with sophistication.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Calendar size={24} />
                </div>
                <h3 className={styles.featureTitle}>Priority Booking</h3>
                <p className={styles.featureText}>Get early access to upcoming model launches and exclusive test drives.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className={styles.featureTitle}>Premium Care</h3>
                <p className={styles.featureText}>Complimentary 5-year service packages for registered members.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Trophy size={24} />
                </div>
                <h3 className={styles.featureTitle}>Bespoke Options</h3>
                <p className={styles.featureText}>Customize your vehicle with SV Bespoke materials and finishes.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Zap size={24} />
                </div>
                <h3 className={styles.featureTitle}>Instant Access</h3>
                <p className={styles.featureText}>Digital concierge service for a seamless ownership experience.</p>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className={styles.formContainer}>
            <LeadForm />
            <p style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.75rem", color: "#6B7280", maxWidth: "400px", margin: "2rem auto 0", lineHeight: "1.5" }}>
              By submitting this form, you agree to our <span style={{ textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span> and authorize JLR India to contact you regarding your interest.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        © 2024 JAGUAR LAND ROVER LIMITED INC. • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
