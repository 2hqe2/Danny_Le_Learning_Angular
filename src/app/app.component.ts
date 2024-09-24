import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gem } from './gem';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { GemListComponent } from "./gem-list/gem-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, GemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Danny Le Learning Angular';
  word = 'Testing';
  word2 = '123 copy, 123 over.';
  diamond : Gem = {id: 1, material: "Diamond", price: 999999999.99, productionCompany: "Mine Inc.", shiny: true};
  emerald : Gem = {id: 2, material: "Emerald", price: 150000, productionCompany: "Shiny Corp."};
  sapphire : Gem = {id: 3, material: "Sapphire", price: 149999.95, productionCompany: "Shiny Corp."};
  ruby : Gem = {id: 4, material: "Ruby", price: 175000, productionCompany: "Shiny Corp."};
  amethyst : Gem = {id: 5, material: "Amethyst", price: 100000, productionCompany: "Mine Inc.", shiny: true};
  amber : Gem = {id: 6, material: "Amber", price: 49999, productionCompany: "Mine Inc.", shiny: true};
  rock : Gem = {id: 0, material: "Rock", price: 0.01, productionCompany: "anonymous", shiny: false};
  gems : Gem[] = [this.diamond, this.emerald, this.sapphire, this.ruby, this.amethyst, this.amber, this.rock];
}




