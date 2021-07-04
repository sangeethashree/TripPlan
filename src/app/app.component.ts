
import { Component, OnInit } from '@angular/core';

import { TripService } from './trip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TripService],

})
export class AppComponent implements OnInit {

  cityWeatherDetails: any;
  featuredDestinations: any;
  countDownDate = new Date("Jul 10, 2021 15:37:25").getTime();
  distance!: number;
  days: any;
  hours: any;
  minutes: any;
  seconds: any
  contactName!: string;
  contactNo!: string;
  emailAddress!: string;
  isContactNoValid: boolean = true;
  isEmailValid: boolean = true;
  showMessage: boolean = false;


  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.fetchCityweather().subscribe((response: any) => {
      this.cityWeatherDetails = response.result;
    })

    this.tripService.fetchFeaturedDestinations().subscribe((response: any) => {
      this.featuredDestinations = response.result;
    })
  }

  getBackgroundColor(city: string) {
    return (city == 'Canberra') ? '#0D7E88' : (city == 'Tokyo') ? '#D09378' : (city == 'London') ? '#405B5D' : '#74A748';
  }


  interval = setInterval(() => {
    let now = new Date().getTime();
    this.distance = this.countDownDate - now;

    this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

    if (this.distance < 0) {
      clearInterval(this.interval);
    }

  }, 1000)

  onClickSubmit(contactForm: any) {
    this.isContactNoValid = (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(this.contactNo));
    this.isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(this.emailAddress);
    if (this.isContactNoValid && this.isEmailValid) {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
        contactForm.resetForm();
      }, 5000);

    }
  }

}



