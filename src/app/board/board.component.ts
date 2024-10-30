import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task/models/task';
import { TaskService } from '../Task/services/task.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  NOTDONE: Task[] = [];
  INPROGRESS: Task[] = [];
  DONE: Task[] = [];
  previousStatus: number = 0;
   
  showDropdown: boolean = false;
  taskStatistics: { [key: string]: number } = {};
  showStatistics: boolean = false; 
  ExcelData:any;

  constructor( private taskService: TaskService,
    private http: HttpClient,
    private router: Router ) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTaskList().subscribe(tasks => {
      // Log the response
      tasks.forEach(task => {
        if (task.status === 'NOTDONE') {
          this.NOTDONE.push(task);
        } else if (task.status === 'INPROGRESS') {
          this.INPROGRESS.push(task);
        } else if (task.status === 'DONE') {
          this.DONE.push(task);
        }
      });
    
    });
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleStatistics() {
    this.router.navigateByUrl('/statistics'); // Use navigateByUrl method
  }
  

  drop(event: CdkDragDrop<Task[], any, any>) {
    if (event.container.id === 'cdk-drop-list-0') {
      this.previousStatus = 0;
    } else if (event.container.id === 'cdk-drop-list-1') {
      this.previousStatus = 1;
    } else if (event.container.id === 'cdk-drop-list-2') {
      this.previousStatus = 2;
    }    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      event.container.data[event.currentIndex].status = this.previousStatus;
      this.taskService.updates(event.container.data[event.currentIndex].taskId,event.container.data[event.currentIndex])
      .subscribe(data =>{
        console.log("success");
      },error => console.log(error));   
    }
  }

  // Function to handle import from csv
  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
  
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
  
      console.log(this.ExcelData.length);
      this.ExcelData.forEach((task: Task) => {
        if (task.status === 'À faire') {
          this.NOTDONE.push(task);
        } else if (task.status === 'INPROGRESS') {
          this.INPROGRESS.push(task);
        } else if (task.status === 'Terminé(e)') {
          this.DONE.push(task);
        }
      });
    };
  }
  

 
}
