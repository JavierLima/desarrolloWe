import { Component, OnInit } from '@angular/core';
import {ProjectsServiceService} from '../projects-service.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: '../content/content.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  projects;
  canEdit = true;
  inProject = false;

  constructor(private projectsService: ProjectsServiceService ) { }

  ngOnInit() {
    this.projectsService.getUserProjects().subscribe(
      projects => {
        this.projects = projects},
      error=> { console.log(error)}
    )
  }

}
