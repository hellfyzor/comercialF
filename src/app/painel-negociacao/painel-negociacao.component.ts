import { OportunidadeService } from './../oportunidade.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};

  oportunidades = [];

  constructor(
    private OportunidadeService: OportunidadeService,
    private messageService: MessageService 
    ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.OportunidadeService.listar().subscribe(resposta => this.oportunidades = <any>resposta)
  }

  adicionar(){
    this.OportunidadeService.adicionar(this.oportunidade)
    .subscribe(() => {
      this.oportunidade = {};
      this.consultar();

      this.messageService.add({
        severity: 'success',
        summary: 'Oportunidade adicionada com sucesso!'
      });
    },
    resposta => {
      let msg = 'Erro inesperado. Tente novamente.';

      if (resposta.error.message) {
        msg = resposta.error.message;
      }

      this.messageService.add({
        severity: 'error',
        summary: msg
      });
    });
  }

}
