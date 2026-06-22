import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child } from '../../models/child.model';
import { ChildrenService } from '../../services/children.service';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule
  ]
})
export class ChildrenPage implements OnInit {

  nome = '';
  dataNascimento = '';
  sexo = '';
  statusVacinal = '';

  editandoIndex: number | null = null;

  editandoId: string | null = null;

  criancas: Child[] = [];

  constructor(
    private childrenService: ChildrenService
  ) { }

  async ngOnInit() {

    this.criancas =
      await this.childrenService.listarCriancas();

  }

  async adicionarCrianca() {

    if (
      !this.nome ||
      !this.dataNascimento ||
      !this.sexo ||
      !this.statusVacinal
    ) {
      return;
    }

    const crianca = {
      nome: this.nome,
      dataNascimento: this.dataNascimento,
      sexo: this.sexo,
      statusVacinal: this.statusVacinal
    };

    try {

      if (this.editandoId) {

        await this.childrenService.atualizarCrianca(
          this.editandoId,
          crianca
        );

        alert('💾 Alterações salvas com sucesso!');

      } else {

        await this.childrenService.adicionarCrianca(
          crianca
        );

        alert('✅ Criança cadastrada com sucesso!');

      }

      this.criancas =
        await this.childrenService.listarCriancas();

      this.editandoIndex = null;
      this.editandoId = null;

      this.nome = '';
      this.dataNascimento = '';
      this.sexo = '';
      this.statusVacinal = '';

    } catch (erro) {

      alert('Erro ao salvar criança.');

    }

  }

  editarCrianca(crianca: Child) {

    this.nome = crianca.nome;
    this.dataNascimento = crianca.dataNascimento;
    this.sexo = crianca.sexo;
    this.statusVacinal = crianca.statusVacinal;

    this.editandoIndex =
      this.criancas.indexOf(crianca);

    this.editandoId =
      crianca.id || null;

  }

  cancelarEdicao() {

    this.nome = '';
    this.dataNascimento = '';
    this.sexo = '';
    this.statusVacinal = '';

    this.editandoIndex = null;
    this.editandoId = null;

  }

  async removerCrianca(crianca: Child) {

    if (!crianca.id) {

      alert('ID da criança não encontrado.');

      return;

    }

    try {

      await this.childrenService.removerCrianca(
        crianca.id
      );

      this.criancas =
        await this.childrenService.listarCriancas();

      alert('🗑️ Criança removida com sucesso!');

    } catch (erro) {

      alert('Erro ao remover criança.');

    }

  }

  async limparCriancas() {

    const confirmar = confirm(
      'Deseja realmente remover todas as crianças cadastradas?'
    );

    if (!confirmar) {
      return;
    }

    try {

      await this.childrenService.limparCriancas();

      this.criancas = [];

      alert('Todos os cadastros foram removidos.');

    } catch (erro) {

      alert('Erro ao remover cadastros.');

    }

  }

  calcularIdade(dataNascimento: string): number {

    const nascimento = new Date(dataNascimento);

    const hoje = new Date();

    let idade =
      hoje.getFullYear() -
      nascimento.getFullYear();

    const mes =
      hoje.getMonth() -
      nascimento.getMonth();

    if (
      mes < 0 ||
      (
        mes === 0 &&
        hoje.getDate() < nascimento.getDate()
      )
    ) {
      idade--;
    }

    return idade;

  }

  formatarData(data: string): string {

    const partes = data.split('-');

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

  }

}