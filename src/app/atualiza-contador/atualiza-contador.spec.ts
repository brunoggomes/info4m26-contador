import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizaContador } from './atualiza-contador';

describe('AtualizaContador', () => {
  let component: AtualizaContador;
  let fixture: ComponentFixture<AtualizaContador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizaContador],
    }).compileComponents();

    fixture = TestBed.createComponent(AtualizaContador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
