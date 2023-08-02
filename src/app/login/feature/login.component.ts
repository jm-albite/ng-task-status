import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: true }) loginForm!: NgForm;

  email: string = '';
  password: string = '';

  ngOnInit(): void {
    this.loginForm.form.valueChanges.subscribe({
      next: (form) => {
        console.log(form);
      },
    });
  }

  login(): void {
    console.log(this.loginForm.value);
  }

  reset(): void {
    this.loginForm.reset();
  }
}
