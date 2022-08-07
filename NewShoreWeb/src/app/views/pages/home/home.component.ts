import { Component, OnInit } from '@angular/core';
import { IRoute } from './models/route.interface';
import { HomeService } from './services/home.service';
import { IJourney } from './models/journey.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public listCoincidencesFrom: Array<string> = [];
  public listCoincidencesTo: Array<string> = [];
  public category = 0;
  public isUSD = true;
  public journey!: IJourney;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.searchFlightsRoutes();
  }

  searchFlightsRoutes(){
    this.homeService.getFlightsRoutes(this.category).subscribe(flights => {
      this.addFlightsRoutes(flights);
    });
  }

  private addFlightsRoutes(routes: IRoute[]){
    routes.forEach(route => {
      let departur = route.departureStation.toUpperCase();
      let arrival = route.arrivalStation.toUpperCase();

      let existFrom = this.listCoincidencesFrom.find(x => x === departur);
      let existTo   = this.listCoincidencesTo.find(x => x === arrival);

      if (!existFrom) {
        this.listCoincidencesFrom.push(departur);
      }
      if (!existTo) {
        this.listCoincidencesTo.push(arrival);
      }
    });
  }

  changeCategory(category: number){
    if (this.category !== category) {
      this.category = category;
      this.searchFlightsRoutes();
    }
  }

  search(dataToSearch: IRoute){
    if (dataToSearch) {
      this.homeService.getJourney(dataToSearch).subscribe(resp => {
        this.journey = resp;
      });
    }
  }

}
