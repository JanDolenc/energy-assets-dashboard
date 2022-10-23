import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/Asset';
import { ASSETLIST } from 'src/app/mock-assets';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  assetList: Asset[] = ASSETLIST;
  selectedAsset?: Asset;

  constructor() {}

  ngOnInit(): void {}

  onSelect(asset: Asset): void {
    this.selectedAsset = asset;
  }
}
