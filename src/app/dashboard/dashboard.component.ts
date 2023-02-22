import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NgbDropdownConfig]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  events = [
        {
          image: "assets/images/events/1.png",
          title: "International Live Choice Festivals (2020)",
          url: "admin/event-detail",
          location: "Manchester, London",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
          price: "124,00",
          date: "June 20, 2020",
          no_of_tickets: "561 pcs",
          time: "08:35 AM",
        },
        {
          image: "assets/images/events/3.png",
          title: "Envato Atuhor Community Fun Hiking at Sibayak Mt.",
          url: "admin/event-detail",
          location: "London, United Kingdom",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
          price: "124,00",
          date: "June 20, 2020",
          no_of_tickets: "561 pcs",
          time: "08:35 AM",
        },
        {
          image: "assets/images/events/1.png",
          title: "International Live Choice Festivals (2020)",
          url: "admin/event-detail",
          location: "Manchester, London",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
          price: "124,00",
          date: "June 20, 2020",
          no_of_tickets: "561 pcs",
          time: "08:35 AM",
        },
        {
          image: "assets/images/events/2.png",
          title: "Envato Indonesian Authors Meetup 2020",
          url: "admin/event-detail",
          location: "Medan, Indonesia",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
          price: "124,00",
          date: "June 20, 2020",
          no_of_tickets: "561 pcs",
          time: "08:35 AM",
        },
        {
          image: "assets/images/events/3.png",
          title: "Envato Atuhor Community Fun Hiking at Sibayak Mt.",
          url: "admin/event-detail",
          location: "London, United Kingdom",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
          price: "124,00",
          date: "June 20, 2020",
          no_of_tickets: "561 pcs",
          time: "08:35 AM",
        },
      
      
  
    
  ];

}
