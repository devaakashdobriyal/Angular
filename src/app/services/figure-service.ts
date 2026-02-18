import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Figure } from '../models/figure';

@Injectable({
  providedIn: 'root'
})
export class FigureService {

  constructor(private firestore: Firestore) {}

  getFigures(): Observable<Figure[]> {
    const ref = collection(this.firestore, 'figures');
    return collectionData(ref, { idField: 'id' }) as Observable<Figure[]>;
  }

  addFigure(figure: Figure) {
    const ref = collection(this.firestore, 'figures');
    return addDoc(ref, figure);
  }
}
