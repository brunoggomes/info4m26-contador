import { Component, inject } from '@angular/core';
import { ContadorService } from '../contador-service';

@Component({
  imports: [],
  selector: 'app-atualiza-contador',
  styleUrl: './atualiza-contador.scss',
  templateUrl: './atualiza-contador.html',
})
export class AtualizaContador {
  readonly #contadorService = inject(ContadorService)

  get valorAtual() {
    return this.#contadorService.contador()
  }

  inc() {
    this.#contadorService.incrementar()
  }

  dec() {
    this.#contadorService.decrementar()
  }

  reset() {
    this.#contadorService.reiniciar()
  }
}
