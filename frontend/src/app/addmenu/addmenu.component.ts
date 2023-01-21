import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../appModels/employee.model';
import { EmployeeService } from '../appService/employee.service';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  empForm!: FormGroup;
  showModal: boolean = false;
  editMode: boolean = false;
  employees:any
  constructor(private fb:FormBuilder, private empService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.empForm = this.fb.group({
      _id: [''],
      name: ['Alex Johnson', Validators.required],
      position: ['Fullstack Developer', Validators.required],
      department: ['Design', Validators.required]
    })
  }

  onEmpSubmit(){
    if(this.empForm.valid){
      // console.log(this.empForm.value);
      this.empService.addEmployee(this.empForm.value).subscribe(
        (res) => {
          console.log(res)
      },
      (err) => {
        console.log(err)
      },
      )

      if(this.editMode){

      }else{

      }

      this.empForm.reset({
      name: 'Alex Johnson',
      position: 'Fullstack Developer',
      department: 'Design'
      })
    }
  }

  getEmployees(){
    this.empService.getEmployeeList().subscribe(res => {
      console.log(res);
      // this.empService = res;
    })
  }

  onAddEmployee(){
    this.showModal = true
  }

  onCloseModal(){
    this.showModal = false
  }

}
