import { useMemo, useState } from "react";

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

function calcAge(dateISO: string): number | null {
  if (!dateISO) return null;
  const birth = new Date(dateISO);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

function passwordStrength(password: string): string {
  if (password.length < 6) return "Débil";
  if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return "Fuerte";
  return "Media";
}

export default function AccountForm() {
  const [data, setData] = useState<FormData>({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    fechaNacimiento: "",
    cantidad: 1,
    aceptaTerminos: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const age = useMemo(() => calcAge(data.fechaNacimiento), [data.fechaNacimiento]);
  const strength = useMemo(() => passwordStrength(data.password), [data.password]);

  const errors: FormErrors = {};

  if (!data.nombre.trim()) errors.nombre = "Nombre obligatorio";
  if (!emailRegex.test(data.email)) errors.email = "Correo inválido";
  if (data.password.length < 6) errors.password = "Mínimo 6 caracteres";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Las contraseñas no coinciden";
  if (age !== null && age < 18)
    errors.fechaNacimiento = "Debes ser mayor de edad";
  if (!data.aceptaTerminos)
    errors.aceptaTerminos = "Debes aceptar los términos";

  const isValid = Object.keys(errors).length === 0;

  const setField = (field: keyof FormData, value: any) => {
    setData({ ...data, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Crear cuenta</h2>
        <p className="subtitle">
          Formulario con React + TypeScript + validación dinámica.
        </p>

        {submitted && (
          <div className="success">
            Cuenta creada correctamente.
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="grid2">

            <label>
              Nombre completo
              <input
                value={data.nombre}
                onChange={(e) => setField("nombre", e.target.value)}
              />
              {errors.nombre && <span className="error">{errors.nombre}</span>}
            </label>

            <label>
              Correo electrónico
              <input
                value={data.email}
                onChange={(e) => setField("email", e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>

            <label>
              Contraseña
              <input
                type={showPassword ? "text" : "password"}
                value={data.password}
                onChange={(e) => setField("password", e.target.value)}
              />
              <button
                type="button"
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
              <span className={`strength ${strength.toLowerCase()}`}>
                Fuerza: {strength}
              </span>
              {errors.password && <span className="error">{errors.password}</span>}
            </label>

            <label>
              Confirmar contraseña
              <input
                type="password"
                value={data.confirmPassword}
                onChange={(e) => setField("confirmPassword", e.target.value)}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </label>

            <label>
              Fecha de nacimiento
              <input
                type="date"
                value={data.fechaNacimiento}
                onChange={(e) => setField("fechaNacimiento", e.target.value)}
              />
              {errors.fechaNacimiento && (
                <span className="error">{errors.fechaNacimiento}</span>
              )}
            </label>

            <label>
              Cantidad (ejemplo numérico)
              <input
                type="number"
                min={1}
                max={99}
                value={data.cantidad}
                onChange={(e) => setField("cantidad", Number(e.target.value))}
              />
            </label>

          </div>

          <label className="check">
            <input
              type="checkbox"
              checked={data.aceptaTerminos}
              onChange={(e) =>
                setField("aceptaTerminos", e.target.checked)
              }
            />
            Acepto términos y condiciones
          </label>
          {errors.aceptaTerminos && (
            <span className="error">{errors.aceptaTerminos}</span>
          )}

          <button type="submit" disabled={!isValid} className="btnWood">
            Crear cuenta
          </button>

        </form>
      </div>
    </div>
  );
}