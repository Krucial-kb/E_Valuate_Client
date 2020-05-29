import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EvalAPIService } from '../services/eval-api.service';
import { User } from '../models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private evalService: EvalAPIService,

  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Username: ['', Validators.required],
      Platform: ['', Validators.required],
      Address: ['', Validators.required],
      DOB: ['', Validators.required],
      Telephone: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)], ]
    });

  }

  onSubmit(){
    this.submitted = true;
    this.loading = true;
    var returnObject: User = new User
    {
      returnObject.userId = this.registerForm.value.userId,
      returnObject.FullName = this.registerForm.value.fullName,
      returnObject.Username = this.registerForm.value.Username,
      returnObject.Address = this.registerForm.value.Address,
      returnObject.Telephone = this.registerForm.value.Telephone,
      returnObject.Email = this.registerForm.value.Email,
      returnObject.Password = this.registerForm.value.Password,
      returnObject.DOB = this.registerForm.value.DOB,
      returnObject.Platform = this.registerForm.value.Platform

    }
    this.evalService.createUser(returnObject);

            // stop here if form is invalid
            if (this.registerForm.invalid) {
              return;
          }
  
  }

}
