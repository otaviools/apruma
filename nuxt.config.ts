// Configuração do site institucional da Apruma (sem APIs por enquanto)
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxtjs/color-mode'],

  // Tema claro/escuro: segue o sistema e permite trocar no cabeçalho (classe .dark no <html>)
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'apruma-tema',
  },
  css: ['~/assets/css/base.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#FAFAF7' }],
    },
  },

  // Fontes auto-hospedadas no build: nenhuma requisição ao Google no navegador do visitante
  fonts: {
    // Só o subconjunto latino (cobre todos os acentos do português): menos arquivos de fonte
    defaults: { subsets: ['latin'] },
    families: [
      // Pré-carrega só as fontes da primeira dobra (título e texto), para a troca não mover o layout
      { name: 'Bricolage Grotesque', provider: 'google', weights: [600, 700], preload: { weights: [700] } },
      { name: 'Instrument Sans', provider: 'google', weights: [400, 500], preload: { weights: [400] } },
      { name: 'Geist Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  // Transição nativa entre a lista do portfólio e a página do case
  experimental: { viewTransition: true },

  // Todas as páginas são estáticas e geradas no build
  routeRules: {
    // Arquivos com hash no nome nunca mudam: cache de um ano no navegador
    '/_nuxt/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
    },
    '/_fonts/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
    },
    '/**': {
      prerender: true,
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
  },

  // O portal do cliente é outra aplicação: o gerador não deve tentar renderizá-lo
  nitro: {
    prerender: { ignore: ['/portal'] },
  },

  typescript: { strict: true },
})
