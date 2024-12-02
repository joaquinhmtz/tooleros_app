import { Component, Input, signal } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[]
};

@Component({
  selector: 'app-header-sidenav',
  templateUrl: './header-sidenav.component.html',
  styleUrl: './header-sidenav.component.css'
})
export class HeaderSidenavComponent {

  @Input("collapsed") collapsed:any = Subject;
  pictureWidth: string = "100";
  collapsedValue = signal(false);
  menuItems = signal<MenuItem[]>([
    {
      icon: "dashboard",
      label: "ML",
      route: "/app",
      subItems: [{
        icon: "sell",
        label: "FULL",
        route: "list",
      }]
    },
    {
      icon: "sell",
      label: "Amazon",
      route: "/app/sales/list",
    },
    {
      icon: "sell",
      label: "Proveedores",
      route: "/app/sales/list",
    },
    {
      icon: "group",
      label: "Usuarios",
      route: "/app/users",
      subItems: [{
        icon: "sell",
        label: "Ventas 22",
        route: "list",
      }]
    },
  ]);

  ngOnInit(): void {
    this.collapsed.subscribe((e:any) => {
      this.pictureWidth = (!e ? "32" : "100");
      this.collapsedValue.set(!e ? true : false);
    });
  }
}
