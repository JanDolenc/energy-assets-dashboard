import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/Asset';
import { ChartData } from 'src/app/ChartData';
import { AssetListService } from 'src/app/services/asset-list.service';
import { EChartsOption, number } from 'echarts';

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

  mergeOptions = {};

  chartOption: EChartsOption = {
    title: {
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
      type: 'time',
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
        startValue: '2022-01-01',
      },
      {
        type: 'inside',
      },
    ],
    legend: {
      top: 50,
      right: 1,
      orient: 'vertical',
      padding: 5,
    },
  };

  constructor(private assetListService: AssetListService) {}

  ngOnInit(): void {
    this.getAssetList();
  }

  onSelect(asset: Asset): void {
    this.selectedAsset = asset;

    this.assetListService.getAssetData(asset).subscribe((data) => {
      this.mergeOptions = {
        title: {
          text: asset.title,
        },

        yAxis: [
          {
            name: 'Watts',

            splitLine: {
              show: true,
              lineStyle: {
                color: ['#0f0f0f'],
              },
            },
          },
          {
            name: 'Volts',

            /* splitLine: {
              show: true,
              lineStyle: {
                color: ['#0f0f0f'],
              },
            }, */
          },
        ],

        series: [
          {
            name: 'Active power',
            type: 'line',
            data: data.data?.map((item) => [item[0], item[1]]),
          },
          {
            name: 'Voltage',
            type: 'line',
            data: data.data?.map((item) => [item[0], item[2]]),
          },
        ],
      };
    });
  }

  getAssetList(): void {
    this.assetListService.getAssetList().subscribe((assetList) => {
      this.assetList = assetList;
      this.selectedAsset = assetList[0];
      this.onSelect(this.selectedAsset);
    });
  }
}
