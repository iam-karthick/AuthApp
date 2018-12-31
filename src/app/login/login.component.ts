import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={
    'email':'',
    'password':''
  }
  constructor(private auth:AuthService,public router: Router) { }

  ngOnInit() {
  }
  LoginUser(){
    this.auth.LoginUser(this.user).subscribe((data)=>{
      if(data){
        localStorage.setItem('token',data.token);
        this.router.navigate(['/evants']);
        // console.log(JSON.stringify(data));
      }
    }
      // res=>console.log(res),
      // err=> console.log(err)

    )
  }
}
