import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PermissionService {

    constructor(private http: HttpClient) { }

    public save(permission: any): Observable<any> {
        return this.http.post(`/role`, permission);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/role/${id}`);
    }
    
    public byCompany(): Observable<any> {
        return this.http.get(`/role/company`);
    }

    public resources(): Observable<any>{
        return this.http.get(`/role/resources`);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/role/${id}`);
    }
}
