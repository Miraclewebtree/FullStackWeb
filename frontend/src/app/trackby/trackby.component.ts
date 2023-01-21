import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent implements OnInit {

  users:any

  constructor() { }

  ngOnInit(): void {
this.users = [
  {name:'hem', id:1},
  {name:'akash', id: 3},
  {name: 'mahesh', id:4},
  {name: 'mahesh', id:5},
  {name: 'ramesh', id:6},
  {name: 'ganesh', id:7}
]
  }

  assignData(){
    this.users = [
      {name:'hem', id:1},
      {name:'akash', id: 3},
      {name: 'mahesh', id:4},
      {name: 'mahesh', id:5},
      {name: 'ramesh', id:6},
      {name: 'ganesh', id:7},
      {name: 'rahul', id:8},
      {name: 'ganesh', id:17},
      {name: 'rah', id:18}
    ]
  }

  trackById(index:any, user:any){
    return user.id;
  }
  

}
