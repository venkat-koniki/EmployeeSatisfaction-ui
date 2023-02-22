import { Component, OnInit } from '@angular/core';

interface Customer {
  cust_id?: string;
  customer_name: string;
  ticket_ordered: string;
  location: string;
  total_spent: string;
  isSelected: boolean;
}

const CUSTOMERS: Customer[] = [
		  {
			cust_id: "0012451",
			customer_name: 'Bella Simatupang',
			ticket_ordered: "The Powerfull Concert  <br>Festival London 2020",
			location: "Sydney, Australia",
			total_spent: "$623,55",
			isSelected:false
		  },
		  {
			cust_id: "0012452",
			customer_name: 'Olivia Brownlee',
			ticket_ordered: "The Powerfull Concert  <br>Festival London 2020",
			location: "Sydney, Australia",
			total_spent: "$623,55",
			isSelected:false
		  },
		  {
			cust_id: "0012453",
			customer_name: 'Cive Slauw',
			ticket_ordered: "The Story of Danau Toba <br>(Musical Drama)",
			location: "London, United Kingdom",
			total_spent: "$1,300",
			isSelected:false
		  },
		  {
			cust_id: "0012454",
			customer_name: 'Andrew Stevano',
			ticket_ordered: "The Story of Danau Toba <br>(Musical Drama)",
			location: "Sydney, Australia",
			total_spent: "$623,55",
			isSelected:false
		  },
		  {
			cust_id: "0012455",
			customer_name: 'James Roberto',
			ticket_ordered: "The Powerfull Concert  <br>Festival London 2020",
			location: "Sydney, Australia",
			total_spent: "$1,300",
			isSelected:false
		  },
		  {
			cust_id: "0012456",
			customer_name: 'Kevin Hurt',
			ticket_ordered: "The Powerfull Concert <br>Festival London 2020",
			location: "Medan, Indonesia",
			total_spent: "$623,66",
			isSelected:false
		  },
		  {
			cust_id: "0012457",
			customer_name: 'Kevin Hurt',
			ticket_ordered: "The Powerfull Concert <br>Festival London 2020",
			location: "Medan, Indonesia",
			total_spent: "$623,55",
			isSelected:false
		  },
		  {
			cust_id: "0012458",
			customer_name: 'Sanuel Jakson',
			ticket_ordered: "The Story of Danau Toba <br>(Musical Drama)",
			location: "Jakarta, Indonesia",
			total_spent: "$56,125",
			isSelected:false
		  },
		  {
			cust_id: "0012459",
			customer_name: 'Bella Simatupang',
			ticket_ordered: "The Story of Danau Toba <br>(Musical Drama)",
			location: "Sydney, Australia",
			total_spent: "$56,55",
			isSelected:false
		  },
		  {
			cust_id: "0012460",
			customer_name: 'Bella Simatupang',
			ticket_ordered: "The Story of Danau Toba <br>(Musical Drama)",
			location: "Sydney, Australia",
			total_spent: "$56,455",
			isSelected:false
		  },
		  {
			cust_id: "0012454",
			customer_name: 'Andrew Stevano',
			ticket_ordered: "The Story of Danau Toba <br>(Musical Drama)",
			location: "Sydney, Australia",
			total_spent: "$623,55",
			isSelected:false
		  },
		  {
			cust_id: "0012455",
			customer_name: 'James Roberto',
			ticket_ordered: "The Powerfull Concert  <br>Festival London 2020",
			location: "Sydney, Australia",
			total_spent: "$1,300",
			isSelected:false
		  },
  ];



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})


export class CustomersComponent implements OnInit {


	checkedCustomerList:any;
	
    isMasterSel:boolean;
    checkSingleItem:boolean=true;
	
    constructor() {
		
		this.isMasterSel = false;
		
		this.updateCustomerListing();
		
		this.getCheckedItemList();
    }

  ngOnInit(): void {
  }
  
  page = 1;
  pageSize = 10;
  collectionSize = CUSTOMERS.length;
  customers!: Customer[];
  
  updateCustomerListing() {
    this.customers = CUSTOMERS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  
  
 /* Check Uncheck all checkbox on main check box click*/
 
 checkUncheckAll() {
    for (var i = 0; i < this.customers.length; i++) {
      this.customers[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }
   
  isAllSelected() {
    this.isMasterSel = this.customers.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
 
  getCheckedItemList(){
    this.checkedCustomerList = [];
	
    for (var i = 0; i < this.customers.length; i++) {
      if(this.customers[i].isSelected)
      this.checkedCustomerList.push(this.customers[i]);
	  else 
	  this.checkSingleItem = false
    }
	
	if(this.checkSingleItem) {
	this.isMasterSel = true;
	}
    this.checkedCustomerList = JSON.stringify(this.checkedCustomerList);
  }
  
  
  
  

}
