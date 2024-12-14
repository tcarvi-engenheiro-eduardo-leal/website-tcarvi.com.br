import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoL22Component } from './conteudo-l2-2.component';

describe('ConteudoL22Component', () => {
  let component: ConteudoL22Component;
  let fixture: ComponentFixture<ConteudoL22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoL22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoL22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
