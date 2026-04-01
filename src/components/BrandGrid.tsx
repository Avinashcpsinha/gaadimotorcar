import styles from "./BrandGrid.module.css";
import { Car } from "lucide-react";

const brands = [
  { name: "Tata", models: "12 Models" },
  { name: "Hyundai", models: "15 Models" },
  { name: "Maruti", models: "18 Models" },
  { name: "Kia", models: "9 Models" },
  { name: "Toyota", models: "11 Models" },
  { name: "Mahindra", models: "14 Models" },
  { name: "Volkswagen", models: "7 Models" },
  { name: "MG", models: "6 Models" },
];

export default function BrandGrid() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2">Popular Brands</h2>
          <a href="#" className={styles.viewLink}>View All Brands</a>
        </div>
        
        <div className={styles.grid}>
          {brands.map((brand) => (
            <div key={brand.name} className={styles.brandCard}>
              <div className={styles.iconBox}>
                <Car size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.brandName}>{brand.name}</h3>
              <p className={styles.modelCount}>{brand.models}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
