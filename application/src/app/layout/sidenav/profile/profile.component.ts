import { Component, Input, OnInit } from '@angular/core';
import { SocialNetworkIconType } from '../models/social-network-icon-type.enum';
import { SocialNetwork } from '../models/social-network.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input('title') sidenavTitle: string;
  panelOpenState = false;

  office = 'Desenvolvedor de Software';
  age: number;

  private _socialNetworks: SocialNetwork[] = [
    {
      name: 'Facebook',
      label: 'felipe.wesley1201',
      href: 'https://www.facebook.com/felipe.wesley1201/',
      icon: 'facebook-icon.png',
      disabled: true
    }, {
      name: 'Instagram',
      label: 'fewwesley',
      href: 'https://www.instagram.com/fewwesley/',
      icon: 'instagram-icon.png',
      iconType: SocialNetworkIconType.image
    }, {
      name: 'GitHub',
      label: 'felipewesley',
      href: 'https://www.github.com/felipewesley/',
      icon: 'github-icon.png'
    }, {
      name: 'LinkedIn',
      label: 'felipe-wesley',
      href: 'https://www.linkedin.com/in/felipe-wesley/',
      icon: 'linkedin-icon.png'
    }
  ];

  socialNetworks: SocialNetwork[] = [];

  constructor() { }

  ngOnInit() {

    this.age = this.getFelipeAge();
    
    this.socialNetworks = 
    this._socialNetworks.filter(s => s.disabled !== true);
  }
  
  getFelipeAge(): number {
    
    const now = new Date();
    const nascimento = new Date("12/01/2000");

    const timeDiff = Math.abs(now.getTime() - nascimento.getTime());

    // TimestampDiff / ((milisegundos/segundo) * (segundos/hora) * (horas/dia) * (dias/ano))
    const age = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365)); 

    return age;
  }

  togglePanelOpenState(): void {

    this.panelOpenState = !this.panelOpenState;
  }
}
