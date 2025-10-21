import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Seriados } from '../../core/types/types';
import { SeriadosComponent } from '../../core/services/seriados-component.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  titulo = 'Cadastro de seriados';
  seriado: Seriados = {} as Seriados;

  constructor(
    private service: SeriadosComponent,
    private router: Router
  ) { }

  submeter() {
    this.service.salvar(this.seriado).subscribe(() => {
      this.router.navigate(['/listagem']);
    });
  }
}
