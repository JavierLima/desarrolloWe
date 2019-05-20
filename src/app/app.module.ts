import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PersonsService} from './persons.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import {AppRoutingModule} from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {TokenInterceptor} from './token.interceptor';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ParticipatedProjectsComponent } from './participated-projects/participated-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ProjectComponent,
    CreateProjectComponent,
    RegisterComponent,
    LoginComponent,
    MyProjectsComponent,
    ParticipatedProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PersonsService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
