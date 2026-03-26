import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
};

const imagenes = [
  "/assets/img/guitarra.jpg",
  "/assets/img/amplificador.jpg",
  "/assets/img/cuerdas.jpg",
];

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
    padding: "70px 20px",
  },
  heroTitle: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  heroText: {
    fontSize: "16px",
    marginBottom: "18px",
  },
  heroButton: {
    display: "inline-block",
    backgroundColor: "#ff6a00",
    color: "white",
    padding: "10px 18px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  },
  section: {
    width: "90%",
    maxWidth: "1200px",
    margin: "30px auto",
  },
  sectionTitle: {
    fontSize: "30px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "6px",
    padding: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "4px",
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
  error: {
    color: "red",
    marginBottom: "15px",
  },
};

export default function Catalogo() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudieron cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        setProductos(data.slice(0, 3));
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  }, []);

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
        <a href="#destacados" style={styles.heroButton}>Explorar productos</a>
      </section>

      <section id="destacados" style={styles.section}>
        <h2 style={styles.sectionTitle}>Productos Destacados</h2>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.grid}>
          {productos.map((producto, index) => (
            <div key={producto.id} style={styles.card}>
              <img
                src={imagenes[index % imagenes.length]}
                alt={producto.nombre}
                style={styles.image}
              />

              <h3 style={styles.cardTitle}>{producto.nombre}</h3>
              <p style={styles.price}>L. {producto.precio}</p>

              <Link to={`/producto/${producto.id}`} style={styles.buttonSmall}>
                Ver
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 Guitar Wood - Proyecto Abner Funez
      </footer>
    </div>
  );
}