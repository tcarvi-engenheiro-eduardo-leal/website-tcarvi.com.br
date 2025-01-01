# Design Responsivo

## Use uma estrutura padrão para o arquivo scss:
```scss
:host {
  grid-area: headerArea;
  background: gray;
}

:host .encapsulado {
  overflow-wrap: break-word; /* Força quebra de palavras */
  word-wrap: break-word; /* Compatibilidade com navegadores antigos */
  word-break: break-word; /* Opcional, força quebra entre palavras longas */
  max-width: 100%; /* Limita a largura ao tamanho do contêiner pai */
  display: inline-block; /* Necessário para aplicar max-width */
}

/* Responsividade */

/*
 * Extra Small (XSmall)
 * Breakpoints.XSmall
 * Menor que 600px
 */
@media (max-width: 599px) {
  :host {
  }
}

/*
 * Small
 * Breakpoints.Small
 * De 600px até 959px
 */
@media (min-width: 600px) and (max-width: 959px) {
  :host {
  }
}

/*
 * Medium
 * Breakpoints.Medium
 * De 960px até 1279px
 */
@media (min-width: 960px) and (max-width: 1279px) {
  :host {
  }
}

/*
 * Large
 * Breakpoints.Large
 * De 1280px até 1919px
 */
@media (min-width: 1280px) and (max-width: 1919px) {
  :host {
  }
}

/*
 * Extra Large (XLarge)
 * Breakpoints.XLarge
 * A partir de 1920px
 */
@media (min-width: 1920px) {
  :host {
  }
}
```

## Use grid para a responsividade
- Cada componente, deve ter grid-area definido como :host
```scss
:host {
    grid-area: nomeDaArea;
}
```
- Defina também design para classe que não permite que textos quebrem a responsividade dos componentes pai:
```scss
:host .encapsulado {
  overflow-wrap: break-word; /* Força quebra de palavras */
  word-wrap: break-word; /* Compatibilidade com navegadores antigos */
  word-break: break-word; /* Opcional, força quebra entre palavras longas */
  max-width: 100%; /* Limita a largura ao tamanho do contêiner pai */
  display: inline-block; /* Necessário para aplicar max-width */
}
```
- Para o layout, que é pai dos conteúdos:
```scss
:host {
  // Padrão para a responsividade
  display: grid;
  // 100vh garante que o contêiner ocupe 100% da altura da janela, independentemente do tamanho da tela.
  height: 100vh;
}
```
- Agora o layout deve usar o grid para a responsividade, indicando as propriedades, para cada valor de media querie:
  - grid-template-areas: "nomeArea1" "nomeArea2 nomeArea3";
  - grid-template-columns: 1fr 2 fr;
  - grid-template-rows: auto 1fr auto; /* Linhas ajustáveis */
  - gap: 5px;
  