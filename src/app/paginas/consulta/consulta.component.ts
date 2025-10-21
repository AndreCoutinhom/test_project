import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeriadosComponent } from '../../core/services/seriados-component.service';
import { Seriados } from '../../core/types/types';

@Component({
  selector: 'app-consulta',
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {
  idBusca: number | null = null;
  seriadoEncontrado: Seriados | null = null;
  erroBusca: string = '';

  constructor(private medicamentosService: SeriadosComponent) { }

  buscarSeriado(): void {
    this.erroBusca = '';
    this.seriadoEncontrado = null;

    if (this.idBusca != null) {
      
      this.medicamentosService.buscarPorId(this.idBusca).subscribe({
        next: (seriado) => {
          if (seriado) {
            this.seriadoEncontrado = seriado;
          } else {
            this.erroBusca = 'Seriado não encontrado.';
          }
        },
        error: () => {
          this.erroBusca = 'Erro ao buscar seriado.';
        }
      });
    }
  }
}
