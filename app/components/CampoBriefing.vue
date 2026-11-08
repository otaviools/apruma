<!--
  Campo "Conta a ideia". O texto fica em useState('briefing'), compartilhado com a página
  de contato: não vai para a URL nem para o servidor (roteiro, seção 10).
  Os exemplos se escrevem sozinhos só com CSS e somem quando o campo recebe foco ou texto.
-->
<script setup lang="ts">
defineProps<{ id: string; rotulo?: string }>()
</script>

<template>
  <form class="briefing" @submit.prevent="navigateTo('/contato')">
    <label :for="id" class="kicker">{{ rotulo ?? 'Conte a sua ideia' }}</label>
    <div class="briefing__campo">
      <textarea
        :id="id"
        v-model="useBriefing().value"
        name="briefing"
        rows="3"
        maxlength="1000"
        minlength="10"
        required
        placeholder=" "
        :aria-describedby="`${id}-aviso`"
      />
      <p class="briefing__exemplos" aria-hidden="true">
        <span v-for="(exemplo, indice) in useAppConfig().exemplosBriefing" :key="indice" class="briefing__exemplo" :style="{ '--ordem': indice }">
          <template v-for="parte in exemplo" :key="parte.texto">
            <mark v-if="parte.etiqueta">{{ parte.texto }}</mark>
            <template v-else>{{ parte.texto }}</template>
          </template>
        </span>
      </p>
      <button type="submit" class="botao botao--principal briefing__enviar">Aprumar</button>
    </div>
    <p :id="`${id}-aviso`" class="briefing__aviso suave">
      Usamos o texto só para começar o seu briefing.
      <NuxtLink to="/privacidade" class="link">Aviso de privacidade</NuxtLink>
    </p>
  </form>
</template>

<style scoped>
.briefing {
  /* Altura da área onde os exemplos aparecem; também é o quanto eles se deslocam ao entrar e sair */
  --faixa: 112px;
  display: grid;
  gap: 10px;
  width: 100%;
  max-width: 720px;
  text-align: left;
}

.briefing__campo {
  position: relative;
  display: grid;
  border: 1px solid var(--borda-forte);
  border-radius: var(--radius-card);
  background: var(--superficie-elevada);
  box-shadow: 0 24px 48px -28px rgb(0 0 0 / 0.35);
  transition:
    box-shadow 160ms ease,
    border-color 160ms ease;
}

.briefing__campo:focus-within {
  border-color: var(--texto);
  box-shadow:
    0 0 0 3px color-mix(in srgb, var(--destaque) 35%, transparent),
    0 24px 48px -28px rgb(0 0 0 / 0.35);
}

textarea,
.briefing__exemplos {
  grid-area: 1 / 1;
  padding: 20px 20px 76px;
  font-size: 18px;
  line-height: 1.5;
}

textarea {
  width: 100%;
  min-height: 150px;
  border: 0;
  border-radius: var(--radius-card);
  background: transparent;
  resize: vertical;
}

textarea:focus-visible {
  outline: none;
}

.briefing__exemplos {
  display: grid;
  margin: 0;
  pointer-events: none;
  color: var(--texto-suave);
  /* Recorta a área do texto: o exemplo entra por baixo e sai por cima sem aparecer fora dela */
  clip-path: inset(16px 0 calc(100% - var(--faixa)) 0);
}

/* Some quando a pessoa foca ou escreve */
textarea:focus + .briefing__exemplos,
textarea:not(:placeholder-shown) + .briefing__exemplos {
  visibility: hidden;
}

/* Fora da animação, cada exemplo fica abaixo da área recortada (--faixa: altura da área visível dos exemplos) */
.briefing__exemplo {
  grid-area: 1 / 1;
  transform: translateY(var(--faixa));
  animation: escrever 12s var(--ease-aprumar) infinite;
  animation-delay: calc(var(--ordem) * 4s);
}

mark {
  padding: 1px 8px;
  border-radius: 6px;
  background: var(--superficie);
  color: var(--texto);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* Cada exemplo sobe levemente torto, se apruma, fica um tempo e sai por cima (só transform) */
@keyframes escrever {
  0% {
    transform: translateY(var(--faixa)) rotate(1.5deg);
  }
  4%,
  30% {
    transform: none;
  }
  33%,
  100% {
    transform: translateY(calc(var(--faixa) * -1));
  }
}

.briefing__exemplo {
  transform-origin: left center;
}

.briefing__enviar {
  position: absolute;
  right: 12px;
  bottom: 12px;
}

.briefing__aviso {
  font-size: 14px;
}

/* Celular: o campo é estreito e um exemplo chega a quatro linhas */
@media (max-width: 600px) {
  .briefing {
    --faixa: 136px;
  }

  textarea,
  .briefing__exemplos {
    font-size: 16px;
  }

  textarea {
    min-height: 200px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .briefing__exemplo {
    animation: none;
  }

  .briefing__exemplo:first-child {
    transform: none;
  }
}
</style>
