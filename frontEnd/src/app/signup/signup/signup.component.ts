import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service'

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!:FormGroup;
  submitted=false;
  data:any;
  constructor(private userService: UserService, private formBuilder: FormBuilder,  private toastr: ToastrService, private router: Router) { }

  createForm() {
  	this.form = this.formBuilder.group({
  		username: ['', Validators.required],
  		password: ['', Validators.required]
  	});
  }

  get f() {
    return this.form.controls;
    }

  ngOnInit(): void {
  	this.createForm();
  }

  insertuData() {
    this.submitted=true;
    
  	if(this.form.invalid) {
      return;
      }

      this.userService.insertuData(this.form.value).subscribe(res => {
        this.data = res;
        this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message),{
          timeOut: 1000,
          progressBar: true
        });
        this.router.navigateByUrl('signin')
      });
  }

}
