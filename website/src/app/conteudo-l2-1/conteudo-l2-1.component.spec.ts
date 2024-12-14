import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL21Component } from './conteudo-l2-1.component';

describe('ConteudoL21Component', () => {
  let component: ConteudoL21Component;
  let fixture: ComponentFixture<ConteudoL21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
