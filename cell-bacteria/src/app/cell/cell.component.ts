import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: '[cell]',
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {

  hasBacteria = signal(false)

  @HostListener('click') onClick() {
    console.log("in here 14")
    console.log("this.hasBacteria()", this.hasBacteria())
    this.hasBacteria.set(!this.hasBacteria()); 
    
  }


}
