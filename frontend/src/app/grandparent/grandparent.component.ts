import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GrandparentComponent implements OnInit {
namess:any;
  constructor() { }

  ngOnInit(): void {
  }

  grandFun(){
    console.log('Grand parent');
    return 'Grand Parent';
  }

}
