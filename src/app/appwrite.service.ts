import { Injectable } from '@angular/core';
import { Client } from 'appwrite';

@Injectable({
  providedIn: 'root',
})
export class AppwriteService {
  private readonly client = new Client();

  constructor() {}
}
