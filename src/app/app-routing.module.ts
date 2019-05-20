import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {MyProjectsComponent} from './my-projects/my-projects.component';
import {ParticipatedProjectsComponent} from './participated-projects/participated-projects.component';

const routes: Routes = [

  {path: 'new', component:CreateProjectComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent,children: [
      {path: '', component: ContentComponent},
    ] },
  {path: 'myProjects', component: MyProjectsComponent},
  {path: 'participatedProjects', component:ParticipatedProjectsComponent},
  {path: '', component: ContentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


