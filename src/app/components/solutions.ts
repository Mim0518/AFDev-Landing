import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [],
  template: `
    <section id="soluciones" class="relative py-24 bg-brand-navy-deep overflow-hidden">
      <!-- Background Details -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <!-- Section Header -->
        <div class="max-w-3xl mx-auto mb-16">
          <h2 class="text-base font-semibold text-brand-blue-light tracking-wide uppercase">Nuestras Soluciones</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Software diseñado para la eficiencia y transparencia gubernamental
          </p>
          <p class="mt-4 text-lg text-slate-400">
            Desarrollamos tecnología robusta adaptada a las necesidades normativas e institucionales de la administración pública mexicana.
          </p>
        </div>

        <!-- Solutions Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Card 1: Gestión Documental -->
          <div class="group relative rounded-2xl border border-white/5 bg-brand-navy/40 p-8 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 flex flex-col items-start text-left">
            <div class="p-3 bg-brand-blue/10 text-brand-blue rounded-xl mb-6 group-hover:bg-brand-blue group-hover:text-brand-navy-deep transition-all duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-3">Gestión Documental Inteligente</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Búsquedas instantáneas, indexación automática y digitalización inteligente de expedientes históricos y archivos de trámite.
            </p>
          </div>

          <!-- Card 2: Gobierno Cero Papel -->
          <div class="group relative rounded-2xl border border-white/5 bg-brand-navy/40 p-8 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 flex flex-col items-start text-left">
            <div class="p-3 bg-brand-blue/10 text-brand-blue rounded-xl mb-6 group-hover:bg-brand-blue group-hover:text-brand-navy-deep transition-all duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-3">Gobierno Cero Papel</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Flujos de correspondencia, firma y distribución 100% electrónicos. Ahorro inmediato en papel, toners e insumos.
            </p>
          </div>

          <!-- Card 3: Validez Legal y e.firma -->
          <div class="group relative rounded-2xl border border-white/5 bg-brand-navy/40 p-8 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 flex flex-col items-start text-left">
            <div class="p-3 bg-brand-blue/10 text-brand-blue rounded-xl mb-6 group-hover:bg-brand-blue group-hover:text-brand-navy-deep transition-all duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-3">Validez Legal e.firma</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Integración nativa con la e.firma del SAT. Firma de actas, oficios y contratos con total validez legal y certeza jurídica.
            </p>
          </div>

          <!-- Card 4: Interoperabilidad -->
          <div class="group relative rounded-2xl border border-white/5 bg-brand-navy/40 p-8 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 flex flex-col items-start text-left">
            <div class="p-3 bg-brand-blue/10 text-brand-blue rounded-xl mb-6 group-hover:bg-brand-blue group-hover:text-brand-navy-deep transition-all duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-3">Interoperabilidad y APIs</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Conexión directa con bases de datos legadas y sistemas estatales y federales mediante arquitecturas de API seguras.
            </p>
          </div>

        </div>

        <!-- Compliance Banner -->
        <div class="mt-16 inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-brand-blue/20 bg-gradient-to-r from-brand-blue/5 to-transparent max-w-4xl mx-auto w-full text-left">
          <div class="flex items-center gap-4">
            <div class="flex-shrink-0 p-3 bg-brand-blue/10 text-brand-blue-light rounded-xl">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-base font-bold text-white">Cumplimiento de la Ley General de Archivos y Transparencia</h4>
              <p class="text-xs text-slate-400 mt-1 max-w-xl">
                Nuestras soluciones cumplen con la Ley General de Archivos y los lineamientos del INAI para conservación, catalogación y seguridad de datos gubernamentales.
              </p>
            </div>
          </div>
          <a href="#contacto" class="text-sm font-semibold text-brand-blue-light hover:text-white flex items-center gap-1.5 whitespace-nowrap">
            Conocer cumplimiento
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class SolutionsComponent {}
