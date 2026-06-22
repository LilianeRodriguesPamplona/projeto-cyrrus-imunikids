import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton],
})
export class HomePage {

  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['/login']);
  }

  criarConta() {
    this.router.navigate(['/register']);
  }

}