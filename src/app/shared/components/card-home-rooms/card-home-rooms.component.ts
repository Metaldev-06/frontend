import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit, input, signal } from '@angular/core';
import { roomInformation } from '@interfaces/card-home.interface';

import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-card-home-rooms',
  standalone: true,
  imports: [NzIconModule, TitleCasePipe, CurrencyPipe],
  templateUrl: './card-home-rooms.component.html',
  styleUrl: './card-home-rooms.component.scss',
})
export class CardHomeRoomsComponent implements OnInit {
  public rooms = input.required<roomInformation[]>();
  public color = signal<string>('');

  ngOnInit(): void {}

  setColor(room: string): string {
    if (room === 'libre') {
      return '#4eae0f';
    }

    if (room === 'limpieza') {
      return '#e2970b';
    }

    return '#ae0f0f';
  }

  setIcon(room: string): string {
    if (room === 'limpieza') {
      return 'fa-solid fa-broom';
    }

    return 'fa-solid fa-bed';
  }
}
