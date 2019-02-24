import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderImageService } from './header-image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private headerImageService: HeaderImageService) {}
  private headerImageURL: string;
  private bottomNavPlacement: Object;
  private headerImageMargin: Object;

  @HostListener('window:scroll', ['$event']) onscroll($event) {
    if ($event.pageY >= 250) {
      this.bottomNavPlacement = {
        position: 'fixed',
        margin: '70px 0 0 0'
      };
      this.headerImageMargin = {
        margin: '72px 0 35px 0'
      };
    } else {
      this.bottomNavPlacement = {};
      this.headerImageMargin = {
        margin: '72px 0 0 0'
      };
    }
  }

  ngOnInit() {
    this.headerImageURL = this.headerImageService._headerImageURL =
      '../../../assets/images/default-header.jpg';
    this.bottomNavPlacement = {};
    this.headerImageMargin = {};
  }
}
