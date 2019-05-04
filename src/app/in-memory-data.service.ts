import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ymir' },
      { id: 12, name: 'Odin' },
      { id: 13, name: 'Frigg' },
      { id: 14, name: 'Thor' },
      { id: 15, name: 'Balder' },
      { id: 16, name: 'Tyr' },
      { id: 17, name: 'Bragi' },
      { id: 18, name: 'Loki' },
      { id: 19, name: 'Hel' },
      { id: 20, name: 'Heimdall' },
      { id: 21, name: 'Freyr' },
      { id: 22, name: 'Freya' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}