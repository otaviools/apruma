<!--
  Como funciona: lista de etapas à esquerda e mini portal fixo à direita.
  A etapa que cruza o centro da tela vira a ativa (diretiva v-ao-centro).
  Por teclado, cada etapa é um botão que ativa a tela correspondente.
-->
<template>
  <section class="secao" aria-labelledby="etapas-titulo">
    <div class="container">
      <header class="cabeca-secao">
        <div>
          <p class="kicker">Como funciona</p>
          <h2 id="etapas-titulo">Da conversa ao site no ar, sem perder o fio.</h2>
        </div>
        <p>Seis etapas, todas visíveis no seu portal. Você sempre sabe em que ponto o projeto está e o que depende de você.</p>
      </header>

      <div class="etapas">
        <ol class="etapas__lista">
          <li
            v-for="(item, indice) in useAppConfig().etapas"
            :key="item.titulo"
            v-ao-centro="() => (useEtapaAtiva().value = indice)"
            class="etapa"
            :class="{ 'etapa--ativa': useEtapaAtiva().value === indice }"
          >
            <button type="button" class="etapa__botao" :aria-pressed="useEtapaAtiva().value === indice" @click="useEtapaAtiva().value = indice">
              <span class="dado etapa__numero">ETAPA {{ String(indice + 1).padStart(2, '0') }} · {{ item.prazo }}</span>
              <span class="etapa__titulo">{{ item.titulo }}</span>
            </button>
            <p class="etapa__resumo">{{ item.resumo }}</p>
            <MiniPortal class="etapa__portal-celular" :etapa="indice" />
          </li>
        </ol>

        <div class="etapas__portal">
          <PalcoPortal :selo="`Etapa ${String(useEtapaAtiva().value + 1).padStart(2, '0')} · ${useAppConfig().etapas[useEtapaAtiva().value]?.prazo}`">
            <MiniPortal :etapa="useEtapaAtiva().value" />
          </PalcoPortal>
          <NuxtLink to="/como-funciona" class="link">Ver cada etapa em detalhe →</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.secao {
  position: relative;
  z-index: 1;
}

.etapas {
  display: grid;
  gap: 48px;
}

.etapas__lista {
  display: grid;
}

.etapa {
  display: grid;
  gap: 12px;
  padding: 28px 0;
  border-top: var(--linha);
}

.etapa__botao {
  display: grid;
  gap: 6px;
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;
}

.etapa__numero {
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--texto-suave);
}

.etapa__titulo {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.etapa__resumo {
  max-width: 44ch;
  color: var(--texto-2);
}

.etapas__portal {
  display: none;
}

/* Desktop: lista longa à esquerda, portal fixo à direita */
@media (min-width: 900px) {
  .etapas {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }

  .etapa {
    min-height: 46vh;
    align-content: center;
    transition: color 240ms ease;
  }

  .etapa:not(.etapa--ativa) .etapa__titulo,
  .etapa:not(.etapa--ativa) .etapa__resumo {
    color: var(--texto-suave);
  }

  .etapa--ativa .etapa__numero {
    color: var(--destaque-texto);
  }

  .etapa__portal-celular {
    display: none;
  }

  .etapas__portal {
    position: sticky;
    top: calc(var(--altura-cabecalho) + 80px);
    display: grid;
    justify-items: center;
    gap: 32px;
  }

  /* Dentro do palco, o portal fica mais compacto */
  .etapas__portal :deep(.portal) {
    gap: 14px;
    padding: 18px 20px;
    font-size: 13px;
  }
}
</style>
