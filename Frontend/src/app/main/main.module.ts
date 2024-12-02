import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../shared/material.module';

import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './../core/toolbar/toolbar.component';
import { SidebarComponent } from './../core/sidebar/sidebar.component';
import { HeaderSidenavComponent } from './../core/header-sidenav/header-sidenav.component';
import { MenuItemComponent } from './../core/menu-item/menu-item.component';


@NgModule({
  declarations: [
    MainComponent,
    ToolbarComponent,
    SidebarComponent,
    HeaderSidenavComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
