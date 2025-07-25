import { Component } from '@angular/core';
import { LandingComponent } from './landing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LandingComponent
  ],
  template: `<app-landing></app-landing>`,
  styleUrls: [],
})
export class App {}
