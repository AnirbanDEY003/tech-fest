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
  yantraksh: String=" ";
  yantraksh2: String=" ";
  yantraksh3: String=" ";
  constructor(private stringConstant: StringConstants){}

  ngOnInit() {
    this.abtAssamUniversity= this.stringConstant.abtAssamUniversity;
    this.abtAssamUniversity2= this.stringConstant.abtAssamUniversity2;
    this.abtAssamUniversity3= this.stringConstant.abtAssamUniversity3;
    this.yantraksh= this.stringConstant.yantraksh;
    this.yantraksh2= this.stringConstant.yantraksh2;
    this.yantraksh3= this.stringConstant.yantraksh3;
  }
}
