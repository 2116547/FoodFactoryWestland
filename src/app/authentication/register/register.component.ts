import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData : FormGroup
  submitResult = ' ';

  constructor(private _auth: AuthService, private _router: Router, private fb: FormBuilder) { }
  

  ngOnInit() {
    this.registerUserData = this.fb.group({
      name: [ '', [
        Validators.required
      ]],
      password: [ '', [
        Validators.required
      ]]
    })
  }

  registerUser() {
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData.value)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/home'])
        },
        err => console.log(err)
      )
  }

  get name() {
    return this.registerUserData.get('name');
  }

  get password() {
    return this.registerUserData.get('password');
  }

  validateName() {
    return this.name.hasError('required') ? 'Voer een naam in' : '';
        
  }

  validatePassword() {
    return this.password.hasError('required') ? 'Voer een wachtwoord in' : '';
  }

}
