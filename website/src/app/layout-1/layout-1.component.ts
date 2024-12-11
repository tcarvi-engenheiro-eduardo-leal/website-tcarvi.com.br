import {Component, OnDestroy, inject, } from '@angular/core';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { Conteudo1Component } from '../conteudo-1/conteudo-1.component';

@Component({
  selector: 'app-layout-1',
  imports: [LayoutModule, Conteudo1Component],
  templateUrl: './layout-1.component.html',
  styleUrl: './layout-1.component.css'
})
export class Layout1Component implements OnDestroy {
  destroyed = new Subject<void>();
  currentScreenSize = '';
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  constructor() {
    inject(BreakpointObserver)
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          // query tem, por exemplo, valor: (max-width: 599.98px)
          // result.breakpoints[query] gera valor true ou false.
          // Se o retorno for true, deve-se gravar o valor da query.
          // Grava-se o valor da query como uma string. String que representa o tamanho.
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            // string da variável pode agora ser usado com @If, no html
          }
        }
      });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
