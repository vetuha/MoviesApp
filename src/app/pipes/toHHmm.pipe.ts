import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'movieLength' })
export class MovieLengthPipe implements PipeTransform {
    transform(value: number): string {
        if (!value)
            return "Unknown";

        if (value > 0 && value < 60)
            return `${value}mins`;

        let hours = Math.floor(value / 60);
        let minutes = value % 60;

        return minutes == 0 ? `${hours}hr` : `${hours}hr ${minutes}mins`;
    }
}