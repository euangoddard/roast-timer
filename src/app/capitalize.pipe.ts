import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalCasePipe implements PipeTransform {
  transform(phrase: string): string {
    const firstLetter = phrase.substr(0, 1).toUpperCase();
    const rest = phrase.substr(1);
    return `${firstLetter}${rest}`;
  }
}