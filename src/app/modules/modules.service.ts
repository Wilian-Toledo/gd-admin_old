import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private http: HttpClient) { }

    public save(modules: any): Observable<any> {
        return this.http.post(`/modules`, modules);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/modules/${id}`);
    }
    
    public all(): Observable<any> {
      return this.http.get(`/modules/`);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/modules/${id}`);
    }
}