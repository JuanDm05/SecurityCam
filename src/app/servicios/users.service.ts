import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'Users';

  constructor(private http: HttpClient) { }
  
  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${environment.apiUrl}/${this.url}`);}
}
