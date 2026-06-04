import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [],
  template: `
    <header 
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b"
      [class.bg-brand-navy-deep/90]="isScrolled()"
      [class.backdrop-blur-md]="isScrolled()"
      [class.border-brand-blue/10]="isScrolled()"
      [class.py-4]="isScrolled()"
      [class.bg-transparent]="!isScrolled()"
      [class.border-transparent]="!isScrolled()"
      [class.py-6]="!isScrolled()"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group focus:outline-none">
          <img 
            src="/logos/af-logo-horizontal-light.svg" 
            alt="AFDevelopment Logo" 
            class="h-9 w-auto transition-transform duration-300 group-hover:scale-102"
          />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#soluciones" class="text-sm font-medium text-slate-300 hover:text-brand-blue-light transition-colors">Soluciones</a>
          <a href="#metodologia" class="text-sm font-medium text-slate-300 hover:text-brand-blue-light transition-colors">Metodología</a>
          <a href="#demo" class="text-sm font-medium text-slate-300 hover:text-brand-blue-light transition-colors">Demostración</a>
          <a href="#contacto" class="text-sm font-medium text-slate-300 hover:text-brand-blue-light transition-colors">Contacto</a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center">
          <a 
            href="#contacto" 
            class="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out border border-brand-blue rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-brand-navy duration-300 -translate-x-full bg-brand-blue-light group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-brand-blue-light transition-all duration-300 transform group-hover:translate-x-full ease">Solicitar Demo</span>
            <span class="relative invisible">Solicitar Demo</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          (click)="toggleMobileMenu()"
          class="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg"
          aria-label="Toggle menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            @if (isMobileMenuOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden bg-brand-navy-deep/95 border-b border-brand-blue/10 backdrop-blur-lg px-6 py-6 absolute top-full left-0 w-full flex flex-col gap-4 animate-fade-in shadow-xl">
          <a 
            href="#soluciones" 
            (click)="closeMobileMenu()"
            class="text-base font-medium text-slate-300 hover:text-brand-blue-light transition-colors py-2 border-b border-white/5"
          >Soluciones</a>
          <a 
            href="#metodologia" 
            (click)="closeMobileMenu()"
            class="text-base font-medium text-slate-300 hover:text-brand-blue-light transition-colors py-2 border-b border-white/5"
          >Metodología</a>
          <a 
            href="#demo" 
            (click)="closeMobileMenu()"
            class="text-base font-medium text-slate-300 hover:text-brand-blue-light transition-colors py-2 border-b border-white/5"
          >Demostración</a>
          <a 
            href="#contacto" 
            (click)="closeMobileMenu()"
            class="text-base font-medium text-slate-300 hover:text-brand-blue-light transition-colors py-2 border-b border-white/5"
          >Contacto</a>
          <a 
            href="#contacto" 
            (click)="closeMobileMenu()"
            class="mt-2 w-full text-center bg-brand-blue hover:bg-brand-blue-light text-brand-navy-deep font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Solicitar Demo
          </a>
        </div>
      }
    </header>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.2s ease-out forwards;
    }
  `]
})
export class NavHeaderComponent {
  protected readonly isScrolled = signal(false);
  protected readonly isMobileMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(val => !val);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
