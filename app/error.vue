<!-- Página de erro: mensagem curta, sem detalhes técnicos para o visitante -->
<script setup lang="ts">
defineProps<{ error: { statusCode?: number } }>()
</script>

<template>
  <NuxtLayout>
    <section class="container erro">
      <MarcaSimbolo class="erro__simbolo" />
      <p class="dado suave">{{ error.statusCode === 404 ? 'ERRO 404' : 'ERRO' }}</p>
      <h1 class="erro__titulo">{{ error.statusCode === 404 ? 'Essa página saiu do prumo.' : 'Algo saiu do prumo.' }}</h1>
      <button type="button" class="botao botao--principal" @click="clearError({ redirect: '/' })">Voltar para o início</button>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.erro {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 20px;
  justify-items: start;
  padding-block: 120px;
}

.erro__simbolo {
  width: 96px;
  height: 96px;
  rotate: 12deg;
}

.erro__titulo {
  max-width: 14ch;
  font-size: clamp(44px, 8vw, 96px);
  letter-spacing: -0.045em;
  line-height: 0.95;
}
</style>
