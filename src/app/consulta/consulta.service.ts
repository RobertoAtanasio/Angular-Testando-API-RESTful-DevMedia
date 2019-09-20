import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from '../interfaces/consulta';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getConsulta(): Observable<Consulta> {
    const url = `${environment.ApiUrl}/consultas`;
    return this.http.get<Consulta>(url);
  }
}
