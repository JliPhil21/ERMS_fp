import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:any;
  data:any;
  constructor(private userService: UserService,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
  	this.userService.getuData().subscribe(res => {
  		console.log(res);
  		this.users = res;
  	})
  }

  deleteuData(id:any) {
    this.userService.deleteuData(id).subscribe(res => {
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message),{
        timeOut: 1000,
        progressBar: true
      });
      this.getUsersData();
    });
  }

}
