import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  names:any;
  constructor() { }

  ngOnInit(): void {
  }
parenfun(){
  console.log('parent');
  return 'parent';
}
}
