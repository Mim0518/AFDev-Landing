import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  agency: string;
  agencyType: string;
  state: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contacto" class="relative py-24 bg-brand-navy-deep overflow-hidden">
      <!-- Decorator mesh -->
      <div class="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <!-- Left info: Consultancy Credentials -->
          <div class="lg:col-span-5 text-left">
            <h2 class="text-base font-semibold text-brand-blue-light tracking-wide uppercase">Contacto</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hagamos realidad su transición digital
            </p>
            <p class="mt-4 text-base text-slate-300 leading-relaxed">
              Trabajamos con dependencias federales, estatales y municipales en toda la República Mexicana. Rellene el formulario para agendar una demostración de software personalizada o recibir asesoría de cumplimiento de la Ley de Archivos.
            </p>

            <div class="mt-8 space-y-6">
              <!-- Detail 1: Address -->
              <div class="flex items-start gap-4">
                <div class="p-2.5 bg-brand-blue/10 text-brand-blue-light rounded-xl">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">Cobertura Nacional</h4>
                  <p class="text-xs text-slate-400 mt-1">CDMX, Monterrey, Guadalajara y servicios remotos a todo México.</p>
                </div>
              </div>

              <!-- Detail 2: Email -->
              <div class="flex items-start gap-4">
                <div class="p-2.5 bg-brand-blue/10 text-brand-blue-light rounded-xl">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">Correo Electrónico</h4>
                  <p class="text-xs text-slate-400 mt-1">proyectos&#64;afdevelopment.com</p>
                </div>
              </div>

              <!-- Detail 3: Slogan -->
              <div class="mt-12 p-5 rounded-2xl border border-white/5 bg-brand-navy/60 backdrop-blur-xl relative overflow-hidden group">
                <div class="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <img src="/logos/af-monogram-white.svg" alt="branding decoration" class="w-32 h-32" />
                </div>
                <div class="text-[11px] font-bold text-brand-blue-light uppercase tracking-widest mb-1.5">AFDevelopment</div>
                <p class="text-sm font-medium italic text-slate-300 font-serif leading-relaxed">
                  "Primero, hacemos que funcione; luego, lo hacemos óptimo; finalmente, lo automatizamos. Impulsando la modernización administrativa en México."
                </p>
              </div>
            </div>
          </div>

          <!-- Right info: Lead form -->
          <div class="lg:col-span-7 bg-brand-navy/40 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-xl relative">
            
            @if (isSubmitted()) {
              <div class="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">¡Mensaje Recibido!</h3>
                <p class="text-sm text-slate-300 max-w-sm leading-relaxed mb-6">
                  Hemos enviado una confirmación a su correo y uno de nuestros consultores de gobierno se pondrá en contacto en menos de 24 horas hábiles.
                </p>
                <button 
                  (click)="resetForm()"
                  class="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            } @else {
              <!-- Active Form -->
              <form (ngSubmit)="onSubmit()" #contactFormObj="ngForm" class="space-y-6 text-left">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- Name input -->
                  <div>
                    <label for="name" class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Nombre Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      [(ngModel)]="formData.name" 
                      required
                      #nameInput="ngModel"
                      class="w-full bg-brand-navy-deep/60 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-colors"
                      [class.border-red-500]="nameInput.invalid && nameInput.touched"
                      [class.border-white/10]="!(nameInput.invalid && nameInput.touched)"
                      placeholder="Ej. Lic. Claudia Ruiz"
                    />
                  </div>

                  <!-- Email input -->
                  <div>
                    <label for="email" class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Correo Institucional</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      [(ngModel)]="formData.email" 
                      required 
                      email
                      #emailInput="ngModel"
                      class="w-full bg-brand-navy-deep/60 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-colors"
                      [class.border-red-500]="emailInput.invalid && emailInput.touched"
                      [class.border-white/10]="!(emailInput.invalid && emailInput.touched)"
                      placeholder="claudia.ruiz&#64;gob.mx"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- Agency input -->
                  <div>
                    <label for="agency" class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Dependencia / Institución</label>
                    <input 
                      type="text" 
                      id="agency" 
                      name="agency" 
                      [(ngModel)]="formData.agency" 
                      required
                      #agencyInput="ngModel"
                      class="w-full bg-brand-navy-deep/60 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-colors"
                      [class.border-red-500]="agencyInput.invalid && agencyInput.touched"
                      [class.border-white/10]="!(agencyInput.invalid && agencyInput.touched)"
                      placeholder="Ej. Secretaría de Ecología"
                    />
                  </div>

                  <!-- Agency Type select -->
                  <div>
                    <label for="agencyType" class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Ámbito de la Dependencia</label>
                    <select 
                      id="agencyType" 
                      name="agencyType" 
                      [(ngModel)]="formData.agencyType"
                      class="w-full bg-brand-navy-deep/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-colors"
                    >
                      <option value="federal">Federal</option>
                      <option value="estatal">Estatal</option>
                      <option value="municipal">Municipal / Alcaldía</option>
                      <option value="autonomo">Órgano Autónomo</option>
                    </select>
                  </div>
                </div>

                <!-- State input -->
                <div>
                  <label for="state" class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Estado / Entidad Federativa</label>
                  <input 
                    type="text" 
                    id="state" 
                    name="state" 
                    [(ngModel)]="formData.state" 
                    required
                    #stateInput="ngModel"
                    class="w-full bg-brand-navy-deep/60 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-colors"
                    [class.border-red-500]="stateInput.invalid && stateInput.touched"
                    [class.border-white/10]="!(stateInput.invalid && stateInput.touched)"
                    placeholder="Ej. Jalisco"
                  />
                </div>

                <!-- Message input -->
                <div>
                  <label for="message" class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Detalles del Proyecto o Consulta</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    [(ngModel)]="formData.message"
                    required
                    #messageInput="ngModel"
                    class="w-full bg-brand-navy-deep/60 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-colors"
                    [class.border-red-500]="messageInput.invalid && messageInput.touched"
                    [class.border-white/10]="!(messageInput.invalid && messageInput.touched)"
                    placeholder="Describa brevemente qué procesos desea digitalizar..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  [disabled]="contactFormObj.invalid"
                  class="w-full py-4 rounded-lg bg-brand-blue hover:bg-brand-blue-light text-brand-navy-deep font-bold text-sm tracking-wide transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue-light/25"
                >
                  Enviar Solicitud de Información
                </button>

              </form>
            }

          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fadeIn 0.4s ease-out forwards;
    }
  `]
})
export class ContactComponent {
  protected readonly isSubmitted = signal(false);

  protected readonly formData: ContactForm = {
    name: '',
    email: '',
    agency: '',
    agencyType: 'estatal',
    state: '',
    message: ''
  };

  onSubmit() {
    // Simulated form submission
    this.isSubmitted.set(true);
  }

  resetForm() {
    this.isSubmitted.set(false);
    this.formData.name = '';
    this.formData.email = '';
    this.formData.agency = '';
    this.formData.agencyType = 'estatal';
    this.formData.state = '';
    this.formData.message = '';
  }
}
