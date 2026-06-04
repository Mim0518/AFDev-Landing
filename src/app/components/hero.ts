import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section class="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-brand-navy-deep">
      <!-- Decorative Background Orbs -->
      <div class="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl mix-blend-screen animate-pulse pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-brand-blue-light/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" style="animation-delay: 2s;"></div>

      <!-- Mesh Grid Background -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Hero Left Column: Text & CTAs -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <!-- Slogan Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue-light text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-ping"></span>
            FIRST, MAKE IT WORK
          </div>

          <!-- Headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-sans leading-[1.1]">
            Digitalizamos la <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blue-light to-white">
              Administración Pública
            </span> <br>
            en México
          </h1>

          <!-- Description -->
          <p class="text-base md:text-lg text-slate-300 mb-8 max-w-xl font-normal leading-relaxed">
            Creamos software a la medida para dependencias gubernamentales. Convertimos archivos físicos en plataformas de gestión documental seguras, auditables y sin papel, con validez jurídica y firma electrónica (<span class="text-brand-blue-light font-semibold">e.firma</span>).
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a 
              href="#contacto" 
              class="px-8 py-4 bg-brand-blue hover:bg-brand-blue-light text-brand-navy-deep font-semibold text-center rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue-light/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Comenzar Digitalización
            </a>
            <a 
              href="#demo" 
              class="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium text-center rounded-full border border-white/10 hover:border-brand-blue/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Demo Interactiva
              <svg class="w-5 h-5 text-brand-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-12 flex items-center gap-8 border-t border-white/15 pt-8 w-full">
            <div>
              <div class="text-2xl font-bold text-white">100%</div>
              <div class="text-xs text-slate-400">Validez Legal (e.firma)</div>
            </div>
            <div class="h-8 w-px bg-white/15"></div>
            <div>
              <div class="text-2xl font-bold text-white">90%</div>
              <div class="text-xs text-slate-400">Reducción en Tiempos</div>
            </div>
            <div class="h-8 w-px bg-white/15"></div>
            <div>
              <div class="text-2xl font-bold text-white">Cero</div>
              <div class="text-xs text-slate-400">Uso de Papel</div>
            </div>
          </div>
        </div>

        <!-- Hero Right Column: Dashboard Mockup -->
        <div class="lg:col-span-6 relative mt-10 lg:mt-0">
          <div class="relative mx-auto max-w-[540px] lg:max-w-none rounded-2xl border border-white/10 bg-brand-navy/60 backdrop-blur-xl p-4 shadow-2xl overflow-hidden group">
            
            <!-- Dashboard Top bar (Window controls) -->
            <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span class="text-xs text-slate-400 ml-4 font-mono select-none">sedoc.gob.mx/dashboard</span>
              </div>
              <div class="px-2.5 py-1 rounded bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-semibold text-brand-blue-light flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                e.firma Conectada
              </div>
            </div>

            <!-- Dashboard Inner Content Grid -->
            <div class="grid grid-cols-12 gap-4">
              <!-- Mock Sidebar -->
              <div class="col-span-3 hidden sm:flex flex-col gap-2.5 text-left border-r border-white/5 pr-3">
                <div class="h-6 rounded bg-brand-blue/20 w-4/5"></div>
                <div class="space-y-2 mt-4">
                  <div class="h-4 rounded bg-white/5 w-full"></div>
                  <div class="h-4 rounded bg-white/5 w-11/12"></div>
                  <div class="h-4 rounded bg-white/5 w-4/5"></div>
                  <div class="h-4 rounded bg-white/5 w-9/12"></div>
                </div>
              </div>

              <!-- Main Dashboard Area -->
              <div class="col-span-12 sm:col-span-9 flex flex-col gap-4 text-left">
                <!-- Overview Stats in Mock -->
                <div class="grid grid-cols-3 gap-2">
                  <div class="bg-white/5 p-2 rounded-lg border border-white/5">
                    <div class="text-[10px] text-slate-400">Oficios</div>
                    <div class="text-sm font-bold text-white">1,482</div>
                  </div>
                  <div class="bg-white/5 p-2 rounded-lg border border-white/5">
                    <div class="text-[10px] text-slate-400">Por Firmar</div>
                    <div class="text-sm font-bold text-amber-400">23</div>
                  </div>
                  <div class="bg-brand-blue/5 p-2 rounded-lg border border-brand-blue/10">
                    <div class="text-[10px] text-brand-blue-light">Ahorro</div>
                    <div class="text-sm font-bold text-emerald-400">94%</div>
                  </div>
                </div>

                <!-- Active Document Panel -->
                <div class="bg-white/5 p-3.5 rounded-xl border border-white/5 flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-semibold text-white">Trámites Recientes</span>
                    <span class="text-[10px] text-brand-blue-light hover:underline cursor-pointer">Ver todos</span>
                  </div>
                  
                  <!-- Document Rows -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between p-2 rounded bg-brand-navy-deep/60 border border-white/5">
                      <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <div class="flex flex-col">
                          <span class="text-[10px] font-medium text-slate-200">OFICIO-2026-084.pdf</span>
                          <span class="text-[8px] text-slate-400">Secretaría de Finanzas</span>
                        </div>
                      </div>
                      <span class="px-2 py-0.5 rounded-full text-[8px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Firmado</span>
                    </div>

                    <div class="flex items-center justify-between p-2 rounded bg-brand-navy-deep/60 border border-white/5">
                      <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <div class="flex flex-col">
                          <span class="text-[10px] font-medium text-slate-200">ACTA-CONVENIO-SED.pdf</span>
                          <span class="text-[8px] text-slate-400">Oficialía Mayor</span>
                        </div>
                      </div>
                      <span class="px-2 py-0.5 rounded-full text-[8px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Pendiente</span>
                    </div>

                    <div class="flex items-center justify-between p-2 rounded bg-brand-navy-deep/60 border border-white/5">
                      <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <div class="flex flex-col">
                          <span class="text-[10px] font-medium text-slate-200">MEMO-INTERNO-941.pdf</span>
                          <span class="text-[8px] text-slate-400">Recursos Humanos</span>
                        </div>
                      </div>
                      <span class="px-2 py-0.5 rounded-full text-[8px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Firmado</span>
                    </div>
                  </div>
                </div>

                <!-- Document flow animation visualization -->
                <div class="mt-1 flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-brand-blue/10 to-brand-blue-light/5 border border-brand-blue/20">
                  <div class="flex items-center gap-3">
                    <div class="p-1.5 rounded-lg bg-brand-blue/20 text-brand-blue-light">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.5M12 11c0-3.517 1.009-6.799 2.753-9.571m-3.44 2.04l-.054-.09A13.916 13.916 0 0015 11.5m-5 5v-1a1 1 0 00-1-1H7m3 4v-1a1 1 0 011-1h3m0 0a1 1 0 001-1v-4a1 1 0 00-1-1h-3m-6 0H3m11 0h5M19 8a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-semibold text-white">Sello de Archivo Histórico Digital</span>
                      <span class="text-[8px] text-slate-300 font-mono">HASH: 4b29f9c7ae88b3941df0e...</span>
                    </div>
                  </div>
                  <div class="text-[9px] font-semibold text-emerald-400 flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                    VÁLIDO
                  </div>
                </div>

              </div>
            </div>

          </div>

          <!-- Decorative glassmorphism elements behind/floating next to dashboard -->
          <div class="absolute -bottom-6 -left-6 bg-slate-800/80 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-xl hidden md:flex items-center gap-3.5 max-w-[200px] animate-bounce" style="animation-duration: 6s;">
            <div class="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </div>
            <div class="text-left">
              <div class="text-xs font-semibold text-white">Nube Segura</div>
              <div class="text-[10px] text-slate-400">AWS México Compliant</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
  `]
})
export class HeroComponent {}
