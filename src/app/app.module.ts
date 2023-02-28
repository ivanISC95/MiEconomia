import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card'; 
import { DatatabledemoComponent } from './components/datatabledemo/datatabledemo.component';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './components/home/home.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { BalanceComponent } from './components/balance/balance.component'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AddAhorroComponent } from './components/add-ahorro/add-ahorro.component';
import { AddPrestamoComponent } from './components/add-prestamo/add-prestamo.component';
import { AddGastoComponent } from './components/add-gasto/add-gasto.component';


@NgModule({
  declarations: [
    AppComponent,
    DatatabledemoComponent,
    HomeComponent,
    TabsComponent,
    PrestamosComponent,
    BalanceComponent,
    AddAhorroComponent,
    AddPrestamoComponent,
    AddGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
