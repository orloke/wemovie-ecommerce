# WeMovie Ecommerce

Este é um projeto frontend desenvolvido utilizando React, Next.js 14, TypeScript, Tailwind CSS e Shadcn. **Preferi usar o Tailwind CSS em vez de styled-components porque o styled-components não funciona corretamente com o Next.js 14. O Next.js 14 agora pode renderizar componentes interiros do lado do servidor, e o styled-component não suporta isso, de acordo com a propria documentação do [Nextjs](https://nextjs.org/docs/app/building-your-application/styling/css-in-js). Além do mais, Tailwind é perfeito para ser usado junto com o Shadcn, que é uma biblioteca muito boa para criar componentes de interface**.

## Link do projeto
[WeMovie Ecommerce](https://wemovie-ecommerce-roan.vercel.app/)

## Tecnologias Utilizadas
- React
- Next.js
- TypeScript
- Tailwind CSS
- Shadcn

### :atom_symbol: Por que React?
React é uma biblioteca JavaScript popular para construção de interfaces de usuário. Ele oferece diversas vantagens, tais como:
- **Componentização**: Permite a criação de componentes reutilizáveis, facilitando a manutenção e escalabilidade do código.
- **Virtual DOM**: Aumenta a performance ao minimizar operações diretas no DOM real.
- **Comunidade e Ecossistema**: Possui uma vasta comunidade e uma grande quantidade de bibliotecas e ferramentas complementares.
- **JSX**: Sintaxe que permite escrever HTML dentro do JavaScript, tornando o código mais legível e expressivo.

### :fast_forward: Por que Next.js?
Next.js é um framework para React que facilita a construção de aplicações web com várias funcionalidades avançadas:
- **Renderização no Lado do Servidor (SSR)**: Melhora o desempenho e a indexação por motores de busca.
- **Geração de Sites Estáticos (SSG)**: Cria páginas estáticas otimizadas, proporcionando carregamento mais rápido.
- **Rotas Automáticas**: Simplifica a criação de rotas sem a necessidade de configuração adicional.
- **API Routes**: Permite a criação de endpoints de API dentro do projeto, facilitando a construção de backends leves.
- **Optimização de Imagens**: Fornece um componente integrado para otimizar e carregar imagens de forma eficiente.
- **Cache de Páginas**: Armazena os dados renderizados em cache, aumentando a velocidade de carregamento.

### :label: Por que TypeScript?
TypeScript é uma linguagem de programação que adiciona tipagem estática ao JavaScript:
- **Detecção de Erros em Tempo de Desenvolvimento**: Reduz erros ao fornecer verificação de tipos durante a escrita do código.
- **Documentação Implícita**: Tipos ajudam a entender o código e suas expectativas de entrada e saída.
- **Refatoração Segura**: Facilita a refatoração do código com mais confiança.
- **Ferramentas de Desenvolvimento**: Melhor integração com editores e IDEs, oferecendo autocompletar e navegação aprimorada.

### :art: Por que Tailwind CSS?
Tailwind CSS é um framework de utilitários CSS que permite a criação rápida e eficiente de interfaces:
- **Utility-First**: Fornece classes utilitárias prontas para estilizar diretamente no HTML.
- **Consistência**: Ajuda a manter estilos consistentes em todo o projeto.
- **Personalização**: Altamente configurável através do arquivo `tailwind.config.js`.
- **Desempenho**: Gera arquivos CSS menores ao eliminar estilos não utilizados na produção.
- **Produtividade**: Acelera o desenvolvimento, evitando a necessidade de escrever CSS personalizado para cada componente.
- **Melhor que styled-components**:
  - **Renderização no Lado do Servidor (SSR)**: Tailwind CSS é totalmente compatível com SSR, enquanto styled-components pode exigir configurações adicionais para funcionar corretamente.
  - **Tamanho do Bundle**: Tailwind CSS gera arquivos CSS otimizados e menores, enquanto styled-components pode aumentar o tamanho do bundle devido ao CSS-in-JS.
  - **Simplicidade**: Com Tailwind CSS, não é necessário lidar com strings de template para estilização, o que pode ser mais intuitivo e menos propenso a erros.
  - **Desempenho**: Tailwind CSS não sofre com a sobrecarga de tempo de execução que styled-components pode ter devido à geração dinâmica de estilos.

### :artificial_satellite: Por que Shadcn?
Shadcn é uma biblioteca de componentes que oferece uma variedade de componentes estilizados e prontos para uso:
- **Componentes Pré-Construídos**: Fornece componentes estilizados que podem ser facilmente integrados e personalizados.
- **Design Consistente**: Garantia de uma aparência uniforme em toda a aplicação.
- **Customização**: Componentes podem ser facilmente ajustados para se alinhar à identidade visual do projeto.
- **Economia de Tempo**: Acelera o desenvolvimento ao reduzir a necessidade de criar componentes do zero.



