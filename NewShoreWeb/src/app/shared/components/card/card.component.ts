import { Component, Input } from '@angular/core';
import { IJourney } from 'src/app/views/pages/home/models/journey.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() headerTitle = 'Flight information';
  @Input() journey!: IJourney;
  @Input() textButton = 'View More';
  @Input() isUSD = false;
}
