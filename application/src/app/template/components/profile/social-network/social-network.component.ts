import { Component, Input, OnInit } from '@angular/core';
import { SocialNetwork } from 'src/app/template/models/social-network.model';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {

  @Input('socialItem') socialNetwork: SocialNetwork;

  constructor() { }

  ngOnInit() { }

}
