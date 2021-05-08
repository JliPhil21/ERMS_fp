import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service'
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form!:FormGroup;
  data:any;
  password:any;
  username:any;
  submitted=false;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }


  get f() {
    return this.form.controls;
    }

  initForm(){
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signinProcess(){
    if(this.form.valid){
      this.authService.signin(this.username.value, this.password.value).subscribe(result => {
        this.data = result;
        if(result.error){
        this.router.navigateByUrl('/')
          alert(result.message);
        } if (result.success) {
          this.router.navigateByUrl('/user')
          alert(result.message);
        }
      });
    }
  }
}
