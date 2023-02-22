import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
	open(content:any) {
		this.modalService.open(content,{size:'lg'});
	}
}
