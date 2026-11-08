<!--
  Fechamento da home (referências do Mobbin: Zaro e Maze). Um cartão grande dividido:
  à esquerda, painel escuro com o símbolo que se apruma, título, texto, selos em mono e o
  atalho para o WhatsApp sobre uma textura de pontos; à direita, o formulário "Fale com a gente".
  No celular, os dois lados se empilham.
-->
<template>
  <section class="secao" aria-labelledby="fechamento-titulo">
    <div class="container">
      <div class="cartao revelar">
        <div class="cartao__painel">
          <MarcaSimbolo class="cartao__simbolo" alinhar />
          <h2 id="fechamento-titulo" class="cartao__titulo">Sua ideia, <span>aprumada.</span></h2>
          <p class="cartao__texto">
            Conte o que você precisa. A gente responde e, se fizer sentido, o briefing continua com o agente.
          </p>
          <ul class="cartao__selos dado">
            <li>Sem reunião</li>
            <li>Briefing em ~1 dia</li>
            <li>50% na entrega</li>
          </ul>
          <div v-if="useAppConfig().contato.whatsapp" class="cartao__whatsapp">
            <p class="cartao__ou dado">Prefere conversar agora?</p>
            <LinkWhatsapp variante="claro" />
          </div>
        </div>

        <div class="cartao__formulario">
          <header class="cartao__cabeca">
            <p class="kicker">Fale com a gente</p>
            <h3 class="cartao__subtitulo">Mande uma mensagem</h3>
          </header>
          <FormularioContato prefixo="fechamento" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cartao {
  display: grid;
  overflow: hidden;
  border: var(--linha);
  border-radius: 28px;
  background: var(--superficie-elevada);
  box-shadow: var(--sombra-objeto);
}

/* Painel sempre escuro (nos dois temas), com textura de pontos que some para o topo */
.cartao__painel {
  --painel-texto: var(--marca-papel);
  position: relative;
  isolation: isolate;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 20px;
  padding: 56px 32px;
  background: var(--marca-carvao);
  color: var(--painel-texto);
  text-align: center;
}

.cartao__painel::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: radial-gradient(circle, rgb(250 250 247 / 0.22) 1.2px, transparent 1.7px);
  background-size: 14px 14px;
  mask-image: linear-gradient(to top, #000 10%, transparent 75%);
}

.cartao__simbolo {
  width: 56px;
  height: 56px;
  /* No painel escuro, a barra de cima usa a versão de fundo escuro do símbolo */
  --simbolo-1: var(--marca-chumbo);
}

.cartao__titulo {
  font-size: clamp(40px, 5vw, 68px);
  letter-spacing: -0.045em;
  line-height: 0.98;
}

.cartao__titulo span {
  color: var(--marca-laranja);
}

.cartao__texto {
  max-width: 38ch;
  color: rgb(250 250 247 / 0.78);
}

.cartao__selos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.cartao__selos li {
  padding: 6px 12px;
  border: 1px solid rgb(250 250 247 / 0.25);
  border-radius: var(--radius-pill);
}

.cartao__whatsapp {
  display: grid;
  justify-items: center;
  gap: 12px;
  margin-top: 8px;
  padding-top: 24px;
  border-top: 1px solid rgb(250 250 247 / 0.15);
}

.cartao__ou {
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgb(250 250 247 / 0.7);
}

.cartao__formulario {
  display: grid;
  align-content: center;
  gap: 24px;
  padding: 40px 24px;
}

.cartao__cabeca {
  display: grid;
  gap: 6px;
}

.cartao__subtitulo {
  font-size: clamp(24px, 2.4vw, 30px);
}

@media (min-width: 960px) {
  .cartao {
    grid-template-columns: 1fr 1.15fr;
    min-height: 480px;
  }

  .cartao__painel {
    padding: 64px 48px;
  }

  .cartao__formulario {
    padding: 56px 48px;
  }
}
</style>
