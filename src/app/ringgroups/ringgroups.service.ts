import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RinggroupsService {

  constructor(private http: HttpClient) { }

    public save(ringgroups: any): Observable<any> {
        return this.http.post(`/ringgroups`, ringgroups);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/ringgroups/${id}`);
    }
    
    public all(): Observable<any>{
      return this.http.get(`/ringgroups/`);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/ringgroups/${id}`);
    }
}