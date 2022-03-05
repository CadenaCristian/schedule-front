import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as apiBase } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private URL_API: string = apiBase.apiAdress
  constructor(
    public http: HttpClient
  ){}

  private header = new HttpHeaders()
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json  ; charset=utf-8');
  private opciones = {
    //objeto
    headers: this.header,
  };

  public getCode(email: string) {
    console.log(`${this.URL_API}/users/getCode`);
    return this.http.post(this.URL_API+'/users/getCode', email, this.opciones)
  }
}
