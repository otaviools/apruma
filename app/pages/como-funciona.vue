<script setup lang="ts">
useSeoMeta({
  title: 'Como funciona',
  description: 'As seis etapas da Apruma, da conversa com o agente ao site no ar, com progresso em tempo real no portal.',
})
</script>

<template>
  <div>
    <CabecaPagina
      kicker="Como funciona"
      titulo="Seis etapas. Nenhuma surpresa."
      texto="Cada etapa aparece no seu portal com prazo médio, o que já foi feito e o que depende de você."
    />

    <!-- Linha laranja que acompanha a rolagem e liga a etapa 01 à 06 -->
    <ol class="linha-tempo container">
      <li v-for="(item, indice) in useAppConfig().etapas" :key="item.titulo" class="etapa">
        <div class="etapa__texto">
          <p class="dado etapa__meta">ETAPA {{ String(indice + 1).padStart(2, '0') }} · {{ item.prazo }}</p>
          <h2>{{ item.titulo }}</h2>
          <p class="etapa__resumo">{{ item.resumo }}</p>
          <p class="etapa__ve"><span class="kicker">O que você vê</span> {{ item.oQueVe }}</p>
        </div>
        <span class="etapa__numeral" aria-hidden="true">{{ String(indice + 1).padStart(2, '0') }}</span>
        <MiniPortal class="etapa__portal revelar" :etapa="indice" />
      </li>
    </ol>

    <section class="secao secao--superficie" aria-labelledby="painel-titulo">
      <div class="container painel">
        <div class="painel__texto centro">
          <p class="kicker">O que você acompanha no painel</p>
          <h2 id="painel-titulo">Seu site está em 62%. Faltam duas páginas.</h2>
          <p class="suave">É assim que o portal fala com você: em números e frases curtas, sem precisar mandar mensagem perguntando.</p>
          <NuxtLink to="/#briefing" class="botao botao--principal">Começar projeto</NuxtLink>
        </div>
        <PalcoPortal class="revelar" selo="Etapa 04 · 62% concluído">
          <MiniPortal :etapa="3" />
        </PalcoPortal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.camada {
  position: relative;
  z-index: 1;
}

.linha-tempo {
  position: relative;
  z-index: 1;
  display: grid;
  padding-left: 28px;
}

/* Trilho da linha do tempo */
.linha-tempo::before,
.linha-tempo::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  border-radius: 2px;
  background: var(--borda);
}

.linha-tempo::after {
  background: var(--destaque);
  transform-origin: top;
  transform: scaleY(1);
}

/* Preenchimento guiado pela rolagem; sem suporte, a linha aparece completa */
@supports (animation-timeline: view()) {
  .linha-tempo {
    view-timeline: --linha block;
  }

  .linha-tempo::after {
    animation: descer linear both;
    animation-timeline: --linha;
    animation-range: entry 20% exit 60%;
  }
}

@keyframes descer {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

.etapa {
  position: relative;
  display: grid;
  gap: 24px;
  padding-block: 56px;
  border-top: var(--linha);
}

.etapa__texto {
  display: grid;
  gap: 12px;
  align-content: start;
}

.etapa__meta {
  font-size: 13px;
  color: var(--destaque-texto);
}

.etapa__resumo {
  max-width: 44ch;
  font-size: clamp(17px, 1.6vw, 20px);
  color: var(--texto-2);
}

.etapa__ve {
  display: grid;
  gap: 4px;
  padding-top: 12px;
  border-top: 1px dashed var(--borda);
}

.etapa__numeral {
  position: absolute;
  top: 24px;
  right: 0;
  font-family: var(--font-display);
  font-size: clamp(96px, 16vw, 240px);
  font-weight: 700;
  letter-spacing: -0.06em;
  line-height: 0.8;
  color: var(--superficie);
  z-index: -1;
  user-select: none;
}

/* Card da etapa: mesmo hover dos diferenciais (translate, para não brigar com .revelar) */
.etapa__portal {
  max-width: 480px;
  background: var(--superficie-elevada);
  transition:
    translate 300ms var(--ease-aprumar),
    border-color 300ms ease,
    box-shadow 300ms ease;
}

.etapa__portal:hover {
  translate: 0 -6px;
  border-color: var(--borda-forte);
  box-shadow: var(--sombra-objeto);
}

.painel {
  display: grid;
  justify-items: center;
  gap: 64px;
}

.painel__texto {
  display: grid;
  gap: 20px;
  max-width: var(--largura-texto);
}

@media (min-width: 900px) {
  .linha-tempo {
    padding-left: 48px;
  }

  .etapa {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    padding-block: 96px;
  }

  .etapa__numeral {
    top: 40px;
    right: auto;
    left: 50%;
    translate: -110% 0;
  }


}
</style>
