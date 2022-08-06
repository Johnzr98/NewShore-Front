import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { IRoute } from './models/route.interface';
import { HomeService } from './services/home.service';
import { MockHomeService } from './services/home.service.mock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let mockHomeService: MockHomeService;

  beforeEach(async () => {
    
    mockHomeService = new MockHomeService();

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: HomeService, useValue: mockHomeService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('listCoincidencesFrom to be 1 when is called getFlightsRoutes', () => {
    const serviceSpy = spyOn(mockHomeService, 'getFlightsRoutes').and.callThrough();

    component.ngOnInit();

    let data = component.listCoincidencesFrom.length;

    expect(serviceSpy).toHaveBeenCalled();
    expect(data).toBe(1);
  });
  
  it('departureStation to be BOG when is called getFlights', () => {
    const serviceSpy = spyOn(mockHomeService, 'getFlights').and.callThrough();

    const dataRoutes: IRoute = {
      departureStation: 'BOG',
      arrivalStation: 'MED',
    };

    component.search(dataRoutes);

    let name = component.listCoincidencesFrom[0];

    expect(serviceSpy).toHaveBeenCalled();
    expect(name).toBe("BOG");
  });
});
