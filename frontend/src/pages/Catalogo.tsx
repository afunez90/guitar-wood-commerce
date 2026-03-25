import { useEffect, useState } from "react";

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
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
        setProductos(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Catálogo GuitarWood</h1>

      {error && <p>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {productos.map((producto) => (
          <div
            key={producto.id}
            style={{
              background: "#1f1f1f",
              color: "white",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <img
              src="/assets/img/guitarra.jpg"
              alt={producto.nombre}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p><strong>L. {producto.precio}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}