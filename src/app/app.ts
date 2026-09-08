import { Component, signal } from '@angular/core';
import { AtualizaContador } from './atualiza-contador/atualiza-contador';
import { DobraContador } from "./dobra-contador/dobra-contador";

@Component({
  selector: 'app-root',
  imports: [AtualizaContador, DobraContador],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('contador');
}
