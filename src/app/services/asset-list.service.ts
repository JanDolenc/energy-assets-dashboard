import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Asset } from '../Asset';
import { ASSETLIST } from '../mock-assets';

@Injectable({
  providedIn: 'root',
})
export class AssetListService {
  private apiUrl = 'http://localhost:5000/assets-list';

  constructor(private http: HttpClient) {}

  getAssetList(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.apiUrl);
  }
}
