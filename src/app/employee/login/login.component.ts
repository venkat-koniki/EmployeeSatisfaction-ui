import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwrd:any;
  uname:any;
  constructor( private empService: EmpService) { }

  ngOnInit(): void {
  }

  getLogin(){
    this.empService.login({password:this.passwrd,username:this.uname}).subscribe(res=>{
      console.log(res);
    });
  }

}
