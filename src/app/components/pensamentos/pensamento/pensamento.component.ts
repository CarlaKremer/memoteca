import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'a',
    autoria: 'a',
    modelo: 'modelo3'
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) return 'pensamento-g'
    return 'pensamento-p'
  }

  excluirPensamento() {
    this.service.deletar(this.pensamento.id).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    })
  }

  editarPensamento() {
    this.router.navigate(['/editar-pensamento', this.pensamento.id]);
  }
}
