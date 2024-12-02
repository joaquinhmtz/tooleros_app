import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../shared/services/session.service';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  collapsed: boolean = true;

  constructor(
    private dataService: DataService,
    private session: SessionService,
    public router: Router
  ) {}

  collapse() {
    this.collapsed = !this.collapsed;
    this.dataService.setCollapseData(this.collapsed);
  }

  logout(){
    this.session.Logout();
    this.router.navigate(['login']);
  }
}
