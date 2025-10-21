import { Component } from '@angular/core';
import { Seriados } from '../../core/types/types';
import { SeriadosComponent } from '../../core/services/seriados-component.service';

@Component({
  selector: 'app-listagem',
  imports: [],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {
listaSeriados: Seriados[] = [];
  constructor(private service: SeriadosComponent) {}

  
  ngOnInit(): void {
    this.service.listar().subscribe((seriados) => {
      this.listaSeriados = seriados;
    });
  }

  //Esse método serve para excluir um cliente da lista e atualizar a tela automaticamente, sem recarregar a página.
  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        // Remove o cliente com o id correspondente da lista
        this.listaSeriados = this.listaSeriados.filter(seriado => seriado.id !== id);
      });
    }
  }
}
