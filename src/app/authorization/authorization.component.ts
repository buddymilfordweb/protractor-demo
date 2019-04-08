import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  authorization = {lastName: null, firstName: null, vehicleClass: null};

  submitted = false;
 
  onSubmit() { 
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
