<!--
  Mini portal do cliente: muda de tela conforme a etapa ativa.
  As peças de cada tela (.peca, com a ordem em --i) entram tortas e se aprumam em ciclo,
  no mesmo padrão dos cards de diferenciais. Cada portal começa defasado pela própria etapa.
-->
<script setup lang="ts">
defineProps<{ etapa: number }>()
</script>

<template>
  <div class="portal" :style="{ '--etapa': etapa }" role="img" :aria-label="`Portal do cliente na etapa ${etapa + 1}: ${useAppConfig().etapas[etapa]?.oQueVe}`">
    <div class="portal__topo">
      <MarcaSimbolo class="portal__simbolo" />
      <span class="dado">Seu site</span>
      <span class="dado portal__etapa">ETAPA {{ String(etapa + 1).padStart(2, '0') }}</span>
    </div>

    <div class="portal__progresso">
      <div class="portal__trilho">
        <span class="portal__preenchimento" :style="{ transform: `scaleX(${(useAppConfig().etapas[etapa]?.progresso ?? 0) / 100})` }" />
      </div>
      <span class="dado portal__percentual">{{ useAppConfig().etapas[etapa]?.progresso }}%</span>
    </div>

    <Transition name="tela" mode="out-in">
      <!-- 1. Captação -->
      <div v-if="etapa === 0" key="0" class="portal__tela">
        <p class="portal__rotulo">Caixa de entrada</p>
        <div class="portal__email peca" style="--i: 0">
          <strong>Seu acesso à Apruma</strong>
          <span class="suave">Entre pelo link para começar o briefing.</span>
          <span class="portal__botao portal__botao--pulso">Entrar no portal</span>
        </div>
      </div>

      <!-- 2. Briefing -->
      <div v-else-if="etapa === 1" key="1" class="portal__tela portal__chat">
        <p class="portal__balao portal__balao--agente peca" style="--i: 0">Me conta: o que o site precisa resolver?</p>
        <p class="portal__balao peca peca--direita" style="--i: 1">Quero que o paciente marque a consulta sem ligar.</p>
        <p class="portal__balao portal__balao--agente peca" style="--i: 2">Anotado. Quantas especialidades vocês atendem?</p>
      </div>

      <!-- 3. Proposta -->
      <div v-else-if="etapa === 2" key="2" class="portal__tela">
        <p class="portal__rotulo">Proposta</p>
        <ul class="portal__lista">
          <li class="peca" style="--i: 0"><span>Site institucional</span><span class="dado">6 páginas</span></li>
          <li class="peca" style="--i: 1"><span>Revisões</span><span class="dado">3 rodadas</span></li>
          <li class="peca" style="--i: 2"><span>Entrada</span><span class="dado">50%</span></li>
        </ul>
        <span class="portal__botao portal__botao--pulso">Assinar e pagar entrada</span>
      </div>

      <!-- 4. Desenvolvimento -->
      <div v-else-if="etapa === 3" key="3" class="portal__tela">
        <p class="portal__rotulo">Atividades</p>
        <ul class="portal__feed">
          <li class="peca" style="--i: 0"><span>Página de especialidades pronta</span><span class="dado suave">há 4 min</span></li>
          <li class="peca" style="--i: 1"><span>Agendamento conectado</span><span class="dado suave">há 2 h</span></li>
          <li class="peca" style="--i: 2"><span>Home aprovada no layout</span><span class="dado suave">ontem</span></li>
        </ul>
        <p class="dado suave">Faltam duas páginas.</p>
      </div>

      <!-- 5. Revisões -->
      <div v-else-if="etapa === 4" key="4" class="portal__tela">
        <p class="portal__rotulo">Site de teste</p>
        <div class="portal__pagina">
          <span class="portal__bloco portal__bloco--grande" />
          <span class="portal__bloco" />
          <span class="portal__comentario peca peca--direita" style="--i: 1">Trocar a foto do topo?</span>
        </div>
        <span class="portal__botao portal__botao--pulso">Aprovar e publicar</span>
      </div>

      <!-- 6. Pós-venda -->
      <div v-else key="5" class="portal__tela">
        <p class="portal__rotulo">Publicado</p>
        <p class="portal__publicado peca" style="--i: 0"><span class="portal__ponto" /> No ar</p>
        <ul class="portal__lista">
          <li class="peca" style="--i: 1"><span>Manutenção</span><span class="dado">ativa</span></li>
          <li class="peca" style="--i: 2"><span>Pedidos abertos</span><span class="dado">0</span></li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.portal {
  display: grid;
  gap: 20px;
  padding: 24px;
  border: var(--linha);
  border-radius: var(--radius-card);
  background: var(--fundo);
  font-size: 15px;
  min-height: 380px;
  align-content: start;
}

.portal__topo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.portal__simbolo {
  width: 22px;
  height: 22px;
}

.portal__etapa {
  margin-left: auto;
  color: var(--texto-suave);
}

.portal__progresso {
  display: flex;
  align-items: center;
  gap: 12px;
}

.portal__trilho {
  flex: 1;
  height: 8px;
  border-radius: 8px;
  background: var(--borda);
  overflow: hidden;
}

.portal__preenchimento {
  display: block;
  height: 100%;
  border-radius: 8px;
  background: var(--destaque);
  transform-origin: left;
  transition: transform 600ms var(--ease-aprumar);
}

.portal__percentual {
  min-width: 4ch;
  text-align: right;
  font-weight: 500;
}

.portal__tela {
  display: grid;
  gap: 12px;
}

.portal__rotulo {
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--texto-suave);
}

.portal__email,
.portal__pagina {
  display: grid;
  gap: 6px;
  padding: 16px;
  border: var(--linha);
  border-radius: 10px;
  background: var(--superficie);
}

.portal__botao {
  justify-self: start;
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  background: var(--destaque);
  color: var(--sobre-destaque);
  font-size: 13px;
  font-weight: 500;
}

.portal__chat {
  gap: 10px;
}

.portal__balao {
  justify-self: end;
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 14px 14px 4px 14px;
  background: var(--texto);
  color: var(--fundo);
}

.portal__balao--agente {
  justify-self: start;
  border-radius: 14px 14px 14px 4px;
  background: var(--superficie);
  color: var(--texto);
}

.portal__lista,
.portal__feed {
  display: grid;
}

.portal__lista li,
.portal__feed li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-bottom: var(--linha);
}

.portal__feed li {
  padding-left: 16px;
  position: relative;
}

.portal__feed li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--destaque);
  translate: 0 -50%;
}

.portal__pagina {
  position: relative;
  background: var(--fundo);
}

.portal__bloco {
  height: 14px;
  border-radius: 4px;
  background: var(--borda);
}

.portal__bloco--grande {
  height: 64px;
  background: var(--superficie);
}

.portal__comentario {
  position: absolute;
  right: 12px;
  top: 12px;
  padding: 6px 10px;
  border-radius: 10px 10px 10px 2px;
  background: var(--texto);
  color: var(--fundo);
  font-size: 12px;
}

.portal__publicado {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
}

.portal__ponto {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--destaque);
}

.tela-enter-active,
.tela-leave-active {
  transition:
    opacity 200ms ease,
    transform 200ms ease;
}

.tela-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.tela-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
/* ---- Animações em ciclo (6 s), defasadas pela etapa e pela ordem da peça ---- */
.portal {
  --ciclo: 6s;
  --atraso-portal: calc(var(--etapa, 0) * 0.5s);
}

/* Peças surgem do canto (escala), tortas, e se aprumam. Sem opacidade: contraste sempre íntegro */
.peca {
  transform-origin: left bottom;
  animation: peca-entrar var(--ciclo) var(--ease-aprumar) infinite both;
  animation-delay: calc(var(--atraso-portal) + var(--i, 0) * 0.35s);
}

.peca--direita {
  transform-origin: right bottom;
  --torcao: 4deg;
}

@keyframes peca-entrar {
  0% {
    transform: translateY(6px) rotate(var(--torcao, -4deg)) scale(0);
  }
  10%,
  84% {
    transform: none;
  }
  94%,
  100% {
    transform: scale(0);
  }
}

/* A barra de progresso cresce até o valor da etapa a cada ciclo */
.portal__preenchimento {
  animation: barra-crescer var(--ciclo) var(--ease-aprumar) var(--atraso-portal) infinite both;
}

@keyframes barra-crescer {
  0% {
    scale: 0.9 1;
  }
  30%,
  100% {
    scale: 1 1;
  }
}

/* Botão de ação pulsa de leve, pedindo o próximo passo */
.portal__botao--pulso {
  animation: pulso var(--ciclo) var(--ease-aprumar) var(--atraso-portal) infinite both;
}

@keyframes pulso {
  0%,
  40%,
  60%,
  100% {
    scale: 1;
  }
  50% {
    scale: 1.06;
  }
}

/* "No ar": o ponto emite um anel, como sinal de site ativo */
.portal__ponto {
  position: relative;
}

.portal__ponto::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--destaque);
  animation: anel 2s ease-out infinite;
}

@keyframes anel {
  from {
    opacity: 0.8;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2.6);
  }
}

@media (prefers-reduced-motion: reduce) {
  .peca,
  .portal__preenchimento,
  .portal__botao--pulso,
  .portal__ponto::after {
    animation: none;
  }
}
</style>
