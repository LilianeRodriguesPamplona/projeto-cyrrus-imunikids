import { Injectable } from '@angular/core';

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    query,
    where,
    updateDoc
} from 'firebase/firestore';

import { db, auth } from '../firebase.config';

@Injectable({
    providedIn: 'root'
})
export class ChildrenService {

    async adicionarCrianca(crianca: any) {

        const usuario = auth.currentUser;

        if (!usuario) {
            throw new Error('Usuário não autenticado');
        }

        return await addDoc(
            collection(db, 'children'),
            {
                ...crianca,
                userId: usuario.uid
            }
        );

    }

    async listarCriancas() {

        const usuario = auth.currentUser;

        if (!usuario) {
            return [];
        }

        const q = query(
            collection(db, 'children'),
            where('userId', '==', usuario.uid)
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...(doc.data() as any)
        }));

    }

    async removerCrianca(id: string) {

        await deleteDoc(
            doc(db, 'children', id)
        );

    }

    async limparCriancas() {

        const usuario = auth.currentUser;

        if (!usuario) {
            return;
        }

        const q = query(
            collection(db, 'children'),
            where('userId', '==', usuario.uid)
        );

        const snapshot = await getDocs(q);

        for (const documento of snapshot.docs) {

            await deleteDoc(
                doc(db, 'children', documento.id)
            );

        }

    }

    async atualizarCrianca(id: string, crianca: any) {

        await updateDoc(
            doc(db, 'children', id),
            {
                nome: crianca.nome,
                dataNascimento: crianca.dataNascimento,
                sexo: crianca.sexo,
                statusVacinal: crianca.statusVacinal
            }
        );

    }
}