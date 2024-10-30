import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  tasks!: Task[];

  constructor(private taskService: TaskService, private router: Router){}

  ngOnInit(): void{
    this.getTasks();
  }

  private getTasks(){
    this.taskService.getTaskList().subscribe(data =>{
      this.tasks = data;
    })
  }

  updateTask(id: number){
    this.router.navigate(['updateTask', id]);
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe(data => {
      this.getTasks();
    })
  }
 
  
}
