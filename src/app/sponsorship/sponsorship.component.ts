import { Component } from '@angular/core';
import { StringConstants } from 'src/stringConstants';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css']
})
export class SponsorshipComponent {
  sponsor1_1: String=" ";
  sponsor1_2: String=" ";
  sponsor1_3: String=" ";
  sponsor1_4: String=" ";

  sponsor2_1: String=" ";
  sponsor2_2: String=" ";
  sponsor2_3: String=" ";
  sponsor2_4: String=" ";

  sponsor3_1: String=" ";
  sponsor3_2: String=" ";
  sponsor3_3: String=" ";
  sponsor3_4: String=" ";

  sponsor4_1: String=" ";
  sponsor4_2: String=" ";
  sponsor4_3: String=" ";
  sponsor4_4: String=" ";
  
  constructor(private stringConstants: StringConstants){}
  
  ngOnInit(){
    this.sponsor1_1 = this.stringConstants.sponsor1_1;
    this.sponsor1_2 = this.stringConstants.sponsor1_2;
    this.sponsor1_3 = this.stringConstants.sponsor1_3;
    this.sponsor1_4 = this.stringConstants.sponsor1_4;
    
    this.sponsor2_1 = this.stringConstants.sponsor2_1;
    this.sponsor2_2 = this.stringConstants.sponsor2_2;
    this.sponsor2_3 = this.stringConstants.sponsor2_3;
    this.sponsor2_4 = this.stringConstants.sponsor2_4;
    
    this.sponsor3_1 = this.stringConstants.sponsor3_1;
    this.sponsor3_2 = this.stringConstants.sponsor3_2;
    this.sponsor3_3 = this.stringConstants.sponsor3_3;
    
    this.sponsor4_1 = this.stringConstants.sponsor4_1;
    this.sponsor4_2 = this.stringConstants.sponsor4_2;
    this.sponsor4_3 = this.stringConstants.sponsor4_3;
    this.sponsor4_4 = this.stringConstants.sponsor4_4;
  }
}
