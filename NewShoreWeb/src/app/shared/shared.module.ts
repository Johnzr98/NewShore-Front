import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputComponent } from './components/input/input.component';
import { TableCoincidencesComponent } from './components/table-coincidences/table-coincidences.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { CurrencyPipe } from './pipes/currency.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    InputComponent,
    TableCoincidencesComponent,
    SearchComponent,
    ButtonComponent,
    AlertComponent,
    CardComponent,
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    InputComponent,
    TableCoincidencesComponent,
    SearchComponent,
    ButtonComponent,
    AlertComponent,
    CardComponent,
    CurrencyPipe
  ]
})
export class SharedModule { }
