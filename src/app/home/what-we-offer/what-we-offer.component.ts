import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.css']
})
export class WhatWeOfferComponent implements OnInit {

  constructor() { }

  offers: any;

  ngOnInit() {
    this.setOffersData();
  }

  setOffersData() {
    this.offers = [
      {
        icon: '../../../../assets/001-process.svg',
        title: 'SOCIAL MEDIA MANAGEMENT',
        description: 'Lorem 1 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      },
      {
        icon: '../../../../assets/002-social-media.svg',
        title: 'SOCIAL GROWTH AMPAIGN',
        description: 'Lorem 2 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      },
      {
        icon: '../../../../assets/003-responsive.svg',
        title: 'BRANDING & MEDIA',
        description: 'Lorem 3 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      },
      {
        icon: '../../../../assets/007-analysis.svg',
        title: 'INFLUENCER MARKETING',
        description: 'Lorem 4 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      },
      {
        icon: '../../../../assets/004-social-media-1.svg',
        title: 'SOCIAL MEDIA PAID ADVERTISING',
        description: 'Lorem 5 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      },
      {
        icon: '../../../../assets/008-computer.svg',
        title: 'CONTENT MARKETING SERVICE',
        description: 'Lorem 6 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      },

  ];
  }



}
