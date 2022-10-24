import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/Asset';
import { AssetListService } from 'src/app/services/asset-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title: string = 'Energy assets dashboard';

  assetList: Asset[] = [];
  assetData: Asset[] = [];
  selectedAsset?: Asset;

  constructor(private assetListService: AssetListService) {}

  ngOnInit(): void {
    this.getAssetList();
  }

  onSelect(asset: Asset): void {
    this.selectedAsset = asset;
    this.getAssetData(asset);
  }

  getAssetList(): void {
    this.assetListService
      .getAssetList()
      .subscribe((assetList) => (this.assetList = assetList));
  }

  getAssetData(asset: Asset) {
    console.log(asset);
    this.assetListService
      .getAssetData(asset)
      .subscribe((data) => (this.assetData = data));
  }
}
