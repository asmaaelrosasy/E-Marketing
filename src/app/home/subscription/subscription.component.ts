import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubscriptionService } from '../../Services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  subscribtionForm: FormGroup;
  serverUrl: string;
  formData: any;

  constructor(private subscriptionService: SubscriptionService) {
    this.subscribtionForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    });
  }


  ngOnInit() {
  }

  submitSubscribtion() {
    this.subscriptionService.senddata(this.subscribtionForm.value.email).subscribe(data => {
      console.log(data);
   });
  }

}
