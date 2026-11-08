<script setup lang="ts">
useSeoMeta({
  title: 'Termos de uso',
  description: 'Termos de uso do site e do portal do cliente da Apruma.',
})
</script>

<template>
  <div>
    <CabecaPagina kicker="Termos" titulo="Termos de uso" texto="As regras de uso do site e do portal do cliente." />
    <TextoLegal
      :secoes="[
        { titulo: 'Sobre este site', texto: 'Este site apresenta os serviços da Apruma. As informações de planos e prazos são de referência; o que vale para cada projeto é a proposta aceita no portal.' },
        { titulo: 'Portal do cliente', texto: 'O portal é de uso pessoal do cliente. Você é responsável pelas informações que envia no briefing e nos comentários.' },
        { titulo: 'Propriedade do site entregue', texto: 'Condições de propriedade e licença do código e do conteúdo a definir no contrato.' },
        { titulo: 'Pagamento', texto: '50% na aprovação da proposta e 50% na entrega, antes da publicação.' },
        { titulo: 'Alterações destes termos', texto: 'Quando os termos mudarem, avisaremos pelo portal com antecedência.' },
      ]"
    />
  </div>
</template>
