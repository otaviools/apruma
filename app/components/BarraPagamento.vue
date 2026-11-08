<!-- Pagamento em duas etapas: metade na proposta, metade na entrega -->
<template>
  <div class="pagamento">
    <p class="kicker">Como você paga</p>
    <div class="pagamento__barra" role="img" aria-label="50% na aprovação da proposta e 50% na entrega">
      <span class="pagamento__parte pagamento__parte--primeira dado">50%</span>
      <span class="pagamento__parte dado">50%</span>
    </div>
    <div class="pagamento__legenda">
      <span>na aprovação da proposta</span>
      <span>na entrega, antes de publicar</span>
    </div>
  </div>
</template>

<style scoped>
.pagamento {
  display: grid;
  gap: 12px;
}

.pagamento__barra {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}

.pagamento__parte {
  padding: 14px 16px;
  border-radius: 8px;
  background: var(--borda);
  font-weight: 500;
}

.pagamento__parte--primeira {
  background: var(--destaque);
  color: var(--sobre-destaque);
}

.pagamento__legenda {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  font-size: 14px;
  color: var(--texto-2);
}
</style>
