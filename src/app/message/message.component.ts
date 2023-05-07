import { Component } from '@angular/core';
import { StringConstants } from 'src/stringConstants';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  letter_1: String="";
  letter_2: String="";
  letter_3: String="";

  constructor(private stringConstants: StringConstants){}

  ngOnInit(){
    this.letter_1 = this.stringConstants.letter_1;
    this.letter_2 = this.stringConstants.letter_2;
    this.letter_3 = this.stringConstants.letter_3;
  }
}
