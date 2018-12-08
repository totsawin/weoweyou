import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort } from '@angular/material';

import { BorrowingPerson } from './core/model/borrowing-person';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['name', 'relationshipType', 'ceremonyType', 'amount', 'others'];
  borrowingPersonList: BorrowingPerson[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getBorrowingPersonList().subscribe(borrowingPersonList => {
      this.borrowingPersonList = borrowingPersonList;
      this.dataSource = new MatTableDataSource(this.borrowingPersonList);
      this.dataSource.sortingDataAccessor = (item, sortHeaderId) => {
        switch (sortHeaderId) {
          case 'amount':
            let amount = 0;
            item.borrowings.forEach((borrowing, index) => {
              if (borrowing.type === 'money') {
                amount = borrowing.amount;
              }
            });
            return amount;
          case 'others':
            let gift = '';
            item.borrowings.forEach((borrowing, index) => {
              if (borrowing.type !== 'money') {
                gift = borrowing.type + ' ' + borrowing.amount + ' ' + borrowing.unit;
              }
            });
            return gift;
          default: return item[sortHeaderId];
        }
      };
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getBorrowingPersonList(): Observable<BorrowingPerson[]> {
    return this.dataService.getBorrowingPersonList();
  }


}
