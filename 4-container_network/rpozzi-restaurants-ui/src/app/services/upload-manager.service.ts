import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ErrorService } from '../error/services/error.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadManagerService {
  private uploadManagerServiceUrl = environment.uploadMgrApiEndpoint;
  private uploadDirApi: String = '/dir';
  private configPropertiesApi: String = '/config';
  private uploadApi: String = '/upload';
  private fileListApi: String = '/list';
  private deleteFilesApi: String = '/delete';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getUploadDir(): Observable<string> {
    const apiEndpoint: string = this.uploadManagerServiceUrl + this.uploadDirApi;
    console.log('Calling api @ ' + apiEndpoint + ' ...');
    return this.http.get<string>(apiEndpoint, this.httpOptions)
      .pipe(
        tap(_ => console.log('API ' + apiEndpoint + ' called, returning ...')),
        catchError(this.errorService.handleError<string>('getUploadDir()', String())));
  }

  getConfigurationProperties(): Observable<string> {
    const apiEndpoint: string = this.uploadManagerServiceUrl + this.configPropertiesApi;
    console.log('Calling api @ ' + apiEndpoint + ' ...');
    return this.http.get<string>(apiEndpoint, this.httpOptions)
      .pipe(
        tap(_ => console.log('API ' + apiEndpoint + ' called, returning ...')),
        catchError(this.errorService.handleError<string>('getUploadDir()', String())));
  }

  upload(data): Observable<string> {
    const apiEndpoint: string = this.uploadManagerServiceUrl + this.uploadApi;
    console.log('Calling api @ ' + apiEndpoint + ' ...');
    return this.http.post<string>(apiEndpoint, data, this.httpOptions)
      .pipe(
        tap(_ => console.log('API ' + apiEndpoint + ' called, returning ...')),
        catchError(this.errorService.handleError<string>('upload()', String())));
  }

  getFiles(): Observable<string> {
    const apiEndpoint: string = this.uploadManagerServiceUrl + this.fileListApi;
    console.log('Calling api @ ' + apiEndpoint + ' ...');
    return this.http.get<string>(apiEndpoint, this.httpOptions)
      .pipe(
        tap(_ => console.log('API ' + apiEndpoint + ' called, returning ...')),
        catchError(this.errorService.handleError<string>('getFiles()', String())));
  }

  deleteFiles(): Observable<string> {
    const apiEndpoint: string = this.uploadManagerServiceUrl + this.deleteFilesApi;
    console.log('Calling api @ ' + apiEndpoint + ' ...');
    return this.http.get<string>(apiEndpoint, this.httpOptions)
      .pipe(
        tap(_ => console.log('API ' + apiEndpoint + ' called, returning ...')),
        catchError(this.errorService.handleError<string>('deleteFiles()', String())));
  }
}
