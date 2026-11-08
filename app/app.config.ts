// Conteúdo do site institucional. Os componentes leem daqui com useAppConfig().
// Itens com `exemplo: true` são textos provisórios: trocar por dados reais
// (com autorização registrada do cliente) antes de publicar.
export default defineAppConfig({
  marca: {
    nome: 'Apruma',
    frase: 'Conta a ideia. A gente apruma.',
    descricao:
      'Sites sob medida a partir de uma conversa. Você conta a ideia ao nosso agente e acompanha a construção em tempo real até a publicação.',
  },

  navegacao: [
    { rotulo: 'Como funciona', para: '/como-funciona' },
    { rotulo: 'Portfólio', para: '/portfolio' },
    { rotulo: 'Planos', para: '/planos' },
    { rotulo: 'Sobre', para: '/sobre' },
    { rotulo: 'Suporte', para: '/suporte' },
  ],

  // Endereço do portal do cliente (aplicação separada, fora deste site)
  portal: '/portal',

  // Preencher quando houver canal oficial. Campos vazios não aparecem no site.
  contato: {
    email: '',
    // WhatsApp da empresa: só dígitos, com DDI e DDD (ex.: 55 + DDD + número). Vazio esconde os links.
    whatsapp: '5534993169939',
    whatsappMensagem: 'Olá! Quero conversar sobre um site com a Apruma.',
    horario: 'Segunda a sexta, das 9h às 18h',
    cnpj: '',
    redes: [] as { rotulo: string; url: string }[],
  },

  // Números reais apenas. Lista vazia esconde a seção (roteiro 4.1).
  provaRapida: [] as { valor: string; rotulo: string }[],

  // Exemplos que aparecem no campo de briefing. `etiqueta: true` vira etiqueta inline.
  exemplosBriefing: [
    [
      { texto: 'Quero um ' },
      { texto: 'site institucional', etiqueta: true },
      { texto: ' para minha ' },
      { texto: 'clínica', etiqueta: true },
      { texto: ' que ' },
      { texto: 'receba agendamentos', etiqueta: true },
    ],
    [
      { texto: 'Preciso de uma ' },
      { texto: 'landing page', etiqueta: true },
      { texto: ' para lançar meu ' },
      { texto: 'curso online', etiqueta: true },
      { texto: ' em ' },
      { texto: 'três semanas', etiqueta: true },
    ],
    [
      { texto: 'Quero um ' },
      { texto: 'portfólio', etiqueta: true },
      { texto: ' para meu ' },
      { texto: 'estúdio de arquitetura', etiqueta: true },
      { texto: ' com ' },
      { texto: 'projetos por categoria', etiqueta: true },
    ],
  ],

  etapas: [
    {
      titulo: 'Captação',
      resumo: 'Cadastro rápido. Você recebe um link no e-mail e já entra no portal.',
      oQueVe: 'Um e-mail com o link de acesso.',
      prazo: 'no mesmo dia',
      progresso: 5,
    },
    {
      titulo: 'Briefing com o agente',
      resumo: 'Você conta a ideia no chat, no seu tempo. Sem reunião para começar.',
      oQueVe: 'O chat com o agente e o resumo do briefing.',
      prazo: '~1 dia',
      progresso: 15,
    },
    {
      titulo: 'Proposta e contrato',
      resumo: 'A proposta aparece no painel. Assinatura eletrônica e entrada de 50%.',
      oQueVe: 'A proposta, o contrato e o link de pagamento.',
      prazo: '~2 dias',
      progresso: 25,
    },
    {
      titulo: 'Desenvolvimento',
      resumo: 'A barra avança por esforço real. Cada entrega aparece no feed.',
      oQueVe: 'A barra de progresso e o feed de atividades.',
      prazo: '~2 semanas',
      progresso: 62,
    },
    {
      titulo: 'Revisões e entrega',
      resumo: 'Você comenta direto no site de teste, aprova, paga o restante e publicamos.',
      oQueVe: 'O site de teste com comentários e o botão de aprovar.',
      prazo: '~3 dias',
      progresso: 90,
    },
    {
      titulo: 'Pós-venda',
      resumo: 'Manutenção, suporte e ajustes pelo mesmo portal.',
      oQueVe: 'O site no ar e o canal de suporte.',
      prazo: 'contínuo',
      progresso: 100,
    },
  ],

  diferenciais: [
    { titulo: 'Sem reunião para começar', texto: 'O briefing é uma conversa no chat, no horário que for melhor para você.', fragmento: 'chat' },
    { titulo: 'Progresso em tempo real', texto: 'Você sabe em que ponto o site está, sem precisar perguntar.', fragmento: 'barra' },
    { titulo: 'Sob medida de verdade', texto: 'Nada de tema pronto. Cada bloco nasce do seu briefing.', fragmento: 'versoes' },
    { titulo: 'Pagamento em duas etapas', texto: '50% na aprovação da proposta e 50% na entrega.', fragmento: 'pagamento' },
  ],

  principios: [
    { titulo: 'Transparência', texto: 'Você vê o progresso real, não um status genérico.' },
    { titulo: 'Sob medida', texto: 'Cada site nasce do seu briefing, não de um tema pronto.' },
    { titulo: 'Prazos claros', texto: 'Cada etapa tem prazo médio, e o portal mostra o que depende de você.' },
  ],

  cases: [
    {
      slug: 'clinica-odontologica',
      cliente: 'Clínica odontológica',
      tipo: 'Institucional',
      prazo: '18 dias',
      resultado: 'Agendamentos pelo site desde a primeira semana',
      briefing: 'Quero que o paciente marque a consulta sem precisar ligar.',
      problema: 'Todos os agendamentos dependiam de telefone em horário comercial.',
      solucao: 'Site institucional com página por especialidade e agendamento integrado.',
      cor: '#d9e4dd',
      exemplo: true,
    },
    {
      slug: 'estudio-de-arquitetura',
      cliente: 'Estúdio de arquitetura',
      tipo: 'Portfólio',
      prazo: '21 dias',
      resultado: 'Portfólio por categoria, atualizado pelo próprio estúdio',
      briefing: 'Nossos projetos estão espalhados em PDFs. Queremos um lugar só.',
      problema: 'Projetos enviados um a um em PDF, sem um endereço para indicar.',
      solucao: 'Portfólio com filtros por categoria e páginas de projeto com fotos grandes.',
      cor: '#e6ded3',
      exemplo: true,
    },
    {
      slug: 'curso-online',
      cliente: 'Curso online',
      tipo: 'Landing page',
      prazo: '9 dias',
      resultado: 'Página de lançamento no ar antes da abertura das vendas',
      briefing: 'Preciso de uma página para lançar o curso em três semanas.',
      problema: 'Lançamento marcado e nenhuma página para receber as inscrições.',
      solucao: 'Landing page com programa, depoimentos e lista de espera.',
      cor: '#f1dcd0',
      exemplo: true,
    },
  ],

  tiposDeCase: ['Landing page', 'Institucional', 'Portfólio', 'Loja'],

  depoimentos: [
    {
      resultado: 'No ar em 18 dias',
      citacao: 'Contei a ideia num domingo à noite e na segunda já tinha o resumo do briefing. Acompanhei cada etapa pelo portal sem precisar mandar mensagem.',
      nome: 'Nome do cliente',
      empresa: 'Clínica odontológica',
      exemplo: true,
    },
    {
      resultado: 'Lançamento sem atraso',
      citacao: 'A barra de progresso parece detalhe, mas foi o que me deixou tranquila durante o lançamento.',
      nome: 'Nome do cliente',
      empresa: 'Curso online',
      exemplo: true,
    },
  ],

  planos: {
    inclui: [
      'Briefing com o agente, sem reunião',
      'Portal com progresso em tempo real',
      'Site de teste com comentários',
      'Publicação no seu domínio',
      'Pagamento em duas etapas',
    ],
    // `preco: ''` mostra "Sob consulta" até os valores serem definidos
    pacotes: [
      { nome: 'Landing', para: 'Uma página para lançar algo', paginas: '1 página', revisoes: '2 rodadas', prazo: '~10 dias', preco: '', destaque: false },
      { nome: 'Institucional', para: 'O site da sua empresa', paginas: 'até 6 páginas', revisoes: '3 rodadas', prazo: '~3 semanas', preco: '', destaque: true },
      { nome: 'Sob medida', para: 'Loja, portal ou algo maior', paginas: 'a definir', revisoes: 'a definir', prazo: 'a definir', preco: '', destaque: false },
    ],
    manutencao: {
      titulo: 'Manutenção mensal',
      texto: 'Ajustes de conteúdo, atualizações e suporte pelo mesmo portal, sem contrato novo a cada pedido.',
      preco: '',
    },
  },

  faq: [
    { tema: 'Processo', pergunta: 'Preciso de reunião para começar?', resposta: 'Não. O briefing é feito em conversa com o nosso agente, no chat, no seu tempo. Se preferir conversar com alguém da equipe, é só pedir.', home: true },
    { tema: 'Processo', pergunta: 'Como acompanho o andamento?', resposta: 'Pelo portal do cliente. A barra de progresso avança por esforço real e o feed mostra cada entrega.', home: true },
    { tema: 'Pagamento', pergunta: 'Como funciona o pagamento?', resposta: '50% na aprovação da proposta e 50% na entrega, antes da publicação.', home: true },
    { tema: 'Prazos', pergunta: 'Quanto tempo leva?', resposta: 'Depende do pacote. Uma landing page leva cerca de 10 dias; um site institucional, cerca de 3 semanas. O prazo exato vem na proposta.', home: true },
    { tema: 'Processo', pergunta: 'Quantas revisões estão incluídas?', resposta: 'Cada pacote tem um número de rodadas de revisão. Você comenta direto no site de teste.', home: true },
    { tema: 'Manutenção', pergunta: 'Vocês cuidam do site depois de publicado?', resposta: 'Sim, pelo plano de manutenção mensal. Os pedidos são abertos pelo mesmo portal.', home: false },
    { tema: 'Dados', pergunta: 'O que acontece com o que eu escrevo no chat?', resposta: 'O conteúdo do briefing é usado só para montar a proposta e o seu site. Os detalhes estão no aviso de privacidade.', home: false },
    { tema: 'Prazos', pergunta: 'E se eu precisar de mais tempo para aprovar?', resposta: 'O prazo de entrega considera as suas respostas. O portal mostra quando algo depende de você.', home: false },
  ],
})
