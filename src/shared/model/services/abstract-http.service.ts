import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APIEndpoint} from "../types/api.endpoints";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<TRead> {
  private readonly http = inject(HttpClient);

  request(
    endpoint: APIEndpoint,
    body: unknown = undefined,
    params?: { urlParams?: string; queryParams?: string }
  ) {
    const requestOptions = {
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
        return this.http.post(url, body, requestOptions);
      case 'GET':
        return this.http.get(url, requestOptions);
      case 'DELETE':
        return this.http.delete(url, requestOptions);
      case 'PUT':
        return this.http.put(url, body, requestOptions);
      default:
        return this.http.get(url, requestOptions);
    }
  }


}
