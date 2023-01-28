import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddAhorroComponent } from './components/add-ahorro/add-ahorro.component';
import { AddPrestamoComponent } from './components/add-prestamo/add-prestamo.component';
import { BalanceComponent } from './components/balance/balance.component';
import { DatatabledemoComponent } from './components/datatabledemo/datatabledemo.component';
import { HomeComponent } from './components/home/home.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';

const routes: Routes = [
  {path:"" , component: HomeComponent},
  {path:"balance" , component: BalanceComponent},
  {path:"prestamos" , component: PrestamosComponent},
  {path:"datatable" , component: DatatabledemoComponent},
  {path: "addAhorro", component: AddAhorroComponent},
  {path: "addPrestamo" , component: AddPrestamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
