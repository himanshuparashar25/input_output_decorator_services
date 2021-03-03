import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})
export class IoComponent implements OnInit {

  // Component Interaction
  
  @Input('parentData') public nameIteration; 
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey Code Evolve Bro');
  }
}
