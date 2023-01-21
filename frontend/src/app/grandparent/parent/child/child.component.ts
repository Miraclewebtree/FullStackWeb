import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
demofun(){
  console.log('child');
  return 'child'
}
}
