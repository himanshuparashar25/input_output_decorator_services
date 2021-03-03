import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginremember = "Remember Me";
  public siteUrl = window.location.href;
  public myId = "testID";
  public textSuccess = "text-success";
  public hasError =  true;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger"  : this.hasError,
    "text-special" : this.isSpecial
  }
  public HighLightColor = "brown";
  public titleStyles = {
    color: "purple",
    fontStyle: "italic"
  } 
  public greeting = "";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "hello " +  this.loginremember
  }
  // onClick1(){
  //   console.log("welcome to the code world");
  //   this.greeting = "welcome to the world";
  // }
  onClick(event: any){
    console.log(event);
    this.greeting = event.type;
  }
}
