import { useNavigate, useParams } from "react-router-dom";

function Producto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const productos = [
    {
      id: 1,
      nombre: "Guitarra Eléctrica Classic",
      precio: 299,
      imagen: "/assets/img/guitarra.jpg",
      descripcion:
        "Guitarra eléctrica ideal para músicos que buscan un sonido potente, diseño elegante y gran comodidad al tocar.",
    },
    {
      id: 2,
      nombre: "Amplificador 20W",
      precio: 120,
      imagen: "/assets/img/amplificador.jpg",
      descripcion:
        "Amplificador compacto de 20W con sonido claro y excelente respuesta para práctica y espacios pequeños.",
    },
    {
      id: 3,
      nombre: "Cuerdas Ernie Ball",
      precio: 450,
      imagen: "/assets/img/cuerdas.jpg",
      descripcion:
        "Cuerdas de alta calidad para guitarra eléctrica, con excelente tono, durabilidad y respuesta en interpretación.",
    },
  ];

  const productoId = Number(id);
  const producto = productos.find((item) => item.id === productoId);

  if (!producto) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#0f0f10",
          color: "#fff",
          padding: "40px",
        }}
      >
        <h1>Producto no encontrado</h1>
        <button
          onClick={() => navigate("/catalogo")}
          style={{
            marginTop: "20px",
            background: "#b5621b",
            color: "#fff",
            border: "none",
            padding: "12px 18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Volver al catálogo
        </button>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f10",
        color: "#ffffff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "transparent",
            border: "1px solid #d4a24c",
            color: "#d4a24c",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "30px",
          }}
        >
          Volver
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            alignItems: "center",
            background: "#1a1a1d",
            borderRadius: "18px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          }}
        >
          <div>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "#d4a24c",
                fontWeight: 700,
                marginBottom: "10px",
                letterSpacing: "1px",
              }}
            >
              DETALLE DEL PRODUCTO
            </p>

            <h1
              style={{
                fontSize: "2.4rem",
                marginBottom: "16px",
              }}
            >
              {producto.nombre}
            </h1>

            <p
              style={{
                fontSize: "2rem",
                color: "#d4a24c",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              L. {producto.precio}
            </p>

            <p
              style={{
                color: "#d1d1d1",
                lineHeight: 1.7,
                marginBottom: "25px",
              }}
            >
              {producto.descripcion}
            </p>

            <button
              style={{
                background: "#b5621b",
                color: "#fff",
                border: "none",
                padding: "14px 22px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Producto;