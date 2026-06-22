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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    CommonModule,
    FormsModule
  ]
})
export class RegisterPage {

  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async cadastrar() {

    if (
      !this.nome ||
      !this.email ||
      !this.senha ||
      !this.confirmarSenha
    ) {
      alert('Preencha todos os campos.');
      return;
    }

    if (this.senha !== this.confirmarSenha) {

      alert('As senhas não coincidem.');
      return;

    }

    try {

      await this.authService.cadastrar(
        this.email,
        this.senha
      );

      alert('Conta criada com sucesso!');

      this.router.navigate(['/login']);

    } catch (erro: any) {

      alert(erro.message);

    }

  }

  voltarLogin() {

    this.router.navigate(['/login']);

  }

}