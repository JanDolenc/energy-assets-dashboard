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
    /* this.getAssetData(asset) */
    this.plotChart(asset);
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

  /* CHART */
  async plotChart(asset: Asset) {
    this.getAssetData(asset);
    /* console.log(data); */
    console.log('aaaa', this.chartData?.data);
  }

  chartOption: EChartsOption = {
    title: {
      text: 'Chart',
      left: '1%',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '5%',
      right: '15%',
      bottom: '10%',
    },
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {},
    toolbox: {
      right: 10,
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: [
      {
        startValue: '2014-06-01',
      },
      {
        type: 'inside',
      },
    ],
    visualMap: {
      top: 50,
      right: 10,
      pieces: [
        {
          gt: 0,
          lte: 50,
          color: '#93CE07',
        },
        {
          gt: 50,
          lte: 100,
          color: '#FBDB0F',
        },
        {
          gt: 100,
          lte: 150,
          color: '#FC7D02',
        },
        {
          gt: 150,
          lte: 200,
          color: '#FD0100',
        },
        {
          gt: 200,
          lte: 300,
          color: '#AA069F',
        },
        {
          gt: 300,
          color: '#AC3B2A',
        },
      ],
      outOfRange: {
        color: '#999',
      },
    },
    series: {
      name: 'Beijing AQI',
      type: 'line',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      markLine: {
        silent: true,
        lineStyle: {
          color: '#333',
        },
        data: [
          {
            yAxis: 50,
          },
          {
            yAxis: 100,
          },
          {
            yAxis: 150,
          },
          {
            yAxis: 200,
          },
          {
            yAxis: 300,
          },
        ],
      },
    },
  };
  /* CHART END */
}
