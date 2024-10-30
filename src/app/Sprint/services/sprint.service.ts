import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sprint } from '../models/sprint';
import { Task } from '../../Task/models/task';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private baseURL="http://localhost:8081/pokerplanning/sprints/"
  
  constructor(private httpClient: HttpClient) { }

  getSprintList(): Observable<Sprint[]>{
    return this.httpClient.get<Sprint[]>(`${this.baseURL+"getAllSprints"}`);
  }
  getTasksBySprintId(a :Sprint): Observable<Task[]>{
    return this.httpClient.post<Task[]>(`${this.baseURL+"getTasksBySprintId"}`,a);
  }

  addSprint(sprint: Sprint):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"addSprint"}`, sprint);
  }
  getSprintById(id: number): Observable<Sprint>{
    return this.httpClient.get<Sprint>(`${this.baseURL}${id}`);
  }

  updateSprint(id: number, sprint: Sprint): Observable<any>{
    return this.httpClient.put(`${this.baseURL +"update"}/${id}`, sprint);
  }

  deleteSprint(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL+"delete"}/${id}` );
  }
  
}
