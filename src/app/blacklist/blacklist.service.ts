import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  constructor(private http: HttpClient) { }

    public save(blacklist: any): Observable<any> {
        return this.http.post(`/blacklist`, blacklist);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/blacklist/${id}`);
    }

    public all(): Observable<any> {
      return this.http.get(`/blacklist/`);
    }
    
    public delete(id: string): Observable<any> {
        return this.http.delete(`/blacklist/${id}`);
    }
}