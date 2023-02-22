import { Component, OnInit } from '@angular/core';
interface Food {
    value: string;
    viewValue: string;
}
@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    
    constructor() { }
    
    ngOnInit(): void {
    }
	timePeriod  = [
        {value: 'monthly-1', viewValue: 'Monthly'},
        {value: 'weekly-2', viewValue: 'Weekly'},
        {value: 'daily-3', viewValue: 'Daily'}
    ];
    selected = "monthly-1";
    
    
    
    checkUncheckAll(event:any) {
        var checkboxes = document.getElementsByTagName('input');
        if (event.target.checked) {
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].type == 'checkbox') {
                    checkboxes[i].checked = true;
                }
            }
            } else {
            for (var i = 0; i < checkboxes.length; i++) {
                // console.log(i)
                if (checkboxes[i].type == 'checkbox') {
                    checkboxes[i].checked = false;
                }
            }
        }
    }
    
    
    allStatus = [
        {
          image: "assets/images/avatar/1.jpg",
          user: "Glee Smiley",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/2.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/3.jpg",
          user: "Cindy Hawkins",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/4.jpg",
          user: "Glee Smiley",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/5.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/6.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/7.jpg",
          user: "Cindy Hawkins",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
    
    ];
    
    allSold = [
        {
          image: "assets/images/avatar/2.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/3.jpg",
          user: "Cindy Hawkins",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/4.jpg",
          user: "Glee Smiley",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/2.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/5.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/6.jpg",
          user: "Cindy Hawkins",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
    
    ];
    
    allRefund = [
        {
          image: "assets/images/avatar/5.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/4.jpg",
          user: "Glee Smiley",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/2.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/3.jpg",
          user: "Cindy Hawkins",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/2.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/6.jpg",
          user: "Cindy Hawkins",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
    
    ];
    
    
    
    allCanceled = [
        {
          image: "assets/images/avatar/3.jpg",
          user: "Cindy Hawkins",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/2.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/2.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/4.jpg",
          user: "Glee Smiley",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/5.jpg",
          user: "Louis Jovanny",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
        {
          image: "assets/images/avatar/6.jpg",
          user: "Cindy Hawkins",
          date: "Sunday, 24 July 2020 04:55 PM",
          event_name: "The Story of Danau Toba (Musical Drama)",
          description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
          ratings_class: [
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-orange",
            },
            {
              icon_class:"fa fa-star fs-16 text-gray",
            }
		  ]
        },
    
    ];
    
    
    
}
