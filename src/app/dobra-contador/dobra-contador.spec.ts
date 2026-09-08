import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DobraContador } from './dobra-contador';

describe('DobraContador', () => {
  let component: DobraContador;
  let fixture: ComponentFixture<DobraContador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DobraContador],
    }).compileComponents();

    fixture = TestBed.createComponent(DobraContador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
