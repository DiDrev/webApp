import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(){
	const headers = new HttpHeaders({'Content-Type': 'application/json','Accept':'application/json'});
	const options = {headers: headers}
	return this.http.get<Itask[]>('http://localhost:3000/tasks');
  }
}
