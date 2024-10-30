import { Component } from '@angular/core';
import { SprintService } from '../services/sprint.service';
import { Sprint } from '../models/sprint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrl: './create-sprint.component.css'
})
export class CreateSprintComponent {

  sprint: Sprint = new Sprint();
  sprintService: any;
  constructor(private SprintService: SprintService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSprint(){
    this.sprintService.createSprint(this.sprint).subscribe( (data: any) =>{
      console.log(data);
    },
      (error: any) => console.log(error));
    this.router.navigate(['/sprints']);
  }

  goToSprintList(){
    this.router.navigate(['/sprints']);
  }

  onSubmit(){
    console.log(this.sprint);
    this.saveSprint();
    this.router.navigate(['/sprints']);
  }

}
