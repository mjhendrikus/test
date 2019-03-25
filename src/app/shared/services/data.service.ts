import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  map,
  catchError
} from 'rxjs/operators';
import { ApiService } from '../../shared/api/api.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService extends ApiService {
  static getTeamDetails(arg0: number): any {
    throw new Error("Method not implemented.");
  }

  protected get baseApiUrl(): string { return environment.API.MESSAGE; }

  constructor(
     http: HttpClient
    ) { super(http); }

  getTeam() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      map(x => x as any[]),
      catchError(this.handleError)
    );
  }
  
  getTeamDetails(id: number): Observable<any[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
    .pipe(
      map(x => x as any[]),
      catchError(this.handleError)
    );
  }

  getVersion(): Observable<any> {
    return this.http.get('')
    .pipe(
      map(x => x as any),
      catchError(this.handleError)
    )
  }
}
