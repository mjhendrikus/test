import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';

export abstract class ApiService {

  constructor(protected http: HttpClient) { }

  /**  HTTP error */
  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        console.log('Error occured:', error.error.message);
    } else {
        console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return observableThrowError(error);
  }
}
