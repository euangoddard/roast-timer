import { Injectable } from '@angular/core';
import { MEATS, Doneness } from './meat.models';


@Injectable()
export class MeatService {

  getDonenessForRoastType(roastType: string) {
    const meat = MEATS[roastType];
    return Object.keys(meat.timeFactors);
  }

  getRoastDetails(roastType: string, doneness: Doneness, weightInGrammes: number) {
    const meat = MEATS[roastType];
    const timeMultiplier = weightInGrammes / meat.weightFactor;
    let description = meat.fixedDescription;

    if (timeMultiplier >= 1) {
      const totalMins = Math.floor((timeMultiplier * meat.timeFactors[doneness]));
      const hours = Math.floor(totalMins / 60);
      const mins = totalMins % 60;

      let timeParts: string[] = [];
      if (hours > 0) {
        timeParts.push(`${hours}`);
        if (hours === 1) {
          timeParts.push('hour');
        } else {
          timeParts.push('hours');
        }
      }
      if (mins > 0) {
        timeParts.push(`${mins}`);
        if (mins === 1) {
          timeParts.push('min');
        } else {
          timeParts.push('mins');
        }
      }
      description += meat.variableDescription.replace('#', timeParts.join(' '));
    }
    return description;
  }
}
