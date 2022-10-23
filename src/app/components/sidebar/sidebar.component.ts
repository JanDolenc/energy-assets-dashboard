import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/Asset';
import { AssetListService } from 'src/app/services/asset-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
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
