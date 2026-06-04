import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-brand-navy-deep border-t border-white/10 py-16 text-slate-400 text-sm">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        <!-- Left: Logo & Slogan -->
        <div class="md:col-span-5 space-y-6">
          <img 
            src="/logos/af-logo-horizontal-navy.svg" 
            alt="AFDevelopment Logo" 
            class="h-9 w-auto"
          />
          <p class="text-xs text-slate-400 max-w-sm leading-relaxed">
            AFDevelopment es una consultoría de software mexicana especializada en el desarrollo e implementación de sistemas de digitalización, firma electrónica avanzada (e.firma) y gobierno digital.
          </p>
          <div class="text-[10px] font-bold text-brand-blue-light uppercase tracking-widest font-mono">
            FIRST, MAKE IT WORK.
          </div>
        </div>

        <!-- Center: Links -->
        <div class="md:col-span-3 space-y-4">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Enlaces Rápidos</h4>
          <ul class="space-y-2 text-xs">
            <li>
              <a href="#soluciones" class="hover:text-brand-blue-light transition-colors">Nuestras Soluciones</a>
            </li>
            <li>
              <a href="#metodologia" class="hover:text-brand-blue-light transition-colors">Metodología de Trabajo</a>
            </li>
            <li>
              <a href="#demo" class="hover:text-brand-blue-light transition-colors">Simulador de Digitalización</a>
            </li>
            <li>
              <a href="#contacto" class="hover:text-brand-blue-light transition-colors">Solicitud de Demostración</a>
            </li>
          </ul>
        </div>

        <!-- Right: Legal Compliance -->
        <div class="md:col-span-4 space-y-4">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Cumplimiento y Privacidad</h4>
          <p class="text-xs text-slate-400 leading-relaxed max-w-xs">
            Sistemas diseñados bajo la Ley General de Archivos y en cumplimiento estricto de la Ley Federal de Protección de Datos Personales en Posesión de Particulares.
          </p>
          <div class="flex items-center gap-4 text-xs font-semibold text-slate-300">
            <a href="#" class="hover:text-brand-blue-light transition-colors">Aviso de Privacidad (INAI)</a>
            <span class="w-1 h-1 bg-white/20 rounded-full"></span>
            <a href="#" class="hover:text-brand-blue-light transition-colors">Términos de Servicio</a>
          </div>
        </div>

      </div>

      <!-- Bottom border: Copyright -->
      <div class="max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; 2026 AFDevelopment. Todos los derechos reservados. Hecho en México.</p>
        <p class="text-slate-500 font-mono">afdevelopment.com</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
