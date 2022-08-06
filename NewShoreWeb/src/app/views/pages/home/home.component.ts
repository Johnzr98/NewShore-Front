import { Component, OnInit } from '@angular/core';
import { IRoutes } from './models/routes.interface';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listCoincidencesFrom: Array<string> = [];
  listCoincidencesTo: Array<string> = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.searchFlightsRoutes();
  }

  private searchFlightsRoutes(){
    this.homeService.getFlightsRoutes().subscribe(flights => {
      this.addFlightsRoutes(flights);
    });
  }

  private addFlightsRoutes(routes: IRoutes[]){
    routes.forEach(route => {
      
      let departur = route.departureStation.toUpperCase();
      let arrival = route.departureStation.toUpperCase();

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

  search(dataToSearch: IRoutes){
    console.log(dataToSearch);
  }

}
