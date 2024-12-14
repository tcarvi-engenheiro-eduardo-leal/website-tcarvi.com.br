import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL11Component } from './conteudo-l1-1.component';

describe('ConteudoL11Component', () => {
  let component: ConteudoL11Component;
  let fixture: ComponentFixture<ConteudoL11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
