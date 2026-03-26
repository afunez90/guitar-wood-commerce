import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";

type FormData = {
  nombre: string;
  email: string;
  password: string;
  confirmPassword: string;
  fechaNacimiento: string;
  cantidad: number;
  aceptaTerminos: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function calcAge(dateISO: string) {
  if (!dateISO) return 0;
  const today = new Date();
  const birth = new Date(dateISO);
  let age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

function getPasswordStrength(password: string) {
  if (password.length >= 10) return "Fuerte";
  if (password.length >= 6) return "Media";
  if (password.length > 0) return "Débil";
  return "";
}

export default function AccountForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    fechaNacimiento: "",
    cantidad: 1,
    aceptaTerminos: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo<FormErrors>(() => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido.";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Debe tener al menos 6 caracteres.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contraseña.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    if (!formData.fechaNacimiento) {
      newErrors.fechaNacimiento = "Selecciona tu fecha de nacimiento.";
    } else if (calcAge(formData.fechaNacimiento) < 18) {
      newErrors.fechaNacimiento = "Debes tener al menos 18 años.";
    }

    if (formData.cantidad < 1 || Number.isNaN(formData.cantidad)) {
      newErrors.cantidad = "La cantidad debe ser mayor o igual a 1.";
    }

    if (!formData.aceptaTerminos) {
      newErrors.aceptaTerminos = "Debes aceptar los términos.";
    }

    return newErrors;
  }, [formData]);

  const isFormValid = Object.keys(errors).length === 0;
  const passwordStrength = getPasswordStrength(formData.password);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "cantidad"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isFormValid) return;

    alert("Cuenta creada correctamente");
    setFormData({
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
      fechaNacimiento: "",
      cantidad: 1,
      aceptaTerminos: false,
    });
    setSubmitted(false);
  };

  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.brand}>Guitar Wood</div>

          <nav style={styles.navLinks}>
            <Link to="/" style={styles.link}>Inicio</Link>
            <Link to="/catalogo" style={styles.link}>Catálogo</Link>
            <Link to="/carrito" style={styles.link}>Carrito</Link>
            <Link to="/cuenta" style={styles.linkActive}>Cuenta</Link>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.wrapper}>
          <div style={styles.heroCard}>
            <div style={styles.heroTextBlock}>
              <p style={styles.badge}>CUENTA</p>
              <h1 style={styles.title}>Crear cuenta</h1>
              <p style={styles.subtitle}>
                Regístrate para guardar tus datos, gestionar compras y mejorar tu experiencia en Guitar Wood.
              </p>

              <div style={styles.infoBox}>
                <span style={styles.infoLabel}>Validación dinámica</span>
                <span style={styles.infoValue}>React + TypeScript</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={styles.formCard} noValidate>
              <div style={styles.grid}>
                <div style={styles.field}>
                  <label htmlFor="nombre" style={styles.label}>Nombre completo</label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Escribe tu nombre"
                    style={inputStyle(!!errors.nombre, submitted)}
                  />
                  {submitted && errors.nombre && (
                    <span style={styles.errorText}>{errors.nombre}</span>
                  )}
                </div>

                <div style={styles.field}>
                  <label htmlFor="email" style={styles.label}>Correo electrónico</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    style={inputStyle(!!errors.email, submitted)}
                  />
                  {submitted && errors.email && (
                    <span style={styles.errorText}>{errors.email}</span>
                  )}
                </div>

                <div style={styles.field}>
                  <label htmlFor="password" style={styles.label}>Contraseña</label>
                  <div style={styles.passwordRow}>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Mínimo 6 caracteres"
                      style={passwordInputStyle(!!errors.password, submitted)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      style={styles.showButton}
                    >
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                  <div style={styles.helperRow}>
                    <span style={styles.helperText}>Seguridad: {passwordStrength || "—"}</span>
                  </div>
                  {submitted && errors.password && (
                    <span style={styles.errorText}>{errors.password}</span>
                  )}
                </div>

                <div style={styles.field}>
                  <label htmlFor="confirmPassword" style={styles.label}>Confirmar contraseña</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repite tu contraseña"
                    style={inputStyle(!!errors.confirmPassword, submitted)}
                  />
                  {submitted && errors.confirmPassword && (
                    <span style={styles.errorText}>{errors.confirmPassword}</span>
                  )}
                </div>

                <div style={styles.field}>
                  <label htmlFor="fechaNacimiento" style={styles.label}>Fecha de nacimiento</label>
                  <input
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    type="date"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    style={inputStyle(!!errors.fechaNacimiento, submitted)}
                  />
                  {submitted && errors.fechaNacimiento && (
                    <span style={styles.errorText}>{errors.fechaNacimiento}</span>
                  )}
                </div>

                <div style={styles.field}>
                  <label htmlFor="cantidad" style={styles.label}>Cantidad</label>
                  <input
                    id="cantidad"
                    name="cantidad"
                    type="number"
                    min="1"
                    value={formData.cantidad}
                    onChange={handleChange}
                    style={inputStyle(!!errors.cantidad, submitted)}
                  />
                  {submitted && errors.cantidad && (
                    <span style={styles.errorText}>{errors.cantidad}</span>
                  )}
                </div>
              </div>

              <div style={styles.checkboxWrap}>
                <label style={styles.checkboxLabel}>
                  <input
                    name="aceptaTerminos"
                    type="checkbox"
                    checked={formData.aceptaTerminos}
                    onChange={handleChange}
                    style={styles.checkbox}
                  />
                  Acepto términos y condiciones
                </label>
                {submitted && errors.aceptaTerminos && (
                  <span style={styles.errorText}>{errors.aceptaTerminos}</span>
                )}
              </div>

              <div style={styles.actions}>
                <button
                  type="submit"
                  style={{
                    ...styles.submitButton,
                    opacity: isFormValid ? 1 : 0.9,
                  }}
                >
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

function inputStyle(hasError: boolean, submitted: boolean): CSSProperties {
  return {
    ...styles.input,
    border: submitted && hasError ? "1px solid #ff6b6b" : "1px solid #2b2b30",
  };
}

function passwordInputStyle(hasError: boolean, submitted: boolean): CSSProperties {
  return {
    ...styles.input,
    ...styles.passwordInput,
    border: submitted && hasError ? "1px solid #ff6b6b" : "1px solid #2b2b30",
  };
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0d0d0f",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  navbar: {
    backgroundColor: "#111",
    padding: "12px 0",
    borderBottom: "1px solid #1f1f24",
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
  linkActive: {
    color: "#ff9a3d",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 700,
  },
  main: {
    padding: "40px 20px 70px",
  },
  wrapper: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heroCard: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "28px",
    alignItems: "stretch",
  },
  heroTextBlock: {
    background: "linear-gradient(135deg, #16161a, #1f1f25)",
    borderRadius: "20px",
    padding: "36px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    border: "1px solid #24242a",
  },
  badge: {
    color: "#ff9a3d",
    fontWeight: 700,
    fontSize: "13px",
    letterSpacing: "1.5px",
    marginBottom: "14px",
  },
  title: {
    fontSize: "42px",
    margin: "0 0 14px",
    lineHeight: 1.1,
  },
  subtitle: {
    color: "#c8c8d0",
    fontSize: "16px",
    lineHeight: 1.7,
    margin: "0 0 26px",
  },
  infoBox: {
    display: "inline-flex",
    flexDirection: "column",
    gap: "6px",
    background: "#111216",
    border: "1px solid #2a2b31",
    borderRadius: "14px",
    padding: "16px 18px",
  },
  infoLabel: {
    color: "#9f9faa",
    fontSize: "13px",
  },
  infoValue: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "15px",
  },
  formCard: {
    background: "#17181c",
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    border: "1px solid #24242a",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#f4f4f5",
  },
  input: {
    width: "100%",
    background: "#101115",
    color: "#fff",
    borderRadius: "12px",
    padding: "14px 14px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },
  passwordRow: {
    display: "flex",
    gap: "10px",
  },
  passwordInput: {
    flex: 1,
  },
  showButton: {
    background: "#26272d",
    color: "#fff",
    border: "1px solid #34353d",
    borderRadius: "12px",
    padding: "0 16px",
    fontSize: "13px",
    cursor: "pointer",
    fontWeight: 700,
  },
  helperRow: {
    minHeight: "18px",
  },
  helperText: {
    color: "#b7b7c1",
    fontSize: "13px",
  },
  checkboxWrap: {
    marginTop: "22px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#e7e7ea",
    fontSize: "14px",
  },
  checkbox: {
    width: "16px",
    height: "16px",
  },
  actions: {
    marginTop: "26px",
    display: "flex",
    justifyContent: "flex-start",
  },
  submitButton: {
    background: "#ff6a00",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "14px 22px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(255,106,0,0.25)",
  },
  errorText: {
    color: "#ff8b8b",
    fontSize: "12px",
    marginTop: "2px",
  },
};