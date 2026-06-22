import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IonButton } from '@ionic/angular/standalone';
import { auth } from '../firebase.config';
import { ChildrenService } from '../services/children.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, RouterLink]
})
export class DashboardPage implements OnInit {

  totalCriancas = 0;
  totalAtrasadas = 0;
  totalEmDia = 0;
  totalAtencao = 0;
  coberturaVacinal = 0;

  usuarioNome = '';
  usuarioEmail = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private childrenService: ChildrenService
  ) { }

  async ngOnInit() {

    const usuario = auth.currentUser;

    if (usuario) {

      this.usuarioNome =
        (usuario.email?.split('@')[0] || '')
          .replace(/^./, letra => letra.toUpperCase());

      this.usuarioEmail =
        usuario.email || '';

    }

    await this.carregarIndicadores();

  }

  async ionViewWillEnter() {

    await this.carregarIndicadores();

  }

  async carregarIndicadores() {

    const criancas =
      await this.childrenService.listarCriancas();

    this.totalCriancas = criancas.length;

    this.totalAtrasadas = criancas.filter(
      (crianca: any) =>
        crianca.statusVacinal === 'Atrasada'
    ).length;

    this.totalEmDia = criancas.filter(
      (crianca: any) =>
        crianca.statusVacinal === 'Em dia'
    ).length;

    this.totalAtencao = criancas.filter(
      (crianca: any) =>
        crianca.statusVacinal === 'Atenção'
    ).length;

    if (this.totalCriancas > 0) {

      this.coberturaVacinal = Math.round(
        (this.totalEmDia / this.totalCriancas) * 100
      );

    } else {

      this.coberturaVacinal = 0;

    }

  }

  async sair() {

    try {

      await this.authService.logout();

      this.router.navigate(['/login']);

    } catch (erro) {

      alert('Erro ao sair.');

    }

  }
}