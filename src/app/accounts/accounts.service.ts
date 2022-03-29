import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AccountService {

    constructor(private http: HttpClient) { }

    public save(employee: any): Observable<any> {
        return this.http.post(`/employee`, employee);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/employee/${id}`);
    }

    public current(): Observable<any> {
        return this.http.get(`/employee/`);
    }

    public getByTerm(term: string): Observable<any> {
        return this.http.get(`/employee/term/${term}`);
    }
    
    public delete(id: string): Observable<any> {
        return this.http.delete(`/employee/${id}`);
    }

    public forgot(email:string): Observable<any> {
        return this.http.get(`/employee/forgot/${email}`);
    }

    public changePassword(employee:any): Observable<any> {
        return this.http.post(`/employee/change-password/`, employee);
    }
}
