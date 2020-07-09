import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  items: any;
  config = {
  itemsPerPage: 3,
  currentPage: 1,
  totalItems: 3
  };
  isLoaded = true;

  ngOnInit() {
    this.setPricingData();
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  setPricingData() {
    this.items = [
      {
        title: 'Gold Package',
        price: 350,
        description: 'Lorem 1 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      },
      {
        title: 'Platinume Package',
        price: 250,
        description: 'Lorem 2 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      },
      {
        title: 'Silver Package',
        price: 150,
        description: 'Lorem 3 ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreretqui ad.'
      }
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateSlidesToShow(window.innerWidth);
  }

  updateSlidesToShow(width: number) {
    this.isLoaded = false;
    if (width < 768) {
      this.config = {
        itemsPerPage: 1,
        currentPage: 3,
        totalItems: 3
        };
    } else {
      this.config = {
        itemsPerPage: 3,
        currentPage: 3,
        totalItems: 3
        };
    }
    setTimeout(() => this.isLoaded = true, 0);
  }

}
