import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  title = 'mean-practise';
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    console.log("header", this.commonService.refreshData())
    // this.commonService.refreshData().No1Knows@143

  }
}
