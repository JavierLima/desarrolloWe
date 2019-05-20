import {Component, Input, OnInit} from '@angular/core';
import {ProjectsServiceService} from '../projects-service.service';
import {PersonsService} from '../persons.service';
import {Project} from '../ProjectModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
    consult;
    user_type;
    projectForm = new FormGroup({
        tittle: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
        description: new FormControl('',[Validators.required,Validators.maxLength(250),Validators.minLength(3)]),
        NProgrammers: new FormControl('',[Validators.required,Validators.min(1),Validators.max(6)]),
        NDesigners: new FormControl('',[Validators.required,Validators.min(1),Validators.max(6)]),
        NAnimators: new FormControl('',[Validators.required,Validators.min(1),Validators.max(6)]),
        limit_date: new FormControl(),
    });
    @Input()
    project: Project;
    @Input()
    number_project;
    @Input()
    canEdit: boolean;
    @Input()
    inProject: boolean;


    constructor(private projectService: ProjectsServiceService, private router: Router, private personsService : PersonsService) {
    }

    ngOnInit() {
        let user = this.personsService.getLoggedUserSubject();
    }

    getProjects() {
        this.projectService.getProject(this.project.project_id).subscribe(
            consult => {
                this.consult = consult;
            },
            error => {
                console.log(error);
            }
        );
    }

    removeProject(project_id) {
        this.projectService.deleteProject(project_id).subscribe(
            consult => {
                this.consult = consult;
                location.reload();
            },
            error => {
                console.log(error);
            }
        );
    }

    updateProject(project_id, creator_id) {
        this.projectService.putProject(project_id, creator_id, this.projectForm.value).subscribe(
            consult => {
                this.consult = consult;
                location.reload();
                this.projectForm.reset();
            },
            error => {
                console.log(error);
            }
        );
    }

    registerUserInProject(project_id) {
        this.projectService.insertUserInAProject({'project_id': project_id}).subscribe(
            consult => {
                this.consult = consult;
                location.reload();
            },
            error => {
                console.log(error);
                window.alert('Ya esta registrado en este proyecto');
            }
        );
    }
    removeUserInProject(project_id) {

        this.projectService.removeUserInAProject(project_id).subscribe(
            consult => {
                this.consult = consult;
                location.reload();
            },
            error => {
                console.log(error);
            }
        );
    }
    checkIfCanRegister(user_type,NProgrammers,NDesigners,NAnimators){
        if(user_type == 1 && NProgrammers < 1)
            return true;
        else if(user_type == 2 && NDesigners < 1)
            return true;
        else if(user_type == 3 && NAnimators < 1)
            return true;

        return false;
    }


}
