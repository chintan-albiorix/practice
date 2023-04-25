import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    }
    )
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (this.authService.login(email, password)) {
      this.router.navigate(['/profile']);
    } else {
      this.error = true;
    }
  }
}
