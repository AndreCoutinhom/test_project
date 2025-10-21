import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SeriadosComponent } from '../../core/services/seriados-component.service';

@Component({
  selector: 'app-exclusao',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './exclusao.component.html',
  styleUrl: './exclusao.component.css'
})
export class ExclusaoComponent {
idExcluir: number | null = null;
  mensagemSucesso: string = '';
  erroMensagem: string = '';

  // CONSTRUCTOR correto com Router injetado
  constructor(
    private seriadosService: SeriadosComponent,
    private router: Router   // <- AQUI!
  ) { }

  excluirSeriado(): void {
    this.mensagemSucesso = '';
    this.erroMensagem = '';

    if (this.idExcluir != null) {
      this.seriadosService.excluir(this.idExcluir).subscribe({
        next: () => {
          this.mensagemSucesso = `Seriado com ID ${this.idExcluir} excluído com sucesso.`;
          this.idExcluir = null;
        },
        error: () => {
          this.erroMensagem = `Erro ao excluir o seriado.`;
        }
      });
    }
  }  
}
