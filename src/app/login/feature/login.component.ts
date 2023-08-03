import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgForm } from '@angular/forms';
import { AppwriteService } from '../../shared/api/appwrite.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('loginForm', { static: true }) loginForm!: NgForm;

  private unsubscribe$ = new Subject<void>();

  private api = inject(AppwriteService);

  email: string = '';
  password: string = '';
  isLoading = false;

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.api
      .login$(this.loginForm.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (results) => {
          console.log(results);
        },

        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },

        complete: () => (this.isLoading = false),
      });
  }

  reset(): void {
    this.loginForm.reset();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
