"use client";

import { useState } from "react";
import { submitLead } from "./actions";
import { CheckCircle2, AlertCircle, Loader2, ChevronRight } from "lucide-react";
import styles from "./jlr.module.css";

const MODELS = [
  "Range Rover",
  "Range Rover Sport",
  "Range Rover Velar",
  "Range Rover Evoque",
  "Defender 90",
  "Defender 110",
  "Defender 130",
  "Discovery",
  "Discovery Sport",
  "Jaguar F-TYPE",
  "Jaguar F-PACE",
  "Jaguar I-PACE",
];

const STATES = [
  "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Uttar Pradesh", "West Bengal", "Telangana", "Rajasthan", "Punjab", "Haryana"
];

const CITIES: Record<string, string[]> = {
  "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Uttar Pradesh": ["Lucknow", "Noida", "Kanpur"],
  "West Bengal": ["Kolkata", "Howrah"],
  "Telangana": ["Hyderabad"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
  "Punjab": ["Chandigarh", "Ludhiana", "Amritsar"],
  "Haryana": ["Gurugram", "Faridabad"],
};

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await submitLead(formData);

    setLoading(false);
    if (result.success) {
      setSuccess(true);
    } else if (result.error) {
      setError(result.error);
    }
  }

  if (success) {
    return (
      <div className={`${styles.glassCard} ${styles.successCard}`}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <div style={{ background: "rgba(16, 185, 129, 0.2)", padding: "1rem", borderRadius: "9999px" }}>
            <CheckCircle2 color="#10b981" size={48} />
          </div>
        </div>
        <h2 className={styles.title} style={{ fontSize: "2rem", marginBottom: "1rem" }}>Thank You</h2>
        <p className={styles.description} style={{ fontSize: "1rem", marginBottom: "2rem", maxWidth: "300px", margin: "0 auto 2rem" }}>
          Your interest in Jaguar Land Rover has been registered. Our relationship manager will contact you shortly.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className={styles.label}
          style={{ cursor: "pointer", textDecoration: "underline", border: "none", background: "none" }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className={styles.glassCard}>
      <h2 className={styles.featureTitle} style={{ fontSize: "1.5rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        Register Your Interest
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", flex: 1 }}></div>
      </h2>

      <form onSubmit={handleSubmit} className={styles.formGrid}>
        <div className={`${styles.formGrid} ${styles.col2}`} style={{ gap: "1.5rem" }}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>First Name *</label>
            <input name="firstName" required placeholder="e.g. John" className={styles.input} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Last Name *</label>
            <input name="lastName" required placeholder="e.g. Doe" className={styles.input} />
          </div>
        </div>

        <div className={`${styles.formGrid} ${styles.col2}`} style={{ gap: "1.5rem" }}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Mobile Number *</label>
            <input name="mobile" required placeholder="+91 00000 00000" className={styles.input} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Email Address *</label>
            <input name="email" type="email" required placeholder="john.doe@example.com" className={styles.input} />
          </div>
        </div>

        <div className={`${styles.formGrid} ${styles.col3}`} style={{ gap: "1.5rem" }}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>State *</label>
            <select
              name="state"
              required
              onChange={(e) => setSelectedState(e.target.value)}
              className={styles.select}
            >
              <option value="" style={{ background: "#111" }}>Select State</option>
              {STATES.map(s => <option key={s} value={s} style={{ background: "#111" }}>{s}</option>)}
            </select>
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>City *</label>
            <select name="city" required className={styles.select}>
              <option value="" style={{ background: "#111" }}>Select City</option>
              {selectedState && CITIES[selectedState]?.map(c => (
                <option key={c} value={c} style={{ background: "#111" }}>{c}</option>
              ))}
            </select>
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Zip Code</label>
            <input name="zipCode" placeholder="000 000" className={styles.input} />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Model of Interest *</label>
          <select name="modelOfInterest" required className={styles.select}>
            <option value="" style={{ background: "#111" }}>Choose your model</option>
            {MODELS.map(m => <option key={m} value={m} style={{ background: "#111" }}>{m}</option>)}
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Comments *</label>
          <textarea
            name="comments"
            required
            rows={4}
            placeholder="Tell us about your requirements..."
            className={styles.textarea}
          />
        </div>

        {error && (
          <div style={{ background: "rgba(244, 63, 94, 0.1)", border: "1px solid rgba(244, 63, 94, 0.2)", color: "#fb7185", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <AlertCircle size={20} />
            <p style={{ fontSize: "0.875rem" }}>{error}</p>
          </div>
        )}

        <button type="submit" disabled={loading} className={styles.submitBtn}>
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Submit Request
              <ChevronRight size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
