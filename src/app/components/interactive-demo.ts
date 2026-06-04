import { Component, signal } from '@angular/core';

interface DocumentTemplate {
  id: string;
  name: string;
  sender: string;
  date: string;
  refNum: string;
  summary: string;
  hash: string;
}

@Component({
  selector: 'app-interactive-demo',
  standalone: true,
  imports: [],
  template: `
    <section id="demo" class="relative py-24 bg-brand-navy overflow-hidden border-y border-white/5">
      <!-- Glow details -->
      <div class="absolute -top-1/4 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <!-- Header -->
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-base font-semibold text-brand-blue-light tracking-wide uppercase">Demostración Interactiva</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simulador de Digitalización y e.firma
          </p>
          <p class="mt-4 text-lg text-slate-400">
            Experimente en tiempo real cómo nuestra tecnología automatiza la extracción de datos públicos y sella criptográficamente cada documento.
          </p>
        </div>

        <!-- Simulator Console Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <!-- Left Column: Document Select & Control Panel -->
          <div class="lg:col-span-5 flex flex-col justify-between bg-brand-navy-deep/60 border border-white/10 rounded-2xl p-6 lg:p-8">
            <div class="text-left">
              <h3 class="text-lg font-bold text-white mb-4">1. Seleccione un documento de prueba</h3>
              
              <!-- Tab Selector -->
              <div class="space-y-3">
                @for (doc of docTemplates; track doc.id) {
                  <button 
                    (click)="selectDocument(doc)"
                    [disabled]="simState() !== 'idle'"
                    class="w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left"
                    [class.border-brand-blue]="activeDoc().id === doc.id"
                    [class.bg-brand-blue/5]="activeDoc().id === doc.id"
                    [class.border-white/5]="activeDoc().id !== doc.id"
                    [class.bg-white/5]="activeDoc().id !== doc.id"
                    [class.hover:border-white/15]="activeDoc().id !== doc.id && simState() === 'idle'"
                    [class.opacity-60]="simState() !== 'idle' && activeDoc().id !== doc.id"
                  >
                    <div class="flex items-center gap-3">
                      <div class="p-2 rounded-lg bg-brand-blue/10 text-brand-blue-light">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs font-semibold text-white">{{ doc.name }}</div>
                        <div class="text-[10px] text-slate-400">De: {{ doc.sender }}</div>
                      </div>
                    </div>
                    @if (activeDoc().id === doc.id) {
                      <span class="w-2.5 h-2.5 rounded-full bg-brand-blue-light shadow-md shadow-brand-blue/55"></span>
                    }
                  </button>
                }
              </div>

              <!-- Workflow Logs -->
              <div class="mt-8">
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Logs del Servidor</h4>
                <div class="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[11px] text-slate-300 min-h-[140px] flex flex-col justify-start gap-1.5 shadow-inner">
                  @for (log of serverLogs(); track $index) {
                    <div class="flex items-start gap-2">
                      <span class="text-brand-blue-light">></span>
                      <span class="leading-relaxed">{{ log }}</span>
                    </div>
                  }
                  @if (serverLogs().length === 0) {
                    <div class="text-slate-500 italic">Consola lista. Presione "Iniciar Proceso" para comenzar.</div>
                  }
                </div>
              </div>
            </div>

            <!-- Play Buttons -->
            <div class="mt-8 flex items-center gap-4">
              @if (simState() === 'idle') {
                <button 
                  (click)="startSimulation()"
                  class="flex-1 py-4 bg-brand-blue hover:bg-brand-blue-light text-brand-navy-deep font-semibold rounded-full shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue-light/25 transition-all duration-300"
                >
                  Iniciar Proceso
                </button>
              } @else if (simState() === 'completed') {
                <button 
                  (click)="resetSimulation()"
                  class="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 rounded-full transition-colors duration-300"
                >
                  Reiniciar Simulador
                </button>
              } @else {
                <button 
                  disabled
                  class="flex-1 py-4 bg-brand-blue/20 text-brand-blue/50 font-semibold rounded-full cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg class="animate-spin h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </button>
              }
            </div>
          </div>

          <!-- Right Column: Document Visual Display Panel -->
          <div class="lg:col-span-7 bg-brand-navy-deep/40 border border-white/5 rounded-2xl p-6 lg:p-8 relative flex flex-col items-center justify-center min-h-[480px]">
            
            <!-- Document Scan Beam -->
            @if (simState() === 'processing') {
              <div class="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent top-0 animate-scan-beam z-20"></div>
            }

            <!-- Real Document Mock Preview -->
            <div class="w-full max-w-[420px] bg-white text-brand-slate shadow-2xl rounded-lg p-6 lg:p-8 flex flex-col justify-between min-h-[440px] border border-slate-200 relative transition-transform duration-500 overflow-hidden"
              [class.scale-[0.98]]="simState() === 'processing'"
              [class.shadow-brand-blue/10]="simState() === 'completed'"
            >
              
              <!-- Document Watermark background -->
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <img src="/logos/af-monogram-navy.svg" alt="watermark" class="w-48 h-48" />
              </div>

              <!-- Header of document -->
              <div class="relative z-10 border-b-2 border-brand-navy/15 pb-4 flex justify-between items-start text-left">
                <div>
                  <h4 class="text-xs font-bold text-brand-navy tracking-wide uppercase select-none">Correspondencia Oficial</h4>
                  <p class="text-[8px] text-slate-500 font-mono mt-0.5 select-none">AFDEVELOPMENT DIGITAL DEMO</p>
                </div>
                <div class="text-right">
                  <span class="text-[9px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded font-mono">
                    {{ activeDoc().refNum }}
                  </span>
                </div>
              </div>

              <!-- Body of document -->
              <div class="relative z-10 py-6 text-left space-y-4">
                <!-- Metadata items highlighted on processing/completion -->
                <div>
                  <div class="text-[9px] font-bold text-slate-400 uppercase select-none">Remitente</div>
                  <div 
                    class="text-xs font-semibold text-brand-navy p-1 rounded transition-colors duration-300"
                    [class.bg-brand-blue/15]="simState() === 'processing' || simState() === 'signing' || simState() === 'completed'"
                  >
                    {{ activeDoc().sender }}
                  </div>
                </div>

                <div>
                  <div class="text-[9px] font-bold text-slate-400 uppercase select-none">Fecha de Emisión</div>
                  <div 
                    class="text-xs font-semibold text-brand-navy p-1 rounded transition-colors duration-300"
                    [class.bg-brand-blue/15]="simState() === 'processing' || simState() === 'signing' || simState() === 'completed'"
                  >
                    {{ activeDoc().date }}
                  </div>
                </div>

                <div>
                  <div class="text-[9px] font-bold text-slate-400 uppercase select-none">Asunto Resumido</div>
                  <p 
                    class="text-[11px] text-slate-700 leading-relaxed font-serif p-1 rounded transition-colors duration-300"
                    [class.bg-brand-blue/15]="simState() === 'processing' || simState() === 'signing' || simState() === 'completed'"
                  >
                    {{ activeDoc().summary }}
                  </p>
                </div>
              </div>

              <!-- Signatures/Validations of document -->
              <div class="relative z-10 border-t border-slate-200 pt-4 flex justify-between items-end">
                <!-- Left: Seal placeholder or Seal -->
                <div class="text-left flex flex-col gap-1">
                  @if (simState() === 'signing' || simState() === 'completed') {
                    <div class="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px] animate-pulse">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      e.firma VALIDADA
                    </div>
                    <div class="text-[7px] text-slate-400 font-mono leading-none break-all max-w-[170px]">
                      H: {{ activeDoc().hash }}
                    </div>
                  } @else {
                    <div class="text-[8px] text-slate-400 italic">Pendiente de Firma Electrónica</div>
                    <div class="w-32 h-2.5 bg-slate-100 rounded"></div>
                  }
                </div>

                <!-- Right: Signature graphic -->
                <div class="flex flex-col items-center">
                  @if (simState() === 'signing' || simState() === 'completed') {
                    <!-- Simulated signature stamp -->
                    <div class="relative w-20 h-8 flex items-center justify-center">
                      <!-- Mock Blue Stamp SVG -->
                      <svg class="absolute inset-0 w-full h-full text-brand-blue opacity-85 select-none" viewBox="0 0 100 40" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M10 20 Q 30 10, 50 30 T 90 20 M 15 15 L 85 25 M 35 30 C 50 40, 70 5, 80 15" stroke-dasharray="100" stroke-dashoffset="0"></path>
                      </svg>
                      <span class="text-[6px] font-bold text-brand-blue uppercase border border-brand-blue px-1 py-0.5 rounded tracking-wide rotate-12 bg-white/70 select-none">FIRMADO</span>
                    </div>
                  } @else {
                    <div class="w-16 h-10 border border-dashed border-slate-300 rounded flex items-center justify-center text-[8px] text-slate-400 select-none">
                      Área de firma
                    </div>
                  }
                  <span class="text-[7px] text-slate-400 mt-1 select-none">Firma Autorizada</span>
                </div>
              </div>

            </div>

            <!-- Overlays for success state -->
            @if (simState() === 'completed') {
              <div class="absolute inset-0 bg-brand-navy-deep/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-6 text-center animate-fade-in z-30">
                <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/10">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">¡Proceso Exitoso!</h3>
                <p class="text-sm text-slate-300 max-w-sm mb-6 leading-relaxed">
                  El documento ha sido analizado, sus metadatos clasificados en la base de datos y firmado criptográficamente con validez legal.
                </p>
                <div class="flex items-center gap-3">
                  <button 
                    (click)="resetSimulation()"
                    class="px-5 py-2.5 rounded-full bg-brand-blue hover:bg-brand-blue-light text-brand-navy-deep font-semibold text-xs transition-colors duration-300 shadow-md shadow-brand-blue/15"
                  >
                    Probar otro documento
                  </button>
                </div>
              </div>
            }
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes scanBeam {
      0% { top: 0%; opacity: 1; }
      50% { top: 100%; opacity: 1; }
      100% { top: 0%; opacity: 0; }
    }
    .animate-scan-beam {
      animation: scanBeam 2.5s ease-in-out infinite;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `]
})
export class InteractiveDemoComponent {
  protected readonly docTemplates: DocumentTemplate[] = [
    {
      id: 'correspondencia',
      name: 'Oficio de Comisión Oficial',
      sender: 'Lic. Alejandro Gómez (Secretaría de Finanzas)',
      date: '04 de Junio, 2026',
      refNum: 'OF-FIN-2026-904',
      summary: 'Solicitud de asignación de recursos y viáticos de viaje para la delegación estatal que asistirá al congreso nacional de transparencia en la Ciudad de México.',
      hash: '9a3b8c2d1e0f4a5b6c7d8e9f0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t'
    },
    {
      id: 'acta',
      name: 'Acta del Consejo de Digitalización',
      sender: 'Ing. María del Carmen Ruiz (Secretaría de Innovación)',
      date: '28 de Mayo, 2026',
      refNum: 'AC-DIG-2026-112',
      summary: 'Aprobación unánime del lineamiento general para la eliminación gradual de archiveros físicos en la Oficialía Mayor del Estado, dando inicio al censo cero papel.',
      hash: '3f8e2d7c1b0a5f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e'
    },
    {
      id: 'contrato',
      name: 'Contrato de Suministro de Servicios',
      sender: 'Lic. Roberto Valdés (Dirección Jurídica)',
      date: '01 de Junio, 2026',
      refNum: 'CON-ADQ-2026-403',
      summary: 'Adjudicación directa para la contratación del servicio anual de mantenimiento y soporte de software de digitalización institucional y e.firma avanzada.',
      hash: '7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1a0f9e8d7c6b'
    }
  ];

  protected readonly activeDoc = signal<DocumentTemplate>(this.docTemplates[0]);
  protected readonly simState = signal<'idle' | 'processing' | 'signing' | 'completed'>('idle');
  protected readonly serverLogs = signal<string[]>([]);

  selectDocument(doc: DocumentTemplate) {
    this.activeDoc.set(doc);
    this.serverLogs.set([]);
  }

  startSimulation() {
    this.simState.set('processing');
    this.serverLogs.set(['Cargando archivo PDF...', 'Iniciando análisis de estructura documental...']);
    
    // Step 1: Document OCR reading
    setTimeout(() => {
      this.serverLogs.update(logs => [
        ...logs,
        'OCR Exitoso: Metadatos extraídos.',
        'Asignando ID de Registro Único Gubernamental...',
        `Número de Oficio detectado: ${this.activeDoc().refNum}`
      ]);
    }, 1200);

    // Step 2: Signatures processing
    setTimeout(() => {
      this.simState.set('signing');
      this.serverLogs.update(logs => [
        ...logs,
        'Estableciendo canal de autenticación con el validador del SAT...',
        'Criptografía avanzada activa: sellando documento con e.firma...'
      ]);
    }, 2800);

    // Step 3: Success state
    setTimeout(() => {
      this.simState.set('completed');
      this.serverLogs.update(logs => [
        ...logs,
        'Validación de e.firma exitosa.',
        `Registro guardado. HASH: ${this.activeDoc().hash.substring(0, 24)}...`,
        'Base de datos actualizada. Archivo guardado.'
      ]);
    }, 4500);
  }

  resetSimulation() {
    this.simState.set('idle');
    this.serverLogs.set([]);
  }
}
