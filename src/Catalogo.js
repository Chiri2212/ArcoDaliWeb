import React, { useMemo, useState } from "react";
import "./Catalogo.css";
import { Link } from "react-router-dom";

/* ==== Imágenes de Jugos Cítricos ==== */
import LimonadaYerbabuenaImg from "./imagenes/imag-jugos/Limonada yerbabuena.jpg";
import MandarinoImg from "./imagenes/imag-jugos/Mandarino publi.png";
import MesinoImg from "./imagenes/imag-jugos/Mesino publi.jpg";
import NaranjaImg from "./imagenes/imag-jugos/Naranja publi.jpg";

/* Pulpas */
import FresaImg from "./imagenes/imag-pulpas/Fresa.jpg";
import CarambolaImg from "./imagenes/imag-pulpas/Carambola.jpg";
import CasImg from "./imagenes/imag-pulpas/Cas.jpg";
import GuanabanaImg from "./imagenes/imag-pulpas/Guanabana.jpg";
import MangoImg from "./imagenes/imag-pulpas/Mango.jpg";
import MaracuyaImg from "./imagenes/imag-pulpas/Maracuya.jpg";
import MixtoImg from "./imagenes/imag-pulpas/Mixto.png";
import MoraImg from "./imagenes/imag-pulpas/Mora.jpg";
import PinaImg from "./imagenes/imag-pulpas/Pina.jpg";
import Tamarindo2LImg from "./imagenes/imag-pulpas/Tamarindo 2L.png";
import TamarindoImg from "./imagenes/imag-pulpas/Tamarindo.jpg";

/* ==== Imágenes de Grasas y Aceites ==== */
import Aceite1893Img from "./imagenes/imag-grasas/Aceite 18.93.png";
import AceiteOleinaImg from "./imagenes/imag-grasas/Aceite oleina.png";
import MantecaMultiImg from "./imagenes/imag-grasas/Manteca Multi.jpeg";
import MantecaPalmaImg from "./imagenes/imag-grasas/Manteca Palma.png";
import MargarinaHojaldreImg from "./imagenes/imag-grasas/Margarina Hojaldre.png";
import MargarinaMultipropositoImg from "./imagenes/imag-grasas/Margarina Multipropósito.png";
import MargarinaPasteleraImg from "./imagenes/imag-grasas/Margarina Pastelera.png";

const PRODUCTS = [
  /* --------------------------------------
   Catálogo jugos
-----------------------------------------*/
  {
    id: "limon-mesino",
    name: "Jugo de Limón Mesino",
    category: "jugos",
    lines: ["citricos"],
    desc: "Intenso, natural y versátil para cocina, coctelería o refrescos. Extraído de fruta real, sin saborizantes artificiales.",
    presentations: ["Galón", "½ Galón", "Litro"],
    priceFrom: 1600,
    img: MesinoImg,
  },
  {
    id: "limon-mandarino",
    name: "Jugo de Limón Mandarino",
    category: "jugos",
    lines: ["citricos"],
    desc: "Sabor cítrico y suave, perfecto para cocteles, aderezos y bebidas refrescantes. 100% natural y listo para usar.",
    presentations: ["Galón", "½ Galón", "Litro"],
    priceFrom: 1600,
    img: MandarinoImg,
  },
  {
    id: "naranja",
    name: "Jugo de Naranja Natural",
    category: "jugos",
    lines: ["citricos"],
    desc: "Jugo fresco y naturalmente dulce, ideal para desayunos, coctelería o consumo directo. Elaborado con naranjas seleccionadas.",
    presentations: ["Galón", "½ Galón", "Litro"],
    priceFrom: 1800,
    img: NaranjaImg,
  },
  {
    id: "limonada-yerbab",
    name: "Limonada con Yerbabuena",
    category: "jugos",
    lines: ["citricos"],
    desc: "Refrescante combinación de limón natural y yerbabuena fresca. Perfecta para bares, restaurantes o consumo en casa.",
    presentations: ["Galón", "½ Galón", "Litro"],
    priceFrom: 1700,
    img: LimonadaYerbabuenaImg,
  },

  /* --------------------------------------
   Catálogo pulpas
-----------------------------------------*/
  {
    id: "fresa",
    name: "Pulpa de Fresa",
    category: "pulpas",
    lines: ["premium", "economica", "light"],
    desc: "Pulpa natural para bebidas y coctelería.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 6500,
    img: FresaImg,
  },
  {
    id: "carambola",
    name: "Carambola",
    category: "pulpas",
    lines: ["premium"],
    desc: "Pulpa natural de carambola azucarada.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 7500,
    img: CarambolaImg,
  },
  {
    id: "Cas",
    name: "Pulpa de Cas",
    category: "pulpas",
    lines: ["premium", "economica"],
    desc: "Pulpa natural de cas azucarada.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 5600,
    img: CasImg,
  },
  {
    id: "guanabana",
    name: "Pulpa de Guanábana",
    category: "pulpas",
    lines: ["premium", "economica"],
    desc: "Pulpa cremosa y aromática, ideal para batidos, helados y refrescos naturales.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 6500,
    img: GuanabanaImg,
  },
  {
    id: "manga",
    name: "Pulpa de Manga",
    category: "pulpas",
    lines: ["premium", "economica", "light"],
    desc: "Dulce, espesa y tropical. Perfecta para smoothies, repostería y coctelería.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 5600,
    img: MangoImg,
  },
  {
    id: "maracuya",
    name: "Pulpa de Maracuyá",
    category: "pulpas",
    lines: ["premium", "economica", "light"],
    desc: "Pulpa exótica con el equilibrio justo entre acidez y dulzura. Ideal para cocteles, repostería o refrescos.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 6500,
    img: MaracuyaImg,
  },
  {
    id: "mixto",
    name: "Pulpa Mixta",
    category: "pulpas",
    lines: ["premium", "economica"],
    desc: "Combinación deliciosa de frutas naturales que aportan sabor y rendimiento a cualquier preparación.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 5600,
    img: MixtoImg,
  },
  {
    id: "mora",
    name: "Pulpa de Mora",
    category: "pulpas",
    lines: ["premium", "economica", "light"],
    desc: "Sabor intenso y color vibrante, perfecta para batidos, repostería y refrescos naturales.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 6500,
    img: MoraImg,
  },
  {
    id: "pina",
    name: "Pulpa de Piña",
    category: "pulpas",
    lines: ["premium", "economica", "light"],
    desc: "Refrescante y tropical, ideal para piñas coladas, smoothies o jugos naturales.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 5600,
    img: PinaImg,
  },
  {
    id: "tamarindo",
    name: "Pulpa de Tamarindo",
    category: "pulpas",
    lines: ["premium"],
    desc: "Pulpa de sabor intenso y natural, excelente para refrescos típicos, salsas o cocteles.",
    presentations: ["Galón", "Preparación 1:3"],
    priceFrom: 8500,
    img: TamarindoImg,
  },
  {
    id: "tamarindo-2l",
    name: "Pulpa de Tamarindo 2L",
    category: "pulpas",
    lines: ["economica"],
    desc: "Versión práctica en presentación de 2 litros, con el mismo sabor auténtico del tamarindo natural sin azúcar.",
    presentations: ["2 Litros", "Preparación 1:3"],
    priceFrom: 5500,
    img: Tamarindo2LImg,
  },

  /* --------------------------------------
   Catálogo grasas
-----------------------------------------*/
  {
    id: "aceite-1893",
    name: "Aceite 18.93L",
    category: "grasas",
    lines: [],
    desc: "Aceite vegetal refinado ideal para cocina profesional. Excelente rendimiento y estabilidad en fritura.",
    presentations: ["18.93 L"],
    img: Aceite1893Img,
  },
  {
    id: "aceite-oleina",
    name: "Aceite Oleína",
    category: "grasas",
    lines: [],
    desc: "Aceite vegetal 100% puro con alta resistencia a temperaturas elevadas. Ideal para freír y uso diario.",
    presentations: ["18.93 L"],
    img: AceiteOleinaImg,
  },
  {
    id: "manteca-multi",
    name: "Manteca Multipropósito",
    category: "grasas",
    lines: [],
    desc: "Manteca versátil para panadería y repostería. Proporciona textura, volumen y excelente sabor en masas.",
    presentations: ["Cubeta 15 kg", "Cubeta 7 kg"],
    img: MantecaMultiImg,
  },
  {
    id: "manteca-palma",
    name: "Manteca de Palma",
    category: "grasas",
    lines: [],
    desc: "Manteca natural derivada de palma, libre de olores y perfecta para frituras y elaboración de empanizados.",
    presentations: ["Cubeta 15 kg", "Cubeta 7 kg"],
    img: MantecaPalmaImg,
  },
  {
    id: "margarina-hojaldre",
    name: "Margarina para Hojaldre",
    category: "grasas",
    lines: [],
    desc: "Especial para hojaldres y croissants. Ofrece capas uniformes, textura crujiente y sabor balanceado.",
    presentations: ["Cubeta 15 kg", "Cubeta 7 kg"],
    img: MargarinaHojaldreImg,
  },
  {
    id: "margarina-multiproposito",
    name: "Margarina Multipropósito",
    category: "grasas",
    lines: [],
    desc: "Diseñada para panadería y repostería. Su textura suave y alto rendimiento la hacen ideal para todo uso.",
    presentations: ["Cubeta 15 kg", "Cubeta 7 kg"],
    img: MargarinaMultipropositoImg,
  },
  {
    id: "margarina-pastelera",
    name: "Margarina Pastelera",
    category: "grasas",
    lines: [],
    desc: "Especial para cremas, rellenos y repostería fina. Brinda estabilidad y un sabor delicado en cada preparación.",
    presentations: ["Cubeta 15 kg", "Cubeta 7 kg"],
    img: MargarinaPasteleraImg,
  },
];

/* Mapea categorías a títulos y orden deseado */
const CATEGORY_ORDER = ["jugos", "pulpas", "grasas"];
const CATEGORY_LABEL = {
  jugos: "Jugos Cítricos",
  pulpas: "Pulpas Naturales",
  grasas: "Grasas & Aceites",
};

/* Opciones de línea para el filtro general */
const LINE_OPTIONS = [
  { value: "premium", label: "Premium" },
  { value: "economica", label: "Económica" },
  { value: "light", label: "Light" },
  { value: "citricos", label: "Cítricos" }, // para jugos como el Mesino
];

/* Util: normaliza búsqueda */
function normalize(str = "") {
  return str
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

/* Tarjeta de producto */
function ProductCard({ item }) {
  return (
    <article className="product-card" id={`detalle-${item.id}`}>
      <div className="product-media">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="product-body">
        <h3 className="product-title">{item.name}</h3>

        {Array.isArray(item.lines) && item.lines.length > 0 && (
          <div className="product-meta">
            {item.lines.map((ln) => (
              <span
                key={ln}
                className={
                  ln === "premium" ||
                  ln === "economica" ||
                  ln === "light" ||
                  ln === "citricos"
                    ? `line-badge ${ln}`
                    : "line-badge"
                }
              >
                {ln === "premium"
                  ? "Premium"
                  : ln === "economica"
                  ? "Económica"
                  : ln === "light"
                  ? "Light"
                  : ln === "citricos"
                  ? "Cítricos"
                  : ln}
              </span>
            ))}
          </div>
        )}

        {item.desc && <p className="desc">{item.desc}</p>}

        {Array.isArray(item.presentations) &&
          item.presentations.length > 0 && (
            <div className="presentations">
              {item.presentations.map((p) => (
                <span className="tag" key={p}>
                  {p}
                </span>
              ))}
            </div>
          )}
      </div>

      <div className="actions">
        {item.priceFrom > 0 ? (
          <span className="price">
            Desde ₡{item.priceFrom.toLocaleString("es-CR")} + IVA
          </span>
        ) : (
          <span className="price" aria-label="Consultar precio">
            Consulte
          </span>
        )}
      </div>
    </article>
  );
}

/* Bloque por categoría (sección) */
function CategorySection({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="container" style={{ paddingTop: 8, paddingBottom: 12 }}>
      <h2 style={{ margin: "12px 0 8px" }}>{title}</h2>
      <div className="product-grid">
        {items.map((it) => (
          <ProductCard key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}

export default function Catalogo() {
  const [category, setCategory] = useState("");
  const [line, setLine] = useState("");
  const [query, setQuery] = useState("");

  /* Productos filtrados */
  const filtered = useMemo(() => {
    const q = normalize(query);
    return PRODUCTS.filter((p) => {
      const byCategory = category ? p.category === category : true;
      const byLine = line
        ? Array.isArray(p.lines) && p.lines.includes(line)
        : true;
      const byQuery = q
        ? normalize(p.name).includes(q) ||
          normalize(p.desc || "").includes(q) ||
          (p.presentations || []).some((x) => normalize(x).includes(q))
        : true;
      return byCategory && byLine && byQuery;
    });
  }, [category, line, query]);

  /* Agrupar por categoría y ordenar secciones: Jugos → Pulpas → Grasas */
  const grouped = useMemo(() => {
    const groups = CATEGORY_ORDER.reduce((acc, c) => ({ ...acc, [c]: [] }), {});
    for (const p of filtered) {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    }
    return groups;
  }, [filtered]);

  const chips = [
    category && {
      key: "cat",
      label: `Categoría: ${CATEGORY_LABEL[category] || category}`,
      onClear: () => setCategory(""),
    },
    line && {
      key: "line",
      label: `Línea: ${
        LINE_OPTIONS.find((o) => o.value === line)?.label || line
      }`,
      onClear: () => setLine(""),
    },
    query && {
      key: "q",
      label: `Buscar: “${query}”`,
      onClear: () => setQuery(""),
    },
  ].filter(Boolean);

  return (
    <div className="catalog-page">
      {/* Hero */}
      <div className="container catalog-hero">
        <h1>Catálogo de Productos</h1>
        <p>Explore nuestras líneas: Pulpas, Jugos Cítricos y Grasas & Aceites.</p>
      </div>

      {/* Bloque informativo de líneas */}
      <div className="container lines-info">
        <h2 className="lines-info-title">Líneas de producto</h2>
        <p className="lines-info-text">
             En ARCODALI trabajamos con fruta real hecha pulpa, elaborada con una de las mayores concentraciones y purezas del mercado. 
             Diseñamos tres líneas para adaptarnos a las necesidades de cada cliente, manteniendo siempre nuestra esencia: calidad, naturalidad y sabor auténtico

        </p>

        <div className="lines-grid">
          <div className="line-card premium">
            <h3>Premium</h3>
            <p>
              Una de las pulpas más puras y concentradas del mercado. Elaborada con fruta real y un toque de azúcar que potencia su sabor natural. 
              Ideal para refrescos, coctelería y repostería que buscan ofrecer una experiencia superior en sabor y calidad.
            </p>
          </div>

          <div className="line-card economica">
            <h3>Económica</h3>
            <p>
              Rendimiento y frescura al mejor precio, sin renunciar al sabor auténtico ni a la pureza que distinguen a nuestras pulpas. 
              Elaborada con fruta real y pensada para negocios de alto volumen que desean mantener un excelente estándar de calidad.
            </p>
          </div>

          <div className="line-card light">
            <h3>Light</h3>
            <p>
              Pulpa endulzada con Natuvia, manteniendo la misma pureza y concentración que caracteriza a nuestras pulpas tradicionales. 
              Menos calorías, mismo sabor. Es la opción más ligera y saludable para quienes desean una alternativa sin azúcar tradicional.

            </p>
          </div>

          <div className="line-card citricos">
            <h3>Jugos Cítricos</h3>
            <p>
              Jugos naturales de limón, naranja y mezclas especiales. 
              Frescos, versátiles y listos para usar, ideales para coctelería, gastronomía o bebidas refrescantes.
              Con el sabor auténtico de la fruta real.
            </p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="container filters" role="search">
        <div className="filters-row">
          <select
            className="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filtrar por categoría"
          >
            <option value="">Todas las categorías</option>
            <option value="jugos">Jugos Cítricos</option>
            <option value="pulpas">Pulpas Naturales</option>
            <option value="grasas">Grasas y Aceites</option>
          </select>

          <select
            className="select"
            value={line}
            onChange={(e) => setLine(e.target.value)}
            aria-label="Filtrar por línea"
          >
            <option value="">Todas las líneas</option>
            {LINE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>

          <input
            className="search"
            placeholder="Buscar producto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar producto"
          />
        </div>

        {/* Chips activos */}
        {chips.length > 0 && (
          <div
            className="chips"
            aria-label="Filtros activos"
            style={{ marginTop: 12 }}
          >
            {chips.map((c) => (
              <button
                key={c.key}
                className="chip"
                onClick={c.onClear}
                title="Quitar filtro"
                style={{ cursor: "pointer", borderStyle: "dashed" }}
              >
                {c.label} ✕
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Secciones en orden: Jugos → Pulpas → Grasas */}
      <CategorySection title="Jugos Cítricos" items={grouped.jugos} />
      <CategorySection title="Pulpas Naturales" items={grouped.pulpas} />
      <CategorySection title="Grasas & Aceites" items={grouped.grasas} />

      {/* Botón flotante de volver */}
      <Link className="btn-float" to="/" aria-label="Volver al inicio">
        ← Volver
      </Link>

      {/* Bloque final de WhatsApp */}
      <div className="container contact-whatsapp">
        <h3>¿Listo para cotizar o hacer pedido?</h3>
        <p>Escríbanos y con gusto le atendemos de inmediato.</p>
        <a
          className="cta"
          href="https://wa.me/50686458846?text=Hola%20ARCODALI%2C%20me%20interesa%20el%20cat%C3%A1logo."
          target="_blank"
          rel="noreferrer"
        >
          💬 Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}

