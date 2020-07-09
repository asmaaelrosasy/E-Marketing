import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  constructor() { }

  @Input() offersList: any;

  ngOnInit(): void {
  }

}
