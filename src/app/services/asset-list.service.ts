import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Asset } from '../Asset';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssetListService {
  constructor(private http: HttpClient) {}

  /* GET list of assets */
  getAssetList(): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${environment.apiUrl}asset-list`);
  }
}
