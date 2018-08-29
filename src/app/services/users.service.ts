import {Injectable} from '@angular/core';
import {Observable} from 'node_modules/rxjs';
import {HttpClient} from '@angular/common/http';

import {HOST_API} from './api/host.api';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get<any>(`${HOST_API}/user`);
  }

  create(user: User): Observable<any> {
    return this.http.post(`${HOST_API}/user`, user);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${HOST_API}/user/${id}`);
  }

  update(user: User): Observable<any> {
    return this.http.put(`${HOST_API}`, user);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${HOST_API}/user/${id}`);
  }

  listRole(): Observable<any> {
    return this.http.get<any>(`${HOST_API}/user/role`);
  }
}
