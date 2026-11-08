<template>
  <footer class="rodape">
    <div class="container">
      <div class="rodape__colunas">
        <div class="rodape__marca">
          <p class="rodape__frase">Conta a ideia.<br>A gente apruma.</p>
          <p v-if="useAppConfig().contato.cnpj" class="dado suave">CNPJ {{ useAppConfig().contato.cnpj }}</p>
        </div>

        <nav aria-label="Mapa do site">
          <p class="kicker">Site</p>
          <ul>
            <li v-for="item in useAppConfig().navegacao" :key="item.para">
              <NuxtLink :to="item.para">{{ item.rotulo }}</NuxtLink>
            </li>
            <li><NuxtLink to="/contato">Contato</NuxtLink></li>
          </ul>
        </nav>

        <div>
          <p class="kicker">Contato</p>
          <ul>
            <li v-if="useAppConfig().contato.email">
              <a :href="`mailto:${useAppConfig().contato.email}`">{{ useAppConfig().contato.email }}</a>
            </li>
            <li v-else><NuxtLink to="/contato">Fale com a gente</NuxtLink></li>
            <li v-if="useAppConfig().contato.whatsapp"><LinkWhatsapp variante="link">WhatsApp</LinkWhatsapp></li>
            <li class="suave">{{ useAppConfig().contato.horario }}</li>
            <li v-for="rede in useAppConfig().contato.redes" :key="rede.url">
              <a :href="rede.url" rel="noopener" target="_blank">{{ rede.rotulo }}</a>
            </li>
          </ul>
        </div>

        <div>
          <p class="kicker">Legal</p>
          <ul>
            <li><NuxtLink to="/privacidade">Aviso de privacidade</NuxtLink></li>
            <li><NuxtLink to="/termos">Termos de uso</NuxtLink></li>
            <li>
              <button class="rodape__botao" type="button" @click="useCookiesAbertos().value = true">
                Preferências de cookies
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Marca na largura toda: as barras terminam de se alinhar quando o rodapé entra na tela -->
      <div class="rodape__assinatura" aria-hidden="true">
        <MarcaSimbolo class="rodape__simbolo" alinhar />
        <span class="rodape__nome">apruma</span>
      </div>

      <p class="rodape__base dado suave">© {{ new Date().getFullYear() }} Apruma</p>
    </div>
  </footer>
</template>

<style scoped>
.rodape {
  padding-top: 96px;
  background: var(--superficie);
  overflow: hidden;
}

/*
  Celular e tablet: tudo no eixo central (guia de layout). A frase vem primeiro e cada grupo
  de links vira uma linha centralizada que quebra, em vez de colunas desalinhadas.
*/
.rodape__colunas {
  display: grid;
  justify-items: center;
  gap: 40px;
  text-align: center;
}

.rodape__colunas > * {
  display: grid;
  justify-items: center;
}

.rodape .rodape__colunas ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 20px;
  max-width: 34ch;
}

/* Desktop: quatro colunas alinhadas pelo topo */
@media (min-width: 900px) {
  .rodape__colunas {
    grid-template-columns: repeat(4, 1fr);
    justify-items: stretch;
    gap: 40px var(--coluna-gap);
    text-align: left;
  }

  .rodape__colunas > * {
    justify-items: start;
  }

  .rodape .rodape__colunas ul {
    display: grid;
    gap: 10px;
    max-width: none;
  }
}

.rodape__frase {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  max-width: 14ch;
}

.rodape__marca {
  display: grid;
  gap: 16px;
  align-content: start;
}

.rodape .kicker {
  margin-bottom: 16px;
}

.rodape ul {
  display: grid;
  gap: 10px;
  font-size: 15px;
}

.rodape ul a,
.rodape__botao {
  text-decoration: none;
  color: var(--texto-2);
}

.rodape ul a:hover,
.rodape__botao:hover {
  color: var(--texto);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.rodape__botao {
  padding: 0;
  border: 0;
  background: none;
  font-size: 15px;
  cursor: pointer;
}

.rodape__assinatura {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5vw;
  margin-top: 96px;
  user-select: none;
}

.rodape__simbolo {
  flex: none;
  width: 14vw;
  max-width: 180px;
  height: auto;
}

.rodape__nome {
  font-family: var(--font-display);
  font-size: clamp(56px, 19vw, 280px);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 0.8;
  translate: 0 -0.06em;
}

.rodape__base {
  padding: 32px 0 40px;
  font-size: 13px;
  text-align: center;
}
</style>
