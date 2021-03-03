import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  // For Service employee list
  getEmployees(){
    return [
      {"id" : 1, "name" : "Andrew", "age" : 30},
      {"id" : 2, "name" : "Bandrew", "age" : 40},
      {"id" : 3, "name" : "Candrew", "age" : 50},
      {"id" : 4, "name" : "Elena", "age" : 20}
    ];
  }

  // For http fetch

  private _url: string = "/assets/data/employees.json";

  // For Service employee list
  getEmployees1() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
