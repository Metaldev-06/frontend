import { Injectable } from '@angular/core';
import { StorageService } from './storage';

@Injectable({ providedIn: 'root' })
export class ServiceNameService extends StorageService {
  constructor() {
    super(window.sessionStorage);
  }
}
