import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { ChildrenService } from '../../services/children.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule
  ]
})
export class PendingPage implements OnInit {

  pendencias: any[] = [];

  constructor(
    private childrenService: ChildrenService
  ) { }

  async ngOnInit() {

    const criancas =
      await this.childrenService.listarCriancas();

    this.pendencias = criancas.filter(
      crianca =>
        crianca.statusVacinal === 'Atrasada'
    );

  }

}