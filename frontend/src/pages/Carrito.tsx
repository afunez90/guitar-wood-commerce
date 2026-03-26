type ItemCarrito = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

const items: ItemCarrito[] = [
  { id: 1, nombre: "Guitarra Eléctrica Classic", precio: 299, cantidad: 1 },
  { id: 2, nombre: "Amplificador 20W", precio: 120, cantidad: 1 },
  { id: 3, nombre: "Cuerdas Pro Pack", precio: 15, cantidad: 2 },
];

export default function Carrito() {
  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <div style={styles.containerNav}>
          <div style={styles.brand}>Guitar Wood</div>
          <nav style={styles.navLinks}>
            <a href="/" style={styles.link}>Inicio</a>
            <a href="/" style={styles.link}>Catálogo</a>
            <a href="/carrito" style={styles.link}>Carrito</a>
            <a href="/cuenta" style={styles.link}>Cuenta</a>
          </nav>
        </div>
      </header>

      <main style={styles.container}>
        <h1 style={styles.title}>Carrito de compras</h1>
        <p style={styles.subtitle}>Revisa los productos seleccionados</p>

        <div style={styles.list}>
          {items.map((item) => (
            <div key={item.id} style={styles.card}>
              <div>
                <h3 style={styles.itemTitle}>{item.nombre}</h3>
                <p style={styles.itemText}>Cantidad: {item.cantidad}</p>
              </div>
              <div style={styles.price}>L. {item.precio * item.cantidad}</div>
            </div>
          ))}
        </div>

        <div style={styles.summary}>
          <h2 style={styles.totalTitle}>Total</h2>
          <p style={styles.total}>L. {total}</p>
          <button style={styles.button}>Proceder al pago</button>
        </div>
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    backgroundColor: "#111",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  navbar: {
    backgroundColor: "#181818",
    borderBottom: "1px solid #2b2b2b",
    padding: "16px 0",
  },
  containerNav: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "white",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#d6a35f",
    textDecoration: "none",
    fontWeight: 600,
  },
  container: {
    width: "90%",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "50px 0",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#ccc",
    marginBottom: "30px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#1b1b1b",
    borderRadius: "14px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
  },
  itemTitle: {
    margin: 0,
    marginBottom: "8px",
    fontSize: "22px",
  },
  itemText: {
    margin: 0,
    color: "#ccc",
  },
  price: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#f0c27b",
  },
  summary: {
    backgroundColor: "#1b1b1b",
    borderRadius: "14px",
    padding: "24px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
  },
  totalTitle: {
    marginTop: 0,
    marginBottom: "10px",
  },
  total: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#f0c27b",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#8b4513",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "14px 22px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};