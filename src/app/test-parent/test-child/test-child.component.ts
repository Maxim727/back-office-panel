import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  @Input() msgFromParent: string; // parent to child binding
  @Output() callParent = new EventEmitter();

  currentMsgToParent = 'test test';

  constructor() { }

  ngOnInit(): void {
  }

  msgToParent(){
    this.currentMsgToParent = '1 ' + this.currentMsgToParent
    this.callParent.emit(this.currentMsgToParent)
    //console.log('ERROR')
  }
}
