import {Component, Input, OnInit} from '@angular/core';
import {ProjectsServiceService} from '../projects-service.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  projects;
  canEdit = false;
  inProject = false;


  constructor(private projectsService: ProjectsServiceService) { }

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe(
      projects => {this.projects = projects},
      error=> { console.log(error)}
    )
  }
}
