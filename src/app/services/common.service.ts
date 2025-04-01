import { Injectable } from '@angular/core';
import { shareReplay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {


  private refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3300/product';

  // Cache the response
  // private cachedData$ = this.http.get(this.apiUrl).pipe(
  //   shareReplay(1) // Cache the last emitted value
  // );


  // getData() {
  //   return this.cachedData$; // Subscribers share the same response
  // }
  getData() {
    return this.refresh$.pipe(
      switchMap(() => this.http.get(this.apiUrl).pipe(shareReplay(1)))
    );
  }

  refreshData() {
    this.refresh$.next(); // Trigger a refresh
  }
}
