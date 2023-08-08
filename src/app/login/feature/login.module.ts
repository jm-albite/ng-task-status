import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AppwriteService } from '../../shared/api/appwrite.service';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [CommonModule, FormsModule, LoginRoutingModule, AlertModule],
  declarations: [LoginComponent],
  providers: [AppwriteService],
})
export class LoginModule {}
