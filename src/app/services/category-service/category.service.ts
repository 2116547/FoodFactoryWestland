import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categoryUrl = environment.serverUrl + "/api/category"
  private _categoryListUrl = environment.serverUrl + "/api/categories"

  constructor(private http: HttpClient, private _router : Router) { }

  list() {
    return this.http.get<any>(this._categoryListUrl);
    }

  single(_id: any) {
    return this.http.get<any>(this._categoryUrl + "/" + _id)
  }

  create(category: {}) {
    return this.http.post<any>(this._categoryUrl, category);
  }

  edit(category: {}) {
    return this.http.put<any>(this._categoryUrl, category);
  }

  remove(_id: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          '_id': _id
        })
      };
    return this.http.delete<any>(this._categoryUrl, httpOptions );
    }
}
