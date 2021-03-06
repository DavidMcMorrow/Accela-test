import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private route:Router, private appService:AppServiceService) { }

  email: any;
  getUsersURL : string = "https://jsonplaceholder.typicode.com/users"
  getPostsURL : string = "https://jsonplaceholder.typicode.com/posts"
  userData : any

  ngOnInit(): void {
    this.appService.getRequest(this.getUsersURL).subscribe(data => this.userData = data)
    this.appService.getRequest(this.getPostsURL).subscribe(data => this.appService.allPosts = data)
  }

  tempButton() {
    this.userData.forEach((element: any) => {
      if (element.email == this.email) {
        this.appService.userInfo = element
        this.appService.allUsersInfo = this.userData
        this.route.navigate(['content-component'])
      }
    });
    
    
  }
}
