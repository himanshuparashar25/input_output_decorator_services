import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learaing',
  templateUrl: './learaing.component.html',
  styleUrls: ['./learaing.component.css']
})
export class LearaingComponent implements OnInit {

  public greeting = "";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event: any){
    console.log(event);
    this.greeting = event.type;
  }
  onClick1(event: any){
    console.log(event);
    this.greeting = event.type;
  }
  // We get the value in console while getting value in input at the browser
  logMessage(value:any){
    console.log(value);
  }

  // Two way Binding
  public name = "";

  // ngIf Work
  displayName = true;
  displayName1 = false;
  displayName2 = true;

  // ngSwitch
  public colors1 = "pink";

  // ngFor
  public colors = ["green", "red", "yellow", "blue"];

  // Component Interaction
  message: any;
  public nameInteration = "Asdu";

  // Pipes
  pipesname = "Lets Play with ANGULAR";
  public pipesperson = {
    "firstname" : "John",
    "lastname" : "Doe"
  }

  public pipesdate = new Date();
}

