import { Component, OnInit } from '@angular/core';
import { Projects } from '../../models/project';
import { ProjectsServices } from '../../services/project.services';
import { HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectsServices]
})
export class CreateComponent implements OnInit {
  public tittle: string;
  public projects: Projects;
  constructor(private _projectsSErvices: ProjectsServices) {
    
    this.tittle = 'Crear Proyecto';
    this.projects = new Projects('', '', '', '', 2020, '', '');
    
  }

  ngOnInit(): void {
  }


  onSubmit(Form) {

    console.log(this.projects)

    this._projectsSErvices.saveProjects(this.projects).subscribe(

      response => {

        console.log(response);
      },
      error => {
        console.log(<any>error)

      }

    );
  }

  
}
