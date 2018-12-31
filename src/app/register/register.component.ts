import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any={
    'email':'',
    'password':''
  }
  constructor(private auth:AuthService,public router: Router) { }

  ngOnInit() {
  }
  onRegister(){
    this.auth.RegisterUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token);
        this.router.navigate(['/evants']);
        console.log(res)
      }
      ,err=> console.log(err)

    )
    console.log(this.user)
  }
}
