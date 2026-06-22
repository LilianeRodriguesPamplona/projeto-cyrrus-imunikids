import { Injectable } from '@angular/core';

import {
collection,
addDoc,
getDocs,
deleteDoc,
doc,
query,
where
} from 'firebase/firestore';

import { db, auth } from '../firebase.config';

@Injectable({
providedIn: 'root'
})
export class VaccinesService {

async adicionarVacina(vacina: any) {

const usuario = auth.currentUser;

if (!usuario) {
  throw new Error('Usuário não autenticado');
}

return await addDoc(
  collection(db, 'vaccines'),
  {
    ...vacina,
    userId: usuario.uid
  }
);

}

async listarVacinas() {

const usuario = auth.currentUser;

if (!usuario) {
  return [];
}

const q = query(
  collection(db, 'vaccines'),
  where('userId', '==', usuario.uid)
);

const snapshot = await getDocs(q);

return snapshot.docs.map(doc => ({
  id: doc.id,
  ...(doc.data() as any)
}));

}

async removerVacina(id: string) {

await deleteDoc(
  doc(db, 'vaccines', id)
);

}

}