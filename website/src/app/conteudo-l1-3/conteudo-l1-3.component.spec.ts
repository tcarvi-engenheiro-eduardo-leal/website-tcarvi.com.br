import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL13Component } from './conteudo-l1-3.component';

describe('ConteudoL13Component', () => {
  let component: ConteudoL13Component;
  let fixture: ComponentFixture<ConteudoL13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
