import { Inject, Injectable, InjectionToken } from '@angular/core';

export const DADES_LOCALS = new InjectionToken<Storage>('Dades Locals', {
  providedIn: 'root',
  factory: () => localStorage
});

export interface Exercici {
  id: string;
  name: string;
  categoria: string;
  tema: string;
  nota: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  exerciciList: Array<Exercici>;

  constructor(@Inject(DADES_LOCALS) public dades: Storage) {
    let ul=this.dades.getItem('exerciciData');
    if (!ul) this.exerciciList = [];
    else this.exerciciList = JSON.parse(ul);
  }
}