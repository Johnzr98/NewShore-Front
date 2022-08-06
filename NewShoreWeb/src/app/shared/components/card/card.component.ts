import { Component, Input } from '@angular/core';
import { IFlight } from 'src/app/views/pages/home/models/flight.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() headerTitle = 'Flight information';
  @Input() flight!: IFlight;
  @Input() textButton = 'View More';
  @Input() isUSD = false;
}
