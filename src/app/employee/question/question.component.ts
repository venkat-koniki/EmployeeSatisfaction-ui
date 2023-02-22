import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/country';
import { EmpService } from '../emp.service';

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions:any;
  constructor(private modalService: NgbModal, private empService: EmpService) { }

  ngOnInit(): void {
    this.getAllQstns();
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  getAllQstns() {
    this.empService.listQtn().subscribe(res => {
      console.log(res);
    });
  }

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.questions = this.questions;
    } else {
      this.questions = [...this.questions].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
