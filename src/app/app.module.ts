import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadisticasComponent } from './menu/estadisticas/estadisticas.component';
import { HistorialComponent } from './menu/historial/historial.component';
import { MenucamComponent } from './menu/menucam/menucam.component';
import { ForgetpassComponent } from './sesiones/forgetpass/forgetpass.component';
import { LoginComponent } from './sesiones/login/login.component';
import { RegisterComponent } from './sesiones/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CamaraComponent } from './menu/camara/camara.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadisticasComponent,
    HistorialComponent,
    MenucamComponent,
    ForgetpassComponent,
    LoginComponent,
    RegisterComponent,
    CamaraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
