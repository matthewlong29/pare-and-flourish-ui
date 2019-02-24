import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderImageService {
  private headerImageURL: string;

  constructor() {}

  set _headerImageURL(headerImageURL: string) {
    this.headerImageURL = headerImageURL;
  }

  get _headerImageURL() {
    return this.headerImageURL;
  }
}
