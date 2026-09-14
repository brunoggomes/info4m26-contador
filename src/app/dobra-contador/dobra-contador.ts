import { Component, computed, inject } from '@angular/core';
import { ContadorService } from '../contador-service';

@Component({
  imports: [],
  selector: 'app-dobra-contador',
  styleUrl: './dobra-contador.scss',
  templateUrl: './dobra-contador.html',
})
export class DobraContador {
    readonly #contadorService = inject(ContadorService)

    dobro = computed(() => 
      {
        return this.#contadorService.contador() * 2
      })
}
