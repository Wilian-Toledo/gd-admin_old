import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostcenterService {

  constructor(private http: HttpClient) { }

    public save(costcenter: any): Observable<any> {
        return this.http.post(`/costcenter`, costcenter);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/costcenter/${id}`);
    }
    
    public all(): Observable<any>{
      return this.http.get(`/costcenter/`);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/costcenter/${id}`);
    }
}