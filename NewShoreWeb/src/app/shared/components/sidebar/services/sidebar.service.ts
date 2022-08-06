import { Injectable } from '@angular/core';
import { ISidebar } from '../model/sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public listOptions: ISidebar[] = []
  
  constructor() {
    this.listOptions = [
      {
        level: 0,
        enabled: true
      },
      {
        level: 1,
        enabled: false
      },
      {
        level: 2,
        enabled: false
      }
    ]
   }

  getConfiguration(): ISidebar[] {
    return this.listOptions;
  }
}
