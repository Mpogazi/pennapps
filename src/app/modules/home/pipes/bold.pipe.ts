import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bold'
})
export class BoldPipe implements PipeTransform {
    transform(text: string, search: string, patter): string {
        if (!text || !search) {
            return text;
        }
    }
}