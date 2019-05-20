import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from './ProjectModel';
import {UserInProjectModel} from './UserInProject-Model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  constructor(private http: HttpClient) { }

  getAllProjects() {
    return this.http.get('http://localhost:80/projects');
  }

  getProject(project_id: string) {
    return this.http.get('http://localhost:80/project/' + project_id);
  }

  deleteProject(project_id: string){
    return this.http.delete('http://localhost:80/project/' + project_id);
  }

  putProject(projectId: string, creator_id: string,body){
    return this.http.put('http://localhost:80/project/' + projectId + '/' + creator_id, body);
  }

  createProject(project: Project){
    return this.http.post<Project>('http://localhost:80/project',project);
  }
  getUserProjects(){
    return this.http.get('http://localhost:80/myProjects');
  }
  getParticipateProjects(){
    return this.http.get('http://localhost:80/participatedProjects');
  }
  insertUserInAProject(body){
    return this.http.post<UserInProjectModel>('http://localhost:80/userInProject',body);
  }
  removeUserInAProject(project_id: string){
    return this.http.delete('http://localhost:80/userInProject/' + project_id);
  }
}




