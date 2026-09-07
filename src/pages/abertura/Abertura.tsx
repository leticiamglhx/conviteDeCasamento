import { useState } from "react";
import "./Abertura.css";

import fitaEsquerda from "../../assets/images/Fita-esquerda.png";
import lacoAbertura from "../../assets/images/laco-abertura.png";
import logo from "../../assets/images/logo.png";

interface AberturaProps {
  onAbrir: () => void;
}

function Abertura({ onAbrir }: AberturaProps) {
  const [abrindo, setAbrindo] = useState(false);

  const abrirConvite = () => {
    if (abrindo) return;

    setAbrindo(true);

    setTimeout(onAbrir, 2500);
  };

  return (
    <main className={`abertura ${abrindo ? "abrindo" : ""}`}>
      <div className="monograma">
        <img
          src={logo}
          alt="Thamyris e Rafael"
        />
      </div>

      <button
        className="botao-abrir"
        onClick={abrirConvite}
        disabled={abrindo}
      >
        CLIQUE PARA
        <span>ABRIR</span>
      </button>

      <div
        className="laco-container"
        onClick={abrirConvite}
      >
        <img
          className="laco-abertura"
          src={lacoAbertura}
          alt="Laço fechado"
        />

        <img
          className="fita-esquerda"
          src={fitaEsquerda}
          alt="Fita do laço"
        />
      </div>
    </main>
  );
}

export default Abertura;