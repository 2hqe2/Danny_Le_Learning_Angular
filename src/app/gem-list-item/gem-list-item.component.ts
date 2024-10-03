import { Component, Input, OnInit } from '@angular/core';
import { Gem } from '../gem';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GemService } from '../Services/gem.service';


@Component({
  selector: 'app-gem-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './gem-list-item.component.html',
  styleUrl: './gem-list-item.component.css'
})
export class GemListItemComponent implements OnInit {
  gem : Gem | undefined;
  gemList : Gem[] = [];
  index : number = 0;

  constructor(
    private route: ActivatedRoute,
    private gemService : GemService, 
    private router : Router
  ) {}

  ngOnInit(): void {
    //This lifecycle hook is a good place to fetch and init our data
    this.gemService.getGems().subscribe(gems => {
      this.gemList = gems;

      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if(id){
          this.index = this.gemList.findIndex(gems => gems.id === id);
          this.gem = this.gemList[this.index]
        }
      });
    });
  }

  //function to go back to student-list view
  goBack(): void {
    this.router.navigate(['/gems']);
  }

//function to move foward through array with overflow protection
  goForward(): void {
    if (this.index < this.gemList.length - 1) {
      this.index++;
      this.router.navigate(['/gems', this.gemList[this.index].id]);
    }
  }
//function to move backward through array with overflow protection
  goBackward(): void {
    if (this.index > 0) {
      this.index--;
      this.router.navigate(['/gems', this.gemList[this.index].id]);
    }
  }

}

