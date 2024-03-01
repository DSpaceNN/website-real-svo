import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {APIEndpoint} from "../types/variables";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export  class AbstractApiService<T> {
  private readonly http = inject(HttpClient);

  request<T>(
    endpoint: APIEndpoint,
    body: unknown = undefined,
    params?: { urlParams?: string; queryParams?: string },
    headers?: HttpHeaders
  ):Observable<T> {
    const requestOptions = {
      headers: headers,
      withCredentials: true,
      origin: environment.apiURL,
    };
    let url = environment.apiURL + endpoint.url;
    if (params?.urlParams) {
      url += '/' + params?.urlParams;
    }
    if (params?.queryParams) {
      url += '?' + params?.queryParams;
    }
    switch (endpoint.method) {
      case 'POST':
        return this.http.post<T>(url, body, requestOptions);
      case 'GET':
        return this.http.get<T>(url, requestOptions);
      case 'DELETE':
        return this.http.delete<T>(url, requestOptions);
      case 'PUT':
        return this.http.put<T>(url, body, requestOptions);
      default:
        return this.http.get<T>(url, requestOptions);
    }
  }


}
