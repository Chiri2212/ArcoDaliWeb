import React from "react";
import { Link } from "react-router-dom";
import logo from "./imagenes/imag-logo/propuesta-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ===== Header ===== */}
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="Inicio ARCODALI">
            <img src={logo} className="brand-logo" alt="Logo ARCODALI" />
            <div className="brand-text">
              <span className="brand-title">Distribuidora ARCODALI</span>
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

      {/* ===== Hero ===== */}
      <section className="hero" aria-labelledby="home-hero-title">
        <div className="container hero-inner">
          <h1 id="home-hero-title">Distribuidora ARCODALI de Heredia S.A.</h1>
          <p>
            Desde 2008 distribuimos <strong>pulpas naturales, jugos, aceites y grasas</strong> en todo
            Costa Rica, con entregas puntuales y un servicio cercano para el sector gastronómico e industrial.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/catalogo">
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

      {/* ===== Contenido ===== */}
      <main className="container content">
        {/* Quiénes somos */}
        <section id="quienes-somos" className="card" aria-labelledby="qs-title">
          <h2 id="qs-title">¿Quiénes Somos?</h2>
          <p>
            En <strong>ARCODALI DE HEREDIA S.A.</strong> contamos con más de 15 años de experiencia
            distribuyendo pulpas naturales, jugos, aceites y grasas en el Gran Área Metropolitana.
            La calidad de nuestros productos y la puntualidad en cada entrega nos convierten en un
            aliado confiable para el crecimiento de nuestros clientes.
          </p>
        </section>
           {/* ===== Líneas ===== */}
     <section id="lineas" className="container lines" aria-label="Líneas de productos">
        <h2>Líneas de Productos</h2>
        <div className="lines-grid">
          {/* Cambiado de Link a div */}
          <div className="line-card" aria-label="Línea de Jugos Cítricos">
            <div className="line-badge">Jugos Cítricos</div>
            <p>Mesino, Mandarino, Naranja, Limonada con Yerbabuena.</p>
          </div>

          {/* Cambiado de Link a div */}
          <div className="line-card" aria-label="Línea de Pulpas Naturales">
            <div className="line-badge">Pulpas Naturales</div>
            <p>Fresa, Mora, Mango, Maracuyá, Piña, Guanábana, Tamarindo y más.</p>
          </div>

          {/* Cambiado de Link a div */}
          <div className="line-card" aria-label="Línea de Grasas y Aceites">
            <div className="line-badge">Grasas & Aceites</div>
            <p>Aceite 18.93L, Oleína, Mantecas y Margarinas especializadas.</p>
          </div>
        </div>
      </section>


        {/* Visión / Misión */}
        <section className="grid-2" aria-label="Visión y Misión">
          <article id="vision" className="card">
            <h3>Nuestra Visión</h3>
            <p>
              Ser la empresa distribuidora más confiable de Costa Rica, reconocida por la puntualidad,
              la innovación y la calidad, convirtiéndonos en la primera opción de nuestros clientes.
            </p>
          </article>

          <article id="mision" className="card">
            <h3>Nuestra Misión</h3>
            <p>
              Ofrecer productos y servicios que impulsen el crecimiento de nuestros clientes mediante
              un servicio ágil, puntual y confiable, comprometidos con la mejora continua y la satisfacción.
            </p>
          </article>
        </section>

        {/* Ubicación y Horario */}
        <section id="ubicacion" className="grid-2" aria-label="Ubicación y Horario">
          <article className="card">
            <h3>Ubicación</h3>
            <p>Heredia Centro. avenida 8, calle 12 y 14</p>
            <a
              className="btn btn-link"
              href="https://www.google.com/maps/place/ARCODALI/@9.9959137,-84.1225095,21z/data=!4m6!3m5!1s0x2c09b3e4d3ad6c45:0x2ccca9da93fafc7e!8m2!3d9.9959723!4d-84.1223449!16s%2Fg%2F11y0qhd7r_?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              Ver en Google Maps →
            </a>
          </article>

          <article className="card">
            <h3>Horario de atención</h3>
            <p>
              Lunes a Viernes <strong>7:00 a.m. – 4:00 p.m.</strong>
            </p>
          </article>
        </section>

        {/* Contacto */}
        <section id="contacto" className="card" aria-labelledby="contact-title">
          <h2 id="contact-title">Contacto</h2>
          <div className="contacts">
            <a
              className="contact-chip"
              href="https://wa.me/50686458846"
              target="_blank"
              rel="noreferrer"
              aria-label="Escribir a WhatsApp 8645-8846"
            >
              🟢 WhatsApp: <strong>8645-8846</strong>
            </a>
            <a className="contact-chip" href="tel:+50622622512" aria-label="Llamar al 2262-2512">
              ☎️ Teléfono: <strong>2262-2512</strong>
            </a>
            <Link className="btn btn-primary" to="/catalogo" aria-label="Ir al catálogo">
              Ir al Catálogo
            </Link>
          </div>
        </section>

        {/* Redes Sociales */}
        <section className="card" aria-labelledby="social-title">
          <h2 id="social-title">Redes Sociales</h2>
          <p className="m-0">Seguinos y enterate de novedades y promociones:</p>
          <div className="socials" style={{ marginTop: 12 }}>
            <a
              className="social"
              href="https://www.facebook.com/share/1ASvPY19kr/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook (próximamente)"
            >
              Facebook
            </a>
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

      {/* ===== Footer ===== */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Distribuidora ARCODALI de Heredia S.A.</p>
          <p>🚚 Calidad en cada producto, puntualidad en cada entrega.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
