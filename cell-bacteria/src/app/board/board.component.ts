import { Component, signal, computed, input, SimpleChanges } from '@angular/core';

import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  imports: [CellComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
    
  row_size = signal(2)
  col_size = signal(2)

  isSimulation = input<boolean>()

  board = signal(
    Array.from({ length: this.row_size() }, () =>
      Array.from({ length: this.col_size() }, () => false)
    )
  );

  something(rowIndex: number, colIndex: number){
    console.log("rowIndex", rowIndex)
    console.log("colIndex", colIndex)

    this.board()[rowIndex][colIndex] = !this.board()[rowIndex][colIndex]
  
    console.log(" this.board()[rowIndex][colIndex] ",  this.board()[rowIndex][colIndex] )
  }

  grabExistingBacteria () {
    
  }




  ngOnChanges(changes: SimpleChanges): void {
    
    changes['isSimulation'].currentValue;

    this.grabExistingBacteria()
    
  }
}
