import { Component } from '@angular/core';
import { SprintService } from '../services/sprint.service';
import { Sprint } from '../models/sprint';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-Sprint',
  templateUrl: './update-Sprint.component.html',
  styleUrl: './update-Sprint.component.css'
})
export class UpdateSprintComponent {

  id!: number;
  sprint: Sprint = new Sprint();

  constructor(private SprintService: SprintService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {

      this.id = this.route.snapshot.params['id'];

      this.SprintService.getSprintById(this.id).subscribe(data =>{
        this.sprint = data;
        console.log(this.sprint);
      });
    }

    onSubmit(){
      this.SprintService.updateSprint(this.id, this.sprint)
        .subscribe(data =>{
          this.goToSprintList();
        },error => console.log(error));
    }

    goToSprintList(){
      this.router.navigate(['/sprint']);
    }

}
