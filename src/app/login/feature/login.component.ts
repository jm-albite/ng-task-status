import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppwriteService } from '../../shared/api/appwrite.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: true }) loginForm!: NgForm;

  private api = inject(AppwriteService);

  email: string = '';
  password: string = '';

  ngOnInit(): void {}

  login(): void {
    this.api.login$(this.loginForm.value).subscribe({
      next: (results) => console.log(results),
    });
  }

  reset(): void {
    this.loginForm.reset();
  }
}
