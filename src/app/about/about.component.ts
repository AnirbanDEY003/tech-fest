import { Component, OnInit } from '@angular/core';
import { StringConstants } from 'src/stringConstants';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{
  abtAssamUniversity: String = " ";
  abtAssamUniversity2: String = " ";
  abtAssamUniversity3: String = " ";
  constructor(private stringConstant: StringConstants){}

  ngOnInit() {
    this.abtAssamUniversity= this.stringConstant.abtAssamUniversity;
    this.abtAssamUniversity2= this.stringConstant.abtAssamUniversity2;
    this.abtAssamUniversity3= this.stringConstant.abtAssamUniversity3;
  }
}
