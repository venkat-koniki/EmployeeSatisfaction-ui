import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
	timePeriod  = [
    {value: 'monthly-1', viewValue: 'Monthly'},
    {value: 'weekly-2', viewValue: 'Weekly'},
    {value: 'daily-3', viewValue: 'Daily'}
  ];
  selected = "monthly-1";
  
  allEvent = [
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Bella Simatupang",
          location: "London, US",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$125,70",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "Envato Authors Meetup<br>2020",
          customer: "Elisabeth Queen",
          location: "Medan, Indonesia",
          sold_ticket: "4 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$536,00",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "Great Big Fireworks at <br> Newyork City",
          customer: "David Bekam",
          location: "Sydney, Australia",
          sold_ticket: "4 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$65,22",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "Charity Fun Games at <br> Lapangan Merdeka",
          customer: "Andrew Stevano",
          location: "Jakarta, Indonesia",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "REFUND",
          total_revenue: "$124,55",
          refund_class:"text-primary"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "Indonesian Envato <br> Authors Fun Run",
          customer: "Cive Slauw",
          location: "Penang, Malaysia",
          sold_ticket: "4 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$536,00",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Eddy Cusuma",
          location: "Medan, Indonesia",
          sold_ticket: "3 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$44,00",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Frank Azire",
          location: "Bangkok, Thailand",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "REFUND",
          total_revenue: "$51,50",
          refund_class:"text-primary"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Bella Simatupang",
          location: "London, US",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$125,70",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Bella Simatupang",
          location: "London, US",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$125,70",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Elisabeth Queen",
          location: "London, US",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$125,70",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Andrew Stevano",
          location: "London, US",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$125,70",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Bella Simatupang",
          location: "London, US",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$125,70",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Bella Simatupang",
          location: "London, US",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$125,70",
          refund_class:"text-black"
        },
        {
          order_id: "#0012451",
          date: "04/08/2020<br>12:34 AM",
          event_name: "The Story of Danau Toba<br> (Musical Drama)",
          customer: "Bella Simatupang",
          location: "London, US",
          sold_ticket: "1 Pcs",
          available: "567k left",
          refund: "NO",
          total_revenue: "$125,70",
          refund_class:"text-black"
        },
    
  ];
}
