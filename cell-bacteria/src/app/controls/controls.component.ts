import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

  isRunning = output<boolean>();


  beginSimulation(){
    console.log("beign ")
    this.isRunning.emit(true)
  }

}
