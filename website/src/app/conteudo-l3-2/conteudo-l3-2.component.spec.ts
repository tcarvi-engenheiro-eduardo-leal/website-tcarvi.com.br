import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL32Component } from './conteudo-l3-2.component';

describe('ConteudoL32Component', () => {
  let component: ConteudoL32Component;
  let fixture: ComponentFixture<ConteudoL32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL32Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
