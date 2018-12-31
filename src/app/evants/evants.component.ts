import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-evants',
  templateUrl: './evants.component.html',
  styleUrls: ['./evants.component.css']
})
export class EvantsComponent implements OnInit {

  constructor(private evant: EventService,private router:Router,private auth:AuthService) { }
  data:any=[];
  ngOnInit() {
    this.onEvants()
  }
  onEvants() {
    this.evant.UserEvants().subscribe((res )=> 
    {
      this.data=res;
      // console.log(JSON.stringify(this.data))
    }, err => {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.router.navigate(['/']);
        }
        
      }
    })
  }
}
