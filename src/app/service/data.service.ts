import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import data from '../../assets/borrowingList.json';
import { BorrowingPerson } from '../core/model/borrowing-person.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBorrowingPersonList(): Observable<BorrowingPerson[]> {
    return of(data.borrowingPersonList);
  }
}
