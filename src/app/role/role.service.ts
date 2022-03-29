import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

    public save(role: any): Observable<any> {
        return this.http.post(`/role`, role);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/role/${id}`);
    }
    
    public all(): Observable<any> {
      return this.http.get(`/role/`)
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/role/${id}`);
    }
}