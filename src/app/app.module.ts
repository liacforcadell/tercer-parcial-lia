import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BuscadorAppComponent } from './pages/buscador-app/buscador-app.component';
import { IonicModule } from '@ionic/angular';
import { ProductoAppComponent } from './pages/producto-app/producto-app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BuscadorAppComponent, ProductoAppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot({ mode: 'ios' }),
    RouterModule.forRoot([
      { path: '', component: BuscadorAppComponent },
      { path: 'producto', component: ProductoAppComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
