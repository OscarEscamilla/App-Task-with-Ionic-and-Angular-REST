import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/todos';
  }


  getAllTask(){
    return this.http.get<Task[]>(this.url);
  }
}
