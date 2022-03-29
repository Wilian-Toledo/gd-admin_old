import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  constructor(private http: HttpClient) { }

    public save(extension: any): Observable<any> {
        return this.http.post(`/extension/`, extension);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/extension/${id}`);
    }

    public all(): Observable<any> {
      return this.http.get(`/extension/`);
    }
    
    public delete(id: string): Observable<any> {
        return this.http.delete(`/extension/${id}`);
    }
}
