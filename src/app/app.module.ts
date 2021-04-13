import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './scaffold/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './scaffold/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DashboardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
