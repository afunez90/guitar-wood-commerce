import { useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";

type Mensaje = {
  rol: "usuario" | "bot";
  texto: string;
};

export default function Chatbot() {
  const [abierto, setAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      rol: "bot",
      texto: "Hola, soy el asistente de GuitarWood. Puedo ayudarte con productos, precios y disponibilidad.",
    },
  ]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const enviarMensaje = async () => {
    if (!mensaje.trim()) {
      setError("Escribe una pregunta antes de enviar.");
      return;
    }

    const textoUsuario = mensaje;

    setMensajes((prev) => [...prev, { rol: "usuario", texto: textoUsuario }]);
    setMensaje("");
    setError("");
    setCargando(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mensaje: textoUsuario }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "No se pudo obtener respuesta del chatbot.");
      }

      setMensajes((prev) => [
        ...prev,
        { rol: "bot", texto: data.respuesta || "No recibí respuesta." },
      ]);
    } catch (err) {
      const mensajeError =
        err instanceof Error ? err.message : "Ocurrió un error inesperado.";

      setError(mensajeError);
      setMensajes((prev) => [
        ...prev,
        {
          rol: "bot",
          texto: "No pude responder en este momento. Verifica la conexión del backend o la facturación de la API.",
        },
      ]);
    } finally {
      setCargando(false);
    }
  };

  const manejarEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      enviarMensaje();
    }
  };

  return (
    <>
      <button
        style={styles.botonFlotante}
        onClick={() => setAbierto(!abierto)}
        aria-label="Abrir chatbot"
      >
        {abierto ? "×" : "Chat"}
      </button>

      {abierto && (
        <div style={styles.ventana}>
          <div style={styles.header}>
            <div>
              <div style={styles.titulo}>Asistente GuitarWood</div>
              <div style={styles.subtitulo}>Consultas sobre productos y stock</div>
            </div>
          </div>

          <div style={styles.chat}>
            {mensajes.map((msg, index) => (
              <div
                key={index}
                style={
                  msg.rol === "usuario"
                    ? styles.filaUsuario
                    : styles.filaBot
                }
              >
                <div
                  style={
                    msg.rol === "usuario"
                      ? styles.mensajeUsuario
                      : styles.mensajeBot
                  }
                >
                  <strong style={styles.etiqueta}>
                    {msg.rol === "usuario" ? "Tú" : "Bot"}
                  </strong>
                  <div>{msg.texto}</div>
                </div>
              </div>
            ))}

            {cargando && (
              <div style={styles.filaBot}>
                <div style={styles.mensajeBot}>
                  <strong style={styles.etiqueta}>Bot</strong>
                  <div>Consultando...</div>
                </div>
              </div>
            )}
          </div>

          <div style={styles.areaEntrada}>
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              onKeyDown={manejarEnter}
              placeholder="Pregunta por productos, precios o stock"
              style={styles.input}
            />
            <button onClick={enviarMensaje} style={styles.botonEnviar}>
              Enviar
            </button>
          </div>

          {error && <p style={styles.error}>{error}</p>}
        </div>
      )}
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  botonFlotante: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    border: "none",
    background: "#8b4513",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    zIndex: 1000,
  },
  ventana: {
    position: "fixed",
    bottom: "100px",
    right: "24px",
    width: "380px",
    height: "520px",
    background: "#1f1f1f",
    border: "1px solid #3b3b3b",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    padding: "0",
    overflow: "hidden",
    zIndex: 999,
  },
  header: {
    background: "linear-gradient(90deg, #8b4513, #5c2f0d)",
    color: "#fff",
    padding: "16px",
  },
  titulo: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: "12px",
    opacity: 0.9,
    marginTop: "4px",
  },
  chat: {
    flex: 1,
    overflowY: "auto",
    padding: "14px",
    background: "#262626",
  },
  filaUsuario: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },
  filaBot: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "10px",
  },
  mensajeUsuario: {
    maxWidth: "80%",
    background: "#8b4513",
    color: "#fff",
    padding: "10px 12px",
    borderRadius: "14px 14px 4px 14px",
    fontSize: "14px",
  },
  mensajeBot: {
    maxWidth: "80%",
    background: "#383838",
    color: "#f3f3f3",
    padding: "10px 12px",
    borderRadius: "14px 14px 14px 4px",
    fontSize: "14px",
  },
  etiqueta: {
    display: "block",
    marginBottom: "4px",
    fontSize: "12px",
    opacity: 0.9,
  },
  areaEntrada: {
    display: "flex",
    gap: "8px",
    padding: "12px",
    borderTop: "1px solid #3b3b3b",
    background: "#1f1f1f",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #555",
    background: "#2e2e2e",
    color: "#fff",
    outline: "none",
  },
  botonEnviar: {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#8b4513",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    color: "#ff8a8a",
    fontSize: "12px",
    padding: "0 12px 12px 12px",
    margin: 0,
    background: "#1f1f1f",
  },
};