# Mapa dos Salários Reais na Espanha

Aplicativo estático altamente visual para comparar salário médio, aluguel, custo de vida e poupança real por província espanhola.

Abra `index.html` no navegador. O app não precisa de build nem servidor.
Access: https://jadsonbarros01-ship-it.github.io/Real-wages/
## Ferramentas

- Simulador de metros quadrados e quantidade de pessoas.
- Campos manuais para salário líquido mensal, aluguel e custo mensal sem aluguel.
- Ranking recalculado em tempo real conforme o cenário.
- Filtros por poupança mínima e esforço máximo de aluguel.
- Shortlist "Só opções viáveis" na tabela.
- Painel de decisão com sobra mensal e projeção de sobra acumulada para a quantidade de meses escolhida.
- Seletor de país com moeda, regiões e premissas ajustadas por país.
- Alternância entre tema escuro e tema claro.
- Imagem de capa editorial no topo do aplicativo.

## Países disponíveis

Espanha usa províncias detalhadas. Portugal, França, Alemanha, Itália, Países Baixos, Reino Unido e Brasil usam modelos regionais comparáveis para simulação. Para decisões reais, revise fontes locais antes de mudança ou contrato de aluguel.

## Instalar no telemóvel

Este app agora é um PWA. Para instalar, ele precisa estar publicado em HTTPS, por exemplo GitHub Pages, Netlify ou Vercel. Abrir direto por `file://` funciona para usar, mas navegadores não instalam PWA a partir de arquivo local.

Depois de publicado:

- Android/Chrome: abra o link e toque em `Instalar app` ou no menu do navegador > `Adicionar à tela inicial`.
- iPhone/Safari: abra o link, toque em `Partilhar` e escolha `Adicionar ao ecrã principal`.

Arquivos PWA incluídos: `manifest.json`, `service-worker.js` e ícones em `icons/`.

## Fontes e método

- Salários: referência INE EAES 2024 e modelagem provincial quando a fonte pública disponível está agregada por comunidade autónoma.
- Aluguel por m²: Idealista/Fotocasa, abril de 2026, com preços provinciais e capitais usados como calibração.
- Custo de vida: calibração provincial baseada em Numbeo Espanha, maio de 2026, ajustada por pressão urbana/turística.

Poupança real = salário líquido mensal estimado - aluguel mensal - custo de vida não-aluguel. O salário líquido usa uma estimativa simplificada de Segurança Social e IRPF para comparação entre províncias, não para cálculo fiscal individual.
