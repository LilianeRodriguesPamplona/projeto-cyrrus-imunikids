import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import {
  IonContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage {

  email = '';
  senha = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async entrar() {

    if (!this.email || !this.senha) {

      alert('Preencha todos os campos.');

      return;

    }

    try {

      await this.authService.login(
        this.email,
        this.senha
      );

      alert('Login realizado com sucesso!');

      this.router.navigate(['/dashboard']);

    } catch (erro: any) {

      alert('Email ou senha inválidos.');

    }

  }

  irParaCadastro() {

    this.router.navigate(['/register']);
  }

}