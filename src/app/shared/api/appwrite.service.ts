import { Injectable } from '@angular/core';
import { Account, Client, Storage } from 'appwrite';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppwriteService {
  private readonly client = new Client();

  private readonly account = new Account(this.client);

  private readonly storage = new Storage(this.client);

  // private readonly bucketId = environment.bucketId;

  constructor() {
    this.client
      .setEndpoint('http://localhost:1880/v1')
      .setProject('64c12b84332066e3a647');
  }

  public login$(credentials: {
    email: string;
    password: string;
  }): Observable<object> {
    return from(
      this.account.createEmailSession(credentials.email, credentials.password)
    );
  }
}
