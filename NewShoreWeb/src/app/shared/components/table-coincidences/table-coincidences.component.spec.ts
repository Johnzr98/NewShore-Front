import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoincidencesComponent } from './table-coincidences.component';

describe('TableCoincidencesComponent', () => {
  let component: TableCoincidencesComponent;
  let fixture: ComponentFixture<TableCoincidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCoincidencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCoincidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
