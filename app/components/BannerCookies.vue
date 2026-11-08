<!--
  Banner de cookies (roteiro 5 e 10): aceitar, recusar e preferências com o mesmo destaque.
  Hoje o site não usa cookies não essenciais; o banner já guarda a escolha para quando
  houver medição de audiência. A escolha fica no cookie "apruma-consentimento".
-->
<script setup lang="ts">
// Única referência reativa do componente: o cookie precisa ser o mesmo ref para ler e gravar
const consentimento = useCookie<'aceito' | 'recusado' | null>('apruma-consentimento', {
  maxAge: 60 * 60 * 24 * 180,
  sameSite: 'lax',
})
</script>

<template>
  <ClientOnly>
    <aside
      v-if="!consentimento || useCookiesAbertos().value"
      class="cookies"
      aria-labelledby="cookies-titulo"
    >
      <div class="cookies__texto">
        <p id="cookies-titulo" class="cookies__titulo">Cookies</p>
        <p>
          Usamos só o essencial para o site funcionar. Se um dia usarmos medição de audiência, ela só liga com o seu aceite.
          <NuxtLink to="/privacidade" class="cookies__link">Saiba mais</NuxtLink>
        </p>
        <details class="cookies__preferencias">
          <summary>Preferências</summary>
          <ul>
            <li><strong>Essenciais</strong> · sempre ativos. Guardam esta escolha.</li>
            <li><strong>Medição de audiência</strong> · ligado só se você aceitar.</li>
          </ul>
        </details>
      </div>
      <div class="cookies__acoes">
        <button
          v-for="opcao in [{ valor: 'aceito', rotulo: 'Aceitar' }, { valor: 'recusado', rotulo: 'Recusar' }] as const"
          :key="opcao.valor"
          type="button"
          class="botao botao--pequeno cookies__botao"
          @click="(consentimento = opcao.valor), (useCookiesAbertos().value = false)"
        >
          {{ opcao.rotulo }}
        </button>
      </div>
    </aside>
  </ClientOnly>
</template>

<style scoped>
.cookies {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  z-index: 50;
  display: grid;
  gap: 16px;
  max-width: 560px;
  padding: 20px;
  border-radius: var(--radius-card);
  background: var(--texto);
  color: var(--fundo);
  font-size: 14px;
}

.cookies__texto {
  display: grid;
  gap: 8px;
}

.cookies__titulo {
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--borda);
}

.cookies__link {
  color: var(--fundo);
  text-underline-offset: 3px;
}

.cookies__preferencias summary {
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.cookies__preferencias ul {
  display: grid;
  gap: 6px;
  margin-top: 8px;
  color: var(--borda);
}

.cookies__acoes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

/* Aceitar e Recusar com o mesmo destaque visual */
.cookies__botao {
  border-color: var(--fundo);
  background: transparent;
  color: var(--fundo);
}

.cookies__botao:hover {
  background: var(--fundo);
  color: var(--texto);
}
</style>
