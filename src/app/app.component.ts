import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gem } from './gem';
import { NgFor, NgIf } from '@angular/common';
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
}




