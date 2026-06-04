import { Component } from '@angular/core';
import { NavHeaderComponent } from './components/nav-header';
import { HeroComponent } from './components/hero';
import { SolutionsComponent } from './components/solutions';
import { MethodologyComponent } from './components/methodology';
import { InteractiveDemoComponent } from './components/interactive-demo';
import { ContactComponent } from './components/contact';
import { FooterComponent } from './components/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavHeaderComponent,
    HeroComponent,
    SolutionsComponent,
    MethodologyComponent,
    InteractiveDemoComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
