import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private collapseSidenav = new Subject<boolean>();
  collapseSidenav$ = this.collapseSidenav.asObservable();

  constructor() { }

  setCollapseData(data: boolean) {
    this.collapseSidenav.next(data);
  }

  objectComparisonFunction = function( option:any, value:any ) : boolean {
    return option._id === value._id;
  }
}
