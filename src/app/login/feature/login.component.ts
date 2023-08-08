import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgForm } from '@angular/forms';
import { AppwriteService } from '../../shared/api/appwrite.service';
import { Subject, takeUntil } from 'rxjs';
import { AppwriteException } from 'appwrite';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: true }) loginForm!: NgForm;

  private api = inject(AppwriteService);
  private destroyRef = inject(DestroyRef);

  email: string = '';
  password: string = '';
  isLoading = false;
  errorMessage!: string;

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.api
      .login$(this.loginForm.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (results) => {
          console.log(results);
        },

        error: (err: AppwriteException) => {
          if (err.code === 401 && err.type === 'user_invalid_credentials')
            this.errorMessage = err.message;

          this.isLoading = false;
        },

        complete: () => (this.isLoading = false),
      });
  }

  reset(): void {
    this.loginForm.reset();
  }
}
