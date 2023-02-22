import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
 
  headers: HttpHeaders = new HttpHeaders;
  constructor(public httpClient: HttpClient) { }

  getUserListData() {
    const url = environment.listEMployee;
    return this.httpClient.get(url);
  }
  createEMployee(emp:any) {
    const url = environment.listEMployee;
    return this.httpClient.post(url,emp);
  }
  listQtn() {
    const url = environment.listEMployee;
    return this.httpClient.get(url);
  }
  createQstn(qstn:any) {
    const url = environment.listEMployee;
    return this.httpClient.post(url,qstn);
  }

  login(loginip:any) {
    const url = environment.loginurl;
    return this.httpClient.post(url,loginip);
  }
}
