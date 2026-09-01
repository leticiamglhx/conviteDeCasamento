import "./Abertura.css";
import "../../assets/images/laco-abertura.png"

interface AberturaProps {
  onAbrir: () => void;
}

function Abertura({ onAbrir }: AberturaProps) {
  return (
    <main className="abertura">
      <div className="abertura-conteudo">

        <div className="monograma">
          T & R
        </div>
        <button
          className="botao-abrir"
          onClick={onAbrir}
        >

          <span> CLIQUE PARA ABRIR</span>
        </button>
      </div>
    </main>
  );
}

export default Abertura;