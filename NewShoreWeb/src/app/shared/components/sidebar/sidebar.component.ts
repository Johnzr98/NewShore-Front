import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISidebar } from './model/sidebar.interface';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() category = new EventEmitter<number>();
  public listOptions: ISidebar[] = []

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.listOptions = this.sidebarService.getConfiguration();
  }

  emit(level: number){
    this.category.emit(level);
  }

}
