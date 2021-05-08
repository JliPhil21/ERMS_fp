import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  employee = new Employee();
  submitted=false;
  data!:any;
  id:any;
  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder,  private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }
  
  form = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl('')
    })

  createForm() {
  	this.form = this.formBuilder.group({
  		name: ['', Validators.required],
  		age: ['', Validators.required],
  		gender: ['', Validators.required],
  		address: ['', Validators.required],
  		email: ['', [Validators.required, Validators.email]],
  		salary: ['', Validators.required],
  	});
  }
  
  get f() {
    return this.form.controls;
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getData();
  }

  getData() {
    this.employeeService.getDataById(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
      this.form = new FormGroup({
        name: new FormControl(this.employee.name),
        age: new FormControl(this.employee.age),
        gender: new FormControl(this.employee.gender),
        address: new FormControl(this.employee.address),
        email: new FormControl(this.employee.email),
        salary: new FormControl(this.employee.salary)
      })
    });
    }

  updateData() {
  this.employeeService.updateData(this.id, this.form.value).subscribe(res => {
  	this.data = res;
    this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message),{
      timeOut: 1000,
      progressBar: true
    });
    this.router.navigateByUrl('/')
  });
  }

}
