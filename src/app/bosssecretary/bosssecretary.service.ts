import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BosssecretaryService {

  constructor(private http: HttpClient) { }

    public save(bosssecretary: any): Observable<any> {
        return this.http.post(`/bosssecretary`, bosssecretary);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/bosssecretary/${id}`);
    }
    
    public all(): Observable<any> {
      return this.http.get(`/bosssecretary`);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/bosssecretary/${id}`);
    }
}