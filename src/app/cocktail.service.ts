import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktails = [
    {
      name: 'Mojito',
      price: '12€',
      img: '../assets/boisson-fraiche-au-citron-vert.jpg'
    },
    {
      name: 'Ginto',
      price: '10€',
      img: '../assets/cocktail-boissons-alcoolisees-dans-petit-verre.jpg'
    },
    {
      name: 'Sex on the Beach',
      price: '13€',
      img: '../assets/close-up-boisson-alcoolisee.jpg'
    }

  ]

  getCocktails() {
    return this.cocktails;
  }
}
