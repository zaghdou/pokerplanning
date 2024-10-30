import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {

  id!: number;
  task: Task = new Task();

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {

      this.id = this.route.snapshot.params['id'];

      this.taskService.getTaskById(this.id).subscribe(data =>{
        this.task = data;
      });
    }

    onSubmit(){
      this.taskService.updateTask(this.id, this.task)
        .subscribe(data =>{
          this.goToTaskList();
        },error => console.log(error));
    }

    goToTaskList(){
      this.router.navigate(['/task']);
    }

}
