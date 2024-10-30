import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL="http://localhost:8081/pokerplanning/tasks/"

  constructor(private httpClient: HttpClient) { }
  
  
  getTaskList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL+"getAllTasks"}`);
  }


  getTaskById(id: number): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseURL}${id}`);
  }
  updates(id: number, a: Task): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}updates/${id}`, a);
  }
  

  updateTask(id: any, task: any): Observable<Object>{
    return this.httpClient.put(`${this.baseURL +"updates"}/${id}`, task);
  }

  deleteTask(id: any): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "deleteTask"}/${id}` );
  }
  
}
