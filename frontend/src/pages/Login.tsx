import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inicio de sesión simulado");
  };

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

      <main style={styles.mainCenter}>
        <div style={styles.card}>
          <h1 style={styles.title}>Iniciar sesión</h1>
          <p style={styles.subtitle}>
            Accede a tu cuenta de GuitarWood
          </p>

          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Correo electrónico
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="correo@ejemplo.com"
              />
            </label>

            <label style={styles.label}>
              Contraseña
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="********"
              />
            </label>

            <button type="submit" style={styles.button}>
              Ingresar
            </button>
          </form>
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
  mainCenter: {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
  card: {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "#1b1b1b",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#ccc",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color: "#eee",
    fontWeight: 600,
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #444",
    backgroundColor: "#262626",
    color: "white",
    outline: "none",
  },
  button: {
    backgroundColor: "#8b4513",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};