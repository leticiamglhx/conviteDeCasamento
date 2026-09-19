import { useEffect, useState } from "react";
import "./Convite.css";

import fotoPrincipal from "../../assets/convite/foto-principal.jpeg";
import fotoMeio from "../../assets/convite/foto-meio.jpeg";
import fotoFinal from "../../assets/convite/foto-final.jpeg";

const dataCasamento = new Date(2027, 2, 18, 16, 30, 0);

function calcularDiasRestantes() {
  const hoje = new Date();
  const diferenca = Math.max(0, dataCasamento.getTime() - hoje.getTime());
  const segundosTotais = Math.floor(diferenca / 1000);

  return {
    dias: Math.floor(segundosTotais / (24 * 60 * 60)),
    horas: Math.floor((segundosTotais % (24 * 60 * 60)) / (60 * 60)),
    minutos: Math.floor((segundosTotais % (60 * 60)) / 60),
    segundos: segundosTotais % 60,
  };
}

function Convite() {
  const [contagem, setContagem] = useState(calcularDiasRestantes);

  useEffect(() => {
    const atualizarContagem = () => setContagem(calcularDiasRestantes());
    const intervalo = window.setInterval(atualizarContagem, 1000);

    return () => window.clearInterval(intervalo);
  }, []);

  return (
    <main id="convite" className="convite">
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
        <div className="noivos-apresentacao">
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
        </div>

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

      <div className="detalhes-evento">
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
          Quinta-feira, às 16:30 horas
        </p>

        <div className="contador" aria-live="polite">
          <div className="contador-dias">
            <span className="contador-intro">Faltam</span>
            <span className="contador-numero">{contagem.dias}</span>
            <span className="contador-label">dias</span>
          </div>
          <div className="contador-tempo">
            <div className="contador-unidade">
              <span className="contador-numero">
                {String(contagem.horas).padStart(2, "0")}
              </span>
              <span className="contador-label">horas</span>
            </div>
            <span className="contador-separador">:</span>
            <div className="contador-unidade">
              <span className="contador-numero">
                {String(contagem.minutos).padStart(2, "0")}
              </span>
              <span className="contador-label">minutos</span>
            </div>
            <span className="contador-separador">:</span>
            <div className="contador-unidade">
              <span className="contador-numero">
                {String(contagem.segundos).padStart(2, "0")}
              </span>
              <span className="contador-label">segundos</span>
            </div>
          </div>
          <span className="contador-descricao">para o nosso casamento</span>
        </div>
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

        <div className="acoes-local">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Chal%C3%A9+Enfesta+Duque+de+Caxias+RJ"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">⌖</span>
            Localização
          </a>
          <a href="https://noivos.casar.com/thamyriserafael#/rsvp">
            <span aria-hidden="true">✓</span>
            Confirmação de presença
          </a>
          <a href="https://noivos.casar.com/thamyriserafael#/presentes">
            <span aria-hidden="true">▦</span>
            Lista de presentes
          </a>
        </div>
      </section>
      </div>

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

      <div className="foto-final-wrap">
        <div className="foto-final-legenda">
          <p className="foto-final-texto">
            Com carinho,
          </p>

          <p className="foto-final-assinatura">
            Thamyris & Rafael
          </p>
        </div>

        <section
          className="foto-final"
          style={{
            backgroundImage: `url(${fotoFinal})`,
          }}
        />
      </div>
    </main>
  );
}

export default Convite;