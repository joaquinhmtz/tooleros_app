import { Component, input, signal } from '@angular/core';
import { MenuItem } from '../header-sidenav/header-sidenav.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger("expandContractMenu", [
      transition(":enter", [
        style({ opacity: 0, height: '0px' }),
        animate('300ms ease-in-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(":leave", [
        animate('300ms ease-in-out', style({ opacity: 0, height: '0px' }))
      ])
    ])
  ],
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {

  item = input.required<MenuItem>()
  collapse = input(false);
  menuNestedOpen = signal(false);

  toggleNested() {
    if (!this.item().subItems) return;

    this.menuNestedOpen.set(!this.menuNestedOpen());
  }
}
