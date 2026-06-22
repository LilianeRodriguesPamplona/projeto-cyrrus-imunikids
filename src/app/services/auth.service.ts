import { Injectable } from '@angular/core';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { auth } from '../firebase.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cadastrar(email: string, senha: string) {

    return createUserWithEmailAndPassword(
      auth,
      email,
      senha
    );

  }

  login(email: string, senha: string) {

    return signInWithEmailAndPassword(
      auth,
      email,
      senha
    );

  }

  logout() {

    return signOut(auth);

  }

}