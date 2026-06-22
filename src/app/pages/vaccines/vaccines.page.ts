import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { ChildrenService } from '../../services/children.service';
import { VaccinesService } from '../../services/vaccines.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.page.html',
  styleUrls: ['./vaccines.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class VaccinesPage implements OnInit {

  criancas: any[] = [];

  criancaSelecionada = '';

  nomeVacina = '';

  statusVacina = '';

  dataAplicacao = '';

  vacinas: any[] = [];

  constructor(
    private childrenService: ChildrenService,
    private vaccinesService: VaccinesService
  ) { }

  async ngOnInit() {

    this.criancas =
      await this.childrenService.listarCriancas();

  }

  async carregarVacinas() {

    if (!this.criancaSelecionada) {

      this.vacinas = [];

      return;

    }

    const todasVacinas =
      await this.vaccinesService.listarVacinas();

    this.vacinas = todasVacinas.filter(
      vacina =>
        vacina.childId === this.criancaSelecionada
    );

  }

  async salvarVacina() {

    if (
      !this.criancaSelecionada ||
      !this.nomeVacina ||
      !this.statusVacina ||
      !this.dataAplicacao
    ) {

      alert('⚠️ Preencha todos os campos obrigatórios.');

      return;

    }

    const vacina = {

      childId: this.criancaSelecionada,

      nome: this.nomeVacina,

      status: this.statusVacina,

      dataAplicacao: this.dataAplicacao

    };

    await this.vaccinesService.adicionarVacina(vacina);

    this.nomeVacina = '';

    this.statusVacina = '';

    this.dataAplicacao = '';

    await this.carregarVacinas();

    alert('✅ Vacina registrada com sucesso!');


  }

  async removerVacina(vacina: any) {

    const confirmar = confirm(
      'Deseja excluir esta vacina?'
    );

    if (!confirmar) {
      return;
    }

    await this.vaccinesService.removerVacina(
      vacina.id
    );

    await this.carregarVacinas();

  }


}