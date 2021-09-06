import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/ad';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  @Input()
  ads: Ad[] = [];

  constructor() {}

  ngOnInit(): void {}
}
