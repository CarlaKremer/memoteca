import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  pensamento: Pensamento = {
    conteudo: "",
    autoria: '',
    modelo: 'modelo2',
    id: 0
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento;
      })
    }
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamentos'])
    })
  }

  cancelarPensamento() {
    this.router.navigate(['/listar-pensamentos'])
  }

  alterarPensamento() {
    this.service.alterar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamentos'])
    });
  }
}
