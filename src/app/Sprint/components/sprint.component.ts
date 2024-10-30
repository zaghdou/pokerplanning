import { Component } from '@angular/core';
import { SprintService } from '../services/sprint.service';
import { Sprint } from '../models/sprint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrl: './sprint.component.css'
})
export class SprintComponent {
tasks: any;
addSprint(arg0: any) {
throw new Error('Method not implemented.');
}

 sprints!: Sprint[];
sprint: any;

  constructor(private sprintService: SprintService, private router: Router){}

  ngOnInit(): void{
    this.getSprints();
  }

  private getSprints(){
    this.sprintService.getSprintList().subscribe(data =>{
      this.sprints = data;
      console.log(data);
    })
  }

  updateSprint(id: number){
    this.router.navigate(['updateSprint', id]);
  }

  deleteSprint(id:number){
    this.sprintService.deleteSprint(id).subscribe(data => {
      this.getSprints();
    })
  }
  onRowClicked(row: any) {
    this.sprintService.getTasksBySprintId(row).subscribe(data => {
      console.log(data);
    })
    
  }
  
  
  
}
