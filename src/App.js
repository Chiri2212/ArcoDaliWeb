
import { Link } from "react-router-dom";
import logo from "./imagenes/imag-logo/propuesta-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">

      {/* ===== HEADER ===== */}
      <header className="site-header">
        <div className="container header-inner">

          <Link
            className="brand"
            to="/"
            aria-label="Inicio ARCODALI"
          >
            <img
              src={logo}
              className="brand-logo"
              alt="Logo ARCODALI"
            />

            <div className="brand-text">
              <span className="brand-title">
                Distribuidora ARCODALI
              </span>

              <span className="brand-tagline">
                Calidad en cada producto, puntualidad en cada entrega
              </span>
            </div>
          </Link>

          <nav className="nav" aria-label="Navegación principal">
            <a href="#quienes-somos">Quiénes Somos</a>
            <a href="#vision">Visión</a>
            <a href="#mision">Misión</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>

            <Link className="btn btn-primary" to="/catalogo">
              Ver Catálogo
            </Link>
          </nav>

        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        className="hero"
        aria-labelledby="home-hero-title"
      >
        <div className="container hero-inner">

          <h1 id="home-hero-title">
            Distribuidora ARCODALI de Heredia S.A.
          </h1>

          <p>
            Desde 2008 distribuimos{" "}
            <strong>
              pulpas naturales, jugos cítricos, frutas congeladas,
              sabores especiales, aceites y grasas
            </strong>{" "}
            en Costa Rica, con entregas puntuales y un servicio
            cercano para el sector gastronómico e industrial.
          </p>

          <div className="hero-ctas">

            <Link
              className="btn btn-primary"
              to="/catalogo"
            >
              Explorar Catálogo
            </Link>

            <a
              className="btn btn-secondary"
              href="https://wa.me/50686458846?text=Hola%20ARCODALI%2C%20quisiera%20informaci%C3%B3n%20del%20cat%C3%A1logo."
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <main className="container content">

        {/* ===== QUIÉNES SOMOS ===== */}
        <section
          id="quienes-somos"
          className="card"
          aria-labelledby="qs-title"
        >
          <h2 id="qs-title">
            ¿Quiénes Somos?
          </h2>

          <p>
            En <strong>ARCODALI DE HEREDIA S.A.</strong> contamos
            con más de 15 años de experiencia en la distribución
            y comercialización de productos alimenticios.

            Nos especializamos en pulpas naturales, jugos cítricos,
            frutas congeladas, sabores especiales, aceites y grasas,
            atendiendo principalmente las necesidades del sector
            gastronómico e industrial.

            La calidad de nuestros productos, la atención
            personalizada y la puntualidad en cada entrega nos
            convierten en un aliado confiable para el crecimiento
            de nuestros clientes.
          </p>
        </section>

        {/* ===== LÍNEAS DE PRODUCTOS ===== */}
        <section
          id="lineas"
          className="container lines"
          aria-label="Líneas de productos"
        >

          <h2>Líneas de Productos</h2>

          <div className="lines-grid">

            {/* JUGOS CÍTRICOS */}
            <div
              className="line-card"
              aria-label="Línea de Jugos Cítricos"
            >
              <div className="line-badge">
                Jugos Cítricos
              </div>

              <p>
                Limón Mesino, Limón Mandarino, Naranja,
                Limonada con Yerbabuena, Naranja con Remolacha
                y otras combinaciones naturales.
              </p>
            </div>

            {/* PULPAS NATURALES */}
            <div
              className="line-card"
              aria-label="Línea de Pulpas Naturales"
            >
              <div className="line-badge">
                Pulpas Naturales
              </div>

              <p>
                Fresa, Mora, Mango, Maracuyá, Piña,
                Guanábana, Tamarindo, Cas, Carambola
                y Mixto de Frutas.
              </p>
            </div>

            {/* SABORES ESPECIALES */}
            <div
              className="line-card"
              aria-label="Sabores Especiales"
            >
              <div className="line-badge">
                Sabores Especiales
              </div>

              <p>
                Piña Colada, Piña con Arroz,
                Cóctel Pasión, Resbaladera,
                Crema de Coco y otras bebidas especiales.
              </p>
            </div>

            {/* GRASAS Y ACEITES */}
            <div
              className="line-card"
              aria-label="Línea de Grasas y Aceites"
            >
              <div className="line-badge">
                Grasas & Aceites
              </div>

              <p>
                Aceite 18.93 L, Oleína,
                Mantecas y Margarinas especializadas.
              </p>

            </div>

            {/* FRUTAS CONGELADAS */}
           <div
  className="line-card"
  aria-label="Línea de Frutas Congeladas"
>
              <div className="line-badge">
                Frutas Congeladas
              </div>

              <p>
                Guanábana, Sandía, Mixto de Frutas,
                Cas, Mango, Piña, Carambola,
                Papaya, Fresa, Maracuyá y Mora.
              </p>
            </div>

          </div>

          {/* BOTÓN PARA EXPLORAR PRODUCTOS */}
          <div
            className="lines-cta"
            style={{
              textAlign: "center",
              marginTop: "30px"
            }}
          >
            <Link
              className="btn btn-primary"
              to="/catalogo"
            >
              Explorar nuestros productos
            </Link>
          </div>

        </section>

        {/* ===== VISIÓN Y MISIÓN ===== */}
        <section
          className="grid-2"
          aria-label="Visión y Misión"
        >

          {/* VISIÓN */}
          <article
            id="vision"
            className="card"
          >
            <h3>Nuestra Visión</h3>

            <p>
              Ser la empresa distribuidora más confiable
              de Costa Rica, reconocida por la puntualidad,
              la innovación y la calidad de nuestros productos,
              convirtiéndonos en la primera opción de
              nuestros clientes.
            </p>
          </article>

          {/* MISIÓN */}
          <article
            id="mision"
            className="card"
          >
            <h3>Nuestra Misión</h3>

            <p>
              Ofrecer productos y servicios que impulsen
              el crecimiento de nuestros clientes mediante
              un servicio ágil, puntual y confiable,
              comprometidos con la mejora continua,
              la calidad y la satisfacción de
              nuestros clientes.
            </p>
          </article>

        </section>

        {/* ===== UBICACIÓN Y HORARIO ===== */}
        <section
          id="ubicacion"
          className="grid-2"
          aria-label="Ubicación y Horario"
        >

          {/* UBICACIÓN */}
          <article className="card">

            <h3>Ubicación</h3>

            <p>
              Heredia Centro, Calle 8,
              entre avenidas 12 y 14.
            </p>

            <a
              className="btn btn-link"
              href="https://www.google.com/maps/search/?api=1&query=Heredia%20Centro%20Calle%208%20avenida%2012%20y%2014"
              target="_blank"
              rel="noreferrer"
            >
              Ver en Google Maps →
            </a>

          </article>

          {/* HORARIO */}
          <article className="card">

            <h3>Horario de Atención</h3>

            <p>
              Lunes a Viernes{" "}
              <strong>
                7:00 a.m. – 4:00 p.m.
              </strong>
            </p>

          </article>

        </section>

        {/* ===== CONTACTO ===== */}
        <section
          id="contacto"
          className="card"
          aria-labelledby="contact-title"
        >

          <h2 id="contact-title">
            Contacto
          </h2>

          <div className="contacts">

            {/* WHATSAPP */}
            <a
              className="contact-chip"
              href="https://wa.me/50686458846"
              target="_blank"
              rel="noreferrer"
              aria-label="Escribir a WhatsApp 8645-8846"
            >
              🟢 WhatsApp:{" "}
              <strong>8645-8846</strong>
            </a>

            {/* TELÉFONO */}
            <a
              className="contact-chip"
              href="tel:+50622622512"
              aria-label="Llamar al 2262-2512"
            >
              ☎️ Teléfono:{" "}
              <strong>2262-2512</strong>
            </a>

            {/* CATÁLOGO */}
            <Link
              className="btn btn-primary"
              to="/catalogo"
              aria-label="Ir al catálogo"
            >
              Ir al Catálogo
            </Link>

          </div>
        </section>

        {/* ===== REDES SOCIALES ===== */}
        <section
          className="card"
          aria-labelledby="social-title"
        >

          <h2 id="social-title">
            Redes Sociales
          </h2>

          <p className="m-0">
            Seguinos y enterate de novedades,
            nuevos productos y promociones.
          </p>

          <div
            className="socials"
            style={{ marginTop: 12 }}
          >

            {/* FACEBOOK */}
            <button
              type="button"
              className="social"
              aria-label="Facebook (próximamente)"
              onClick={() =>
                alert("Facebook estará disponible pronto.")
              }
            >
              Facebook
            </button>

            {/* INSTAGRAM */}
            <a
              className="social"
              href="https://www.instagram.com/arcodali/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram ARCODALI"
            >
              Instagram
            </a>

          </div>

        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">

        <div className="container footer-inner">

          <p>
            © {new Date().getFullYear()}{" "}
            Distribuidora ARCODALI de Heredia S.A.
          </p>

          <p>
            🚚 Calidad en cada producto,
            puntualidad en cada entrega.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;