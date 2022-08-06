import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRoute } from 'src/app/views/pages/home/models/route.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @Input() placeholder: string = 'Search...';
  @Input() listCoincidencesFrom: Array<string> = [];
  @Input() listCoincidencesTo: Array<string> = [];
  @Output() goToSearch = new EventEmitter<IRoute>();

  public coincidenceFrom = '';
  public coincidenceTo = '';
  public txtMsgError = '';
  public hasError = false;
  public isEnabledSearch = false;

  constructor() { }

  selectedCoincidenceFrom(coincidenceFrom: string){
    this.coincidenceFrom = coincidenceFrom;
    this.validateData();
  }
 
  selectedCoincidenceTo(coincidenceTo: string){
    this.coincidenceTo = coincidenceTo;
    this.validateData();
  }

  validateData(){
    this.txtMsgError = '';
    this.hasError = false;
    if (this.coincidenceFrom.length >= 3 || this.coincidenceTo.length >= 3) {
      if (this.coincidenceFrom === this.coincidenceTo) {
        this.txtMsgError = 'The origin and destination cannot be the same.';
        this.hasError = true; 
        return;
      }
    }

    this.canSearch();
  }

  canSearch(){
    this.isEnabledSearch = false;
    if (this.coincidenceFrom.length >= 3 && this.coincidenceTo.length >= 3) {
      this.isEnabledSearch = true;
    }
  }

  search(){
    if (this.isEnabledSearch) {
      let params: IRoute = {
        departureStation: this.coincidenceFrom,
        arrivalStation: this.coincidenceTo
      }
      this.goToSearch.emit(params);
    }
  }

}
