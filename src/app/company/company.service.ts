import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CompanyService {

    constructor(private http: HttpClient) { }

    public save(company: any): Observable<any> {
        return this.http.post(`/company`, company);
    }

    public get(id: string): Observable<any> {
        return this.http.get(`/company/${id}`);
    }

    public search(filter: any): Observable<any> {
        return this.http.post(`/company/search`, filter);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(`/company/${id}`);
    }
    
    public link(id: string, employeeId: string): Observable<any> {
        return this.http.post(`/company/${id}/employees/${employeeId}`, {});
    }

    public unLink(id: string, employeeId: string): Observable<any> {
        return this.http.delete(`/company/${id}/employees/${employeeId}`);
    }

    public employees(companyId: string): Observable<any> {
        return this.http.get(`/company/${companyId}/employees`);
    }
}
