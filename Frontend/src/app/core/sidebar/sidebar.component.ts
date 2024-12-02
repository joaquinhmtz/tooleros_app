import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  widhtSidenav: string = "250px";
  collapsed:Subject<any> = new Subject();
  subscription: Subscription;

  constructor(
    private dataService: DataService
  ) {
    this.subscription = this.dataService.collapseSidenav$.subscribe(collapse => {
      this.widhtSidenav = (!collapse ? "65px" : "250px");
      this.collapsed.next(collapse);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
