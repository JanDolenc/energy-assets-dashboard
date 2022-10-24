import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/Asset';
import { ChartData } from 'src/app/ChartData';
import { AssetListService } from 'src/app/services/asset-list.service';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title: string = 'Energy assets dashboard';

  assetList: Asset[] = [];
  chartData?: ChartData;
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
    /* console.log(asset); */
    return this.assetListService
      .getAssetData(asset)
      .subscribe((data) => (this.chartData = data));
  }
}
