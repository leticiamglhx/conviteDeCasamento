import { useState } from "react";
import "./Abertura.css";

import fitaEsquerda from "../../assets/images/Fita-esquerda.png";
import fitaDireita from "../../assets/images/Fita-direita.png";
import lacoAbertura from "../../assets/images/laco-abertura.png";
import lacoEsquerdo from "../../assets/images/laco-esquerdo.png";
import lacoDireito from "../../assets/images/laco-direito.png";
import logo from "../../assets/images/logo.png";

interface AberturaProps {
  onAbrir: () => void;
}

function Abertura({ onAbrir }: AberturaProps) {
  const [abrindo, setAbrindo] = useState(false);

  const abrirConvite = () => {
    if (abrindo) return;

    setAbrindo(true);

    setTimeout(onAbrir, 700);
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
          className="laco-esquerdo"
          src={lacoEsquerdo}
          alt=""
          aria-hidden="true"
        />

        <img
          className="laco-direito"
          src={lacoDireito}
          alt=""
          aria-hidden="true"
        />

        <img
          className="fita-esquerda"
          src={fitaEsquerda}
          alt=""
          aria-hidden="true"
        />

        <img
          className="fita-direita"
          src={fitaDireita}
          alt=""
          aria-hidden="true"
        />
      </div>
    </main>
  );
}

export default Abertura;