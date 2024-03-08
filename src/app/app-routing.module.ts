import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './menu/estadisticas/estadisticas.component';
import { HistorialComponent } from './menu/historial/historial.component';
import { MenucamComponent } from './menu/menucam/menucam.component';
import { LoginComponent } from './sesiones/login/login.component';
import { RegisterComponent } from './sesiones/register/register.component';
import { ForgetpassComponent } from './sesiones/forgetpass/forgetpass.component';
import { CamaraComponent } from './menu/camara/camara.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta principal que redirige al LoginComponent

  { path: 'estadisticas', component: EstadisticasComponent }, // Example route for Home component
  {path: 'historial', component: HistorialComponent},
  {path: 'menu', component: MenucamComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgetpass', component: ForgetpassComponent},
  {path: 'camara', component: CamaraComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
