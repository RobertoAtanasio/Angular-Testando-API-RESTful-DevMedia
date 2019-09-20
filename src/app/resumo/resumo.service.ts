import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resumo } from '../interfaces/resumo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumoService {

  constructor(private http: HttpClient) { }

  getResumo(): Observable<Resumo> {
    const url = `${environment.ApiUrl}/resumo`;
    return this.http.get<Resumo>(url);
  }
}
