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
      { title: 'Projeto de Topografia', link: 'https://engenharia-de-fundacao.web.app' },
      { title: 'Projeto Arquitetônico', link: 'https://engenharia-estrutural.web.app' },
      { title: 'Projeto de Acústica', link: 'https://engenharia-acustica.web.app' },
      { title: 'Projeto de Iluminação', link: 'https://projeto-de-iluminacao.web.app' },
      { title: 'Projeto de Materiais Compósitos', link: 'https://engenharia-estrutural.web.app' },
      { title: 'Projeto de Engenharia Estrutural', link: 'https://engenharia-estrutural.web.app' },
      { title: 'Projeto de Engenharia Geotécnica de Fundação', link: 'https://engenharia-de-fundacao.web.app' }
    ];
    this.pesquisas = [
      { title: 'Análise de Dados e Inteligência Artificial', link: 'https://tcarvi-inteligencia-artificial.web.app' },
    ];
    this.produtosMidiaticos = [
      { title: 'Artes Visuais', link: 'https://projeto-de-artes-visuais.web.app' },
    ];
  }
}
