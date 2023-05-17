import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class BuscadorAppService {
  URL = `https://www.hostcatedral.com/api/appNoti/public/buscar/`;

  constructor(private http: HttpClient) {}

  buscar(producto: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.URL}${producto}`, {
      headers,
    });
  }
}

export const headers = { 'Content-Type': 'application/json;charset=utf-8' };
