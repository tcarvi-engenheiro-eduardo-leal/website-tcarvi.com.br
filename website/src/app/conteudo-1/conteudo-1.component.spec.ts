import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conteudo1Component } from './conteudo-1.component';

describe('Conteudo1Component', () => {
  let component: Conteudo1Component;
  let fixture: ComponentFixture<Conteudo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conteudo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conteudo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
