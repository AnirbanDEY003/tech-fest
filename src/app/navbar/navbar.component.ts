import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior: 'smooth'});
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior: 'smooth'});
  }
  toMessage(){
    document.getElementById("message")?.scrollIntoView({behavior: 'smooth'});
  }
  toEvents(){
    document.getElementById("events")?.scrollIntoView({behavior: 'smooth'});
  }
  toFeature(){
    document.getElementById("feature")?.scrollIntoView({behavior: 'smooth'});
  }
  toSponsorship(){
    document.getElementById("sponsorship")?.scrollIntoView({behavior: 'smooth'});
  }
}
