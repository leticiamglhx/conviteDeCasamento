import "./Convite.css";

import fotoPrincipal from "../../assets/convite/foto-principal.jpeg";
import fotoMeio from "../../assets/convite/foto-meio.jpeg";
import fotoFinal from "../../assets/convite/foto-final.jpeg";

function Convite() {
  return (
    <main className="convite">
      {/* =========================
          HERO
      ========================= */}

      <section
        className="hero-convite"
        style={{
          backgroundImage: `url(${fotoPrincipal})`,
        }}
      >
        <div className="hero-overlay">
          <div className="monograma-convite">
            T <span>&</span> R
          </div>

          <p className="hero-subtitulo">
            O nosso para sempre começa aqui
          </p>
        </div>
      </section>

      {/* =========================
          VERSÍCULO INICIAL
      ========================= */}

      <section className="secao secao-versiculo">
        <p className="versiculo">
          “Para que todos vejam, saibam, considerem e juntamente entendam
          que a mão do Senhor fez isso.”
        </p>

        <span className="referencia">
          Isaías 41:20
        </span>
      </section>

      {/* =========================
          PAIS
      ========================= */}

      <section className="secao secao-pais">
        <p className="titulo-pequeno">
          Com a bênção de Deus e de seus pais
        </p>

        <div className="pais-grid">
          <div>
            <p>Fernanda de Azevedo</p>
            <p>Jorge Luiz Ornellas</p>
          </div>

          <div>
            <p>Simonia Amorim</p>
            <p>Carlos Henrique Pereira</p>
          </div>
        </div>
      </section>

      {/* =========================
          NOMES DOS NOIVOS
      ========================= */}

      <section className="secao secao-noivos">
        <p className="nome-noivos">
          Thamyris
        </p>

        <span className="e-comercial">
          &
        </span>

        <p className="nome-noivos">
          Rafael
        </p>

        <p className="texto-convite">
          Têm a alegria de convidar para a celebração
          do seu casamento
        </p>

        <div
          className="foto-meio"
          style={{ backgroundImage: `url(${fotoMeio})` }}
          role="img"
          aria-label="Foto dos noivos"
        >
          <div className="foto-meio-overlay" />
        </div>
      </section>

      {/* =========================
          DATA
      ========================= */}

      <section className="secao secao-data">
        <p className="titulo-pequeno">
          A realizar-se no dia
        </p>

        <div className="linha-decorativa" />

        <div className="data-casamento">
          <span>18</span>
          <span className="divisor">|</span>
          <span>03</span>
          <span className="divisor">|</span>
          <span>2027</span>
        </div>

        <div className="linha-decorativa" />

        <p className="horario">
          Quinta-feira, às 16 horas
        </p>
      </section>

      {/* =========================
          LOCAL
      ========================= */}

      <section className="secao secao-local">
        <p className="nome-local">
          Chalé Enfesta
        </p>

        <p>
          Rua 1º de Maio – Parque Paulista
        </p>

        <p>
          Duque de Caxias – RJ
        </p>
      </section>

      {/* =========================
          CORES
      ========================= */}

      <section className="secao secao-cores">
        <p className="titulo-pequeno">
          Pedimos gentilmente que nossos convidados
          evitem as seguintes cores:
        </p>

        <div className="paleta-cores">
          <div className="cor">
            <span className="bolinha verde-oliva" />
            <p>Verde oliva</p>
          </div>

          <div className="cor">
            <span className="bolinha lavanda" />
            <p>Lavanda</p>
          </div>

          <div className="cor">
            <span className="bolinha branco" />
            <p>Branco</p>
          </div>

          <div className="cor">
            <span className="bolinha off-white" />
            <p>Off-white</p>
          </div>
        </div>
      </section>

      {/* =========================
          MENSAGEM
      ========================= */}

      <section className="secao secao-mensagem">
        <p className="mensagem-final">
          Esperamos você para viver esse momento conosco.
        </p>
      </section>

      {/* =========================
          VERSÍCULO FINAL
      ========================= */}

      <section className="secao secao-final">
        

        <p className="versiculo versiculo-final">
          “Assim, eles já não são dois, mas uma só carne.
          Portanto, o que Deus uniu, ninguém o separe.”
        </p>

        <span className="referencia">
          Mateus 19:6
        </span>
      </section>

      {/* =========================
          FOTO FINAL
      ========================= */}

      <section
        className="foto-final"
        style={{
          backgroundImage: `url(${fotoFinal})`,
        }}
      >
        <div className="foto-final-overlay">
          <p className="foto-final-texto">
            Com carinho,
          </p>

          <p className="foto-final-assinatura">
            Thamyris & Rafael
          </p>
        </div>
      </section>
    </main>
  );
}

export default Convite;