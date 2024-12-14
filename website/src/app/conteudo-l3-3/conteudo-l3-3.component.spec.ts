import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL33Component } from './conteudo-l3-3.component';

describe('ConteudoL33Component', () => {
  let component: ConteudoL33Component;
  let fixture: ComponentFixture<ConteudoL33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
