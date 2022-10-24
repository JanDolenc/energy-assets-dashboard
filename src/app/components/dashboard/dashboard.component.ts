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
  selectedAsset?: Asset;

  constructor(private assetListService: AssetListService) {}

  ngOnInit(): void {
    this.getAssetList();
  }

  onSelect(asset: Asset): void {
    this.selectedAsset = asset;
  }

  getAssetList(): void {
    this.assetListService
      .getAssetList()
      .subscribe((assetList) => (this.assetList = assetList));
  }
}
