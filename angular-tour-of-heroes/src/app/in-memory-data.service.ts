import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Dr Nice', points: 10 },
      { id: 12, name: 'Narco', points: 11 },
      { id: 13, name: 'Bombasto', points: 12 },
      { id: 14, name: 'Celeritas', points: 13 },
      { id: 15, name: 'Magneta', points: 14 },
      { id: 16, name: 'RubberMan', points: 15 },
      { id: 17, name: 'Dynama', points: 16 },
      { id: 18, name: 'Dr IQ', points: 17 },
      { id: 19, name: 'Magma', points: 18 },
      { id: 20, name: 'Tornado', points: 19 },
    ];

    heroes = heroes.map(hero => {
      const r = Math.floor(Math.random() * 10 - 1);
      return {
        ...hero,
        points: hero.points + r
      }
    });

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
