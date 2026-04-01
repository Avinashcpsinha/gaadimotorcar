import Link from "next/link";
import { Search, MapPin, User, Menu } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            Gaadi<span>Motor</span>Car
          </Link>
          <nav className={styles.nav}>
            <Link href="/new-cars">New Cars</Link>
            <Link href="/used-cars">Used Cars</Link>
            <Link href="/reviews">Reviews & News</Link>
          </nav>
        </div>
        
        <div className={styles.right}>
          <div className={styles.location}>
            <MapPin size={18} />
            <span>Select City</span>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search Cars..." />
            <Search size={18} />
          </div>
          <button className={styles.profileBtn}>
            <User size={20} />
            <span>Login / Register</span>
          </button>
          <button className={styles.mobileMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
