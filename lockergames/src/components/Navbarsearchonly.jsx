import React, { useState } from "react";
import "./Navbarsearchonly.css";

export default function Navbarsearchonly() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const element = document.getElementById(searchTerm.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setErrorMsg("");
      setOpen(false); 
    } else {
      setErrorMsg("No se encontró la sección"); 
    }

    setSearchTerm(""); 
  };

  return (
    <div className="navbar-search-wrapper">
      {}
      <span
        className="navbar-search-icon"
        onClick={() => {
          setOpen(!open);
          setErrorMsg(""); 
        }}
      >
        🔍
      </span>

      {}
      <div className={"navbar-search" + (open ? " active" : "")}>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setErrorMsg(""); 
            }}
          />
          <button className="search-btn" type="submit">
            Buscar
          </button>
          {errorMsg && <div className="search-error">{errorMsg}</div>}
        </form>
      </div>
    </div>
  );
}