import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = environment.serverUrl + "/api/pruduct";

  constructor(private http: HttpClient, private _router: Router) { }

  list() {
    return this.http.get<any>(this._productUrl + "s");
  }

  single(_id: any) {
    return this.http.get<any>(this._productUrl + "/" + _id);
  }

  create(product: {}) {
    return this.http.post<any>(this._productUrl, product);
  }

  edit(product: {}) {
    return this.http.put<any>(this._productUrl, product);
  }

  remove(_id: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          '_id': _id
        })
      };
    return this.http.delete<any>(this._productUrl, httpOptions );
    }
}
