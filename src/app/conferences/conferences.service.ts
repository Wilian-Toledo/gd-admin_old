import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService {

  constructor(private http: HttpClient) { }

    public save(conferences: any): Observable<any> {
        return this.http.post(`/conferences`, conferences);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/conferences/${id}`);
    }
    
    public all(): Observable<any> {
        return this.http.get(`/conference/`);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/conferences/${id}`);
    }
}