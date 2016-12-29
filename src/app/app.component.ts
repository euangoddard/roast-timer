import { MeatService } from './meat.service';
import { MEATS, Meat, Doneness } from './meat.models';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public meats = Object.keys(MEATS);

  private meat: string = null;

  public selectedDoneness: Doneness = null;

  public weight: number = null;

  constructor(private meatService: MeatService) {
  }

  get donenessOptions(): string[] {
    return this.meatService.getDonenessForRoastType(this.selectedMeat);
  }

  get selectedMeat(): string {
    return this.meat;
  }

  set selectedMeat(meat: string) {
    this.selectedDoneness = null;
    this.meat = meat;
  }

  get roastTime(): string {
    if (this.selectedMeat && this.selectedDoneness && this.weight) {
      return this.meatService.getRoastDetails(this.selectedMeat, this.selectedDoneness, this.weight);
    }
  }

}
