import { Link } from "react-router-dom";

export default function LegacyHome() {
  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.brand}>Guitar Wood</div>

          <nav style={styles.navLinks}>
            <Link to="/" style={styles.link}>Inicio</Link>
            <Link to="/catalogo" style={styles.link}>Catálogo</Link>
            <Link to="/carrito" style={styles.link}>Carrito</Link>
            <Link to="/cuenta" style={styles.link}>Cuenta</Link>
          </nav>
        </div>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Encuentra tu sonido perfecto</h1>
        <p style={styles.heroText}>Guitarras profesionales y accesorios premium</p>
        <Link to="/catalogo" style={styles.heroButton}>Explorar productos</Link>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Productos Destacados</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <img
              src="/assets/img/guitarra.jpg"
              alt="Guitarra Eléctrica Classic"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Guitarra Eléctrica Classic</h3>
            <p style={styles.price}>L. 299</p>
            <Link to="/producto/1" style={styles.buttonSmall}>Ver</Link>
          </div>

          <div style={styles.card}>
            <img
              src="/assets/img/amplificador.jpg"
              alt="Amplificador 20W"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Amplificador 20W</h3>
            <p style={styles.price}>L. 120</p>
            <Link to="/producto/2" style={styles.buttonSmall}>Ver</Link>
          </div>

          <div style={styles.card}>
            <img
              src="/assets/img/cuerdas.jpg"
              alt="Cuerdas Ernie Ball"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Cuerdas Ernie Ball</h3>
            <p style={styles.price}>L. 450</p>
            <Link to="/producto/3" style={styles.buttonSmall}>Ver</Link>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 Guitar Wood - Proyecto Abner Funez
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    color: "#111",
  },
  navbar: {
    backgroundColor: "#111",
    padding: "12px 0",
  },
  navContainer: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
  },
  hero: {
    background: "linear-gradient(90deg, #202020, #2d2d2d)",
    color: "white",
    textAlign: "center",
    padding: "90px 20px",
  },
  heroTitle: {
    fontSize: "48px",
    marginBottom: "12px",
    fontWeight: "bold",
  },
  heroText: {
    fontSize: "18px",
    marginBottom: "24px",
  },
  heroButton: {
    display: "inline-block",
    backgroundColor: "#ff6a00",
    color: "white",
    padding: "12px 22px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
  },
  section: {
    width: "90%",
    maxWidth: "1200px",
    margin: "40px auto",
  },
  sectionTitle: {
    fontSize: "32px",
    marginBottom: "24px",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "12px",
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#111",
  },
  price: {
    color: "#ff6a00",
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "18px",
  },
  buttonSmall: {
    display: "inline-block",
    backgroundColor: "#ff6a00",
    color: "white",
    padding: "8px 14px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  },
  footer: {
    marginTop: "40px",
    padding: "20px",
    fontSize: "13px",
    color: "#222",
  },
};