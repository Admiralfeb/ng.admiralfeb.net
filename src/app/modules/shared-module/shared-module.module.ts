import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { WlNavComponent } from './navbar/wishlist-nav/wl-nav.component';
import { CodeNavComponent } from './navbar/code-nav/code-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UnderConstructionComponent,
    NavbarComponent,
    WlNavComponent,
    CodeNavComponent
  ],
  exports: [
    UnderConstructionComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
