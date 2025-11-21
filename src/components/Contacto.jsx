import "./Contacto.css";
function Contacto() {
  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>
      <p>Somos los creadores de LockerGames:</p>

      <div className="contacto-creadores">
        {}
        <div className="contacto-card">
          <h3>Eilyn Tatiana Obregón</h3>
          <p>Desarrolladora web</p>
          <p>Email: eilyntatianaobregon@gmail.com</p>
          <p>
            <a
              href="https://www.instagram.com/tati_obreg12?igsh=MWVwYXJmZ2dqMDAyYw=="
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://wa.me/573234837896"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              WhatsApp
            </a>
          </p>
        </div>

        {}
        <div className="contacto-card">
          <h3>Samuel Jimenez Marin</h3>
          <p>Desarrollador web</p>
          <p>Email: riok2yk@gmail.com</p>
          <p>
            <a
              href="https://www.instagram.com/rio2ky?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://wa.me/573159997716"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
