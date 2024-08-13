import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    NextDirective,
    PrevDirective,
    MatCardModule,
    MatListModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'architecture-design';
  logoPath: string = 'assets/images/Plum.png';
}
