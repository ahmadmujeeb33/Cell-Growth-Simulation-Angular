import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoardComponent, ControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'cell-bacteria';

  isSimulation = signal(false)

  manageSimulation(isSimulation: boolean){
    console.log("is simualtions", isSimulation)
    this.isSimulation.set(isSimulation)
  }

}
