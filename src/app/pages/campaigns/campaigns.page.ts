import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule
  ]
})
export class CampaignsPage {

  campanhas = [
  {
    nome: '📢 Campanha Nacional de Influenza',
    publico: 'Crianças de 6 meses a 5 anos',
    periodo: 'Até 30/06/2026'
  },
  {
    nome: '📢 Multivacinação',
    publico: 'Atualização da caderneta vacinal',
    periodo: 'Até 15/12/2026'
  }
];

}