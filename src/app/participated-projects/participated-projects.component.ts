import { Component, OnInit } from '@angular/core';
import {ProjectsServiceService} from '../projects-service.service';

@Component({
  selector: 'app-participated-projects',
  templateUrl: '../content/content.component.html',
  styleUrls: ['./participated-projects.component.css']
})
export class ParticipatedProjectsComponent implements OnInit {

  projects;
  canEdit = false;
  inProject = true;

  constructor(private projectsService: ProjectsServiceService ) { }

  ngOnInit() {
    this.projectsService.getParticipateProjects().subscribe(
        projects => {
          this.projects = projects},
        error=> { console.log(error)}
    )
  }

}
