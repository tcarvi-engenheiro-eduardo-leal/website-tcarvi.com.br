import { Component, ViewEncapsulation } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Site } from '../site';

@Component({
  selector: 't-c2-l1',
  imports: [
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './c2-l1.component.html',
  styleUrl: './c2-l1.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class C2L1Component {
  projetos: Array<Site>;
  pesquisas: Array<Site>;
  produtosMidiaticos: Array<Site>;
  constructor() {
    this.projetos = [
      { title: 'Projeto de Topografia', link: 'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-de-topografia/tree/main/tutorial/docs' },
      { title: 'Projeto Arquitetônico', link: 'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-de-arquitetura/tree/main/website/projeto-de-arquitetura/docs' },
      { title: 'Projeto de Acústica', link: 'https://engenharia-acustica.web.app' },
      { title: 'Projeto de Iluminação', link: 'https://projeto-de-iluminacao.web.app' },
      { title: 'Projeto de Materiais Compósitos', link: 'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-de-materiais-compositos/tree/main/tutorial/docs' },
      { title: 'Projeto de Engenharia Estrutural', link: 'https://engenharia-estrutural.web.app' },
      { title: 'Projeto de Engenharia Geotécnica de Fundação', link: 'https://engenharia-de-fundacao.web.app' }
    ];
    this.pesquisas = [
      { title: 'Pesquisa sobre Inteligência Artificial', link: 'https://tcarvi-inteligencia-artificial.web.app' },
      { title: 'Pesquisa sobre Teoria dos Conjuntos', link: 'https://github.com/tcarvi-engenheiro-eduardo-leal/pesquisa-sobre-teoria-dos-conjuntos/tree/main/website/docs' },
      { title: 'Pesquisa sobre Algebra', link: 'https://github.com/tcarvi-engenheiro-eduardo-leal/pesquisa-sobre-algebra/tree/main/website/docs' },
      { title: 'Pesquisa sobre Algebra Linear', link: 'https://github.com/tcarvi-engenheiro-eduardo-leal/pesquisa-sobre-algebra-linear/tree/main/website/docs' },

    ];
    this.produtosMidiaticos = [
      { title: 'Produto de Artes Visuais', link: 'https://projeto-de-artes-visuais.web.app' },
    ];
  }
}
