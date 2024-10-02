import { Component, Input } from '@angular/core';
import { Gem } from '../gem';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-gem-list-item',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './gem-list-item.component.html',
  styleUrl: './gem-list-item.component.css'
})
export class GemListItemComponent {
  @Input()gem?:Gem;
}
