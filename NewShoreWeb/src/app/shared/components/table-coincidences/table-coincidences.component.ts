import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-coincidences',
  templateUrl: './table-coincidences.component.html',
  styleUrls: ['./table-coincidences.component.css']
})
export class TableCoincidencesComponent {

  @Input() listCoincidences: Array<string> = [];
  @Input() maxCaractersToValidate: number = 3;
  @Input() set valueToSearch(value: string) {
    this.changeCoincidences(value);
  }
  @Output() selectedCoincidence = new EventEmitter<string>();
  
  public showCoincidences = false;
  public listCoincidencesToShow: Array<string> = [];

  constructor() { }

  changeCoincidences(value: string){
    if (value.length >= this.maxCaractersToValidate) {
      this.showCoincidences = false;
      return;
    }

    if (value) {
      this.listCoincidencesToShow = this.listCoincidences.filter(x=> x.includes(value));
      if (this.listCoincidencesToShow.length > 0) {
        this.showCoincidences = true;
        return;
      }
    }
    this.showCoincidences = false;
  }

  selectCoincidence(coincidence: string){
    this.showCoincidences = false;
    this.selectedCoincidence.emit(coincidence);
  }
}
