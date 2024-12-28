import { Component, signal, computed } from '@angular/core';

import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  imports: [CellComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
    
  row_size = signal(10)
  col_size = signal(10)

  board = computed(() =>
    Array.from({ length: this.row_size() }, () =>
      Array.from({ length: this.col_size() }, () => null) 
    )
  );
}
