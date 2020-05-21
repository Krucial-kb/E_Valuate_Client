import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
registerForm = new FormGroup({
  name: new FormControl(''),
  username: new FormControl(''),
  address: new FormControl(''),
  phone: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  platform: new FormControl(''),
  


});


  constructor() { }

  ngOnInit(): void {
  }

}
