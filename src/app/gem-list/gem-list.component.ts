import { Component } from '@angular/core';
import { Gem } from '../gem';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { GemListItemComponent } from '../gem-list-item/gem-list-item.component'; 

@Component({
  selector: 'app-gem-list',
  standalone: true,
  imports: [NgFor, NgIf, GemListItemComponent],
  templateUrl: './gem-list.component.html',
  styleUrl: './gem-list.component.css'
})
export class GemListComponent {
  opal : Gem = {id: 7, material: "Opal", price: 75.99, productionCompany: "Rock Bottom", rarity : "rare"};
  garnet : Gem = {id: 8, material: "Garnet", price: 65.00, productionCompany: "Rock Bottom", rarity : "uncommon"};
  beryl :  Gem = {id: 7, material: "Opal", price: 75.99, productionCompany: "Rock Bottom", rarity : "rare"};
  aquamarine : Gem = {id: 7, material: "Opal", price: 75.99, productionCompany: "Rock Bottom", rarity : "rare"};
  gems2 = [this.opal, this.garnet, this.beryl, this.aquamarine];


}
