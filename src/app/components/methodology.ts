import { Component } from '@angular/core';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [],
  template: `
    <section id="metodologia" class="relative py-24 bg-brand-navy-deep/95 overflow-hidden">
      <!-- Decorative Lines -->
      <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,#ffffff01_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="max-w-3xl mx-auto text-center mb-20">
          <h2 class="text-base font-semibold text-brand-blue-light tracking-wide uppercase">Nuestra Metodología</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            El camino hacia un gobierno digital eficiente
          </p>
          <p class="mt-4 text-lg text-slate-400">
            Acompañamos a las dependencias en cada etapa de su transformación tecnológica, reduciendo riesgos y acelerando la adopción por parte de los funcionarios.
          </p>
        </div>

        <!-- Stepper Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          <!-- Connector line for desktop -->
          <div class="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-blue/45 to-brand-blue/10 -translate-y-12 -z-10"></div>

          <!-- Step 1 -->
          <div class="bg-brand-navy/60 border border-white/5 rounded-2xl p-8 hover:border-brand-blue/40 hover:bg-brand-navy/80 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div class="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue text-brand-blue-light font-bold text-lg flex items-center justify-center mb-6 shadow-md shadow-brand-blue/10">
              01
            </div>
            <h3 class="text-lg font-bold text-white mb-3">Auditoría y Mapeo</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Analizamos los flujos actuales de correspondencia, trámites e inventarios físicos de archivo para identificar cuellos de botella e ineficiencias.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-brand-navy/60 border border-white/5 rounded-2xl p-8 hover:border-brand-blue/40 hover:bg-brand-navy/80 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div class="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue text-brand-blue-light font-bold text-lg flex items-center justify-center mb-6 shadow-md shadow-brand-blue/10">
              02
            </div>
            <h3 class="text-lg font-bold text-white mb-3">Diseño Digital</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Rediseñamos los trámites para formato digital, integrando roles, firmas electrónicas, notificaciones automáticas y catálogos de archivo.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-brand-navy/60 border border-white/5 rounded-2xl p-8 hover:border-brand-blue/40 hover:bg-brand-navy/80 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div class="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue text-brand-blue-light font-bold text-lg flex items-center justify-center mb-6 shadow-md shadow-brand-blue/10">
              03
            </div>
            <h3 class="text-lg font-bold text-white mb-3">Migración Segura</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Digitalizamos y cargamos de forma masiva los expedientes vigentes usando herramientas OCR para indexación automática y etiquetado metadato.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="bg-brand-navy/60 border border-white/5 rounded-2xl p-8 hover:border-brand-blue/40 hover:bg-brand-navy/80 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div class="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue text-brand-blue-light font-bold text-lg flex items-center justify-center mb-6 shadow-md shadow-brand-blue/10">
              04
            </div>
            <h3 class="text-lg font-bold text-white mb-3">Capacitación y Cierre</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Acompañamos a los servidores públicos en su transición hacia la oficina cero papel, asegurando una adopción total y sin fricciones legales.
            </p>
          </div>

        </div>

        <!-- Methodology Callout -->
        <div class="mt-20 flex flex-col items-center justify-center text-center">
          <p class="text-sm text-slate-400 font-medium">¿Desea conocer cómo adaptamos este proceso a su dependencia?</p>
          <a href="#contacto" class="mt-4 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 hover:border-brand-blue/20 transition-all duration-300 text-sm">
            Agendar Sesión de Consultoría
          </a>
        </div>
      </div>
    </section>
  `
})
export class MethodologyComponent {}
