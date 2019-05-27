import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { of } from 'rxjs';
import { map, filter, catchError, mergeMap, tap } from 'rxjs/operators';
//import { Observable } from 'rxjs/Rx';
import "rxjs";
import "rxjs";
import { Router } from "@angular/router";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from "@angular/common/http";
import { AppUrlsConst } from "./app.config";



declare var $: any;


@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
    constructor(private _router: Router) { }

    /**
     * Take any HTTP request made with HttpClient and add the proper outgoing headers for authentication purposes.
     * @param req
     * @param next
     * @returns {Observable<HttpEvent<any>>}
     */
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // modify the request
        let dt = location.origin.replace('http://', '');
        console.log(dt);

        if (this.getToken()) {
            var authReq = req.clone({
                headers: req.headers
                    .append("Content-Type", "application/json")
                    .append("Authorization", "" + this.getToken())
                //.append("domain", "" + dt)
            });
        } else {
            var authReq = req.clone({
                headers: req.headers
                    .append("Content-Type", "application/json")

                //.append("domain", "" + dt)
            });
        }

        if (req.url == AppUrlsConst.API_URL + '/api/product/uploadfile' && req.method == 'POST') {
            var authReq = req.clone({
              headers: req.headers
              .append("Authorization", "" + this.getToken())
                
            });
          
          }


        // 
      





        // send to the next interceptor or to its final destination

        return next.handle(authReq)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {

                    }
                }, err => {

                    if (err.status === 401) {
                        // auto logout if 401 response returned from api
                        //   this.logout();
                    }
                    return throwError(err);
                })
            )






    }
    getToken() {
        var str = JSON.parse(localStorage.getItem('currentUser'));
        return str?str.token:null;
    }
}
