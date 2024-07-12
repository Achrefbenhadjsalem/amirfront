import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconDisplayService { // Changed class name to follow PascalCase convention
  private iconsVisibleSubject = new BehaviorSubject<boolean>(false);
  iconsVisible$ = this.iconsVisibleSubject.asObservable();

  toggleIconVisibility() {
    this.iconsVisibleSubject.next(!this.iconsVisibleSubject.getValue());
  }
}
