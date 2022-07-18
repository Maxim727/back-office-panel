import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.scss']
})
export class TestParentComponent implements OnInit {

  currentMsgToChild = 'SMTH';
  // Parent to Child binding

  msgFromChild: string;
  // Child to Parent binding

  constructor() { }

  ngOnInit(): void {
  }

  getMsgFromChild($event: string): void{
    console.log($event)
    this.msgFromChild = $event;
    console.log(this.msgFromChild)
  }

}
