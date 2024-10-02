import { Injectable } from '@angular/core';
import { gemList } from '../mockGem.data';
import { Observable, of } from 'rxjs';
import { Gem } from '../gem';


@Injectable({
  providedIn: 'root'
})
export class GemService {

  private gems : Gem[] = gemList;

  constructor() {}

  // Call Gems
  getGems():Observable<Gem[]>{
    return of(gemList);
  }

  // Create New Gem
  addGem(newGem:Gem) : Observable<Gem[]>{
    this.gems.push(newGem)
    return of(this.gems);
  }

  // Update a Gem
  updateGem(updatedGem: Gem): Observable<Gem[]> {
    const index = this.gems.findIndex(gem => gem.id === updatedGem.id);
    if (index !== -1) {
      this.gems[index] = updatedGem;
    }
    return of(this.gems);
  }

  //Delete: Remove a Gem by ID
  deleteGem(gemId: number): Observable<Gem[]> {
    this.gems = this.gems.filter(gem => gem.id !== gemId);
    return of(this.gems);

  }
  getStudentById(gemId: number): Observable<Gem | undefined> {
    const gem = this.gems.find(gem => gem.id === gemId);
    return of(gem);
  }  

}
