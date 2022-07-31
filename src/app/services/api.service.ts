import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface Device {
  Name: string;
  NativeResolution: string;
  Size: number;
  status: number;
  isMarked:boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = '';

  constructor(private httpClient: HttpClient) {
  }

  public getAllFiles(fileName: string): Observable<Device> {
    return  this.httpClient.get<Device>('assets/JSONmonitors/'+fileName+'.json');
  }
}
