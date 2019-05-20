import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectsServiceService} from '../projects-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {


  projectForm = new FormGroup({
    tittle: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
    description: new FormControl('',[Validators.required,Validators.maxLength(250),Validators.minLength(3)]),
    NProgrammers: new FormControl('',[Validators.required,Validators.min(1),Validators.max(6)]),
    NDesigners: new FormControl('',[Validators.required,Validators.min(1),Validators.max(6)]),
    NAnimators: new FormControl('',[Validators.required,Validators.min(1),Validators.max(6)]),
    limit_date: new FormControl(),
  })
  constructor(private projectService: ProjectsServiceService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.projectForm.value);
    this.projectService.createProject(this.projectForm.value).subscribe(
      projects => {console.log('Project created');
        this.router.navigate(['/myProjects']);
        },
      error=> { console.log(error)}
    )
  }

}
