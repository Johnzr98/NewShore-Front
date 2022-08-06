import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle( req )
              .pipe(
                catchError((error) => this.errorHandler(error))
              );
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    let msgError = 'Route cannot be calculated';
    if (response instanceof HttpErrorResponse) {
      if (response.status === 0) {
        msgError = 'the api is down';
      }
      if (response.status === 500) {
        msgError = 'Internal server error';
      }
    }
    this.showErrorMessage(msgError);
    throw response;
  }

  private showErrorMessage(message: string) {
    Swal.fire('Error', message, 'error');
  }
}
