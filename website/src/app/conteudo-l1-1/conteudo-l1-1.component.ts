import { Component, ViewEncapsulation } from '@angular/core';

import {LayoutModule, BreakpointObserver, Breakpoints, MediaMatcher} from '@angular/cdk/layout';
import { Projeto } from '../projeto.dado';

@Component({
  selector: 't-conteudo-l1-1',
  imports: [LayoutModule],
  templateUrl: './conteudo-l1-1.component.html',
  styleUrl: './conteudo-l1-1.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class ConteudoL11Component {
projetos: Array<Projeto>;
  constructor(mediaMatcher: MediaMatcher) {
    // verifica se a largura da viewport (ou outro contexto de renderização) é maior ou igual a 1 pixel.
    // e retorno objeto do tipo MediaQueryList
    const mediaQueryList = mediaMatcher.matchMedia('(min-width: 1px)');
    this.projetos = [
      { title: 'Projeto de Artes Visuais', link: 'https://projeto-de-artes-visuais.web.app' },
      { title: 'Tutoriais de Análise de Dados e Inteligência Artificial', link: 'https://tcarvi-inteligencia-artificial.web.app' },
      { title: 'Projeto de Topografia', link: 'https://engenharia-de-fundacao.web.app' },
      { title: 'Projeto Arquitetônico', link: 'https://engenharia-estrutural.web.app' },
      { title: 'Projeto de Acústica', link: 'https://engenharia-acustica.web.app' },
      { title: 'Projeto de Iluminação', link: 'https://projeto-de-iluminacao.web.app' },
      { title: 'Projeto de Materiais Compósitos', link: 'https://engenharia-estrutural.web.app' },
      { title: 'Projeto de Engenharia Estrutural', link: 'https://engenharia-estrutural.web.app' },
      { title: 'Projeto de Engenharia Geotécnica de Fundação', link: 'https://engenharia-de-fundacao.web.app' }
    ];
  }
}
