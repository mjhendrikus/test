import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  map,
  catchError
} from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from '../../shared/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiService {

  protected get baseApiUrl(): string { return environment.API.MESSAGE; }

  constructor(
    http: HttpClient
   ) { super(http); }

  sendMessage(title: any, message: any, time: any): Observable<any []> {
    return this.http
      .post(`https://jsonplaceholder.typicode.com/posts`, {
        timestamp: time,
        header: title,
        body: message,
        userId: 1,
        id: 2})
      .pipe(
        map((res: any) => (res) as any[]),
          catchError( this.handleError )
        );
  }
}
