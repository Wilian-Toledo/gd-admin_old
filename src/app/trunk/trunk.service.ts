import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrunkService {

  constructor(private http: HttpClient) { }

    public save(trunk: any): Observable<any> {
        return this.http.post(`/trunks`, trunk);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/trunks/${id}`);
    }
    
    public all(): Observable<any> {
      return this.http.get(`/trunks/`);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/trunks/${id}`);
    }
}