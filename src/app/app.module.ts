import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './app/components/home/home.component';
import { NavComponent } from './app/components/nav/nav.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { CursoComponent } from './app/components/curso/curso.component';
import {CursoService} from './app/services/curso.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './app/components/login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './app/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    CursoComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'cursos', component: CursoComponent},
      {path: 'login', component: LoginComponent}
    ]),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CursoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
