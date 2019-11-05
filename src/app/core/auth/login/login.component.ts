import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  loginForm: FormGroup;
  submitted:boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['matheusmourabs@gmail.com', [Validators.required, Validators.email]],
        password: ['teste', [Validators.required]]
    });
  }

  get fl() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.authService.login(this.loginForm.value).then(user => {
      this.router.navigate(['/']);
    })
  }
}
