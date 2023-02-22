import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-recent-event-list',
  templateUrl: './recent-event-list.component.html',
  styleUrls: ['./recent-event-list.component.css']
})
export class RecentEventListComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop:true,
    margin:30,
	nav:true,
	center:true,
	autoplaySpeed: 3000,
	navSpeed: 3000,
	/* paginationSpeed: 3000, */
	/* slideSpeed: 3000, */
	smartSpeed: 3000,
	autoplay: false,
	dots:true,
    navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
			items:1
		},		
		575:{
			items:2
		},
		900:{
			items:3
		}
    },
  }
  
  
}
