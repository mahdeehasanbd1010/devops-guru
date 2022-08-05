import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  routeToAdmin(){
    this.router.navigate(["admin"]);
  }

  routeToStudent(){
    this.router.navigate(["student"]);
  }


}
