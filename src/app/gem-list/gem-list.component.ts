import { Component } from '@angular/core';
import { Gem } from '../gem';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { GemListItemComponent } from '../gem-list-item/gem-list-item.component'; 
import { GemService } from '../Services/gem.service';

@Component({
  selector: 'app-gem-list',
  standalone: true,
  imports: [NgFor, NgIf, GemListItemComponent],
  templateUrl: './gem-list.component.html',
  styleUrl: './gem-list.component.css'
})
export class GemListComponent {
  displayedColumns: string[] = ['id', 'material', 'price', 'productionCompany', 'shiny', 'rarity'];
  gemList: Gem[] = [];
  constructor(private gemService: GemService){
  }

  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.gemService.getGems().subscribe({
      next: (data: Gem[]) => this.gemList = data,
      error: err => console.error("Error fetching Gems", err),
      complete: () => console.log("Student data fetch complete!")
    })
  }

  selectedGem?: Gem;

  selectGem(gem: Gem): void {
    this.selectedGem = gem;
  }
}
