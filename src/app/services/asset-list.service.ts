import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Asset } from '../Asset';
import { ASSETLIST } from '../mock-assets';

@Injectable({
  providedIn: 'root',
})
export class AssetListService {
  getAssetList(): Observable<Asset[]> {
    const assetList = of(ASSETLIST);
    return assetList;
  }
  constructor() {}
}
